import { Linkedin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function FounderSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide max-w-3xl">
        {/* Header with LinkedIn-style photo */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-border overflow-hidden flex-shrink-0 flex items-center justify-center">
            <span className="text-2xl">👤</span>
          </div>
          <div>
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">
              Meet Your Consultant
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Hi, I'm [Your Name]
            </h2>
          </div>
        </div>

        {/* Bio */}
        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
          <p>
            With over 15 years in packaging procurement, I've seen firsthand how the right 
            sourcing strategy can transform a business. That's why I founded Circular Sourcing — 
            to bring enterprise-level procurement expertise to businesses of all sizes.
          </p>
          <p>
            I believe in building genuine partnerships, not just client relationships. When we 
            work together, you get my direct involvement on every project — no handoffs, no 
            junior consultants, just decades of experience focused on your success.
          </p>
        </div>

        {/* Credentials */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-card p-4 rounded-xl border border-border">
            <div className="text-2xl font-bold text-primary">15+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="bg-card p-4 rounded-xl border border-border">
            <div className="text-2xl font-bold text-accent">£2M+</div>
            <div className="text-sm text-muted-foreground">Client Savings</div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-4 items-center">
          <Button asChild variant="default" size="lg">
            <Link to="/contact">
              Let's Talk
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span className="font-medium">Connect on LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
