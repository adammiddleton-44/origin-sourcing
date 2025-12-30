import { Link } from "react-router-dom";
import { ArrowRight, Handshake, BadgePercent, Truck, Shield } from "lucide-react";
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
            Transform your{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Packaging Supply Chain</span>
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-semibold mb-6 animate-fade-up bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient-shift bg-clip-text text-transparent" style={{
          animationDelay: "0.15s"
        }}>
            Direct Procurement Strategy for the Food Service Industry
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-up" style={{
          animationDelay: "0.25s"
        }}>The merchant model works brilliantly—until you scale. At 5+ locations, you've earned the volume to access manufacturer pricing directly—but most operators never realise this opportunity exists. I help multi-site restaurant and venue operators transition to direct procurement, reducing packaging costs by 20-50% while leveraging 3PL partnerships for seamless fulfilment.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{
          animationDelay: "0.3s"
        }}>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Let's Talk
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="hero-outline" size="xl">
              <Link to="/case-studies">View Case Studies</Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-muted-foreground animate-fade-up" style={{
          animationDelay: "0.4s"
        }}>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 border border-border/50">
              <Handshake className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Direct manufacturer relationships</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 border border-border/50">
              <BadgePercent className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Performance-based pricing available</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 border border-border/50">
              <Truck className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">3PL integration expertise</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
}