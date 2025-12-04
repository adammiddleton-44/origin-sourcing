-- Create contact_submissions table to store form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  ip_address TEXT,
  user_agent TEXT
);

-- Enable RLS but allow public inserts (no auth required for contact form)
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public contact form)
CREATE POLICY "Anyone can submit contact form"
ON public.contact_submissions
FOR INSERT
WITH CHECK (true);

-- Only authenticated admins could read (for future admin dashboard)
-- For now, we'll query from edge function with service role
CREATE POLICY "Service role can read submissions"
ON public.contact_submissions
FOR SELECT
USING (false);

-- Add comment
COMMENT ON TABLE public.contact_submissions IS 'Stores contact form submissions from the website';