import { Link, LinkProps } from "react-router-dom";
import { useServicePrefetch } from "@/hooks/useServicePrefetch";
import { useBlogPrefetch } from "@/hooks/useBlogPrefetch";
import { useCaseStudyPrefetch } from "@/hooks/useCaseStudyPrefetch";
import { ReactNode, useCallback } from "react";

interface PrefetchLinkProps extends LinkProps {
  children: ReactNode;
  prefetchType?: 'services' | 'blog' | 'case-studies';
}

export const PrefetchLink = ({ 
  children, 
  prefetchType = 'services',
  onMouseEnter,
  onFocus,
  ...props 
}: PrefetchLinkProps) => {
  const { prefetchServices } = useServicePrefetch();
  const { prefetchBlogPosts } = useBlogPrefetch();
  const { prefetchCaseStudies } = useCaseStudyPrefetch();

  const handlePrefetch = useCallback(() => {
    if (prefetchType === 'services') {
      prefetchServices();
    } else if (prefetchType === 'blog') {
      prefetchBlogPosts();
    } else if (prefetchType === 'case-studies') {
      prefetchCaseStudies();
    }
  }, [prefetchType, prefetchServices, prefetchBlogPosts, prefetchCaseStudies]);

  return (
    <Link 
      {...props}
      onMouseEnter={(e) => {
        handlePrefetch();
        onMouseEnter?.(e);
      }}
      onFocus={(e) => {
        handlePrefetch();
        onFocus?.(e);
      }}
    >
      {children}
    </Link>
  );
};
