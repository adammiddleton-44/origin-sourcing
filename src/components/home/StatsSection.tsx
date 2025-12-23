import { TrendingUp, PoundSterling, Award, Users, Globe } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const stats = [
  {
    icon: TrendingUp,
    value: "20-50%",
    label: "Average Cost Savings",
    description: "Delivered across all client engagements",
  },
  {
    icon: PoundSterling,
    value: "£310K",
    label: "Last Project Saving",
    description: "Achieved for a major FMCG brand",
  },
  {
    icon: Award,
    value: "15+",
    label: "Years in Industry",
    description: "Deep packaging procurement expertise",
  },
  {
    icon: Globe,
    value: "10+",
    label: "Countries",
    description: "Network of factories across UK, EU and Asia",
  },
  {
    icon: Users,
    value: "5+",
    label: "Clients Served",
    description: "Across hospitality, food service and retail sectors",
  },
];

export function StatsSection({ className }: { className?: string }) {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <section className={`section-padding bg-section-primary relative overflow-hidden ${className || ""}`}>
      {/* Subtle background accents */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {stats.map((stat, index) => (
              <CarouselItem key={stat.label} className="pl-4 basis-full md:basis-1/3">
                <div
                  className="relative p-8 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-300 group overflow-hidden h-full"
                >
                  {/* Card accent gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-6 group-hover:from-primary/25 group-hover:to-primary/10 transition-all">
                      <stat.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-2">
                      {stat.value}
                    </div>
                    <div className="text-lg font-semibold text-foreground mb-1">
                      {stat.label}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {stat.description}
                    </p>
                  </div>
                  
                  {/* Accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
