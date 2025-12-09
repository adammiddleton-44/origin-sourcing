import { Linkedin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function FounderSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border overflow-hidden shadow-elevated">
              {/* Placeholder for founder photo */}
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">👤</span>
                  </div>
                  <p className="text-sm">Your photo here</p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-primary/5 hidden lg:block" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Meet Your Consultant
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Hi, I'm [Your Name]
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
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
            <div className="mt-8 grid grid-cols-2 gap-4">
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
            <div className="mt-8 flex flex-wrap gap-4 items-center">
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
        </div>
      </div>
    </section>
  );
}
