import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, Warehouse, Shield, BarChart3, Factory, Truck, Users, Search, FileText, Handshake, Package, Activity, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import packagingHeroImage from "@/assets/packaging-hero.jpg";
import packagingProofImage from "@/assets/packaging-procurement.jpg";
interface PackagingPurchasingPageProps {
  prevService: {
    id: string;
    title: string;
  } | null;
  nextService: {
    id: string;
    title: string;
  } | null;
}
const PackagingPurchasingPage = ({
  prevService,
  nextService
}: PackagingPurchasingPageProps) => {
  const benefits = [{
    icon: TrendingDown,
    title: "20-50% Cost Reduction",
    description: "Eliminate intermediary margin while maintaining (or improving) quality and service levels"
  }, {
    icon: Warehouse,
    title: "No Warehouse Required",
    description: "3PL partnerships provide direct procurement benefits without capital investment in warehousing"
  }, {
    icon: Shield,
    title: "Supplier Risk Mitigation",
    description: "Diversified factory relationships prevent single-source dependency"
  }, {
    icon: BarChart3,
    title: "Economies of Scale",
    description: "Volume-based pricing that improves as your operation grows"
  }];
  const solutions = [{
    icon: Factory,
    title: "Established Factory Network",
    description: "I bring 15+ years of relationships with manufacturers across UK, EU, and Asia. Unlike brokers who source reactively, I have established partnerships with vetted factories—giving you immediate access to manufacturer pricing without the trial-and-error of building these relationships yourself."
  }, {
    icon: Truck,
    title: "3PL Integration for Non-Warehoused Operations",
    description: "Don't have a warehouse? No problem. I implement third-party logistics (3PL) providers who handle pick, pack, and distribution—giving you the cost benefits of direct procurement without warehousing overhead. Once established, leverage the same 3PL for ingredients, beverages, and marketing materials."
  }, {
    icon: Users,
    title: "Hands-On Transition Management",
    description: "Direct procurement isn't just about finding cheaper suppliers. It's about tender management, contract negotiation, quality assurance, and performance monitoring. I manage this transition end-to-end, typically placing initial orders myself before empowering your team with the tools to manage relationships ongoing."
  }];
  const whatsIncluded = [{
    icon: Search,
    title: "Supplier Identification & Qualification",
    items: ["Factory network access across UK, EU, and Asia", "Capability assessment (capacity, certifications, sustainability)", "Site visits and production audits", "Quality control protocols"]
  }, {
    icon: FileText,
    title: "Competitive Tendering Management",
    items: ["RFQ development and distribution", "Bid evaluation and comparison", "Commercial negotiations", "Contract structure and terms"]
  }, {
    icon: Handshake,
    title: "Contract Negotiation & Setup",
    items: ["Volume-based pricing structures", "Payment terms and credit arrangements", "Quality specifications and tolerances", "Delivery schedules and lead times", "Minimum order quantities and flexibility"]
  }, {
    icon: Package,
    title: "3PL Integration (If Needed)",
    items: ["3PL provider selection and evaluation", "Pick, pack, ship process design", "Inventory management protocols", "Multi-product consolidation (packaging + food + beverage)"]
  }, {
    icon: Activity,
    title: "Supplier Performance Monitoring",
    items: ["Ongoing quality tracking", "Delivery performance metrics", "Cost benchmarking and optimization", "Relationship management support"]
  }];
  const processSteps = [{
    step: "01",
    title: "Discovery",
    description: "Comprehensive audit of your current packaging spend, supplier relationships, and operational requirements across all locations."
  }, {
    step: "02",
    title: "Strategy",
    description: "Develop a tailored procurement strategy identifying optimal manufacturer partners and 3PL solutions for your specific needs."
  }, {
    step: "03",
    title: "Execution",
    description: "Manage the complete tender process, negotiate contracts, and oversee the transition to direct manufacturer relationships."
  }, {
    step: "04",
    title: "Optimization",
    description: "Ongoing supplier performance monitoring, cost benchmarking, and continuous improvement to maximize long-term value."
  }];
  return <div className="min-h-screen">
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
                Eliminate the Intermediary Tax on Your Packaging Procurement
              </h1>
              <p className="text-xl text-primary font-medium">
                Direct Manufacturer Relationships for Multi-Site Food Operators
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The merchant model works brilliantly—until you scale. At 5-20+ locations, you're subsidizing an intermediary margin that direct procurement eliminates. I help multi-site restaurant and venue operators transition to manufacturer pricing, capturing 20-50% cost savings while leveraging 3PL partnerships for seamless fulfillment.
              </p>
              <Button asChild size="lg" className="mt-4">
                <Link to="/contact">Schedule Free Consultation</Link>
              </Button>
            </div>
            <div className="relative">
              <img src={packagingHeroImage} alt="Packaging procurement and supply chain management" className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 bg-background md:py-[30px]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Why Multi-Site Operators Overpay for Packaging
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                The UK packaging industry for food-to-go is dominated by the merchant/importer model: buying from Asia, warehousing stock, and distributing to your locations. This model has served businesses well, providing convenience and handling logistics complexity.
              </p>
              <p>
                But there's a saturation point. Once you operate 5-20+ locations, you're paying an "intermediary tax"—a 20-50% markup that direct manufacturer relationships eliminate. The merchant model that enabled your growth now constrains your margins.
              </p>
              <p>
                Most multi-site operators don't realize they've reached this inflection point. They continue buying through merchants because:
              </p>
              <ul className="space-y-3 list-none pl-0">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>It's worked so far—why change?</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Direct procurement seems complex and risky</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>They assume they need a warehouse to go direct</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Internal teams are focused on operations, not procurement transformation</span>
                </li>
              </ul>
              <p className="font-medium text-foreground">
                Meanwhile, every order reinforces the intermediary margin you're subsidizing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-16 bg-muted/50 md:py-[30px]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Direct Manufacturer Procurement Without the Complexity
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <solution.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{solution.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                </CardContent>
              </Card>)}
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
            {benefits.map((benefit, index) => <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>)}
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
            {whatsIncluded.map((category, index) => <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => <li key={itemIndex} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>)}
                  </ul>
                </CardContent>
              </Card>)}
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
            {processSteps.map((step, index) => <div key={index} className="relative p-6 rounded-xl bg-card border border-border/50 shadow-soft">
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {parseInt(step.step)}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 mt-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-16 bg-muted/50 md:py-[40px]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img src={packagingProofImage} alt="Sessions Arts Club packaging procurement success" className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]" />
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Real Results: £310k Annual Savings
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sessions Arts Club operated 15+ locations buying packaging through multiple merchants. After transitioning to direct manufacturer procurement and implementing a 3PL partner, they achieved £310k in verified annual savings—a 30% reduction in packaging costs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The same 3PL now handles their ambient food and beverage distribution (Mikos brand), demonstrating how this infrastructure investment compounds value beyond packaging.
              </p>
              <Button asChild variant="outline" size="lg">
                <Link to="/case-studies/sessions-arts-club">Read Full Case Study</Link>
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
            Ready to Eliminate Your Intermediary Tax?
          </h2>
          <p className="text-xl text-card/80 max-w-2xl mx-auto mb-8">
            Let's discuss how direct manufacturer procurement can transform your packaging costs.
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
            {prevService ? <Link to={`/services/${prevService.id}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">{prevService.title}</span>
              </Link> : <div />}
            {nextService ? <Link to={`/services/${nextService.id}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <span className="text-sm">{nextService.title}</span>
                <ArrowRight className="w-4 h-4" />
              </Link> : <div />}
          </div>
        </div>
      </section>
    </div>;
};
export default PackagingPurchasingPage;