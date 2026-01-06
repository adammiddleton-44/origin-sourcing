import { Link } from "react-router-dom";
import { Package, Truck, Shield, ClipboardCheck, ArrowRight } from "lucide-react";

const services = [{
  icon: Package,
  title: "Packaging Purchasing",
  description: "Strategic sourcing and supplier management to reduce costs while maintaining quality and reliability across your packaging portfolio.",
  href: "/services/purchasing",
  accentColor: "from-primary to-primary/70"
}, {
  icon: Truck,
  title: "3PL Integration & Logistics",
  description: "Capture direct procurement savings without warehouse investment through strategic 3PL partnerships for multi-site operations.",
  href: "/services/3pl",
  accentColor: "from-accent to-accent/70"
}, {
  icon: Shield,
  title: "Sustainability & EPR Compliance",
  description: "EPR compliance, plastic tax mitigation, and sustainable packaging strategy for UK food operators.",
  href: "/services/sustainability",
  accentColor: "from-primary via-primary/80 to-accent"
}, {
  icon: ClipboardCheck,
  title: "Packaging Development",
  description: "End-to-end packaging development support for new products and rebrands, from factory selection and press pass sign-offs to brand alignment.",
  href: "/services/packaging-development",
  accentColor: "from-primary to-accent"
}];

export function ServicesPreview({ className }: { className?: string }) {
  return <section className={`section-padding bg-background ${className || ""}`}>
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Complete Packaging Procurement Transformation
          </h2>
          <p className="text-lg text-muted-foreground">From Direct Manufacturer sourcing to 3PL Integration—everything you need to eliminate merchant markup and capture 20-50% savings.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => <Link key={service.title} to={service.href} className="group relative p-8 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-elevated hover:border-primary/30 transition-all duration-300 animate-fade-up overflow-hidden" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              {/* Left accent bar */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${service.accentColor} opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-6 group-hover:from-primary group-hover:to-primary/80 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>)}
        </div>
      </div>
    </section>;
}
