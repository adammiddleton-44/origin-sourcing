import { Link } from "react-router-dom";
import { ArrowRight, TrendingDown, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-section-primary via-background to-section-accent">
      {/* Supply chain SVG pattern background */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="supply-chain-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              {/* Package box */}
              <g transform="translate(10, 10)" stroke="currentColor" fill="none" strokeWidth="1.5">
                <rect x="0" y="4" width="20" height="16" rx="1" />
                <path d="M0 10h20M10 4v16M5 0l5 4 5-4" />
              </g>
              {/* Circular arrows */}
              <g transform="translate(70, 15)" stroke="currentColor" fill="none" strokeWidth="1.5">
                <path d="M12 2a10 10 0 1 0 3.5 19.5" />
                <path d="M12 2l-3-2v4z" fill="currentColor" />
                <path d="M12 22a10 10 0 1 0-3.5-19.5" />
                <path d="M12 22l3 2v-4z" fill="currentColor" />
              </g>
              {/* Network node */}
              <g transform="translate(15, 75)" stroke="currentColor" fill="none" strokeWidth="1.5">
                <circle cx="10" cy="10" r="4" />
                <circle cx="0" cy="0" r="2" />
                <circle cx="20" cy="0" r="2" />
                <circle cx="0" cy="20" r="2" />
                <circle cx="20" cy="20" r="2" />
                <line x1="7" y1="7" x2="2" y2="2" />
                <line x1="13" y1="7" x2="18" y2="2" />
                <line x1="7" y1="13" x2="2" y2="18" />
                <line x1="13" y1="13" x2="18" y2="18" />
              </g>
              {/* Trend line */}
              <g transform="translate(70, 75)" stroke="currentColor" fill="none" strokeWidth="1.5">
                <path d="M0 20 L8 12 L14 16 L24 4" />
                <path d="M18 4h6v6" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#supply-chain-pattern)" />
        </svg>
      </div>

      {/* Decorative corner box element - bottom left */}
      <div className="absolute -bottom-12 -left-12 w-64 h-64 opacity-[0.03]">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full">
          <rect x="15" y="25" width="70" height="50" rx="3" />
          <path d="M15 45h70M50 25v50M30 15l20 10 20-10" />
          <rect x="25" y="35" width="20" height="15" rx="1" opacity="0.5" />
          <rect x="55" y="55" width="20" height="15" rx="1" opacity="0.5" />
        </svg>
      </div>

      {/* Decorative circular element - top right */}
      <div className="absolute -top-16 -right-16 w-80 h-80 opacity-[0.03]">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full">
          <circle cx="50" cy="50" r="30" />
          <circle cx="50" cy="50" r="20" strokeDasharray="4 4" />
          <path d="M50 20a30 30 0 0 1 21 51" />
          <path d="M65 25l6-5-2 8" fill="currentColor" />
          <path d="M50 80a30 30 0 0 1-21-51" />
          <path d="M35 75l-6 5 2-8" fill="currentColor" />
        </svg>
      </div>

      {/* Background decoration - blurred orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container-narrow relative py-[30px]">
        <div className="py-20 text-center max-w-4xl mx-auto md:py-[50px]">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-up border border-primary/20">
            <Shield className="w-4 h-4" />
            Trusted by leading UK brands
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            Transform Your{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Packaging Supply Chain
            </span>
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Achieve 20-35% cost savings with expert procurement strategy. We help UK businesses optimize packaging spend,
            ensure compliance, and build resilient supply chains.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
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
          <div
            className="mt-16 flex flex-wrap justify-center gap-8 text-muted-foreground animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 border border-border/50">
              <TrendingDown className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Proven cost reductions</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 border border-border/50">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">EPR compliant solutions</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 border border-border/50">
              <Truck className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">End-to-end support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
