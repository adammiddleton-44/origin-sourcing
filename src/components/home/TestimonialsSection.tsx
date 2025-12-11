import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Working with Circular Sourcing transformed our procurement process. The personal attention and industry expertise made all the difference.",
    name: "Client Name",
    title: "Procurement Director",
    company: "Manufacturing Company",
  },
  {
    quote: "The savings we achieved exceeded our expectations. More importantly, we now have a sustainable, future-proof supply chain.",
    name: "Client Name",
    title: "Operations Manager",
    company: "FMCG Brand",
  },
  {
    quote: "Finally, a consultant who understands the complexities of packaging. The EPR compliance guidance alone was worth its weight in gold.",
    name: "Client Name",
    title: "Sustainability Lead",
    company: "Retail Company",
  },
];

export function TestimonialsSection({ className }: { className?: string }) {
  return (
    <section className={`section-padding bg-muted/30 ${className || ""}`}>
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Client Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            What My Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border shadow-soft hover:shadow-elevated transition-shadow duration-300"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <blockquote className="text-foreground/80 text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                {/* Placeholder avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-muted-foreground text-lg font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.title}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
