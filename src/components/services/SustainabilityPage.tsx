import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Shield, TrendingDown, Award, Recycle, Globe, TreePine, Search, Settings, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

interface SustainabilityPageProps {
  prevService: {
    id: string;
    title: string;
  } | null;
  nextService: {
    id: string;
    title: string;
  } | null;
}

const SustainabilityPage = ({
  prevService,
  nextService
}: SustainabilityPageProps) => {
  const benefits = [{
    icon: Leaf,
    title: "Reduced Environmental Impact",
    description: "Measurable reductions in carbon footprint, waste, and resource consumption across your packaging portfolio"
  }, {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "Stay ahead of evolving environmental regulations including EPR, plastic taxes, and recyclability requirements"
  }, {
    icon: Award,
    title: "Enhanced Brand Reputation",
    description: "Demonstrate genuine sustainability credentials to increasingly environmentally-conscious consumers"
  }, {
    icon: TrendingDown,
    title: "Often Reduces Costs",
    description: "Many sustainability improvements—material reduction, local sourcing, waste elimination—also reduce costs"
  }];

  const solutions = [{
    icon: Search,
    title: "Sustainability Assessment",
    description: "I evaluate your current packaging portfolio against environmental criteria—materials, recyclability, carbon footprint, and waste. This baseline reveals exactly where you stand and identifies the highest-impact improvement opportunities."
  }, {
    icon: Recycle,
    title: "Material & Design Optimization",
    description: "Sustainable alternatives don't have to mean compromise. I identify and validate material substitutions, design changes, and supplier alternatives that improve environmental performance while maintaining or improving functionality."
  }, {
    icon: Globe,
    title: "Circularity Strategy",
    description: "The future of packaging is circular. I help you develop and implement strategies for recyclability, reuse systems, and closed-loop solutions that reduce waste and align with emerging regulatory requirements."
  }];

  const whatsIncluded = [{
    icon: Search,
    title: "Sustainability Assessment",
    items: ["Portfolio environmental baseline", "Material sustainability scoring", "Recyclability analysis", "Carbon footprint estimation"]
  }, {
    icon: Recycle,
    title: "Material Alternatives",
    items: ["Sustainable material identification", "Performance validation", "Supplier qualification", "Cost-benefit analysis"]
  }, {
    icon: Globe,
    title: "Circularity Planning",
    items: ["Recyclability improvement", "Reuse system design", "Take-back scheme evaluation", "Closed-loop opportunities"]
  }, {
    icon: TreePine,
    title: "Carbon Reduction",
    items: ["Supply chain carbon mapping", "Reduction opportunity identification", "Local sourcing evaluation", "Offset strategy (if needed)"]
  }, {
    icon: Settings,
    title: "Implementation Support",
    items: ["Transition planning", "Supplier change management", "Performance monitoring", "Stakeholder communication"]
  }];

  const processSteps = [{
    step: "01",
    title: "Baseline",
    description: "Assess current environmental impact and sustainability performance across your entire packaging portfolio."
  }, {
    step: "02",
    title: "Goals",
    description: "Define clear sustainability targets aligned with your business commitments, regulatory requirements, and stakeholder expectations."
  }, {
    step: "03",
    title: "Strategy",
    description: "Develop a practical roadmap with prioritized initiatives to achieve your goals within realistic timeframes and budgets."
  }, {
    step: "04",
    title: "Execute",
    description: "Implement changes systematically, tracking progress against targets and adjusting approach based on results."
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
                Sustainable Packaging Strategy
              </h1>
              <p className="text-xl text-primary font-medium">
                Practical Sustainability That Delivers Results
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sustainability is no longer optional—consumers demand it, regulations require it, and it often reduces costs. I help multi-site food operators develop and implement packaging sustainability strategies that are practical, measurable, and aligned with business objectives.
              </p>
              <Button asChild size="lg" className="mt-4">
                <Link to="/contact">Schedule Free Consultation</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="rounded-2xl shadow-2xl w-full aspect-[4/3] bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                <Leaf className="w-24 h-24 text-accent/40" />
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
              The Sustainability Challenge
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Packaging sustainability is complex. The "right" answer isn't always obvious—paper isn't always better than plastic, "biodegradable" claims often mislead, and well-intentioned changes can have unintended consequences. Meanwhile, regulations are tightening and consumers are demanding action.
              </p>
              <p>
                Common sustainability challenges include:
              </p>
              <ul className="space-y-3 list-none pl-0">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Navigating conflicting information about material sustainability</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Balancing environmental goals with functionality and cost</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Understanding which changes will have the most impact</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Keeping pace with evolving regulations and requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Communicating sustainability progress credibly</span>
                </li>
              </ul>
              <p className="font-medium text-foreground">
                A structured approach cuts through the complexity and delivers practical results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-16 bg-muted/50 md:py-[30px]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Practical Sustainability Solutions
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
                <Recycle className="w-24 h-24 text-accent/40" />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Sustainability That Makes Business Sense
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The best sustainability strategies don't just reduce environmental impact—they also improve operations. Material reduction saves money. Local sourcing reduces risk. Waste elimination improves efficiency.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I focus on identifying initiatives that deliver environmental and business benefits together, creating sustainability programs that have genuine organizational buy-in and lasting impact.
              </p>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Discuss Your Sustainability Goals</Link>
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
            Ready to Build Your Sustainability Strategy?
          </h2>
          <p className="text-xl text-card/80 max-w-2xl mx-auto mb-8">
            Let's discuss how practical sustainability can deliver environmental and business benefits.
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

export default SustainabilityPage;
