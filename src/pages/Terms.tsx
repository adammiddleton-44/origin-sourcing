import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Layout>
      <SEO 
        title="Terms of Service | Origin Sourcing" 
        description="Read the terms and conditions governing your use of Origin Sourcing's website and services."
        canonical="/terms"
      />
      
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-section-primary via-background to-section-accent relative overflow-hidden py-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container-narrow relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Terms of <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Service</span>
            </h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background py-12">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto prose prose-lg prose-slate dark:prose-invert">
            
            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing and using the Origin Sourcing website ("Website"), you accept and agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Website or services.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">2. Description of Services</h2>
            <p className="text-muted-foreground mb-4">
              Origin Sourcing provides packaging procurement consultancy services, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Packaging procurement and supplier management</li>
              <li>EPR (Extended Producer Responsibility) compliance consulting</li>
              <li>Supply chain optimisation</li>
              <li>Cost reduction strategies</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Specific services are subject to separate agreements between Origin Sourcing and the client.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">3. Use of Website</h2>
            <p className="text-muted-foreground mb-4">You agree to use this Website only for lawful purposes and in a way that does not:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Infringe the rights of others</li>
              <li>Restrict or inhibit anyone else's use of the Website</li>
              <li>Attempt to gain unauthorised access to the Website or its systems</li>
              <li>Transmit any harmful code, viruses, or malicious software</li>
              <li>Collect or harvest personal information from other users</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">4. Intellectual Property</h2>
            <p className="text-muted-foreground mb-4">
              All content on this Website, including but not limited to text, graphics, logos, images, and software, is the property of Origin Sourcing or its content suppliers and is protected by UK and international copyright laws.
            </p>
            <p className="text-muted-foreground mb-4">
              You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">5. Contact Form Submissions</h2>
            <p className="text-muted-foreground mb-4">
              When you submit information through our contact form, you agree that:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>All information provided is accurate and truthful</li>
              <li>You will not submit false, misleading, or fraudulent information</li>
              <li>You consent to receiving communications from us in response to your inquiry</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">6. Disclaimer of Warranties</h2>
            <p className="text-muted-foreground mb-4">
              The Website and its content are provided "as is" without any warranties, express or implied. Origin Sourcing does not warrant that:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>The Website will be available uninterrupted or error-free</li>
              <li>The information on the Website is complete, accurate, or up-to-date</li>
              <li>The Website or servers are free of viruses or harmful components</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">7. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-4">
              To the fullest extent permitted by law, Origin Sourcing shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Website.
            </p>
            <p className="text-muted-foreground mb-4">
              Nothing in these Terms excludes or limits our liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded by law.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">8. Third-Party Links</h2>
            <p className="text-muted-foreground mb-4">
              Our Website may contain links to third-party websites. These links are provided for convenience only, and we do not endorse or accept responsibility for the content or practices of these websites.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">9. Indemnification</h2>
            <p className="text-muted-foreground mb-4">
              You agree to indemnify and hold harmless Origin Sourcing, its directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of the Website or violation of these Terms.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">10. Modifications to Terms</h2>
            <p className="text-muted-foreground mb-4">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on this page. Your continued use of the Website after changes constitutes acceptance of the modified Terms.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">11. Governing Law</h2>
            <p className="text-muted-foreground mb-4">
              These Terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">12. Severability</h2>
            <p className="text-muted-foreground mb-4">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">13. Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              For questions about these Terms, please contact us:
            </p>
            <ul className="list-none text-muted-foreground space-y-2 mb-4">
              <li><strong>Email:</strong> <a href="mailto:info@originsourcing.co.uk" className="text-primary hover:underline">info@originsourcing.co.uk</a></li>
              <li><strong>Address:</strong> London, United Kingdom</li>
            </ul>

            <div className="mt-12 pt-8 border-t border-border">
              <Link to="/contact" className="text-primary hover:underline font-medium">
                ← Back to Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
