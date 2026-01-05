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

const StatCard = ({ stat }: { stat: typeof stats[0] }) => (
  <div className="relative p-4 lg:p-5 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-300 group overflow-hidden h-full">
    {/* Card accent gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
    
    <div className="relative">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-4 group-hover:from-primary/25 group-hover:to-primary/10 transition-all">
        <stat.icon className="w-5 h-5 text-primary" />
      </div>
      <div className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-1">
        {stat.value}
      </div>
      <div className="text-sm lg:text-base font-semibold text-foreground mb-1">
        {stat.label}
      </div>
      <p className="text-muted-foreground text-xs">
        {stat.description}
      </p>
    </div>
    
    {/* Accent line */}
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
  </div>
);

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
        {/* Desktop: Grid showing all 5 tiles */}
        <div className="hidden lg:grid grid-cols-5 gap-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>

        {/* Mobile/Tablet: Carousel */}
        <div className="lg:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {stats.map((stat) => (
                <CarouselItem key={stat.label} className="pl-4 basis-full md:basis-1/2">
                  <StatCard stat={stat} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
