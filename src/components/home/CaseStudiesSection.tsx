import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface KeyMetric {
  label: string;
  value: string;
  icon?: string;
}

export function CaseStudiesSection({ className }: { className?: string }) {
  const { data: caseStudies, isLoading } = useQuery({
    queryKey: ["homepage-case-studies"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("case_studies")
        .select("id, client, industry, challenge, image, key_metrics, updated_at")
        .eq("published", true)
        .order("display_order")
        .limit(3);

      if (error) throw error;
      return data;
    },
  });

  const parseMetrics = (metrics: unknown): KeyMetric[] => {
    if (Array.isArray(metrics)) {
      return metrics as KeyMetric[];
    }
    return [];
  };

  const truncateText = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
  };

  return (
    <section className={`section-padding bg-muted/30 ${className || ""}`}>
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Client Case Studies
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Real Results from Real Partnerships
          </h2>
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card rounded-2xl overflow-hidden border border-border">
                <Skeleton className="aspect-video w-full" />
                <div className="p-6 space-y-4">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-6 w-40" />
                  <Skeleton className="h-16 w-full" />
                  <Skeleton className="h-8 w-32" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies?.map((caseStudy) => {
              const metrics = parseMetrics(caseStudy.key_metrics);
              const primaryMetric = metrics[0];
              const imageUrl = caseStudy.image
                ? `${caseStudy.image}?v=${caseStudy.updated_at}`
                : null;

              return (
                <Link
                  key={caseStudy.id}
                  to={`/case-studies/${caseStudy.id}`}
                  className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border shadow-soft hover:shadow-elevated transition-all duration-300"
                >
                  {/* Image */}
                  <div className="aspect-video overflow-hidden bg-muted">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={`${caseStudy.client} case study`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                        <span className="text-4xl font-bold text-primary/30">
                          {caseStudy.client.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {caseStudy.industry}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mt-1 mb-2">
                      {caseStudy.client}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-grow">
                      {truncateText(caseStudy.challenge, 85)}
                    </p>

                    {/* Metric and Link - pinned to bottom */}
                    <div className="mt-auto">
                      {primaryMetric && (
                        <div className="flex items-baseline gap-2 mb-4">
                          <span className="text-2xl font-bold text-primary">
                            {primaryMetric.value}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {primaryMetric.label}
                          </span>
                        </div>
                      )}

                      <span className="text-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read Case Study
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
