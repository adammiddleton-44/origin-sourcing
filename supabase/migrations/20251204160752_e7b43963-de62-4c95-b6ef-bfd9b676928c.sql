-- Add SEO fields to blog_posts table
ALTER TABLE public.blog_posts 
ADD COLUMN seo_title text,
ADD COLUMN meta_description text;