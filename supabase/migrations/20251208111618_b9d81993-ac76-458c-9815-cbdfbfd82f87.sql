-- Create page_seo table for managing SEO metadata
CREATE TABLE public.page_seo (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  page_path TEXT NOT NULL UNIQUE,
  seo_title TEXT,
  meta_description TEXT,
  og_image TEXT,
  canonical_url TEXT,
  noindex BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.page_seo ENABLE ROW LEVEL SECURITY;

-- Allow public read access (SEO data should be publicly readable)
CREATE POLICY "Anyone can read page SEO" 
ON public.page_seo 
FOR SELECT 
USING (true);

-- Add trigger for updated_at
CREATE TRIGGER update_page_seo_updated_at
BEFORE UPDATE ON public.page_seo
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Add SEO fields to blog_posts if not exists (they already have seo_title and meta_description)

-- Pre-populate with current pages
INSERT INTO public.page_seo (page_path, seo_title, meta_description) VALUES
('/', 'Expert Packaging Procurement Consultancy', 'Transform your packaging supply chain with expert procurement strategy. Achieve 20-35% cost savings with Circular Sourcing specialist consulting services.'),
('/about', 'About Us - Our Mission & Values', 'Learn about Circular Sourcing''s mission to transform packaging procurement. 15+ years of expertise delivering sustainable, cost-effective solutions.'),
('/services', 'Packaging Procurement Services', 'Comprehensive packaging procurement services including EPR compliance, supply chain transformation, cost optimization, and sustainability strategy.'),
('/services/procurement', 'Strategic Packaging Procurement', 'Expert packaging procurement services to optimize your supply chain, reduce costs, and improve quality through strategic supplier management.'),
('/services/epr', 'EPR Compliance & Reporting', 'Navigate Extended Producer Responsibility regulations with expert guidance. Ensure compliance and minimize environmental fees.'),
('/services/supply-chain', 'Supply Chain Transformation', 'Transform your packaging supply chain for improved efficiency, reduced costs, and enhanced sustainability.'),
('/services/cost', 'Cost Optimization Services', 'Identify and implement cost savings across your packaging operations. Typical savings of 20-35%.'),
('/services/audit', 'Packaging Audit & Assessment', 'Comprehensive packaging audits to identify improvement opportunities, compliance gaps, and cost reduction potential.'),
('/services/sustainability', 'Sustainability Strategy', 'Develop and implement sustainable packaging strategies that meet environmental goals and regulatory requirements.'),
('/blog', 'Packaging Industry Insights & News', 'Expert insights on packaging procurement, sustainability, EPR compliance, and supply chain optimization from Circular Sourcing.'),
('/case-studies', 'Client Success Stories', 'Discover how Circular Sourcing has helped clients achieve significant cost savings and operational improvements.'),
('/contact', 'Get in Touch', 'Contact Circular Sourcing for expert packaging procurement consultancy. Get a free consultation today.');