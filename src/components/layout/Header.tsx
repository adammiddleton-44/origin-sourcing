import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border/50">
      <nav className="container-narrow flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center group-hover:scale-105 transition-transform">
            <RefreshCcw className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-heading font-bold text-xl text-foreground">
            Circular<span className="text-primary">Sourcing</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                location.pathname === item.href
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button asChild variant="hero" size="default">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg hover:bg-muted"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-b border-border animate-fade-in">
          <div className="container-narrow py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                  location.pathname === item.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <Button asChild variant="hero" className="w-full">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
