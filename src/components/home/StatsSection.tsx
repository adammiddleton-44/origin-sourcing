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

export function StatsSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="relative p-8 rounded-2xl bg-background border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
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
              
              {/* Accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
