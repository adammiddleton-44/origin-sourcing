import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Truck, Warehouse, MapPin, DollarSign, Package, Settings, Handshake, Layers, Target, ArrowLeft, ArrowRight, CheckCircle, Building, TrendingUp, Scale, Search, ClipboardCheck, BarChart3 } from "lucide-react";
import heroImage from "@/assets/3pl-warehouse-hero.jpg";
import CaseStudyTile from "./CaseStudyTile";

interface ThreePLIntegrationPageProps {
  prevService: {
    id: string;
    title: string;
  } | null;
  nextService: {
    id: string;
    title: string;
  } | null;
}

const ThreePLIntegrationPage = ({
  prevService,
  nextService
}: ThreePLIntegrationPageProps) => {
  const benefits = [{
    icon: Building,
    title: "No Capital Investment Required",
    description: "Access warehouse infrastructure without buying, leasing, or staffing your own facility"
  }, {
    icon: Scale,
    title: "Flexible & Scalable",
    description: "Storage capacity and distribution capability grow with your operation—pay only for what you use"
  }, {
    icon: Layers,
    title: "Multi-Product Consolidation",
    description: "Leverage same 3PL for packaging, food, beverage, and marketing materials—reducing delivery complexity"
  }, {
    icon: DollarSign,
    title: "Transparent Cost Structure",
    description: "Clear pricing for storage, pick/pack, and shipping—eliminate hidden merchant markups"
  }];

  const solutions = [{
    icon: Search,
    title: "Strategic 3PL Partner Selection",
    description: "We don't just find \"a 3PL provider\"—we identify partners whose capabilities, cost structure, and technology align with your specific operational requirements. This includes capability assessment (pick, pack, ship capabilities; temperature control if needed; multi-product handling), geographic optimisation (warehouse locations that minimise delivery times), technology integration (WMS that connects with your ordering processes), and cost modelling (transparent pricing for storage, pick/pack rates, and shipping). The right 3PL becomes an extension of your operation, not a black box."
  }, {
    icon: Layers,
    title: "Beyond Packaging—Multi-Product Consolidation",
    description: "Here's where 3PL investment compounds: Once you've established a 3PL partnership for packaging, leverage the same infrastructure for ambient food products (dry goods, shelf-stable items), beverages (cans, bottles, kegs), marketing materials (POS displays, branded merchandise), and smallwares (cutlery, napkins, cleaning supplies). Instead of receiving separate deliveries from multiple merchants, your sites get consolidated shipments—reducing receiving complexity and delivery costs."
  }, {
    icon: Handshake,
    title: "Hands-On Implementation & Ongoing Optimization",
    description: "We don't just make introductions—we manage the entire implementation: negotiate 3PL contracts (storage rates, pick/pack fees, shipping terms), design pick/pack processes specific to your SKU portfolio, establish inventory management protocols, set up ordering systems and forecasting, and monitor performance and optimise costs continuously. The result: You capture direct procurement savings while maintaining (or improving) the service levels you had with merchants."
  }];

  const whatsIncluded = [{
    icon: Search,
    title: "3PL Provider Selection & Evaluation",
    items: ["Capability assessment and shortlisting", "Site visits and facility audits", "Technology evaluation (WMS, integration capabilities)", "Geographic optimization (warehouse locations)", "Cost modeling and comparison"]
  }, {
    icon: ClipboardCheck,
    title: "Contract Negotiation & Setup",
    items: ["Storage rate negotiation (shelf, pallet, temperature-controlled)", "Pick/pack fee structures", "Shipping rate optimisation", "Service level agreements (SLAs)", "Flexible scaling terms"]
  }, {
    icon: Settings,
    title: "Process Design & Implementation",
    items: ["Pick/pack workflow design for your SKU portfolio", "Inventory management protocols", "Order processing and forecasting systems", "Delivery schedule optimization", "Multi-site coordination"]
  }, {
    icon: Layers,
    title: "Multi-Product Integration Strategy",
    items: ["Expansion planning beyond packaging", "Consolidation opportunities (food, beverage, marketing)", "Vendor coordination and onboarding", "Order consolidation for site deliveries"]
  }, {
    icon: BarChart3,
    title: "Performance Monitoring & Optimisation",
    items: ["Ongoing cost tracking and benchmarking", "Delivery performance metrics", "Storage efficiency optimisation", "3PL relationship management", "Continuous improvement initiatives"]
  }];

  const processSteps = [{
    step: "01",
    title: "Discovery",
    description: "Analyse your current logistics setup, delivery requirements across sites, and identify 3PL requirements based on volume and product types."
  }, {
    step: "02",
    title: "Strategy",
    description: "Develop 3PL selection criteria, evaluate providers, model costs, and design the optimal logistics infrastructure for your operation."
  }, {
    step: "03",
    title: "Execution",
    description: "Negotiate 3PL contracts, implement pick/pack processes, establish inventory management, and transition from merchant to direct procurement fulfillment."
  }, {
    step: "04",
    title: "Optimisation",
    description: "Monitor performance, optimise storage and delivery costs, expand to additional product categories, and continuously improve logistics efficiency."
  }];

  const faqs = [{
    question: "Don't 3PL providers just add another layer of cost?",
    answer: "Yes—but far less than the merchant markup. A 3PL charges for actual services rendered (storage space, pick/pack labor, shipping) with transparent pricing. Merchants bundle these costs with procurement markup, typically 20-50%. By separating procurement from logistics, you pay competitive rates for each."
  }, {
    question: "How long does 3PL implementation take?",
    answer: "Typically 4-8 weeks from provider selection to first shipments. Timeline depends on complexity (number of SKUs, temperature requirements, integration needs). We manage the entire process to minimise disruption."
  }, {
    question: "What if we want to bring warehousing in-house later?",
    answer: "That's fine—3PL partnerships are flexible. Many operators start with 3PL, then transition to self-managed warehousing as scale justifies the investment. We can help you evaluate that decision when the time comes."
  }, {
    question: "Can we use our existing 3PL or do we need a new one?",
    answer: "If you already have a 3PL relationship, we'll evaluate whether it's optimised for direct procurement. Sometimes existing 3PLs work well, sometimes a new partner makes sense. We'll recommend what's best for your operation."
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
                Capture Direct Procurement Savings Without Warehouse Investment
              </h1>
              <p className="text-xl text-primary font-medium">
                3PL Integration & Logistics Optimisation for Multi-Site Operations
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Transitioning to direct manufacturer procurement doesn't require owning a warehouse. By partnering with the right third-party logistics (3PL) provider, you get the cost benefits of direct procurement—20-50% savings—without capital investment in warehousing infrastructure. We implement 3PL solutions that handle pick, pack, and distribution, then help you leverage the same infrastructure for ingredients, beverages, and marketing materials.
              </p>
              <Button asChild size="lg" className="mt-4">
                <Link to="/contact">Schedule Free Consultation</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Modern 3PL warehouse with automation and logistics technology" 
                className="rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 bg-background md:py-[30px]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Why Multi-Site Operators Avoid Direct Procurement
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                The biggest barrier to direct manufacturer procurement isn't finding factories or negotiating contracts—it's logistics.
              </p>
              <p>
                Multi-site operators buying through merchants get a bundled service: procurement + warehousing + distribution to their locations. The merchant handles inventory management, order consolidation, and delivery logistics. It's convenient.
              </p>
              <p>
                But convenience comes at a cost. That 20-50% merchant markup isn't just for sourcing—it's subsidizing their warehouse operations and distribution network. The question becomes: can you replicate those logistics functions more efficiently?
              </p>
              <p>
                Most operators assume they need to:
              </p>
              <ul className="space-y-3 list-none pl-0">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Build or lease their own warehouse</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Hire warehouse staff</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Manage inventory systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Coordinate deliveries across multiple sites</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Handle the complexity of inbound shipments from manufacturers</span>
                </li>
              </ul>
              <p>
                The capital requirement and operational complexity seem overwhelming, so they stick with merchants.
              </p>
              <p className="font-medium text-foreground">
                But there's a better way: Third-party logistics (3PL) providers offer the infrastructure without the investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-16 bg-muted/50 md:py-[30px]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            3PL Integration: The Infrastructure for Direct Procurement
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

      {/* Proof Section - Mikos Case Study */}
      <CaseStudyTile caseStudyId="mikes-building-scalable-infrastructure-for-rapid-multi-site-expansion" />

      {/* FAQ Section */}
      <section className="py-16 bg-background md:py-[40px]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
            Ready to Implement 3PL for Direct Procurement?
          </h2>
          <p className="text-xl text-card/80 max-w-2xl mx-auto mb-8">
            Let's discuss how a strategic 3PL partnership can enable you to capture direct manufacturer savings without warehouse investment.
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

export default ThreePLIntegrationPage;
