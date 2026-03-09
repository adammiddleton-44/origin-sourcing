
-- Fix all RESTRICTIVE RLS policies to PERMISSIVE across 6 tables (21 policies)

-- 1. contact_submissions
DROP POLICY "Admins can read contact submissions" ON public.contact_submissions;
CREATE POLICY "Admins can read contact submissions" ON public.contact_submissions FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'::app_role));

DROP POLICY "Anyone can submit contact form" ON public.contact_submissions;
CREATE POLICY "Anyone can submit contact form" ON public.contact_submissions FOR INSERT TO public WITH CHECK (true);

-- 2. services
DROP POLICY "Anyone can read services" ON public.services;
CREATE POLICY "Anyone can read services" ON public.services FOR SELECT TO public USING (true);

DROP POLICY "Admins can insert services" ON public.services;
CREATE POLICY "Admins can insert services" ON public.services FOR INSERT TO public WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

DROP POLICY "Admins can update services" ON public.services;
CREATE POLICY "Admins can update services" ON public.services FOR UPDATE TO public USING (public.has_role(auth.uid(), 'admin'::app_role));

DROP POLICY "Admins can delete services" ON public.services;
CREATE POLICY "Admins can delete services" ON public.services FOR DELETE TO public USING (public.has_role(auth.uid(), 'admin'::app_role));

-- 3. blog_posts
DROP POLICY "Anyone can read published posts" ON public.blog_posts;
CREATE POLICY "Anyone can read published posts" ON public.blog_posts FOR SELECT TO public USING (published = true);

DROP POLICY "Admins can insert blog posts" ON public.blog_posts;
CREATE POLICY "Admins can insert blog posts" ON public.blog_posts FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

DROP POLICY "Admins can update blog posts" ON public.blog_posts;
CREATE POLICY "Admins can update blog posts" ON public.blog_posts FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'::app_role));

DROP POLICY "Admins can delete blog posts" ON public.blog_posts;
CREATE POLICY "Admins can delete blog posts" ON public.blog_posts FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'::app_role));

-- 4. case_studies
DROP POLICY "Anyone can read published case studies" ON public.case_studies;
CREATE POLICY "Anyone can read published case studies" ON public.case_studies FOR SELECT TO public USING (published = true);

DROP POLICY "Admins can read all case studies" ON public.case_studies;
CREATE POLICY "Admins can read all case studies" ON public.case_studies FOR SELECT TO public USING (public.has_role(auth.uid(), 'admin'::app_role));

DROP POLICY "Admins can insert case studies" ON public.case_studies;
CREATE POLICY "Admins can insert case studies" ON public.case_studies FOR INSERT TO public WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

DROP POLICY "Admins can update case studies" ON public.case_studies;
CREATE POLICY "Admins can update case studies" ON public.case_studies FOR UPDATE TO public USING (public.has_role(auth.uid(), 'admin'::app_role));

DROP POLICY "Admins can delete case studies" ON public.case_studies;
CREATE POLICY "Admins can delete case studies" ON public.case_studies FOR DELETE TO public USING (public.has_role(auth.uid(), 'admin'::app_role));

-- 5. page_seo
DROP POLICY "Anyone can read page SEO" ON public.page_seo;
CREATE POLICY "Anyone can read page SEO" ON public.page_seo FOR SELECT TO public USING (true);

DROP POLICY "Admins can insert page SEO" ON public.page_seo;
CREATE POLICY "Admins can insert page SEO" ON public.page_seo FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

DROP POLICY "Admins can update page SEO" ON public.page_seo;
CREATE POLICY "Admins can update page SEO" ON public.page_seo FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'::app_role));

DROP POLICY "Admins can delete page SEO" ON public.page_seo;
CREATE POLICY "Admins can delete page SEO" ON public.page_seo FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'::app_role));

-- 6. user_roles
DROP POLICY "Users can view their own roles" ON public.user_roles;
CREATE POLICY "Users can view their own roles" ON public.user_roles FOR SELECT TO authenticated USING (user_id = auth.uid());

DROP POLICY "Admins can manage all roles" ON public.user_roles;
CREATE POLICY "Admins can manage all roles" ON public.user_roles FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin'::app_role)) WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));
