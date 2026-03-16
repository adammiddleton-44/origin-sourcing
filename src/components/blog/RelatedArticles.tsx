import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { ArrowRight, Clock } from "lucide-react";

interface RelatedArticlesProps {
  currentSlug: string;
  category: string;
}

export function RelatedArticles({ currentSlug, category }: RelatedArticlesProps) {
  const { data: posts } = useQuery({
    queryKey: ['related-articles', currentSlug, category],
    queryFn: async () => {
      // Try same category first
      const { data: sameCat } = await supabase
        .from('blog_posts')
        .select('slug, title, category, read_time, image_url')
        .eq('published', true)
        .eq('category', category)
        .neq('slug', currentSlug)
        .order('published_at', { ascending: false })
        .limit(3);

      if (sameCat && sameCat.length >= 3) return sameCat;

      // Fall back to recent posts
      const { data: recent } = await supabase
        .from('blog_posts')
        .select('slug, title, category, read_time, image_url')
        .eq('published', true)
        .neq('slug', currentSlug)
        .order('published_at', { ascending: false })
        .limit(3);

      return recent || [];
    },
  });

  if (!posts || posts.length === 0) return null;

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container-narrow max-w-3xl">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
          Related Articles
        </h2>
        <div className="grid gap-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group flex items-center gap-4 p-4 rounded-xl border bg-card hover:shadow-md transition-all"
            >
              {post.image_url && (
                <img
                  src={post.image_url}
                  alt={post.title}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover flex-shrink-0"
                />
              )}
              <div className="flex-1 min-w-0">
                <span className="text-xs font-medium text-primary">{post.category}</span>
                <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 text-sm md:text-base">
                  {post.title}
                </h3>
                <span className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                  <Clock className="w-3 h-3" />
                  {post.read_time}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
