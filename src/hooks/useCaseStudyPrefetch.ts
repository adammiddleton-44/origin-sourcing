import { useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useCallback } from "react";

export function useCaseStudyPrefetch() {
  const queryClient = useQueryClient();

  const prefetchCaseStudies = useCallback(() => {
    queryClient.prefetchQuery({
      queryKey: ['case-studies'],
      queryFn: async () => {
        const { data, error } = await supabase
          .from('case_studies')
          .select('*')
          .eq('published', true)
          .order('display_order', { ascending: true });
        if (error) throw error;
        return data;
      },
      staleTime: 5 * 60 * 1000,
    });
  }, [queryClient]);

  return { prefetchCaseStudies };
}
