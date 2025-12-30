import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface CaseStudyTileProps {
  caseStudyId: string;
}

const CaseStudyTile = ({ caseStudyId }: CaseStudyTileProps) => {
  const { data: caseStudy, isLoading, error } = useQuery({
    queryKey: ['case-study-tile', caseStudyId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('case_studies')
        .select('id, client, industry, challenge, image, key_metrics, updated_at')
        .eq('id', caseStudyId)
        .maybeSingle();

      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <section className="py-16 bg-muted/50 md:py-[40px]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Skeleton className="rounded-2xl w-full aspect-[4/3]" />
            <div className="space-y-4">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-6 w-1/4" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-10 w-40" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !caseStudy) {
    return null;
  }

  // Parse key_metrics if it's an array
  const metrics = Array.isArray(caseStudy.key_metrics) ? caseStudy.key_metrics : [];
  const primaryMetric = metrics.length > 0 ? metrics[0] : null;

  // Build image URL with cache busting
  const imageUrl = caseStudy.image 
    ? `${caseStudy.image}?v=${new Date(caseStudy.updated_at).getTime()}`
    : null;

  return (
    <section className="py-16 bg-muted/50 md:py-[40px]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            {imageUrl ? (
              <img 
                src={imageUrl} 
                alt={`${caseStudy.client} case study`} 
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]" 
              />
            ) : (
              <div className="rounded-2xl shadow-2xl w-full aspect-[4/3] bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center">
                <span className="text-4xl font-bold text-accent/40">
                  {caseStudy.client.charAt(0)}
                </span>
              </div>
            )}
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Real Results: {caseStudy.client}
            </h2>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
              {caseStudy.industry}
            </span>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {caseStudy.challenge}
            </p>
            {primaryMetric && typeof primaryMetric === 'object' && 'value' in primaryMetric && (
              <div className="flex items-center gap-4 py-4 border-y border-border">
                <div className="text-3xl font-bold text-primary">
                  {(primaryMetric as { value: string }).value}
                </div>
                <div className="text-muted-foreground">
                  {(primaryMetric as { label: string }).label}
                </div>
              </div>
            )}
            <Button asChild variant="outline" size="lg">
              <Link to={`/case-studies/${caseStudy.id}`}>Read Full Case Study</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyTile;
