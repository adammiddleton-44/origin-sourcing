import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Target, Users, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We measure our success by your savings. Every engagement is focused on delivering tangible, measurable results.",
    accentColor: "from-primary to-primary/70",
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description: "We work alongside your team, transferring knowledge and building capabilities that last beyond our engagement.",
    accentColor: "from-accent to-accent/70",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description: "15+ years of packaging procurement experience across multiple industries gives us unmatched insight.",
    accentColor: "from-primary via-primary/80 to-accent",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-section-primary via-background to-section-accent relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container-narrow relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">PackProConsult</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Expert packaging procurement consultancy helping UK businesses optimize costs and transform their supply chains.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We exist to help UK businesses unlock the hidden value in their packaging supply chains. Through strategic procurement, expert negotiation, and deep industry knowledge, we deliver cost savings that directly impact your bottom line.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2009, PackProConsult has grown from a specialist consultancy into a trusted partner for businesses across food and beverage, retail, pharmaceutical, and industrial sectors. Our team brings together decades of experience in packaging procurement, supply chain management, and sustainability strategy.
              </p>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-card rounded-2xl border border-border/50 shadow-soft p-8 relative overflow-hidden">
                {/* Card accent gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-accent/[0.03]" />
                
                <div className="relative grid grid-cols-2 gap-6">
                  <div className="text-center p-4 rounded-xl bg-section-primary">
                    <div className="text-4xl font-heading font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-section-primary">
                    <div className="text-4xl font-heading font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Clients Served</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-section-accent">
                    <div className="text-4xl font-heading font-bold text-accent mb-2">£5M+</div>
                    <div className="text-sm text-muted-foreground">Client Savings</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-section-accent">
                    <div className="text-4xl font-heading font-bold text-accent mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Client Retention</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-section-primary relative overflow-hidden">
        {/* Subtle background accents */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container-narrow relative">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group relative p-8 rounded-2xl bg-card border border-border/50 shadow-soft text-center animate-fade-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Bottom accent bar */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.accentColor} opacity-0 group-hover:opacity-100 transition-opacity`} />
                
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mx-auto mb-6 group-hover:from-primary/25 group-hover:to-primary/10 transition-all">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-section-dark relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/25 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/15 rounded-full blur-3xl" />
        </div>
        
        <div className="container-narrow text-center relative">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-card mb-4">
            Ready to <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Work Together</span>?
          </h2>
          <p className="text-card/70 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your packaging supply chain.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
