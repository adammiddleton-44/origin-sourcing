import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GitBranch, TrendingDown, Shield, BarChart3, Truck, Warehouse, Network, Search, Settings, ArrowLeft, ArrowRight, CheckCircle, MapPin } from "lucide-react";

interface SupplyChainPageProps {
  prevService: {
    id: string;
    title: string;
  } | null;
  nextService: {
    id: string;
    title: string;
  } | null;
}

const SupplyChainPage = ({
  prevService,
  nextService
}: SupplyChainPageProps) => {
  const benefits = [{
    icon: TrendingDown,
    title: "Reduced Supply Chain Costs",
    description: "Optimize logistics, inventory, and supplier relationships to significantly reduce total supply chain expenditure"
  }, {
    icon: Shield,
    title: "Improved Resilience",
    description: "Diversified supplier base and risk mitigation strategies that protect against disruption"
  }, {
    icon: BarChart3,
    title: "Better Service Levels",
    description: "Improved reliability and consistency across your packaging supply chain"
  }, {
    icon: Warehouse,
    title: "Lower Working Capital",
    description: "Right-sized inventory levels that balance service requirements with capital efficiency"
  }];

  const solutions = [{
    icon: Network,
    title: "Complete Supply Chain Visibility",
    description: "I map your entire packaging supply chain from raw material suppliers through to final delivery, identifying hidden costs, bottlenecks, and single points of failure that put your operations at risk."
  }, {
    icon: Shield,
    title: "Risk Mitigation Strategies",
    description: "Supply chain disruptions are inevitable—being unprepared isn't. I develop robust contingency plans, alternative supplier networks, and inventory strategies that ensure business continuity."
  }, {
    icon: Truck,
    title: "Logistics Optimization",
    description: "From consolidation opportunities to route optimization and warehouse placement, I identify and implement improvements that reduce transportation costs while improving delivery performance."
  }];

  const whatsIncluded = [{
    icon: MapPin,
    title: "Supply Chain Mapping",
    items: ["End-to-end process documentation", "Supplier tier analysis", "Lead time mapping", "Cost driver identification"]
  }, {
    icon: Search,
    title: "Risk Assessment",
    items: ["Single source identification", "Geographic concentration analysis", "Financial stability review", "Capacity constraint evaluation"]
  }, {
    icon: Truck,
    title: "Logistics Optimization",
    items: ["Transportation cost analysis", "Consolidation opportunities", "Warehouse network review", "Delivery frequency optimization"]
  }, {
    icon: Warehouse,
    title: "Inventory Management",
    items: ["Safety stock optimization", "Demand forecasting improvement", "Working capital reduction", "Service level balancing"]
  }, {
    icon: Settings,
    title: "Implementation Support",
    items: ["Change management planning", "Supplier transition management", "Performance monitoring setup", "Continuous improvement programs"]
  }];

  const processSteps = [{
    step: "01",
    title: "Map",
    description: "Create a comprehensive view of your current supply chain, including all suppliers, logistics providers, and inventory points."
  }, {
    step: "02",
    title: "Analyze",
    description: "Identify inefficiencies, risks, and improvement opportunities through detailed data analysis and benchmarking."
  }, {
    step: "03",
    title: "Design",
    description: "Develop the optimal future-state supply chain model tailored to your specific operational requirements."
  }, {
    step: "04",
    title: "Implement",
    description: "Execute changes with minimal disruption to operations, managing supplier transitions and process changes."
  }];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-16 md:py-[30px]">
        <div className="container mx-auto px-4">
          <nav className="mb-8">
            <Link to="/services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
          </nav>
          <div className="grid md:grid-cols-2 gap-12 items-center py-0">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Transform Your Packaging Supply Chain
              </h1>
              <p className="text-xl text-primary font-medium">
                From Vulnerability to Competitive Advantage
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Your packaging supply chain can be either a source of constant firefighting or a strategic asset. I help multi-site food operators transform their supply chains to reduce costs, improve resilience, and deliver consistent service levels.
              </p>
              <Button asChild size="lg" className="mt-4">
                <Link to="/contact">Schedule Free Consultation</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="rounded-2xl shadow-2xl w-full aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                <GitBranch className="w-24 h-24 text-primary/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 bg-background md:py-[30px]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Why Supply Chains Underperform
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Most packaging supply chains evolved organically as businesses grew. What worked at 5 locations often becomes a liability at 20+. The result is hidden costs, unnecessary complexity, and risks that only become visible during a crisis.
              </p>
              <p>
                Common symptoms of an underperforming supply chain include:
              </p>
              <ul className="space-y-3 list-none pl-0">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Frequent stockouts or emergency orders</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Excessive safety stock tying up working capital</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Single-source dependencies creating risk exposure</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Fragmented logistics with suboptimal delivery patterns</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Poor visibility into supplier performance and costs</span>
                </li>
              </ul>
              <p className="font-medium text-foreground">
                A well-designed supply chain turns these liabilities into competitive advantages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-16 bg-muted/50 md:py-[30px]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Strategic Supply Chain Transformation
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <solution.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{solution.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-background md:py-[40px]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Key <span className="gradient-text">Benefits</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-muted/50 md:py-[30px]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            What's <span className="gradient-text">Included</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatsIncluded.map((category, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-background md:py-[40px]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Our <span className="gradient-text">Process</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative p-6 rounded-xl bg-card border border-border/50 shadow-soft">
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {parseInt(step.step)}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 mt-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-16 bg-muted/50 md:py-[40px]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-2xl shadow-2xl w-full aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                <Network className="w-24 h-24 text-primary/40" />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Building Resilient Supply Chains
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I've helped multi-site operators redesign their packaging supply chains to reduce costs by 20-30% while simultaneously improving service levels and reducing risk exposure.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The key is taking a holistic view—understanding how suppliers, logistics, inventory, and processes interact—and designing a system that optimizes the whole, not just individual components.
              </p>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Discuss Your Supply Chain</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-section-dark relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/25 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/15 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-card mb-6">
            Ready to Transform Your Supply Chain?
          </h2>
          <p className="text-xl text-card/80 max-w-2xl mx-auto mb-8">
            Let's discuss how strategic supply chain optimization can reduce costs and improve resilience.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Schedule Free Consultation</Link>
          </Button>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {prevService ? (
              <Link to={`/services/${prevService.id}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">{prevService.title}</span>
              </Link>
            ) : <div />}
            {nextService ? (
              <Link to={`/services/${nextService.id}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <span className="text-sm">{nextService.title}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupplyChainPage;
