import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { CTASection } from "@/components/home/CTASection";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <Layout>
      <SEO 
        canonical="/"
        description="Transform your packaging supply chain with expert procurement strategy. Achieve 20-35% cost savings with PackProConsult's specialist consulting services in the UK."
      />
      <HeroSection />
      <StatsSection />
      <ServicesPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
