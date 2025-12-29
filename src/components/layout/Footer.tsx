import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import logo from "@/assets/origin-logo.png";

const footerLinks = {
  services: [
    { name: "Packaging Purchasing", href: "/services#purchasing" },
    { name: "EPR Compliance", href: "/services#epr" },
    { name: "Supply Chain Transformation", href: "/services#supply-chain" },
    { name: "Cost Optimization", href: "/services#cost" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  const { isAdmin } = useAuth();
  
  return (
    <footer className="bg-foreground text-card">
      <div className="container-narrow section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img 
                src={logo} 
                alt="Origin Sourcing" 
                width={350}
                height={70}
                className="h-10 w-auto scale-150 origin-left brightness-0 invert"
              />
            </Link>
            <p className="text-card/70 text-sm leading-relaxed mb-6">
              Expert packaging procurement consultancy helping UK businesses optimise costs and transform their supply chains.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/origin-sourcing-ltd/about/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Origin Sourcing on LinkedIn"
                className="w-10 h-10 rounded-lg bg-card/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-card/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-card/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-card/70 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                info@originsourcing.co.uk
              </li>
              <li className="flex items-center gap-3 text-card/70 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                +44 (0) 7739 473671
              </li>
              <li className="flex items-start gap-3 text-card/70 text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>London, United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-card/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-card/50 text-sm">
            © {new Date().getFullYear()} Origin Sourcing. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-card/50 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-card/50 hover:text-primary transition-colors">
              Terms of Service
            </Link>
            {isAdmin && (
              <Link to="/admin" className="text-card/50 hover:text-primary transition-colors">
                Admin
              </Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
