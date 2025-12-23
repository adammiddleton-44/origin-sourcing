import { useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useCallback } from "react";

export function useBlogPrefetch() {
  const queryClient = useQueryClient();

  const prefetchBlogPosts = useCallback(() => {
    queryClient.prefetchQuery({
      queryKey: ['blog-posts'],
      queryFn: async () => {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('published', true)
          .order('published_at', { ascending: false });
        if (error) throw error;
        return data;
      },
      staleTime: 5 * 60 * 1000,
    });
  }, [queryClient]);

  return { prefetchBlogPosts };
}
