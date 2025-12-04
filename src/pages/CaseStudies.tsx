import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingDown, Clock, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    id: "fmcg-manufacturer",
    client: "Major FMCG Manufacturer",
    industry: "Food & Beverage",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=60",
    challenge: "A leading food manufacturer was experiencing rising packaging costs and struggling with supplier reliability issues that were impacting production schedules.",
    solution: "We conducted a comprehensive packaging audit, renegotiated contracts with key suppliers, and implemented a dual-sourcing strategy to reduce risk and improve competitive positioning.",
    results: [
      { label: "Cost Savings", value: "£310K", icon: TrendingDown },
      { label: "Timeline", value: "6 months", icon: Clock },
      { label: "Suppliers Optimized", value: "12", icon: Building2 },
    ],
    testimonial: "PackProConsult transformed our packaging procurement. The savings exceeded our expectations and the new supplier relationships are much stronger.",
  },
  {
    id: "retail-chain",
    client: "National Retail Chain",
    industry: "Retail",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=60",
    challenge: "A major UK retailer needed to achieve EPR compliance while reducing their environmental impact and managing costs across 200+ product lines.",
    solution: "We developed a comprehensive EPR compliance strategy, redesigned packaging specifications for key product lines, and established new supplier partnerships focused on sustainable materials.",
    results: [
      { label: "Cost Savings", value: "£185K", icon: TrendingDown },
      { label: "Timeline", value: "9 months", icon: Clock },
      { label: "SKUs Optimized", value: "200+", icon: Building2 },
    ],
    testimonial: "Their expertise in EPR compliance was invaluable. We're now fully compliant and have actually reduced costs in the process.",
  },
  {
    id: "pharmaceutical",
    client: "Pharmaceutical Company",
    industry: "Healthcare",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=60",
    challenge: "A pharmaceutical company faced supply chain disruptions and needed to diversify their packaging supplier base while maintaining strict quality standards.",
    solution: "We conducted supplier qualification assessments, developed a risk-weighted supplier portfolio, and implemented a robust quality management system for packaging procurement.",
    results: [
      { label: "Cost Savings", value: "£220K", icon: TrendingDown },
      { label: "Timeline", value: "12 months", icon: Clock },
      { label: "New Suppliers", value: "8", icon: Building2 },
    ],
    testimonial: "The supply chain transformation has made our business much more resilient. We can now respond quickly to demand changes without quality concerns.",
  },
];

const CaseStudies = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-section-primary via-background to-section-accent relative overflow-hidden">
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
      <section className="section-padding bg-background">
        <div className="container-narrow space-y-16">
          {caseStudies.map((study, index) => (
            <article
              key={study.id}
              className="group bg-card rounded-2xl border border-border/50 shadow-soft overflow-hidden animate-fade-up hover:shadow-elevated transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="h-64 lg:h-auto relative overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.client}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
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
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {study.results.map((result) => (
                        <div key={result.label} className="text-center p-3 rounded-lg bg-section-primary">
                          <result.icon className="w-5 h-5 text-accent mx-auto mb-1" />
                          <div className="text-xl font-heading font-bold text-foreground">
                            {result.value}
                          </div>
                          <div className="text-xs text-muted-foreground">{result.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <blockquote className="border-l-4 border-gradient-to-b border-primary pl-4 italic text-muted-foreground text-sm bg-section-primary/50 p-3 rounded-r-lg">
                      "{study.testimonial}"
                    </blockquote>
                  </div>
                </div>
              </div>
            </article>
          ))}
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
    </Layout>
  );
};

export default CaseStudies;
