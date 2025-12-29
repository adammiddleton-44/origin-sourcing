import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  FileCheck, 
  TrendingDown, 
  Leaf, 
  Award, 
  Recycle, 
  Globe, 
  ClipboardList,
  FileText,
  ArrowLeft, 
  ArrowRight, 
  CheckCircle,
  AlertTriangle,
  Scale
} from "lucide-react";
import sustainabilityHero from "@/assets/sustainability-hero.jpg";

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
  const benefits = [
    {
      icon: Shield,
      title: "Regulatory Compliance Confidence",
      description: "Accurate reporting and documentation that withstands regulatory scrutiny—avoid penalties, fines, and enforcement"
    },
    {
      icon: TrendingDown,
      title: "EPR & Plastic Tax Cost Optimisation",
      description: "Minimise regulatory fees through proper classification, material selection, and strategic packaging redesign"
    },
    {
      icon: Recycle,
      title: "Material Transition Guidance",
      description: "Evidence-based recommendations on sustainable alternatives—balancing cost, performance, and environmental impact"
    },
    {
      icon: Award,
      title: "Competitive Sustainability Positioning",
      description: "Credible environmental strategy that enhances brand reputation and prepares for future regulatory requirements"
    }
  ];

  const solutions = [
    {
      icon: FileCheck,
      title: "EPR Compliance & Fee Optimization",
      description: "I don't just help you report—I help you optimize:",
      items: [
        "Accurate data collection: Establish systems to track packaging tonnage by material type and recyclability classification",
        "Packaging classification: Properly categorize packaging to ensure you're paying appropriate EPR fees (not overpaying on conservative assumptions)",
        "Producer Responsibility Scheme selection: Identify the right compliance scheme based on your packaging portfolio and operational structure",
        "Fee modelling: Analyse how material substitutions or redesigns could reduce ongoing EPR obligations",
        "Reporting processes: Implement quarterly/annual reporting workflows to meet regulatory deadlines"
      ],
      outcome: "The goal: Full compliance with optimized fees—not guesswork or overpayment."
    },
    {
      icon: Scale,
      title: "Plastic Tax Mitigation & Material Alternatives",
      description: "Plastic Packaging Tax is £200/tonne—but only for packaging under 30% recycled content. The question becomes: Can you redesign or substitute to avoid it?",
      items: [
        "Recycled content verification: Work with suppliers to document and prove recycled content percentages",
        "Material alternatives: Assess paper-based, molded fiber, or higher recycled-content plastic options",
        "Cost-benefit analysis: Is switching materials cheaper than paying plastic tax? What are the functional trade-offs (barrier properties, durability, customer experience)?",
        "Supply chain impact: How does material switching affect procurement costs, 3PL handling, and site operations?"
      ],
      outcome: "The outcome: Strategic decisions based on total cost of ownership, not just regulatory avoidance."
    },
    {
      icon: Globe,
      title: "Long-Term Sustainability Strategy",
      description: "Compliance is the floor, not the ceiling. Forward-thinking operators are building sustainability into procurement strategy:",
      items: [
        "Circular economy principles: Design packaging for recyclability, reusability, or composability",
        "Carbon footprint reduction: Evaluate material sourcing, production methods, and transportation impacts",
        "Supply chain transparency: Establish traceability for sustainability claims (recycled content, responsible sourcing)",
        "Stakeholder communication: Provide credible sustainability content for marketing, investors, and customers",
        "Future-proofing: Anticipate regulatory changes (Deposit Return Scheme, additional EPR categories) and position ahead of requirements"
      ],
      outcome: "The result: Compliance today, competitive advantage tomorrow."
    }
  ];

  const whatsIncluded = [
    {
      icon: ClipboardList,
      title: "EPR Compliance Management",
      items: [
        "Packaging data collection systems",
        "Material classification and fee calculation",
        "Producer Responsibility Scheme selection",
        "Quarterly/annual reporting processes",
        "Regulatory deadline management",
        "Audit preparation and documentation"
      ]
    },
    {
      icon: Scale,
      title: "Plastic Tax Assessment & Mitigation",
      items: [
        "Current plastic packaging audit",
        "Recycled content verification with suppliers",
        "Material alternative evaluation",
        "Cost-benefit analysis (tax vs. substitution)",
        "Supply chain impact assessment",
        "Implementation planning"
      ]
    },
    {
      icon: Leaf,
      title: "Sustainable Material Evaluation",
      items: [
        "Alternative material identification (paper, molded fiber, bio-plastics)",
        "Functional performance testing",
        "Supplier qualification and sourcing",
        "Cost modeling and procurement impact",
        "Recyclability and end-of-life assessment",
        "Customer experience considerations"
      ]
    },
    {
      icon: Recycle,
      title: "Circular Economy Strategy",
      items: [
        "Packaging design for recyclability",
        "Reuse and refill system evaluation",
        "Composability assessment",
        "Supply chain circularity opportunities",
        "Lifecycle impact analysis",
        "Future regulatory preparation"
      ]
    },
    {
      icon: FileText,
      title: "Sustainability Reporting & Communication",
      items: [
        "Carbon footprint calculation",
        "Supply chain traceability documentation",
        "Sustainability claims verification",
        "Marketing content development",
        "Investor/stakeholder reporting",
        "Third-party certification support"
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "Audit your current packaging portfolio, assess regulatory exposure, review supplier documentation, and identify compliance gaps and optimization opportunities."
    },
    {
      step: "02",
      title: "Strategy",
      description: "Develop EPR reporting processes, evaluate material alternatives, model cost impacts, and create long-term sustainability roadmap aligned with business objectives."
    },
    {
      step: "03",
      title: "Execution",
      description: "Implement data collection systems, establish supplier verification processes, transition to optimized materials, and ensure regulatory reporting compliance."
    },
    {
      step: "04",
      title: "Optimisation",
      description: "Monitor regulatory changes, refine material strategies, track cost savings, and continuously improve sustainability performance and compliance processes."
    }
  ];

  const hiddenChallenges = [
    {
      title: "Data collection chaos",
      description: "How do you accurately track packaging tonnage across 10-20+ locations when different sites use different packaging and waste is handled inconsistently?"
    },
    {
      title: "Classification confusion",
      description: "Is your packaging \"primary\" or \"transit\"? Is it \"difficult to recycle\" (higher EPR fees) or \"widely recycled\" (lower fees)? These distinctions dramatically impact your costs."
    },
    {
      title: "Supplier verification",
      description: "Your suppliers say packaging contains 30%+ recycled content—but can they prove it? Do you have the documentation chain required for compliance?"
    },
    {
      title: "Regulatory changes",
      description: "EPR fees, plastic tax rates, and material classifications are evolving. What's compliant today may not be tomorrow."
    },
    {
      title: "Cost optimisation missed",
      description: "You're paying EPR fees on packaging that could be redesigned or substituted with lower-fee materials, but nobody's analysing the trade-offs."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <nav className="mb-8">
            <Link to="/services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
          </nav>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Navigate EPR & Sustainability Requirements Without the Compliance Risk
              </h1>
              <p className="text-xl text-primary font-medium">
                Regulatory Compliance & Sustainable Packaging Strategy for UK Food Operators
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Extended Producer Responsibility (EPR) and plastic tax regulations have transformed UK packaging compliance—creating both financial obligations and strategic opportunities. I help multi-site food operators navigate these requirements while minimizing costs: EPR fee optimization, plastic tax mitigation, material alternative evaluation, and long-term sustainability strategy. Stay compliant, reduce environmental impact, and avoid the penalties that come with getting it wrong.
              </p>
              <Button asChild size="lg" className="mt-4">
                <Link to="/contact">Schedule Compliance Assessment</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={sustainabilityHero} 
                alt="Sustainable packaging materials including recyclable cardboard, compostable containers, and paper-based alternatives" 
                className="rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 bg-background md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              UK Packaging Regulations: Compliance Complexity & Hidden Costs
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                UK packaging regulations changed dramatically in 2024-2025. What was once simple reporting became complex financial obligations:
              </p>
              
              <div className="bg-muted/50 p-6 rounded-xl border border-border my-8">
                <div className="flex items-start gap-4 mb-4">
                  <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Extended Producer Responsibility (EPR)</h3>
                    <p className="text-muted-foreground mb-0">
                      Now requires businesses to pay fees based on the packaging they place on the market—with rates varying by material type, weight, and recyclability. Get your calculations wrong? Penalties. Miss reporting deadlines? Fines. Under-report your packaging? Enforcement action.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-xl border border-border my-8">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Plastic Packaging Tax</h3>
                    <p className="text-muted-foreground mb-0">
                      Adds £200 per tonne for plastic packaging with less than 30% recycled content. Sounds straightforward until you're trying to verify recycled content percentages across multiple suppliers and proving compliance through documentation chains.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mt-10 mb-6">The hidden challenges:</h3>
              <p className="text-muted-foreground mb-6">Most multi-site operators discover these problems too late:</p>
              
              <ul className="space-y-4 list-none pl-0">
                {hiddenChallenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">{challenge.title}:</strong> {challenge.description}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl mt-8">
                <p className="font-medium text-foreground mb-2">The consequence:</p>
                <p className="text-muted-foreground mb-4">
                  You're either overpaying for compliance (bad data, conservative assumptions, missed optimization) or underreporting (audit risk, penalties, enforcement).
                </p>
                <p className="text-foreground font-medium">
                  Most businesses need someone who understands both the regulations AND the packaging supply chain to navigate this effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-16 bg-muted/50 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Regulatory Compliance + Strategic Sustainability
          </h2>
          <div className="space-y-12">
            {solutions.map((solution, index) => (
              <Card key={index} className="bg-card border-border overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <solution.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3">{solution.title}</h3>
                      <p className="text-muted-foreground mb-4">{solution.description}</p>
                      <ul className="space-y-2 mb-4">
                        {solution.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-primary font-medium">{solution.outcome}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-background md:py-20">
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
      <section className="py-16 bg-muted/50 md:py-20">
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
      <section className="py-16 bg-background md:py-20">
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

      {/* Final CTA Section */}
      <section className="section-padding bg-section-dark relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/25 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/15 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-card mb-6">
            Ready to Optimize Your Packaging Compliance?
          </h2>
          <p className="text-xl text-card/80 max-w-2xl mx-auto mb-8">
            Let's discuss your EPR obligations, plastic tax exposure, and sustainability opportunities—turning regulatory requirements into competitive advantage.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Schedule Compliance Assessment</Link>
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
