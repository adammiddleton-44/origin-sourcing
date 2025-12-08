import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface PageSEO {
  seo_title: string | null;
  meta_description: string | null;
  og_image: string | null;
  canonical_url: string | null;
  noindex: boolean;
}

interface UsePageSEOOptions {
  fallbackTitle?: string;
  fallbackDescription?: string;
}

export function usePageSEO(pagePath: string, options: UsePageSEOOptions = {}) {
  const { data, isLoading } = useQuery({
    queryKey: ['page-seo', pagePath],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('page_seo')
        .select('seo_title, meta_description, og_image, canonical_url, noindex')
        .eq('page_path', pagePath)
        .maybeSingle();

      if (error) {
        console.error('Error fetching page SEO:', error);
        return null;
      }
      return data as PageSEO | null;
    },
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });

  return {
    title: data?.seo_title || options.fallbackTitle,
    description: data?.meta_description || options.fallbackDescription,
    ogImage: data?.og_image,
    canonical: data?.canonical_url || pagePath,
    noindex: data?.noindex || false,
    isLoading,
  };
}
