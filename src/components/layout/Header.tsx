import { useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, Package, Truck, ClipboardCheck, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/origin-logo.png";

const navigation = [
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  // { name: "Blog", href: "/blog" },  // Hidden until content ready
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const services = [
  {
    id: "purchasing",
    title: "Packaging Purchasing",
    icon: Package
  },
  {
    id: "3pl",
    title: "3PL Integration & Logistics",
    icon: Truck
  },
  {
    id: "packaging-development",
    title: "Packaging Development",
    icon: ClipboardCheck
  },
  {
    id: "sustainability",
    title: "Sustainability & EPR Compliance",
    icon: Shield
  }
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleServiceClick = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border/50">
      <nav className="container-narrow flex items-center py-4">
        {/* Logo - left pinned */}
        <Link to="/" className="group relative z-0 shrink-0">
          <img 
            src={logo} 
            alt="Origin Sourcing" 
            width={350}
            height={70}
            className="h-10 sm:h-12 md:h-14 w-auto md:scale-150 origin-left md:group-hover:scale-[1.55] transition-transform"
          />
        </Link>

        {/* Desktop navigation + CTA - pushed to right */}
        <div className="hidden lg:flex items-center gap-1 ml-8">
          <Link to="/" className={cn("px-4 py-2 rounded-lg text-sm font-medium transition-colors", location.pathname === "/" ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-muted")}>
            Home
          </Link>

          {/* Hover-based Services Dropdown */}
          <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link to="/services" className={cn("px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1", location.pathname.startsWith("/services") ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-muted")}>
              Services
              <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", servicesDropdownOpen && "rotate-180")} />
            </Link>

            {/* Dropdown Content */}
            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 pt-2 z-50">
                <div className="w-80 bg-card border border-border rounded-lg shadow-lg overflow-hidden animate-fade-in">
                  <div className="py-2">
                    {services.map(service => (
                      <button key={service.id} onClick={() => handleServiceClick(service.id)} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer">
                        <service.icon className="w-4 h-4 text-primary" />
                        {service.title}
                      </button>
                    ))}
                  </div>
                  <div className="border-t border-border">
                    <Link to="/services" onClick={() => setServicesDropdownOpen(false)} className="block px-4 py-2.5 text-sm text-primary hover:bg-muted transition-colors text-center font-medium">
                      View All Services
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {navigation.filter(item => item.name !== "Services").map(item => (
            <Link key={item.name} to={item.href} className={cn("px-4 py-2 rounded-lg text-sm font-medium transition-colors", location.pathname === item.href ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-muted")}>
              {item.name}
            </Link>
          ))}

          <Button asChild variant="hero" size="default" className="ml-2">
            <Link to="/contact">Let's Talk</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          type="button" 
          className="lg:hidden ml-auto relative z-20 p-3 -m-1 rounded-lg hover:bg-muted touch-manipulation"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          onClick={(e) => {
            e.stopPropagation();
            console.log("menu tap");
            setMobileMenuOpen(!mobileMenuOpen);
          }}
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-foreground" aria-hidden="true" /> : <Menu className="w-6 h-6 text-foreground" aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-card border-b border-border animate-fade-in">
          <div className="container-narrow py-4 space-y-2">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className={cn("block px-4 py-3 rounded-lg text-base font-medium transition-colors", location.pathname === "/" ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-muted")}>
              Home
            </Link>

            {/* Mobile Services Dropdown */}
            <div>
              <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className={cn("w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors", location.pathname.startsWith("/services") ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-muted")}>
                Services
                <ChevronDown className={cn("w-4 h-4 transition-transform", mobileServicesOpen && "rotate-180")} />
              </button>
              {mobileServicesOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  {services.map(service => (
                    <button key={service.id} onClick={() => handleServiceClick(service.id)} className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                      <service.icon className="w-4 h-4 text-primary" />
                      {service.title}
                    </button>
                  ))}
                  <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 rounded-lg text-sm font-medium text-primary hover:bg-muted transition-colors">
                    View All Services
                  </Link>
                </div>
              )}
            </div>

            {navigation.filter(item => item.name !== "Services").map(item => (
              <Link key={item.name} to={item.href} onClick={() => setMobileMenuOpen(false)} className={cn("block px-4 py-3 rounded-lg text-base font-medium transition-colors", location.pathname === item.href ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-muted")}>
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
