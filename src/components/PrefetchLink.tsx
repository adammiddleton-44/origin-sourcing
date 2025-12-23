import { Link, LinkProps } from "react-router-dom";
import { useServicePrefetch } from "@/hooks/useServicePrefetch";
import { ReactNode, useCallback } from "react";

interface PrefetchLinkProps extends LinkProps {
  children: ReactNode;
  prefetchType?: 'services';
}

export const PrefetchLink = ({ 
  children, 
  prefetchType = 'services',
  onMouseEnter,
  onFocus,
  ...props 
}: PrefetchLinkProps) => {
  const { prefetchServices } = useServicePrefetch();

  const handlePrefetch = useCallback(() => {
    if (prefetchType === 'services') {
      prefetchServices();
    }
  }, [prefetchType, prefetchServices]);

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
