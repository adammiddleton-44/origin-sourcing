import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { FounderSection } from "@/components/home/FounderSection";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { CTASection } from "@/components/home/CTASection";
import { SEO } from "@/components/SEO";
import { usePageSEO } from "@/hooks/usePageSEO";
const Index = () => {
  const seo = usePageSEO("/", {
    fallbackTitle: "Expert Packaging Procurement Consultancy",
    fallbackDescription: "Transform your packaging supply chain with expert procurement strategy. Achieve 20-50% cost savings with Origin Sourcing's specialist consulting services."
  });
  return <Layout>
      <SEO title={seo.title} description={seo.description} canonical="/" ogImage={seo.ogImage} noindex={seo.noindex} />
      <HeroSection />
      <StatsSection className="py-[30px]" />
      <ServicesPreview className="py-[30px]" />
      <CaseStudiesSection className="py-[30px]" />
      <FounderSection className="py-[30px]" />
      <CTASection />
    </Layout>;
};
export default Index;