import { useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useCallback } from "react";

type ServiceFeature = {
  title: string;
  description: string;
};

type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

type Service = {
  id: string;
  title: string;
  short_description: string;
  full_description: string;
  icon_name: string;
  accent_color: string;
  features: ServiceFeature[];
  process: ProcessStep[];
  benefits: string[];
  display_order: number;
  overview_heading: string | null;
  overview_text: string | null;
  overview_image_url: string | null;
};

export const useServicePrefetch = () => {
  const queryClient = useQueryClient();

  const prefetchServices = useCallback(() => {
    // Only prefetch if not already cached
    const existingData = queryClient.getQueryData(['services']);
    if (existingData) return;

    queryClient.prefetchQuery({
      queryKey: ['services'],
      queryFn: async () => {
        const { data, error } = await supabase
          .from('services')
          .select('*')
          .order('display_order', { ascending: true });
        if (error) throw error;
        return data as unknown as Service[];
      },
      staleTime: 5 * 60 * 1000, // 5 minutes
    });
  }, [queryClient]);

  return { prefetchServices };
};
