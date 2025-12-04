import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  Package, 
  Leaf, 
  GitBranch, 
  TrendingDown, 
  Search, 
  Shield,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "procurement",
    icon: Package,
    title: "Packaging Procurement",
    description: "Strategic sourcing and supplier management to reduce costs while maintaining quality and reliability across your packaging portfolio.",
    features: [
      "Supplier identification and qualification",
      "Competitive tendering management",
      "Contract negotiation",
      "Supplier performance monitoring",
    ],
  },
  {
    id: "epr",
    icon: Leaf,
    title: "EPR Compliance",
    description: "Navigate Extended Producer Responsibility regulations with confidence. We ensure your packaging meets all UK environmental obligations.",
    features: [
      "Regulatory requirement analysis",
      "Packaging data collection and reporting",
      "Compliance strategy development",
      "Producer responsibility scheme selection",
    ],
  },
  {
    id: "supply-chain",
    icon: GitBranch,
    title: "Supply Chain Transformation",
    description: "End-to-end optimization of your packaging supply chain, from supplier diversification to logistics efficiency improvements.",
    features: [
      "Supply chain mapping and analysis",
      "Risk assessment and mitigation",
      "Logistics optimization",
      "Inventory management improvement",
    ],
  },
  {
    id: "cost",
    icon: TrendingDown,
    title: "Cost Optimization",
    description: "Identify and realize savings opportunities across your packaging spend through detailed analysis and strategic recommendations.",
    features: [
      "Spend analysis and benchmarking",
      "Value engineering",
      "Specification optimization",
      "Total cost of ownership analysis",
    ],
  },
  {
    id: "audit",
    icon: Search,
    title: "Packaging Audit",
    description: "Comprehensive assessment of your current packaging operations to identify opportunities for improvement and cost reduction.",
    features: [
      "Current state assessment",
      "Gap analysis",
      "Improvement roadmap",
      "Implementation support",
    ],
  },
  {
    id: "sustainability",
    icon: Shield,
    title: "Sustainability Strategy",
    description: "Develop and implement sustainable packaging strategies that meet regulatory requirements and consumer expectations.",
    features: [
      "Sustainability assessment",
      "Material alternatives evaluation",
      "Circularity strategy",
      "Carbon footprint reduction",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-card to-background">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive packaging consultancy services designed to deliver measurable results. From strategic sourcing to sustainability, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="p-8 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-3">
                  {service.title}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Every business is unique. Let's discuss your specific packaging challenges and create a tailored approach.
          </p>
          <Button asChild variant="secondary" size="xl">
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
