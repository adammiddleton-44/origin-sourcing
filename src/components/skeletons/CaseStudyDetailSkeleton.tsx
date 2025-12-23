import { Layout } from "@/components/layout/Layout";
import { Skeleton } from "@/components/ui/skeleton";

export function CaseStudyDetailSkeleton() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-section-primary via-background to-section-accent relative overflow-hidden py-[10px]">
        <div className="container-narrow">
          <Skeleton className="h-5 w-40 mb-8" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Skeleton className="h-6 w-24 rounded-full mb-4" />
              <Skeleton className="h-12 w-3/4 mb-4" />
              <Skeleton className="h-8 w-full mb-2" />
              <Skeleton className="h-20 w-full mb-8" />
              
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="text-center p-4 rounded-xl bg-card border border-border/50">
                    <Skeleton className="w-6 h-6 mx-auto mb-2 rounded" />
                    <Skeleton className="h-8 w-16 mx-auto mb-2" />
                    <Skeleton className="h-3 w-12 mx-auto" />
                  </div>
                ))}
              </div>
            </div>
            
            <Skeleton className="w-full h-80 lg:h-96 rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="section-padding bg-background py-[10px]">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto space-y-4">
            <Skeleton className="h-10 w-48 mb-8" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-padding bg-section-primary py-[30px]">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto space-y-6">
            <Skeleton className="h-10 w-48 mb-8" />
            {[1, 2, 3].map(i => (
              <div key={i} className="flex gap-4">
                <Skeleton className="w-6 h-6 flex-shrink-0 rounded" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <Skeleton className="h-10 w-48 mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="bg-card rounded-xl p-6 border border-border/50 text-center">
                <Skeleton className="w-10 h-10 mx-auto mb-4 rounded" />
                <Skeleton className="h-8 w-20 mx-auto mb-2" />
                <Skeleton className="h-4 w-24 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
