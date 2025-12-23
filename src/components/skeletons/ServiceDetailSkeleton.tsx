import { Skeleton } from "@/components/ui/skeleton";
import { Layout } from "@/components/layout/Layout";

export const ServiceDetailSkeleton = () => {
  return (
    <Layout>
      {/* Hero Section Skeleton */}
      <section className="section-padding bg-gradient-to-br from-section-primary via-background to-section-accent relative overflow-hidden py-[30px]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container-narrow relative">
          {/* Breadcrumb skeleton */}
          <div className="mb-8">
            <Skeleton className="h-5 w-32" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Skeleton className="w-14 h-14 rounded-2xl" />
                <Skeleton className="h-12 w-64" />
              </div>
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-6 w-3/4 mb-8" />
              <Skeleton className="h-12 w-40 rounded-lg" />
            </div>
            <div className="hidden lg:block">
              <Skeleton className="rounded-2xl w-full aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section Skeleton */}
      <section className="section-padding bg-section-primary py-[30px]">
        <div className="container-narrow">
          <Skeleton className="h-9 w-48 mx-auto mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="p-6 rounded-xl bg-card border border-border/50 shadow-soft text-center">
                <Skeleton className="w-8 h-8 rounded-full mx-auto mb-3" />
                <Skeleton className="h-5 w-32 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section Skeleton */}
      <section className="section-padding bg-background py-[30px]">
        <div className="container-narrow">
          <Skeleton className="h-9 w-48 mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="p-6 rounded-xl bg-card border border-border/50 shadow-soft">
                <Skeleton className="h-6 w-48 mb-3" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section Skeleton */}
      <section className="section-padding bg-background py-[30px]">
        <div className="container-narrow">
          <Skeleton className="h-9 w-40 mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative p-6 rounded-xl bg-card border border-border/50 shadow-soft">
                <Skeleton className="absolute -top-3 -left-3 w-10 h-10 rounded-full" />
                <Skeleton className="h-5 w-24 mt-4 mb-2" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
