import { Layout } from "@/components/layout/Layout";
import { BlogSubscribe } from "@/components/blog/BlogSubscribe";
import { BlogCard } from "@/components/blog/BlogCard";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "How EPR Regulations Will Impact UK Packaging in 2025",
    excerpt: "Extended Producer Responsibility is changing the landscape. Here's what procurement leaders need to know to stay compliant and competitive.",
    category: "EPR Compliance",
    date: "2024-12-01",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    slug: "epr-regulations-uk-packaging-2025"
  },
  {
    id: 2,
    title: "5 Strategies to Reduce Packaging Costs Without Sacrificing Quality",
    excerpt: "Learn proven procurement techniques that have helped our clients achieve 20-35% cost savings while maintaining product protection.",
    category: "Cost Optimisation",
    date: "2024-11-28",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
    slug: "reduce-packaging-costs-strategies"
  },
  {
    id: 3,
    title: "Sustainable Packaging Materials: A Buyer's Guide",
    excerpt: "Navigate the complex world of eco-friendly packaging options with our comprehensive guide to sustainable materials and suppliers.",
    category: "Sustainability",
    date: "2024-11-20",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    slug: "sustainable-packaging-materials-guide"
  },
  {
    id: 4,
    title: "Supply Chain Resilience: Lessons from Recent Disruptions",
    excerpt: "Discover how leading companies are building more resilient packaging supply chains and what you can learn from their approaches.",
    category: "Supply Chain",
    date: "2024-11-15",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80",
    slug: "supply-chain-resilience-lessons"
  },
  {
    id: 5,
    title: "Negotiating with Packaging Suppliers: Expert Tips",
    excerpt: "Master the art of supplier negotiations with these insider tips from our 15+ years in the packaging procurement industry.",
    category: "Procurement",
    date: "2024-11-10",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    slug: "negotiating-packaging-suppliers-tips"
  },
  {
    id: 6,
    title: "The Future of Smart Packaging Technology",
    excerpt: "From QR codes to NFC tags, explore how smart packaging is revolutionising supply chain visibility and consumer engagement.",
    category: "Innovation",
    date: "2024-11-05",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    slug: "smart-packaging-technology-future"
  }
];

export default function Blog() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-section-primary via-background to-section-accent overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container-narrow relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Insights & Resources
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Packaging{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Procurement Blog
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert insights on packaging procurement, EPR compliance, sustainability, 
              and supply chain optimisation from industry veterans.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Subscribe Section */}
      <BlogSubscribe />

      {/* Blog Posts Grid */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 bg-section-dark overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container-narrow relative text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Transform
            </span>{" "}
            Your Packaging Strategy?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Let's discuss how our expertise can help you achieve significant cost savings 
            and operational improvements.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors group"
          >
            Get a Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </Layout>
  );
}
