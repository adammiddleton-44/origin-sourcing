import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "inverted";
  className?: string;
  asLink?: boolean;
}

const sizeClasses = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl",
  xl: "text-3xl",
};

const leafSizes = {
  sm: "w-3 h-3",
  md: "w-4 h-4",
  lg: "w-5 h-5",
  xl: "w-6 h-6",
};

export function Logo({ size = "md", variant = "default", className, asLink = true }: LogoProps) {
  const isInverted = variant === "inverted";
  
  const content = (
    <div className={cn("flex items-center gap-1 group", className)}>
      <div className="flex flex-col leading-none">
        <div className="flex items-center">
          <span 
            className={cn(
              "font-heading font-bold tracking-tight",
              sizeClasses[size],
              isInverted ? "text-card" : "text-primary"
            )}
          >
            Origin
          </span>
          <Leaf 
            className={cn(
              leafSizes[size],
              "text-accent ml-0.5 -mt-1 group-hover:rotate-12 transition-transform"
            )} 
          />
        </div>
        <span 
          className={cn(
            "font-heading font-semibold tracking-tight -mt-1",
            sizeClasses[size],
            isInverted ? "text-card/90" : "text-primary/80"
          )}
        >
          Sourcing
        </span>
      </div>
    </div>
  );

  if (asLink) {
    return (
      <Link to="/" className="inline-block hover:opacity-90 transition-opacity">
        {content}
      </Link>
    );
  }

  return content;
}
