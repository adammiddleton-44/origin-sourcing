import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import logoTransparent from "@/assets/logo-transparent.png";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  asLink?: boolean;
}

const sizeClasses = {
  sm: "h-8",
  md: "h-10",
  lg: "h-12",
  xl: "h-16",
};

export function Logo({ size = "md", className, asLink = true }: LogoProps) {
  const content = (
    <img 
      src={logoTransparent} 
      alt="Origin Sourcing" 
      className={cn(sizeClasses[size], "w-auto", className)}
    />
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
