import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { FounderSection } from "@/components/home/FounderSection";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { CTASection } from "@/components/home/CTASection";
import { SEO } from "@/components/SEO";
import { usePageSEO } from "@/hooks/usePageSEO";
import { usePrerenderReady } from "@/hooks/usePrerenderReady";
const Index = () => {
  usePrerenderReady(true);
  const seo = usePageSEO("/", {
    fallbackTitle: "Packaging Purchasing Consultancy for Multi-Site Operators",
    fallbackDescription: "Independent UK packaging purchasing and procurement consultancy helping multi-site food service, retail and FMCG operators cut cost by 20-30% with smarter buying and 3PL fulfilment."
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