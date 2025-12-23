import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Target, Lightbulb, Clock, ClipboardList, FileText, Users, BarChart3, Settings, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

interface PackagingAuditPageProps {
  prevService: {
    id: string;
    title: string;
  } | null;
  nextService: {
    id: string;
    title: string;
  } | null;
}

const PackagingAuditPage = ({
  prevService,
  nextService
}: PackagingAuditPageProps) => {
  const benefits = [{
    icon: Target,
    title: "Clear Improvement Priorities",
    description: "Ranked recommendations based on value and ease of implementation for focused action"
  }, {
    icon: Search,
    title: "Independent Perspective",
    description: "Objective assessment free from internal politics or supplier relationships"
  }, {
    icon: Lightbulb,
    title: "Quick Wins Identified",
    description: "Immediate opportunities to capture value while longer-term improvements are planned"
  }, {
    icon: Clock,
    title: "Long-Term Strategy",
    description: "Roadmap for sustained improvement with clear milestones and success metrics"
  }];

  const solutions = [{
    icon: ClipboardList,
    title: "Comprehensive Assessment",
    description: "I examine every aspect of your packaging operations—procurement, suppliers, specifications, logistics, sustainability, and processes. Nothing is assumed; everything is evaluated against best practice standards."
  }, {
    icon: BarChart3,
    title: "Gap Analysis & Benchmarking",
    description: "Your current performance is benchmarked against industry standards and best practices. This reveals exactly where you're underperforming and quantifies the size of each improvement opportunity."
  }, {
    icon: FileText,
    title: "Actionable Recommendations",
    description: "The output isn't just a report—it's a practical roadmap with prioritized recommendations, clear implementation steps, resource requirements, and expected benefits for each initiative."
  }];

  const whatsIncluded = [{
    icon: ClipboardList,
    title: "Current State Assessment",
    items: ["Procurement process review", "Supplier portfolio analysis", "Specification documentation", "Cost structure breakdown"]
  }, {
    icon: BarChart3,
    title: "Performance Benchmarking",
    items: ["Industry comparison", "Best practice assessment", "Efficiency metrics", "Cost benchmarks"]
  }, {
    icon: Target,
    title: "Gap Analysis",
    items: ["Process gap identification", "Capability assessment", "Risk evaluation", "Opportunity quantification"]
  }, {
    icon: FileText,
    title: "Recommendations Report",
    items: ["Prioritized initiatives", "Implementation roadmap", "Resource requirements", "Expected benefits"]
  }, {
    icon: Settings,
    title: "Implementation Support",
    items: ["Quick win execution", "Change management guidance", "Progress monitoring", "Adjustment recommendations"]
  }];

  const processSteps = [{
    step: "01",
    title: "Scope",
    description: "Define audit scope and success criteria, ensuring alignment on what will be examined and what outcomes are expected."
  }, {
    step: "02",
    title: "Investigate",
    description: "Gather data through interviews, site visits, document review, and supplier discussions to build a complete picture."
  }, {
    step: "03",
    title: "Analyze",
    description: "Assess findings against best practices and benchmarks to identify gaps and quantify improvement opportunities."
  }, {
    step: "04",
    title: "Report",
    description: "Deliver actionable recommendations with a prioritized roadmap and implementation guidance."
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
                Comprehensive Packaging Audit
              </h1>
              <p className="text-xl text-primary font-medium">
                Independent Assessment. Clear Roadmap. Prioritized Action.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When you suspect your packaging operations could perform better but aren't sure where to focus, a comprehensive audit provides clarity. I deliver an independent assessment with a prioritized roadmap for improvement.
              </p>
              <Button asChild size="lg" className="mt-4">
                <Link to="/contact">Schedule Free Consultation</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="rounded-2xl shadow-2xl w-full aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                <Search className="w-24 h-24 text-primary/40" />
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
              When to Consider a Packaging Audit
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Most packaging operations evolve organically—practices, suppliers, and specifications that made sense years ago may no longer be optimal. Without an objective assessment, it's difficult to know where improvement efforts should focus.
              </p>
              <p>
                A packaging audit is particularly valuable when:
              </p>
              <ul className="space-y-3 list-none pl-0">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>You suspect you're overpaying but aren't sure where or by how much</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Supplier relationships have become stale or unchallenged</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Your business has grown significantly without a procurement review</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>New leadership wants an independent baseline assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Sustainability or regulatory requirements are creating new pressures</span>
                </li>
              </ul>
              <p className="font-medium text-foreground">
                An objective audit cuts through assumptions and provides the clarity needed for focused action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-16 bg-muted/50 md:py-[30px]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Thorough, Independent Assessment
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
                <ClipboardList className="w-24 h-24 text-primary/40" />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                From Assessment to Action
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A good audit doesn't just identify problems—it provides a clear path to solving them. My approach balances thoroughness with practicality, ensuring recommendations are implementable within your organizational constraints.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Many clients choose to engage me for implementation support following the audit, but the report is designed to be actionable whether implemented internally or with external assistance.
              </p>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Discuss Your Audit Needs</Link>
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
            Ready for Clarity on Your Packaging Operations?
          </h2>
          <p className="text-xl text-card/80 max-w-2xl mx-auto mb-8">
            Let's discuss how a comprehensive audit can provide the insights you need.
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

export default PackagingAuditPage;
