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
import { SEO } from "@/components/SEO";

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
    accentColor: "from-primary to-primary/70",
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
    accentColor: "from-accent to-accent/70",
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
    accentColor: "from-primary via-primary/80 to-accent",
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
    accentColor: "from-accent to-primary/70",
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
    accentColor: "from-primary/80 to-accent/80",
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
    accentColor: "from-accent via-accent/80 to-primary",
  },
];

const Services = () => {
  return (
    <Layout>
      <SEO 
        title="Packaging Procurement Services"
        description="Expert packaging procurement, EPR compliance, and supply chain transformation services. Reduce costs by 20-35% with PackProConsult's specialist consultancy."
        canonical="/services"
      />
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-section-primary via-background to-section-accent relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container-narrow relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
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
                className="group relative p-8 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-300 animate-fade-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Left accent bar */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${service.accentColor} opacity-0 group-hover:opacity-100 transition-opacity`} />
                
                {/* Card accent gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-6 group-hover:from-primary/25 group-hover:to-primary/10 transition-all">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-section-dark relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/25 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/15 rounded-full blur-3xl" />
        </div>
        
        <div className="container-narrow text-center relative">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-card mb-4">
            Need a <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Custom Solution</span>?
          </h2>
          <p className="text-card/70 mb-8 max-w-2xl mx-auto">
            Every business is unique. Let's discuss your specific packaging challenges and create a tailored approach.
          </p>
          <Button asChild variant="hero" size="xl">
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
