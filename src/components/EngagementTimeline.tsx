import { Clock, Check, ArrowDown } from "lucide-react";

const phases = [
  {
    number: 1,
    title: "Opportunity Assessment",
    duration: "2 Weeks",
    description: "Desktop analysis of your current packaging spend to validate savings potential and feasibility. You receive a detailed report with conservative savings estimates and a clear Go/No-Go recommendation.",
    gate: "Decision Point: Is Phase 2 worth pursuing?",
    borderColor: "#0066CC", // Primary Blue
  },
  {
    number: 2,
    title: "Business Case Development",
    duration: "3-4 Weeks",
    description: "Comprehensive supplier engagement, 3PL negotiations, and detailed implementation planning. You receive actual supplier quotes, firm 3PL rates, and a complete business case presented to your leadership team.",
    gate: "Decision Point: Do we approve implementation?",
    borderColor: "#0080B3", // Blue-Teal
  },
  {
    number: 3,
    title: "Implementation",
    duration: "2-4 Months",
    description: "Full execution: supplier contracts, 3PL onboarding, quality verification, delivery coordination, and team training. We manage the entire process while your team maintains final approval authority.",
    gate: "Outcome: Live with new suppliers, delivering verified savings.",
    borderColor: "#0D9488", // Teal-Green
  },
];

const performanceFee = {
  title: "Performance Fee",
  description: "Our fee structure is performance-based, meaning the majority of our compensation is tied directly to verified savings you achieve. We only succeed when you succeed.",
  note: "Investment details and ROI projections are provided after initial consultation.",
  borderColor: "#10B981", // Accent Green
};

export const EngagementTimeline = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
            Our Three-Phase <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Approach</span>
          </h2>
          <p className="text-muted-foreground">
            We structure engagements with clear decision gates at each stage. You're in control, validating opportunity and approach before committing further.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto space-y-0">
          {phases.map((phase, index) => (
            <div key={phase.number} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Phase Card */}
              <div
                className="bg-card rounded-2xl border-l-4 p-6 md:p-8 shadow-soft border border-border/50"
                style={{ borderLeftColor: phase.borderColor }}
              >
                {/* Phase Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg shrink-0"
                    style={{ backgroundColor: phase.borderColor }}
                  >
                    {phase.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-foreground uppercase tracking-wide">
                      {phase.title}
                    </h3>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                    {phase.duration}
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {phase.description}
                </p>

                {/* Decision Gate / Outcome */}
                <div className="flex items-start gap-2 pt-4 border-t border-border/50">
                  <Check 
                    className="w-5 h-5 shrink-0 mt-0.5" 
                    style={{ color: phase.borderColor }}
                  />
                  <span className="text-foreground font-medium">
                    {phase.gate}
                  </span>
                </div>
              </div>

              {/* Arrow Connector */}
              <div className="flex justify-center py-3">
                <ArrowDown className="w-6 h-6 text-muted-foreground/50" />
              </div>
            </div>
          ))}

          {/* Performance Fee Section */}
          <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div
              className="bg-card rounded-2xl border-l-4 p-6 md:p-8 shadow-soft border border-border/50"
              style={{ borderLeftColor: performanceFee.borderColor }}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg shrink-0"
                  style={{ backgroundColor: performanceFee.borderColor }}
                >
                  <Check className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-bold text-foreground uppercase tracking-wide">
                    {performanceFee.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {performanceFee.description}
              </p>

              {/* Note */}
              <p className="text-sm text-muted-foreground/80 italic">
                {performanceFee.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
