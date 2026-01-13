import { Clock, Check, ArrowDown } from "lucide-react";

const phases = [
  {
    number: 1,
    title: "Opportunity Assessment",
    duration: "2 Weeks",
    description: "Validate savings potential and feasibility through desktop analysis of your current spend",
    gate: "Decision Gate: Is Phase 2 worth pursuing?",
    borderColor: "#0066CC", // Primary Blue
  },
  {
    number: 2,
    title: "Business Case Development",
    duration: "3-4 Weeks",
    description: "Comprehensive supplier RFQs, 3PL negotiations, and detailed implementation planning",
    gate: "Decision Gate: Approve implementation?",
    borderColor: "#0080B3", // Blue-Teal
  },
  {
    number: 3,
    title: "Implementation",
    duration: "2-4 Months",
    description: "Execute the plan: supplier contracts, 3PL setup, delivery coordination, team training",
    gate: "Outcome: Live with new suppliers, delivering verified savings",
    borderColor: "#0D9488", // Teal-Green
  },
  {
    number: 4,
    title: "Performance Fee",
    duration: "Based on verified Year 1 savings",
    description: "We earn when you save: tiered commission structure ensures strong ROI regardless of outcome",
    gate: "Payment: After savings verification",
    borderColor: "#10B981", // Accent Green
  },
];

export const EngagementTimeline = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
            How We <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-muted-foreground">
            A structured, low-risk approach that delivers results at every stage.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto space-y-0">
          {phases.map((phase, index) => (
            <div key={phase.number} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Phase Card */}
              <div
                className="bg-card rounded-2xl border-l-4 p-6 md:p-8 shadow-soft border border-border/50 border-l-4"
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

              {/* Arrow Connector (except after last item) */}
              {index < phases.length - 1 && (
                <div className="flex justify-center py-3">
                  <ArrowDown className="w-6 h-6 text-muted-foreground/50" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
