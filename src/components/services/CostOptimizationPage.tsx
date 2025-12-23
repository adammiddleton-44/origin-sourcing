import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, BarChart3, Target, PiggyBank, Calculator, FileSearch, Wrench, Search, Settings, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

interface CostOptimizationPageProps {
  prevService: {
    id: string;
    title: string;
  } | null;
  nextService: {
    id: string;
    title: string;
  } | null;
}

const CostOptimizationPage = ({
  prevService,
  nextService
}: CostOptimizationPageProps) => {
  const benefits = [{
    icon: TrendingDown,
    title: "Typical Savings of 20-35%",
    description: "Comprehensive cost reduction across all packaging categories through multiple optimization levers"
  }, {
    icon: Target,
    title: "Improved Specifications",
    description: "Right-sized specifications that eliminate over-engineering without compromising functionality"
  }, {
    icon: BarChart3,
    title: "Better Supplier Terms",
    description: "Optimized commercial arrangements including pricing, payment terms, and volume commitments"
  }, {
    icon: PiggyBank,
    title: "Sustainable Cost Reductions",
    description: "Structural improvements that deliver ongoing savings, not just one-time price cuts"
  }];

  const solutions = [{
    icon: Calculator,
    title: "Spend Analysis & Benchmarking",
    description: "I analyze your packaging spend in detail and benchmark against industry standards. This reveals exactly where you're overpaying and quantifies the size of each opportunity, enabling prioritized action."
  }, {
    icon: Wrench,
    title: "Value Engineering",
    description: "Many packaging specifications evolved without systematic review. I work with suppliers to identify opportunities to reduce costs through material optimization, design simplification, and process improvements—without compromising functionality."
  }, {
    icon: FileSearch,
    title: "Total Cost Analysis",
    description: "Purchase price is just part of the story. I look at the full cost picture including logistics, inventory, waste, and handling to identify hidden costs and optimization opportunities that price-focused approaches miss."
  }];

  const whatsIncluded = [{
    icon: Search,
    title: "Spend Analysis",
    items: ["Category-level spend breakdown", "Supplier concentration analysis", "Price benchmarking", "Volume opportunity assessment"]
  }, {
    icon: Target,
    title: "Specification Review",
    items: ["Material assessment", "Weight optimization", "Design simplification", "Performance validation"]
  }, {
    icon: Calculator,
    title: "Commercial Optimization",
    items: ["Pricing structure review", "Volume commitment analysis", "Payment terms optimization", "Contract consolidation"]
  }, {
    icon: FileSearch,
    title: "Total Cost of Ownership",
    items: ["Logistics cost analysis", "Inventory carrying costs", "Waste and returns assessment", "Handling and storage costs"]
  }, {
    icon: Settings,
    title: "Implementation Support",
    items: ["Savings roadmap development", "Supplier negotiation support", "Change implementation", "Benefits tracking"]
  }];

  const processSteps = [{
    step: "01",
    title: "Data Collection",
    description: "Gather comprehensive spend and specification data across all packaging categories and suppliers."
  }, {
    step: "02",
    title: "Analysis",
    description: "Identify savings opportunities across all cost categories through detailed analysis and benchmarking."
  }, {
    step: "03",
    title: "Prioritization",
    description: "Rank opportunities by value and ease of implementation to create a phased savings roadmap."
  }, {
    step: "04",
    title: "Realization",
    description: "Implement changes and track savings delivery to ensure projected benefits are captured."
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
                Unlock Hidden Savings in Your Packaging Spend
              </h1>
              <p className="text-xl text-primary font-medium">
                Beyond Price Negotiations to Structural Cost Reduction
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Most cost reduction efforts focus on price negotiations alone. I take a comprehensive approach, addressing specifications, processes, and commercial structures to deliver sustainable savings of 20-35% across your packaging portfolio.
              </p>
              <Button asChild size="lg" className="mt-4">
                <Link to="/contact">Schedule Free Consultation</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="rounded-2xl shadow-2xl w-full aspect-[4/3] bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center">
                <TrendingDown className="w-24 h-24 text-accent/40" />
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
              Where Packaging Costs Really Come From
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                When packaging costs seem too high, the instinct is to push suppliers for better prices. But purchase price typically represents only 60-70% of total packaging costs. The rest is hidden in specifications, logistics, inventory, and waste.
              </p>
              <p>
                Common hidden cost drivers include:
              </p>
              <ul className="space-y-3 list-none pl-0">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Over-specified materials (heavier or more complex than needed)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Fragmented purchasing reducing volume leverage</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Suboptimal delivery patterns increasing logistics costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Excess inventory tying up working capital</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Waste from damage, obsolescence, or over-ordering</span>
                </li>
              </ul>
              <p className="font-medium text-foreground">
                True cost optimization addresses all these drivers, not just supplier pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-16 bg-muted/50 md:py-[30px]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Comprehensive Cost Optimization
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
              <div className="rounded-2xl shadow-2xl w-full aspect-[4/3] bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center">
                <PiggyBank className="w-24 h-24 text-accent/40" />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Sustainable, Not One-Time Savings
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The difference between short-term price cuts and sustainable cost reduction is structural change. I focus on changes that deliver ongoing value—optimized specifications, improved processes, better commercial structures.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This approach typically delivers 20-35% savings across packaging spend, with improvements that persist and compound over time rather than eroding at the next price review.
              </p>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Discuss Cost Optimization</Link>
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
            Ready to Unlock Your Packaging Savings?
          </h2>
          <p className="text-xl text-card/80 max-w-2xl mx-auto mb-8">
            Let's discuss how comprehensive cost optimization can transform your packaging spend.
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

export default CostOptimizationPage;
