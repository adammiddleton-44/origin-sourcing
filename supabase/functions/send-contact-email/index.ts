import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone?: string;
  company: string;
  message: string;
  marketingConsent?: boolean;
}

serve(async (req: Request): Promise<Response> => {
  console.log("=== send-contact-email function invoked ===");
  console.log("Request method:", req.method);
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const WEB3FORMS_ACCESS_KEY = Deno.env.get("WEB3FORMS_ACCESS_KEY");
    const KLAVIYO_API_KEY = Deno.env.get("KLAVIYO_API_KEY");
    
    console.log("Environment check - WEB3FORMS_ACCESS_KEY configured:", !!WEB3FORMS_ACCESS_KEY);
    console.log("Environment check - KLAVIYO_API_KEY configured:", !!KLAVIYO_API_KEY);
    
    if (!WEB3FORMS_ACCESS_KEY) {
      console.error("WEB3FORMS_ACCESS_KEY is not configured");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const requestBody = await req.json();
    console.log("Request body received:", JSON.stringify({
      name: requestBody.name,
      email: requestBody.email,
      company: requestBody.company,
      phone: requestBody.phone ? "[provided]" : "[not provided]",
      message: requestBody.message ? "[provided]" : "[not provided]",
      marketingConsent: requestBody.marketingConsent
    }));
    
    const { name, email, phone, company, message, marketingConsent }: ContactEmailRequest = requestBody;

    // Validate required fields
    if (!name || !email || !company || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`Sending contact email for: ${name} (${email})`);

    // Prepare form data for Web3Forms
    const formData = new FormData();
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", `New Contact Form Submission from ${name}`);
    formData.append("from_name", "Origin Sourcing Website");
    formData.append("reply_to", email);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone || "Not provided");
    formData.append("company", company);
    formData.append("message", message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      console.error("Web3Forms error:", result);
      return new Response(
        JSON.stringify({ error: "Failed to send email" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Email sent successfully");

    // Add to Klaviyo list only if user consented to marketing
    console.log("=== Klaviyo Integration Check ===");
    console.log("marketingConsent value:", marketingConsent);
    console.log("marketingConsent type:", typeof marketingConsent);
    console.log("KLAVIYO_API_KEY present:", !!KLAVIYO_API_KEY);
    
    if (marketingConsent && KLAVIYO_API_KEY) {
      console.log("User consented to marketing, adding to Klaviyo...");
      
      // Parse name into first and last name
      const nameParts = name.trim().split(/\s+/);
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";
      
      // TODO: Update this list ID after verification
      const KLAVIYO_LIST_ID = "SUUJem";
      console.log("Using Klaviyo List ID:", KLAVIYO_LIST_ID);

      const klaviyoPayload = {
        data: {
          type: "profile-subscription-bulk-create-job",
          attributes: {
            profiles: {
              data: [
                {
                  type: "profile",
                  attributes: {
                    email: email,
                    first_name: firstName,
                    last_name: lastName,
                    phone_number: phone || undefined,
                    properties: {
                      company: company,
                      message: message,
                      source: "Contact Form"
                    }
                  }
                }
              ]
            },
            historical_import: false
          },
          relationships: {
            list: {
              data: {
                type: "list",
                id: KLAVIYO_LIST_ID
              }
            }
          }
        }
      };
      
      console.log("Klaviyo request payload:", JSON.stringify(klaviyoPayload, null, 2));

      try {
        const klaviyoResponse = await fetch("https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs", {
          method: "POST",
          headers: {
            "Authorization": `Klaviyo-API-Key ${KLAVIYO_API_KEY}`,
            "Content-Type": "application/json",
            "revision": "2024-02-15"
          },
          body: JSON.stringify(klaviyoPayload)
        });

        console.log("Klaviyo response status:", klaviyoResponse.status);
        console.log("Klaviyo response status text:", klaviyoResponse.statusText);
        
        const klaviyoResponseText = await klaviyoResponse.text();
        console.log("Klaviyo response body:", klaviyoResponseText);

        if (klaviyoResponse.ok) {
          console.log("SUCCESS: Contact added to Klaviyo list");
        } else {
          console.error("FAILED: Klaviyo returned error status", klaviyoResponse.status);
          // Don't fail the request if Klaviyo fails - email was already sent
        }
      } catch (klaviyoError) {
        console.error("EXCEPTION: Error calling Klaviyo API:", klaviyoError);
        // Don't fail the request if Klaviyo fails - email was already sent
      }
    } else if (marketingConsent && !KLAVIYO_API_KEY) {
      console.warn("WARNING: User consented to marketing but KLAVIYO_API_KEY is not configured");
    } else if (!marketingConsent) {
      console.log("SKIPPED: User did not consent to marketing, not adding to Klaviyo");
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
