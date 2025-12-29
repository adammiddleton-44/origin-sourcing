import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingDown, Percent, Clock, Package, Leaf, Award, DollarSign, Users, Target, CheckCircle, Truck, BarChart3, Shield, Zap, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { usePageSEO } from "@/hooks/usePageSEO";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { LoadingSpinner } from "@/components/LoadingSpinner";

// Icon mapping for dynamic icon rendering
const iconMap: Record<string, LucideIcon> = {
  TrendingDown,
  Percent,
  Clock,
  Package,
  Leaf,
  Award,
  DollarSign,
  Users,
  Target,
  CheckCircle,
  Truck,
  BarChart3,
  Shield,
  Zap,
  ArrowRight
};
interface KeyMetric {
  icon: string;
  value: string;
  label: string;
}
const CaseStudies = () => {
  const seo = usePageSEO("/case-studies", {
    fallbackTitle: "Client Success Stories",
    fallbackDescription: "Discover how Origin Sourcing has helped clients achieve significant cost savings and operational improvements."
  });
  const {
    data: caseStudies,
    isLoading
  } = useQuery({
    queryKey: ['case-studies-list'],
    queryFn: async () => {
      const {
        data,
        error
      } = await supabase.from('case_studies').select('*').eq('published', true).order('display_order', {
        ascending: true
      });
      if (error) throw error;
      return data;
    }
  });
  return <Layout>
      <SEO title={seo.title} description={seo.description} canonical="/case-studies" ogImage={seo.ogImage} noindex={seo.noindex} />
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-section-primary via-background to-section-accent relative overflow-hidden py-[60px]">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container-narrow relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Case <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Studies</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Real results for real businesses. See how we've helped UK companies transform their packaging operations and achieve significant cost savings.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-background py-[20px]">
        <div className="container-narrow space-y-16">
          {isLoading ? <div className="flex justify-center py-12">
              <LoadingSpinner />
            </div> : caseStudies && caseStudies.length > 0 ? caseStudies.map((study, index) => {
          const metrics = study.key_metrics as unknown as KeyMetric[] || [];
          return <article key={study.id} className="group bg-card rounded-2xl border border-border/50 shadow-soft overflow-hidden animate-fade-up hover:shadow-elevated transition-all duration-300" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Image */}
                    <div className="h-64 lg:h-auto relative overflow-hidden">
                      <img src={study.image || '/placeholder.svg'} alt={study.client} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-10 relative">
                      {/* Accent gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="relative">
                        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
                          {study.industry}
                        </div>
                        <h2 className="text-2xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                          {study.client}
                        </h2>

                        <div className="space-y-4 mb-6">
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">Challenge</h3>
                            <p className="text-muted-foreground text-sm">{study.challenge}</p>
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">Solution</h3>
                            <p className="text-muted-foreground text-sm">{study.solution}</p>
                          </div>
                        </div>

                        {/* Results */}
                        {metrics.length > 0 && <div className="grid grid-cols-3 gap-4 mb-6">
                            {metrics.slice(0, 3).map(metric => {
                      const IconComponent = iconMap[metric.icon] || Package;
                      return <div key={metric.label} className="text-center p-3 rounded-lg bg-section-primary">
                                  <IconComponent className="w-5 h-5 text-accent mx-auto mb-1" />
                                  <div className="text-xl font-heading font-bold text-foreground">
                                    {metric.value}
                                  </div>
                                  <div className="text-xs text-muted-foreground">{metric.label}</div>
                                </div>;
                    })}
                          </div>}

                        {/* Testimonial */}
                        {study.testimonial && <blockquote className="border-l-4 border-gradient-to-b border-primary pl-4 italic text-muted-foreground text-sm bg-section-primary/50 p-3 rounded-r-lg mb-6">
                            "{study.testimonial}"
                          </blockquote>}

                        {/* Read More Link */}
                        <Link to={`/case-studies/${study.id}`} className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                          Read Full Case Study
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>;
        }) : <div className="text-center py-12 text-muted-foreground">
              No case studies available at this time.
            </div>}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-section-dark relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/25 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container-narrow text-center relative">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-card mb-4">
            Ready to Write Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Success Story</span>?
          </h2>
          <p className="text-card/70 mb-8 max-w-2xl mx-auto">
            Join these businesses and discover how much you could save with expert packaging procurement consultancy.
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
export default CaseStudies;