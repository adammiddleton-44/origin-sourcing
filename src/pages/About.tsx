import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Target, Users, Award, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { usePageSEO } from "@/hooks/usePageSEO";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
const values = [{
  icon: Target,
  title: "Results-Driven",
  description: "We measure our success by your savings. Every engagement is focused on delivering tangible, measurable results.",
  accentColor: "from-primary to-primary/70"
}, {
  icon: Users,
  title: "Partnership Approach",
  description: "We work alongside your team, transferring knowledge and building capabilities that last beyond our engagement.",
  accentColor: "from-accent to-accent/70"
}, {
  icon: Award,
  title: "Industry Expertise",
  description: "15+ years of packaging procurement experience across multiple industries gives us unmatched insight.",
  accentColor: "from-primary via-primary/80 to-accent"
}];
const ReadMoreSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleContent className="space-y-4">
        <p>
          These operators had done the hard part: they'd created winning concepts, built operational systems, trained teams, and proven they could replicate success. Yet when it came to purchasing power—the one area where scale should deliver massive advantage—they were stuck paying small-operator pricing.
        </p>
        
        <p>
          The merchant model serves an important purpose for businesses with 1-5 sites: consolidated ordering, flexible stock management, multi-site delivery. But beyond that threshold, the convenience premium becomes prohibitively expensive.
        </p>
        
        <p>
          I saw this pattern repeat dozens of times. Talented operators, squeezed by rising costs—NICs, wages, business rates—leaving significant savings on the table simply because they didn't know there was a better way. So I decided to show them.
        </p>
        
        <p>
          I left the merchant world to help multi-site food service businesses transition to direct manufacturer relationships with integrated 3PL logistics. The results speak for themselves: <strong className="text-foreground">28-34% cost reductions</strong>, improved working capital, better supply chain control.
        </p>
        
        <p>
          My first client saved <strong className="text-foreground">£340K annually</strong>. That's not just a number—it's funding for their next three locations, or breathing room during tough economic times, or finally the margins they deserved for building something successful.
        </p>
        
        <p className="text-foreground font-medium">
          If you've scaled beyond 5 locations, let's talk about getting you the pricing power you've earned.
        </p>
      </CollapsibleContent>
      
      <CollapsibleTrigger className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium mt-4 transition-colors">
        {isOpen ? "Read less" : "Read more"}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </CollapsibleTrigger>
    </Collapsible>;
};
const About = () => {
  const seo = usePageSEO("/about", {
    fallbackTitle: "About Us - Our Mission & Values",
    fallbackDescription: "Learn about Origin Sourcing's mission to transform packaging procurement. 15+ years of expertise delivering sustainable, cost-effective solutions."
  });
  return <Layout>
      <SEO title={seo.title} description={seo.description} canonical="/about" ogImage={seo.ogImage} noindex={seo.noindex} />
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-section-primary via-background to-section-accent relative overflow-hidden py-[30px]">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container-narrow relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Origin Sourcing</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Expert packaging procurement consultancy helping UK businesses optimize costs and transform their supply chains.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="section-padding bg-background py-[30px]">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Our Mission
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  For years, I worked as COO at one of the UK's leading packaging merchants serving the food-to-go industry. I had a front-row seat to how the merchant model works—and more importantly, where it breaks down.
                </p>
                
                <p>
                  I watched successful restaurant groups scale from 5 to 10 to 20+ locations, celebrating each opening while unknowingly paying an increasing "scale tax" on every piece of packaging they purchased. The more they grew, the more margin they handed over to their supplier.
                </p>
                
                <ReadMoreSection />
              </div>
            </div>
            <div className="animate-fade-up" style={{
            animationDelay: "0.2s"
          }}>
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
            {values.map((value, index) => <div key={value.title} className="group relative p-8 rounded-2xl bg-card border border-border/50 shadow-soft text-center animate-fade-up overflow-hidden" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                {/* Bottom accent bar */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.accentColor} opacity-0 group-hover:opacity-100 transition-opacity`} />
                
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mx-auto mb-6 group-hover:from-primary/25 group-hover:to-primary/10 transition-all">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>)}
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
    </Layout>;
};
export default About;