-- Add overview section fields to services table
ALTER TABLE public.services 
ADD COLUMN overview_heading text,
ADD COLUMN overview_text text,
ADD COLUMN overview_image_url text;