import { Link } from "react-router-dom";
import { ArrowRight, Handshake, BadgePercent, Truck, Shield, Repeat } from "lucide-react";
import { Button } from "@/components/ui/button";
export function HeroSection() {
  return <section className="relative overflow-hidden bg-gradient-to-br from-section-primary via-background to-section-accent">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
      backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
      backgroundSize: '40px 40px'
    }} />

      <div className="container-narrow relative py-[30px]">
        <div className="text-center max-w-4xl mx-auto py-[10px] md:py-[10px]">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-up border border-primary/20">
            <Shield className="w-4 h-4" />
            Trusted by leading UK brands
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-4 animate-fade-up" style={{
          animationDelay: "0.1s"
        }}>
            The Packaging{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Sourcing Consultancy</span>
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-semibold mb-6 animate-fade-up bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient-shift bg-clip-text text-transparent" style={{
          animationDelay: "0.15s"
        }}>
            Smarter Purchasing for Food Service, Retail and FMCG Brands
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-up" style={{
          animationDelay: "0.25s"
        }}>With 10 years inside the packaging industry, we match the supplier or manufacturer for your business. Whether that's optimising a single supplier relationship or building a direct purchasing supply chain from scratch.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{
          animationDelay: "0.3s"
        }}>
            <Button asChild variant="hero" size="xl">
              <a href="https://app.apollo.io/#/meet/adam_middleton_851/30-min" target="_blank" rel="noopener noreferrer">
                Book a Call
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button asChild variant="hero-outline" size="xl">
              <Link to="/case-studies">View Case Studies</Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap md:flex-nowrap justify-center gap-3 lg:gap-4 text-muted-foreground animate-fade-up" style={{
          animationDelay: "0.4s"
        }}>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/80 border border-border/50 whitespace-nowrap shrink-0">
              <Handshake className="w-4 h-4 text-accent" />
              <span className="text-xs md:text-sm font-medium">Direct manufacturer relationships</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/80 border border-border/50 whitespace-nowrap shrink-0">
              <Repeat className="w-4 h-4 text-accent" />
              <span className="text-xs md:text-sm font-medium">Supplier transitions</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/80 border border-border/50 whitespace-nowrap shrink-0">
              <BadgePercent className="w-4 h-4 text-accent" />
              <span className="text-xs md:text-sm font-medium">Performance-based pricing</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/80 border border-border/50 whitespace-nowrap shrink-0">
              <Truck className="w-4 h-4 text-accent" />
              <span className="text-xs md:text-sm font-medium">3PL integration expertise</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
}