import { useParams, Link, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle, ImageIcon } from "lucide-react";
import { Package, Truck, GitBranch, TrendingDown, Search, Shield, LucideIcon } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { usePageSEO } from "@/hooks/usePageSEO";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import PackagingPurchasingPage from "@/components/services/PackagingPurchasingPage";
import ThreePLIntegrationPage from "@/components/services/ThreePLIntegrationPage";
import SupplyChainPage from "@/components/services/SupplyChainPage";
import CostOptimizationPage from "@/components/services/CostOptimizationPage";
import PackagingAuditPage from "@/components/services/PackagingAuditPage";
import SustainabilityPage from "@/components/services/SustainabilityPage";

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
const iconMap: Record<string, LucideIcon> = {
  Package,
  Truck,
  GitBranch,
  TrendingDown,
  Search,
  Shield
};

const customPageMap: Record<string, React.ComponentType<{ prevService: { id: string; title: string } | null; nextService: { id: string; title: string } | null }>> = {
  'purchasing': PackagingPurchasingPage,
  '3pl': ThreePLIntegrationPage,
  'supply-chain': SupplyChainPage,
  'cost': CostOptimizationPage,
  'audit': PackagingAuditPage,
  'sustainability': SustainabilityPage,
};

const ServiceDetail = () => {
  const {
    serviceId
  } = useParams<{
    serviceId: string;
  }>();
  const {
    data: services,
    isLoading
  } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const {
        data,
        error
      } = await supabase.from('services').select('*').order('display_order', {
        ascending: true
      });
      if (error) throw error;
      return data as unknown as Service[];
    }
  });
  const service = services?.find(s => s.id === serviceId);
  const seo = usePageSEO(`/services/${serviceId}`, {
    fallbackTitle: service?.title,
    fallbackDescription: service?.short_description
  });
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = iconMap[service.icon_name] || Package;
  const currentIndex = services?.findIndex(s => s.id === service.id) || 0;
  const nextService = services?.[(currentIndex + 1) % (services?.length || 1)];
  const prevService = services?.[(currentIndex - 1 + (services?.length || 1)) % (services?.length || 1)];

  // Use custom page if available
  const CustomPage = serviceId ? customPageMap[serviceId] : null;
  if (CustomPage) {
    return (
      <Layout>
        <SEO 
          title={seo.title || service.title} 
          description={seo.description || service.short_description} 
          canonical={`/services/${service.id}`} 
          ogImage={seo.ogImage} 
          noindex={seo.noindex} 
        />
        <CustomPage 
          prevService={prevService ? { id: prevService.id, title: prevService.title } : null}
          nextService={nextService ? { id: nextService.id, title: nextService.title } : null}
        />
      </Layout>
    );
  }

  return <Layout>
      <SEO title={seo.title || service.title} description={seo.description || service.short_description} canonical={`/services/${service.id}`} ogImage={seo.ogImage} noindex={seo.noindex} />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-section-primary via-background to-section-accent relative overflow-hidden py-[30px]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container-narrow relative">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link to="/services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.accent_color} flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                  {service.title}
                </h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {service.full_description}
              </p>
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section - Text Only */}
      {(service.overview_heading || service.overview_text) && (
        <section className="section-padding bg-background py-[30px]">
          <div className="container-narrow">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              {service.overview_heading && (
                <h2 className="text-3xl font-heading font-bold text-foreground">
                  {service.overview_heading}
                </h2>
              )}
              {service.overview_text && (
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.overview_text}
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="section-padding bg-section-primary py-[30px]">
        <div className="container-narrow">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
            Key <span className="gradient-text">Benefits</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((benefit, index) => <div key={benefit} className="p-6 rounded-xl bg-card border border-border/50 shadow-soft text-center animate-fade-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CheckCircle className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="text-foreground font-medium">{benefit}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="section-padding bg-background py-[30px]">
        <div className="container-narrow">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-12 text-center">
            What's <span className="gradient-text">Included</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((feature, index) => <div key={feature.title} className="group p-6 rounded-xl bg-card border border-border/50 shadow-soft hover:shadow-elevated transition-all animate-fade-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Image Placeholder Section 2 */}
      <section className="section-padding bg-section-accent py-[40px]">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="aspect-square rounded-2xl bg-muted border-2 border-dashed border-border flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <ImageIcon className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p className="text-sm">Additional Image</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Why Choose Us for {service.title}?
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With over 15 years of experience in the packaging industry, we bring deep expertise and a proven track record of delivering results. Our team combines strategic thinking with hands-on implementation to ensure real, measurable outcomes.
              </p>
              <ul className="space-y-3">
                {service.benefits.map(benefit => <li key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="section-padding bg-background py-[30px]">
        <div className="container-narrow">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-12 text-center">
            Our <span className="gradient-text">Process</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, index) => <div key={step.step} className="relative p-6 rounded-xl bg-card border border-border/50 shadow-soft animate-fade-up" style={{
            animationDelay: `${index * 0.15}s`
          }}>
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {step.step}
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mt-4 mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-section-dark relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/25 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/15 rounded-full blur-3xl" />
        </div>

        <div className="container-narrow text-center relative">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-card mb-4">
            Ready to Get Started with{" "}
            <span className="gradient-text">{service.title}</span>?
          </h2>
          <p className="text-card/70 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your packaging operations and deliver measurable results for your business.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              Contact Us Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Navigation to Other Services */}
      {prevService && nextService && <section className="section-padding bg-background border-t border-border">
          <div className="container-narrow">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <Link to={`/services/${prevService.id}`} className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <div className="text-right sm:text-left">
                  <p className="text-xs uppercase tracking-wider">Previous Service</p>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">{prevService.title}</p>
                </div>
              </Link>
              <Link to={`/services/${nextService.id}`} className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <div className="text-left sm:text-right">
                  <p className="text-xs uppercase tracking-wider">Next Service</p>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">{nextService.title}</p>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>}
    </Layout>;
};
export default ServiceDetail;