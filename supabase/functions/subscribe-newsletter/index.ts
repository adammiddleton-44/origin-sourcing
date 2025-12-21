import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface SubscribeRequest {
  email: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const KLAVIYO_API_KEY = Deno.env.get("KLAVIYO_API_KEY");
    if (!KLAVIYO_API_KEY) {
      console.error("KLAVIYO_API_KEY is not configured");
      throw new Error("Newsletter service not configured");
    }

    const { email }: SubscribeRequest = await req.json();

    // Validate email
    if (!email || !email.includes("@")) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`Subscribing email: ${email}`);

    const listId = "RKXdej";

    // Step 1: Create or update profile and subscribe to list in one call
    const subscribeResponse = await fetch(
      `https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs`,
      {
        method: "POST",
        headers: {
          "Authorization": `Klaviyo-API-Key ${KLAVIYO_API_KEY}`,
          "Content-Type": "application/json",
          "revision": "2024-02-15",
        },
        body: JSON.stringify({
          data: {
            type: "profile-subscription-bulk-create-job",
            attributes: {
              profiles: {
                data: [
                  {
                    type: "profile",
                    attributes: {
                      email: email,
                      subscriptions: {
                        email: {
                          marketing: {
                            consent: "SUBSCRIBED",
                          },
                        },
                      },
                    },
                  },
                ],
              },
            },
            relationships: {
              list: {
                data: {
                  type: "list",
                  id: listId,
                },
              },
            },
          },
        }),
      }
    );

    if (!subscribeResponse.ok) {
      const errorText = await subscribeResponse.text();
      console.error("Klaviyo API error:", subscribeResponse.status, errorText);
      
      // Check for specific error cases
      if (subscribeResponse.status === 409) {
        return new Response(
          JSON.stringify({ message: "You're already subscribed!", alreadySubscribed: true }),
          { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      throw new Error(`Klaviyo API error: ${subscribeResponse.status}`);
    }

    console.log("Successfully subscribed email to Klaviyo list");

    return new Response(
      JSON.stringify({ message: "Successfully subscribed!", success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error in subscribe-newsletter function:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Subscription failed" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
