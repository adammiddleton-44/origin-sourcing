import { Link } from "react-router-dom";
import adamPhoto from "@/assets/adam-middleton.jpg";

export function AuthorBio() {
  return (
    <section className="py-12 md:py-16 bg-section-accent">
      <div className="container-narrow max-w-3xl">
        <div className="bg-card rounded-2xl border shadow-sm p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
          <img
            src={adamPhoto}
            alt="Adam Middleton, Founder of Origin Sourcing"
            className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover flex-shrink-0 border-2 border-primary/20"
          />
          <div>
            <p className="text-sm font-medium text-primary mb-1">About the Author</p>
            <h3 className="font-heading text-xl font-bold text-foreground mb-1">
              Adam Middleton
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Founder, Origin Sourcing
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
              Adam Middleton is the founder of Origin Sourcing, a UK packaging procurement consultancy that helps multi-site food service and hospitality operators transition from merchant-based procurement to direct manufacturer sourcing. With 10 years of experience inside UK packaging merchants, Adam works across corrugated, carton, film, rigid plastic, and compostable formats to deliver verified cost savings and supply chain transparency.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-4 py-2 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-accent transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
