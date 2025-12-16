-- Create services table for editable service content
CREATE TABLE public.services (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    short_description TEXT NOT NULL,
    full_description TEXT NOT NULL,
    icon_name TEXT NOT NULL DEFAULT 'Package',
    accent_color TEXT NOT NULL DEFAULT 'blue',
    features JSONB NOT NULL DEFAULT '[]'::jsonb,
    process JSONB NOT NULL DEFAULT '[]'::jsonb,
    benefits JSONB NOT NULL DEFAULT '[]'::jsonb,
    display_order INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create case_studies table for editable case study content
CREATE TABLE public.case_studies (
    id TEXT PRIMARY KEY,
    client TEXT NOT NULL,
    industry TEXT NOT NULL,
    image TEXT,
    challenge TEXT NOT NULL,
    solution TEXT NOT NULL,
    testimonial TEXT,
    full_challenge JSONB NOT NULL DEFAULT '[]'::jsonb,
    full_solution JSONB DEFAULT '[]'::jsonb,
    structured_solution JSONB,
    key_metrics JSONB NOT NULL DEFAULT '[]'::jsonb,
    timeline JSONB NOT NULL DEFAULT '[]'::jsonb,
    client_quote JSONB,
    related_services JSONB NOT NULL DEFAULT '[]'::jsonb,
    display_order INTEGER NOT NULL DEFAULT 0,
    published BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.case_studies ENABLE ROW LEVEL SECURITY;

-- Services RLS policies
CREATE POLICY "Anyone can read services"
ON public.services
FOR SELECT
USING (true);

CREATE POLICY "Admins can insert services"
ON public.services
FOR INSERT
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update services"
ON public.services
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete services"
ON public.services
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Case studies RLS policies
CREATE POLICY "Anyone can read published case studies"
ON public.case_studies
FOR SELECT
USING (published = true);

CREATE POLICY "Admins can read all case studies"
ON public.case_studies
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can insert case studies"
ON public.case_studies
FOR INSERT
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update case studies"
ON public.case_studies
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete case studies"
ON public.case_studies
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Triggers for updated_at
CREATE TRIGGER update_services_updated_at
BEFORE UPDATE ON public.services
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_case_studies_updated_at
BEFORE UPDATE ON public.case_studies
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();