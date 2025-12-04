import { Link } from "react-router-dom";
import { ArrowRight, TrendingDown, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-card to-background">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative">
        <div className="py-20 md:py-32 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-up">
            <Shield className="w-4 h-4" />
            Trusted by leading UK brands
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Transform Your{" "}
            <span className="text-primary">Packaging Supply Chain</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Achieve 20-35% cost savings with expert procurement strategy. We help UK businesses optimize packaging spend, ensure compliance, and build resilient supply chains.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="hero-outline" size="xl">
              <Link to="/case-studies">View Case Studies</Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-muted-foreground animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2">
              <TrendingDown className="w-5 h-5 text-accent" />
              <span className="text-sm">Proven cost reductions</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm">EPR compliant solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-accent" />
              <span className="text-sm">End-to-end support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
