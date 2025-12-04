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
    <section className="section-padding bg-foreground text-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Ready to transform your{" "}
            <span className="text-primary">supply chain?</span>
          </h2>
          <p className="text-lg text-card/70 mb-8 max-w-2xl mx-auto">
            Join dozens of UK businesses who have achieved significant cost savings and operational improvements with our expert procurement consultancy.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 text-card/80"
              >
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="xl"
              className="text-card hover:text-card hover:bg-card/10"
            >
              <Link to="/case-studies">See Our Results</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
