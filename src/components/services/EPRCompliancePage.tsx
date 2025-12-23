import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, FileText, Shield, BarChart3, ClipboardCheck, Scale, Building, Search, Settings, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

interface EPRCompliancePageProps {
  prevService: {
    id: string;
    title: string;
  } | null;
  nextService: {
    id: string;
    title: string;
  } | null;
}

const EPRCompliancePage = ({
  prevService,
  nextService
}: EPRCompliancePageProps) => {
  const benefits = [{
    icon: Shield,
    title: "Full Regulatory Compliance",
    description: "Complete adherence to UK EPR regulations with expert guidance through complex requirements"
  }, {
    icon: Scale,
    title: "Avoid Penalties & Fines",
    description: "Proactive compliance management that prevents costly regulatory penalties"
  }, {
    icon: BarChart3,
    title: "Optimized Compliance Costs",
    description: "Strategic approach to minimize compliance expenditure while maintaining full coverage"
  }, {
    icon: ClipboardCheck,
    title: "Future-Proofed Strategy",
    description: "Stay ahead of evolving regulations with forward-looking compliance planning"
  }];

  const solutions = [{
    icon: FileText,
    title: "Regulatory Navigation",
    description: "EPR regulations are complex and constantly evolving. I provide expert guidance through the regulatory landscape, ensuring you understand your obligations and meet all requirements without the confusion of interpreting legislation yourself."
  }, {
    icon: Search,
    title: "Data Collection & Reporting",
    description: "Accurate packaging data is the foundation of EPR compliance. I establish robust data collection processes and handle all reporting requirements, ensuring your submissions are accurate, timely, and audit-ready."
  }, {
    icon: Building,
    title: "Scheme Selection & Management",
    description: "Choosing the right Producer Responsibility Scheme can significantly impact your costs. I evaluate all options, select the optimal scheme for your business, and manage the ongoing relationship to maximize value."
  }];

  const whatsIncluded = [{
    icon: ClipboardCheck,
    title: "Regulatory Requirement Analysis",
    items: ["UK Packaging EPR assessment", "Obligation threshold analysis", "Material category classification", "Reporting deadline management"]
  }, {
    icon: FileText,
    title: "Packaging Data Collection",
    items: ["Data gathering methodology", "Supplier data coordination", "Weight and material verification", "Historical data reconstruction"]
  }, {
    icon: BarChart3,
    title: "Compliance Reporting",
    items: ["Annual submission preparation", "Quarterly reporting (if applicable)", "Data accuracy verification", "Audit trail maintenance"]
  }, {
    icon: Building,
    title: "Scheme Management",
    items: ["Scheme evaluation and selection", "Registration and enrollment", "Fee optimization", "Ongoing scheme liaison"]
  }, {
    icon: Settings,
    title: "Ongoing Compliance Support",
    items: ["Regulatory update monitoring", "Process improvement recommendations", "Annual compliance review", "Staff training and handover"]
  }];

  const processSteps = [{
    step: "01",
    title: "Assessment",
    description: "Evaluate your current compliance status, identify gaps, and determine your exact obligations under UK EPR regulations."
  }, {
    step: "02",
    title: "Data Gathering",
    description: "Collect and organize all required packaging data, working with your suppliers and internal teams to ensure accuracy."
  }, {
    step: "03",
    title: "Scheme Selection",
    description: "Identify and enroll in the most appropriate Producer Responsibility Scheme based on your specific requirements and cost optimization."
  }, {
    step: "04",
    title: "Ongoing Compliance",
    description: "Manage reporting cycles, monitor regulatory changes, and ensure continued compliance as requirements evolve."
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
                EPR Compliance Made Simple
              </h1>
              <p className="text-xl text-primary font-medium">
                Navigate Extended Producer Responsibility with Confidence
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Extended Producer Responsibility regulations are becoming increasingly complex. I help multi-site food operators navigate these requirements efficiently, ensuring full compliance while minimizing costs and administrative burden.
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
              The EPR Challenge for Food Operators
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                UK Extended Producer Responsibility regulations require businesses to take responsibility for the packaging they place on the market. For multi-site food operators, this creates significant complexity.
              </p>
              <p>
                The regulations are detailed, the data requirements are extensive, and the penalties for non-compliance are substantial. Most operators don't have the internal expertise to navigate this landscape efficiently.
              </p>
              <p>
                Common challenges include:
              </p>
              <ul className="space-y-3 list-none pl-0">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Understanding which obligations apply to your business</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Collecting accurate packaging data across multiple locations and suppliers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Choosing the right compliance scheme without overpaying</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Keeping up with evolving regulations and reporting requirements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-16 bg-muted/50 md:py-[30px]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Expert EPR Compliance Management
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
                <ClipboardCheck className="w-24 h-24 text-accent/40" />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Compliance Without Complexity
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I've helped numerous multi-site food operators achieve and maintain EPR compliance, typically reducing their compliance costs while ensuring complete regulatory adherence.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My approach focuses on building robust, sustainable compliance processes that your team can manage going forward, with ongoing support as regulations evolve.
              </p>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Discuss Your Compliance Needs</Link>
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
            Ready to Simplify Your EPR Compliance?
          </h2>
          <p className="text-xl text-card/80 max-w-2xl mx-auto mb-8">
            Let's discuss how I can help you navigate EPR requirements efficiently and cost-effectively.
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

export default EPRCompliancePage;
