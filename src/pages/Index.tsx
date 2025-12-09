import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { FounderSection } from "@/components/home/FounderSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ClientLogos } from "@/components/home/ClientLogos";
import { CTASection } from "@/components/home/CTASection";
import { SEO } from "@/components/SEO";
import { usePageSEO } from "@/hooks/usePageSEO";
const Index = () => {
  const seo = usePageSEO("/", {
    fallbackTitle: "Expert Packaging Procurement Consultancy",
    fallbackDescription: "Transform your packaging supply chain with expert procurement strategy. Achieve 20-35% cost savings with Circular Sourcing's specialist consulting services."
  });
  return <Layout>
      <SEO title={seo.title} description={seo.description} canonical="/" ogImage={seo.ogImage} noindex={seo.noindex} />
      <HeroSection />
      <StatsSection className="py-[30px]" />
      <ServicesPreview />
      <FounderSection />
      <TestimonialsSection />
      <ClientLogos />
      <CTASection />
    </Layout>;
};
export default Index;