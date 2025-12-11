import { TrendingUp, PoundSterling, Award } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "20-35%",
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
];

export function StatsSection({ className }: { className?: string }) {
  return (
    <section className={`section-padding bg-section-primary relative overflow-hidden ${className || ""}`}>
      {/* Subtle background accents */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="relative p-8 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-300 group animate-fade-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
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
          ))}
        </div>
      </div>
    </section>
  );
}
