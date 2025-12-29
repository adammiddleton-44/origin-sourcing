import { useParams, Link, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Quote, CheckCircle } from "lucide-react";
import { TrendingDown, Clock, Building2, Package, Leaf, Shield, LucideIcon } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { usePageSEO } from "@/hooks/usePageSEO";
import { LoadingSpinner } from "@/components/LoadingSpinner";
type KeyMetric = {
  label: string;
  value: string;
  icon: string;
  context?: string;
};
type TimelinePhase = {
  title: string;
  duration: string;
  description: string;
};
type ClientQuote = {
  quote: string;
  author: string;
  role: string;
  company: string;
};
type SolutionSection = {
  title: string;
  items: string[];
};
type StructuredSolution = {
  intro: string;
  sections: SolutionSection[];
};
type CaseStudy = {
  id: string;
  client: string;
  industry: string;
  image: string | null;
  challenge: string;
  solution: string;
  testimonial: string | null;
  full_challenge: string[];
  full_solution: string[] | null;
  structured_solution: StructuredSolution | null;
  key_metrics: KeyMetric[];
  timeline: TimelinePhase[];
  client_quote: ClientQuote | null;
  related_services: string[];
  display_order: number;
  published: boolean;
};
const iconMap: Record<string, LucideIcon> = {
  TrendingDown,
  Clock,
  Building2,
  Package,
  Leaf,
  Shield
};
const CaseStudyDetail = () => {
  const {
    caseId
  } = useParams<{
    caseId: string;
  }>();
  const {
    data: caseStudies,
    isLoading
  } = useQuery({
    queryKey: ['case-studies'],
    queryFn: async () => {
      const {
        data,
        error
      } = await supabase.from('case_studies').select('*').eq('published', true).order('display_order', {
        ascending: true
      });
      if (error) throw error;
      return data as unknown as CaseStudy[];
    }
  });
  const caseStudy = caseStudies?.find(cs => cs.id === caseId);
  const seo = usePageSEO(`/case-studies/${caseId}`, {
    fallbackTitle: caseStudy ? `${caseStudy.client} Case Study` : "Case Study",
    fallbackDescription: caseStudy?.challenge || "Discover how Origin Sourcing helped transform packaging procurement."
  });
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (!caseStudy) {
    return <Navigate to="/case-studies" replace />;
  }

  // Find prev/next case studies
  const currentIndex = caseStudies?.findIndex(cs => cs.id === caseId) || 0;
  const prevCase = currentIndex > 0 ? caseStudies?.[currentIndex - 1] : null;
  const nextCase = caseStudies && currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  // Helper to get icon component
  const getIcon = (iconName: string) => iconMap[iconName] || TrendingDown;
  return <Layout>
      <SEO title={seo.title} description={seo.description} canonical={`/case-studies/${caseId}`} ogImage={seo.ogImage} noindex={seo.noindex} />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-section-primary via-background to-section-accent relative overflow-hidden py-[10px]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container-narrow relative">
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 py-[20px]">
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
                {caseStudy.industry}
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                {caseStudy.client}
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                {caseStudy.challenge}
              </p>

              {/* Key Results Preview */}
              <div className="grid grid-cols-3 gap-4">
                {caseStudy.key_metrics.slice(0, 3).map(metric => {
                const MetricIcon = getIcon(metric.icon);
                return <div key={metric.label} className="text-center p-4 rounded-xl bg-card border border-border/50">
                      <MetricIcon className="w-6 h-6 text-accent mx-auto mb-2" />
                      <div className="text-2xl font-heading font-bold text-foreground">
                        {metric.value}
                      </div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>;
              })}
              </div>
            </div>

            <div className="relative">
              <img src={caseStudy.image || 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=60'} alt={caseStudy.client} className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-elevated" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="section-padding bg-background py-[10px]">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
              The <span className="text-primary">Challenge</span>
            </h2>
            <div className="space-y-4">
              {caseStudy.full_challenge.map((paragraph, index) => <p key={index} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>)}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-padding bg-section-primary py-[30px]">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
              The <span className="text-accent">Solution</span>
            </h2>

            {caseStudy.structured_solution ? <div className="space-y-8">
                <p className="text-muted-foreground leading-relaxed">
                  {caseStudy.structured_solution.intro}
                </p>

                {caseStudy.structured_solution.sections.map((section, index) => <div key={index} className="space-y-4">
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => <li key={itemIndex} className="flex gap-3">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>)}
                    </ul>
                  </div>)}
              </div> : caseStudy.full_solution ? <div className="space-y-4">
                {caseStudy.full_solution.map((paragraph, index) => <div key={index} className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  </div>)}
              </div> : null}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding bg-background py-[30px]">
        <div className="container-narrow">
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">
            Key <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Results</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudy.key_metrics.map(metric => {
            const MetricIcon = getIcon(metric.icon);
            return <div key={metric.label} className="bg-card rounded-xl p-6 border border-border/50 shadow-soft hover:shadow-elevated transition-all text-center">
                  <MetricIcon className="w-10 h-10 text-accent mx-auto mb-4" />
                  <div className="text-3xl font-heading font-bold text-foreground mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm font-medium text-foreground mb-1">
                    {metric.label}
                  </div>
                  {metric.context && <div className="text-xs text-muted-foreground">
                      {metric.context}
                    </div>}
                </div>;
          })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-section-accent">
        <div className="container-narrow">
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">
            Project <span className="text-primary">Timeline</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {caseStudy.timeline.map((phase, index) => <div key={phase.title} className="flex gap-6 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    {index < caseStudy.timeline.length - 1 && <div className="w-0.5 h-16 bg-border mt-2" />}
                  </div>
                  <div className="flex-1 pb-6">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-lg font-heading font-bold text-foreground">
                        {phase.title}
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-sm">
                        {phase.duration}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{phase.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {caseStudy.client_quote && <section className="section-padding bg-section-dark relative overflow-hidden py-[30px]">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/15 rounded-full blur-3xl" />
          </div>

          <div className="container-narrow relative">
            <div className="max-w-3xl mx-auto text-center">
              <Quote className="w-12 h-12 text-primary/50 mx-auto mb-6" />
              <blockquote className="text-xl md:text-2xl text-card/90 italic leading-relaxed mb-8">
                "{caseStudy.client_quote.quote}"
              </blockquote>
              <div>
                <div className="font-heading font-bold text-card">
                  {caseStudy.client_quote.author}
                </div>
                <div className="text-card/70 text-sm">
                  {caseStudy.client_quote.role}, {caseStudy.client_quote.company}
                </div>
              </div>
            </div>
          </div>
        </section>}

      {/* Navigation */}
      <section className="section-padding bg-background border-t border-border/50 py-[30px]">
        <div className="container-narrow">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {prevCase ? <Link to={`/case-studies/${prevCase.id}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>
                  <span className="text-xs block">Previous</span>
                  <span className="font-medium">{prevCase.client}</span>
                </span>
              </Link> : <div />}

            {nextCase ? <Link to={`/case-studies/${nextCase.id}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group text-right">
                <span>
                  <span className="text-xs block">Next</span>
                  <span className="font-medium">{nextCase.client}</span>
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link> : <div />}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-section-primary py-[30px]">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Ready to Achieve Similar <span className="text-primary">Results</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your packaging procurement and deliver measurable savings for your business.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>;
};
export default CaseStudyDetail;