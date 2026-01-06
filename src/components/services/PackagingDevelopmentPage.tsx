import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Factory, 
  Palette, 
  Search, 
  Users, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  AlertTriangle,
  Shield,
  UserCheck,
  Eye,
  TrendingDown
} from "lucide-react";
import heroImage from "@/assets/packaging-development-hero.jpg";
import CaseStudyTile from "./CaseStudyTile";

interface PackagingDevelopmentPageProps {
  prevService: {
    id: string;
    title: string;
  } | null;
  nextService: {
    id: string;
    title: string;
  } | null;
}

const PackagingDevelopmentPage = ({
  prevService,
  nextService
}: PackagingDevelopmentPageProps) => {
  const problemPoints = [
    {
      title: "Color issues",
      description: "Brand colors don't match across different substrates. Your Pantone blue looks perfect on coated stock but shifts on uncoated materials or different printing processes."
    },
    {
      title: "Material problems",
      description: "The substrate you specified doesn't work with your product (grease resistance, moisture barrier, structural integrity). Or it's overspecified—paying for premium materials when standard grades would work fine."
    },
    {
      title: "Production complications",
      description: "The factory you selected doesn't have the right equipment or expertise for your specific packaging type. What seemed like a 4-week timeline becomes 12 weeks with multiple rounds of corrections."
    },
    {
      title: "Approval bottlenecks",
      description: "Internal stakeholders (marketing, operations, procurement) have different priorities and sign-off requirements. Projects stall while you coordinate feedback and manage revisions."
    },
    {
      title: "Quality failures",
      description: "Packaging reaches your sites, but there are issues—colors are off, materials don't perform, structural problems emerge. Now you're dealing with returns, replacements, and operational disruption."
    }
  ];

  const solutions = [
    {
      icon: Factory,
      title: "Factory & Machinery Selection",
      description: "Not all factories can produce all packaging types. We identify the right production partner based on:",
      points: [
        "Capability matching: Does their equipment suit your substrate, print method, and finishing requirements?",
        "Production volume: Are you ordering quantities that fit their minimum runs and efficiency sweet spots?",
        "Quality standards: Do they have the technical capability and QC processes for your brand requirements?",
        "Timeline realism: Can they actually deliver on your schedule, or are you setting up for disappointment?"
      ],
      result: "Your project goes to a factory equipped to execute it properly the first time."
    },
    {
      icon: Eye,
      title: "Press Pass Sign-Offs & Brand Alignment",
      description: "This is where most projects derail. We provide on-site factory presence for critical approvals:",
      points: [
        "Press pass attendance: Physical presence during production setup to approve color, registration, and print quality before full runs",
        "Substrate evaluation: Verification that materials meet specifications (weight, coating, barrier properties)",
        "Brand consistency: Ensuring colors and finishes match across different packaging types (coated vs. uncoated, CMYK vs. Pantone, matte vs. gloss)",
        "Structural integrity: Confirming that packaging performs functionally (sealing, stacking, handling)"
      ],
      result: "You're not relying on factory photos or samples shipped after production—we're there in person ensuring your brand standards are met."
    },
    {
      icon: TrendingDown,
      title: "Packaging Audits & Cost Optimisation",
      description: "New projects are opportunities to identify savings:",
      points: [
        "Material optimisation: Are you over-specifying substrates? Can you achieve the same performance with lighter-weight or more cost-effective materials?",
        "Size optimisation: Are your packaging dimensions creating waste in production or shipping? Small dimensional changes can yield significant savings.",
        "Print method efficiency: Is your design unnecessarily complex (excessive spot colors, difficult registration) driving up costs?",
        "Volume leverage: Can consolidating packaging types or standardising across products reduce SKU complexity and improve pricing?"
      ],
      result: "Quality execution AND cost efficiency."
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Avoid costly production failures, delays, and brand reputation damage through expert factory oversight"
    },
    {
      icon: UserCheck,
      title: "Internal Resource Relief",
      description: "Free your teams from managing complex production coordination—we handle factory relationships and approvals"
    },
    {
      icon: Palette,
      title: "Brand Consistency Assurance",
      description: "Ensure color accuracy and quality standards across all packaging types and production runs"
    },
    {
      icon: TrendingDown,
      title: "Cost Optimisation Through Audits",
      description: "Identify material, size, and specification opportunities that reduce packaging costs without compromising quality"
    }
  ];

  const whatsIncluded = [
    {
      icon: Factory,
      title: "Factory & Equipment Selection",
      items: [
        "Production capability assessment",
        "Machinery suitability evaluation (flexo, digital, offset, gravure)",
        "Quality control process review",
        "Production timeline validation",
        "Factory site visits and audits"
      ]
    },
    {
      icon: Eye,
      title: "Press Pass Sign-Offs & Production Oversight",
      items: [
        "On-site attendance during press approvals",
        "Color matching and registration verification",
        "Material specification confirmation",
        "Print quality assessment",
        "Production sample approval"
      ]
    },
    {
      icon: Palette,
      title: "Brand Alignment Across Substrates",
      items: [
        "Color consistency management (Pantone/CMYK)",
        "Substrate coordination (coated/uncoated/specialty)",
        "Finish specification (matte/gloss/soft-touch)",
        "Multi-packaging type coordination",
        "Brand guideline interpretation for production"
      ]
    },
    {
      icon: Search,
      title: "Packaging Design & Specification Audits",
      items: [
        "Material optimization analysis",
        "Dimensional efficiency review",
        "Print complexity assessment",
        "Waste reduction opportunities",
        "Cost-benefit recommendations"
      ]
    },
    {
      icon: Users,
      title: "Project Coordination & Stakeholder Management",
      items: [
        "Internal approval process management",
        "Timeline coordination and tracking",
        "Revision management and documentation",
        "Cross-functional communication (marketing/ops/procurement)",
        "Quality issue resolution"
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "Understand your packaging requirements, brand standards, product specifications, timeline constraints, and internal approval processes."
    },
    {
      step: "02",
      title: "Strategy",
      description: "Identify optimal factory partners, develop production specifications, create approval workflows, and establish quality checkpoints."
    },
    {
      step: "03",
      title: "Execution",
      description: "Manage factory coordination, attend press approvals, verify brand alignment, oversee production, and handle quality assurance throughout manufacturing."
    },
    {
      step: "04",
      title: "Optimisation",
      description: "Conduct packaging audits, identify cost-saving opportunities, document lessons learned, and refine specifications for future production runs."
    }
  ];

  const faqs = [
    {
      question: "Do you handle packaging design, or just production management?",
      answer: "We focus on production execution and factory coordination, not graphic design. If you need design work, we can recommend partners. Our expertise is ensuring your design translates accurately from concept to physical production—managing the technical specifications, factory selection, and quality oversight that most designers don't handle."
    },
    {
      question: "What types of packaging do you work with?",
      answer: "Food service and retail packaging across multiple substrates: paper, cardboard, flexible films, rigid plastics. Common examples: cups, boxes, bags, trays, containers, labels. If it's printed and food-contact, we likely have experience with it."
    },
    {
      question: "How much does packaging development support cost?",
      answer: "Project-based pricing depends on complexity, number of SKUs, and factory oversight requirements. Typical range: £2,000-8,000 for a multi-SKU packaging launch including factory selection, press attendance, and brand alignment. This investment typically prevents £20-50k in production failures and delays."
    },
    {
      question: "Can you work with our existing design agency or in-house team?",
      answer: "Absolutely—we complement creative teams. Your designers focus on brand and aesthetics, we handle production specifications, factory coordination, and quality assurance. This partnership ensures designs are both beautiful and manufacturable."
    },
    {
      question: "What if we're rebranding multiple packaging types?",
      answer: "This is ideal for our involvement. Rebrands require coordinating new specifications across multiple SKUs while maintaining brand consistency. We manage the factory transitions, ensure colour matching across substrates, and handle the production complexity so your internal teams aren't overwhelmed."
    }
  ];

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
                Flawless Packaging Execution for High-Stakes Projects
              </h1>
              <p className="text-xl text-primary font-medium">
                Packaging Development & Project Management for New Products and Rebrands
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Launching a new product or rebranding existing packaging? The stakes are high—wrong materials, colour mismatches, or production issues create costly delays, returns, and brand damage. We provide end-to-end packaging development support: from factory selection and press pass sign-offs to brand alignment across substrates. Our 15+ years of production expertise ensures quality outcomes while identifying cost-saving opportunities through packaging audits.
              </p>
              <Button asChild size="lg" className="mt-4">
                <Link to="/contact">Schedule Free Consultation</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="High-quality packaging samples showing attention to detail and brand consistency" 
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
              Why Packaging Projects Go Wrong
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Packaging seems simple until you're in production. Your design looks perfect on screen, but when physical samples arrive, you discover:
              </p>
              
              <div className="space-y-4 not-prose">
                {problemPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                    <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground">{point.title}:</span>{" "}
                      <span className="text-muted-foreground">{point.description}</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-8">
                Most businesses don't have internal expertise to navigate these complexities. Your marketing team understands brand, your operations team understands functionality, but who understands production realities?
              </p>
              
              <div className="bg-muted/50 p-6 rounded-xl border border-border mt-6">
                <p className="font-semibold text-foreground mb-3">That gap is expensive. A single failed packaging project can cost:</p>
                <ul className="space-y-2 list-none pl-0">
                  <li className="flex items-center gap-3 text-foreground">
                    <span className="w-2 h-2 rounded-full bg-destructive" />
                    £20-50k in wasted inventory
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <span className="w-2 h-2 rounded-full bg-destructive" />
                    3-6 months of delays
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <span className="w-2 h-2 rounded-full bg-destructive" />
                    Brand reputation damage
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <span className="w-2 h-2 rounded-full bg-destructive" />
                    Emergency procurement at inflated prices
                  </li>
                </ul>
              </div>

              <p className="font-medium text-foreground mt-6">
                You need someone who's been on the factory floor and understands what actually works in production—not just what looks good in design comps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-16 bg-muted/50 md:py-[30px]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            End-to-End Packaging Development Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <solution.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{solution.title}</h3>
                  <p className="text-muted-foreground mb-4">{solution.description}</p>
                  <ul className="space-y-2 mb-4">
                    {solution.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-medium text-primary">The result: {solution.result}</p>
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

      {/* Proof Section - Hawkins Diner Case Study */}
      <CaseStudyTile caseStudyId="Hawkins-Diner" />

      {/* FAQ Section */}
      <section className="py-16 bg-background md:py-[40px]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline">
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
      <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10 md:py-[40px]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready for Flawless Packaging Execution?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's discuss your packaging project and how expert factory oversight can eliminate production risks while optimizing costs.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Schedule Free Consultation</Link>
          </Button>
        </div>
      </section>

      {/* Navigation to Other Services */}
      {prevService && nextService && (
        <section className="py-12 bg-background border-t border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <Link 
                to={`/services/${prevService.id}`} 
                className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <div className="text-right sm:text-left">
                  <p className="text-xs uppercase tracking-wider">Previous Service</p>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">{prevService.title}</p>
                </div>
              </Link>
              <Link 
                to={`/services/${nextService.id}`} 
                className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="text-left sm:text-right">
                  <p className="text-xs uppercase tracking-wider">Next Service</p>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">{nextService.title}</p>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default PackagingDevelopmentPage;
