-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create blog_posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL,
  image_url TEXT,
  read_time TEXT NOT NULL DEFAULT '5 min read',
  published BOOLEAN NOT NULL DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Anyone can read published posts
CREATE POLICY "Anyone can read published posts"
ON public.blog_posts
FOR SELECT
USING (published = true);

-- Create trigger for updated_at
CREATE TRIGGER update_blog_posts_updated_at
BEFORE UPDATE ON public.blog_posts
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Seed initial blog posts
INSERT INTO public.blog_posts (title, slug, excerpt, content, category, image_url, read_time, published, published_at) VALUES
('5 Strategies to Reduce Packaging Costs Without Compromising Quality', '5-strategies-reduce-packaging-costs', 'Learn how strategic procurement approaches can help you achieve significant cost savings while maintaining the quality standards your products deserve.', 'Full article content here...', 'Cost Optimization', 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800', '8 min read', true, now()),
('Understanding EPR: What UK Businesses Need to Know in 2024', 'understanding-epr-uk-2024', 'Extended Producer Responsibility regulations are changing. Here''s your comprehensive guide to staying compliant and turning compliance into competitive advantage.', 'Full article content here...', 'EPR Compliance', 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800', '12 min read', true, now()),
('The Future of Sustainable Packaging: Trends and Innovations', 'future-sustainable-packaging-trends', 'Explore the latest developments in eco-friendly packaging materials and how they can benefit both your brand and the environment.', 'Full article content here...', 'Sustainability', 'https://images.unsplash.com/photo-1605600659908-0ef719419d41?w=800', '6 min read', true, now()),
('Building Resilient Supply Chains in Uncertain Times', 'building-resilient-supply-chains', 'Discover proven strategies for creating packaging supply chains that can withstand disruption and maintain consistent delivery.', 'Full article content here...', 'Supply Chain', 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800', '10 min read', true, now()),
('Case Study: How We Helped a Food Manufacturer Save £310K', 'case-study-food-manufacturer-310k', 'A detailed look at our procurement optimization project that delivered exceptional results for a leading UK food manufacturer.', 'Full article content here...', 'Case Study', 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800', '7 min read', true, now()),
('Negotiation Tactics That Drive Better Supplier Agreements', 'negotiation-tactics-supplier-agreements', 'Master the art of supplier negotiation with these proven techniques that have helped our clients secure better terms and pricing.', 'Full article content here...', 'Procurement', 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800', '9 min read', true, now());