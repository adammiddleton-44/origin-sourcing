import { Layout } from "@/components/layout/Layout";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";
import { SEO } from "@/components/SEO";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blog-post', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .maybeSingle();
      
      if (error) throw error;
      return data;
    },
    enabled: !!slug
  });

  if (isLoading) {
    return (
      <Layout>
        <section className="py-20 md:py-28 bg-background">
          <div className="container-narrow max-w-4xl">
            <Skeleton className="h-8 w-32 mb-8" />
            <Skeleton className="h-12 w-full mb-4" />
            <Skeleton className="h-6 w-48 mb-8" />
            <Skeleton className="h-96 w-full rounded-xl mb-8" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  if (error || !post) {
    return (
      <Layout>
        <section className="py-20 md:py-28 bg-background">
          <div className="container-narrow max-w-4xl text-center">
            <h1 className="font-heading text-3xl font-bold text-foreground mb-4">
              Post Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The blog post you're looking for doesn't exist or has been removed.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const publishedDate = post.published_at || post.created_at;

  return (
    <Layout>
      <SEO 
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
        ogImage={post.image_url || undefined}
        ogType="article"
        article={{
          publishedTime: post.published_at || post.created_at,
          modifiedTime: post.updated_at,
          section: post.category,
        }}
      />
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-section-primary via-background to-section-accent overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container-narrow max-w-4xl relative">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            {post.category}
          </span>
          
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {format(new Date(publishedDate), 'MMMM d, yyyy')}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.read_time}
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.image_url && (
        <section className="bg-background -mt-8">
          <div className="container-narrow max-w-4xl">
            <img
              src={post.image_url}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container-narrow max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {post.excerpt}
            </p>
            <div className="text-foreground leading-relaxed whitespace-pre-wrap">
              {post.content}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-section-dark overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container-narrow relative text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Want to discuss this topic?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-6">
            Our experts are ready to help you implement these insights for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </Layout>
  );
}
