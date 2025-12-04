import { Link } from "react-router-dom";
import { Package, Leaf, GitBranch, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Package,
    title: "Packaging Procurement",
    description:
      "Strategic sourcing and supplier management to reduce costs while maintaining quality and reliability across your packaging portfolio.",
    href: "/services#procurement",
  },
  {
    icon: Leaf,
    title: "EPR Compliance",
    description:
      "Navigate Extended Producer Responsibility regulations with confidence. We ensure your packaging meets all UK environmental obligations.",
    href: "/services#epr",
  },
  {
    icon: GitBranch,
    title: "Supply Chain Transformation",
    description:
      "End-to-end optimization of your packaging supply chain, from supplier diversification to logistics efficiency improvements.",
    href: "/services#supply-chain",
  },
];

export function ServicesPreview() {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            How We Help
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive packaging consultancy services designed to deliver measurable results for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className="group p-8 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-elevated hover:border-primary/30 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
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
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/services">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
