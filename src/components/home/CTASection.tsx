import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Free initial consultation",
  "No obligation assessment",
  "Results within 30 days",
];

export function CTASection() {
  return (
    <section className="section-padding bg-section-dark text-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/25 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="container-narrow relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Ready to transform your{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">supply chain?</span>
          </h2>
          <p className="text-lg text-card/70 mb-8 max-w-2xl mx-auto">
            I'd love to understand your packaging challenges and show you how we can achieve real, measurable improvements together.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 text-card/90 bg-card/5 px-4 py-2 rounded-full border border-card/10"
              >
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Let's Talk
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="xl"
              className="text-card hover:text-card hover:bg-card/10 border border-card/20"
            >
              <Link to="/case-studies">See Our Results</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
