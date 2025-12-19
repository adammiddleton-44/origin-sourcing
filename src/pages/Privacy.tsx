import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <Layout>
      <SEO 
        title="Privacy Policy | Origin Sourcing" 
        description="Learn how Origin Sourcing collects, uses, and protects your personal data in accordance with GDPR and UK data protection laws."
        canonical="/privacy"
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
              Privacy <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Policy</span>
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
            
            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">1. Introduction</h2>
            <p className="text-muted-foreground mb-4">
              Origin Sourcing ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-muted-foreground mb-4">
              We comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">2. Information We Collect</h2>
            <p className="text-muted-foreground mb-4">We may collect the following types of information:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and company name when you submit our contact form.</li>
              <li><strong>Message Content:</strong> The content of messages you send through our contact form.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, and device information for security and analytics purposes.</li>
              <li><strong>Cookies:</strong> We use essential cookies to ensure our website functions correctly. See our Cookie Policy section below.</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Respond to your inquiries and provide requested services</li>
              <li>Communicate with you about our services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraudulent or illegal activity</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">4. Legal Basis for Processing</h2>
            <p className="text-muted-foreground mb-4">Under UK GDPR, we process your data based on:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>Consent:</strong> When you submit our contact form, you consent to our processing of your data.</li>
              <li><strong>Legitimate Interests:</strong> For improving our services and website security.</li>
              <li><strong>Legal Obligation:</strong> When required by law.</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">5. Third-Party Services</h2>
            <p className="text-muted-foreground mb-4">
              We use the following third-party services to process your data:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>Web3Forms:</strong> For sending email notifications when you submit our contact form. Your contact information is transmitted securely to enable email delivery.</li>
              <li><strong>Hosting Provider:</strong> Our website and database are hosted on secure, GDPR-compliant servers.</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              These third parties are required to protect your data in accordance with applicable data protection laws.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">6. Data Retention</h2>
            <p className="text-muted-foreground mb-4">
              We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>Contact form submissions:</strong> Retained for up to 3 years or until you request deletion.</li>
              <li><strong>Technical data:</strong> Retained for up to 12 months for security purposes.</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">7. Your Rights</h2>
            <p className="text-muted-foreground mb-4">Under UK GDPR, you have the following rights:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>Right of Access:</strong> Request a copy of your personal data.</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate data.</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your personal data.</li>
              <li><strong>Right to Restrict Processing:</strong> Request limitation of data processing.</li>
              <li><strong>Right to Data Portability:</strong> Request transfer of your data to another service.</li>
              <li><strong>Right to Object:</strong> Object to processing based on legitimate interests.</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw your consent at any time.</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:info@originsourcing.co.uk" className="text-primary hover:underline">
                info@originsourcing.co.uk
              </a>.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">8. Cookie Policy</h2>
            <p className="text-muted-foreground mb-4">
              Our website uses essential cookies that are necessary for the website to function properly. These cookies do not collect personal information and cannot be disabled.
            </p>
            <p className="text-muted-foreground mb-4">
              We do not use tracking cookies or third-party analytics that would require your consent.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">9. Data Security</h2>
            <p className="text-muted-foreground mb-4">
              We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. This includes encryption of data in transit and at rest.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">10. International Transfers</h2>
            <p className="text-muted-foreground mb-4">
              Your data may be transferred to and processed in countries outside the UK. Where this occurs, we ensure appropriate safeguards are in place to protect your data in accordance with UK GDPR requirements.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">11. Changes to This Policy</h2>
            <p className="text-muted-foreground mb-4">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">12. Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <ul className="list-none text-muted-foreground space-y-2 mb-4">
              <li><strong>Email:</strong> <a href="mailto:info@originsourcing.co.uk" className="text-primary hover:underline">info@originsourcing.co.uk</a></li>
              <li><strong>Address:</strong> London, United Kingdom</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) if you believe your data protection rights have been violated.
            </p>

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

export default Privacy;
