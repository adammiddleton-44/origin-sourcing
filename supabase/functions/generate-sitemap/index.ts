import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const BASE_URL = 'https://www.originsourcing.co.uk';

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Fetch all pages from page_seo table
    const { data: pages, error: pagesError } = await supabase
      .from('page_seo')
      .select('page_path, updated_at, noindex')
      .eq('noindex', false);

    if (pagesError) {
      console.error('Error fetching pages:', pagesError);
      throw pagesError;
    }

    // Fetch published blog posts
    const { data: posts, error: postsError } = await supabase
      .from('blog_posts')
      .select('slug, updated_at, published_at')
      .eq('published', true);

    if (postsError) {
      console.error('Error fetching posts:', postsError);
      throw postsError;
    }

    // Fetch published case studies
    const { data: caseStudies, error: caseStudiesError } = await supabase
      .from('case_studies')
      .select('id, updated_at')
      .eq('published', true);

    if (caseStudiesError) {
      console.error('Error fetching case studies:', caseStudiesError);
      throw caseStudiesError;
    }

    // Build sitemap XML
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

    // Add static pages
    for (const page of pages || []) {
      const lastmod = page.updated_at 
        ? new Date(page.updated_at).toISOString().split('T')[0] 
        : new Date().toISOString().split('T')[0];
      
      const priority = page.page_path === '/' ? '1.0' : 
                       page.page_path.startsWith('/services') ? '0.9' : '0.8';
      
      const changefreq = page.page_path === '/blog' ? 'weekly' : 'monthly';

      sitemap += `  <url>
    <loc>${BASE_URL}${page.page_path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;
    }

    // Add blog posts
    for (const post of posts || []) {
      const lastmod = post.updated_at 
        ? new Date(post.updated_at).toISOString().split('T')[0]
        : post.published_at
        ? new Date(post.published_at).toISOString().split('T')[0]
        : new Date().toISOString().split('T')[0];

      sitemap += `  <url>
    <loc>${BASE_URL}/blog/${post.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
    }

    // Add case studies
    for (const cs of caseStudies || []) {
      const lastmod = cs.updated_at
        ? new Date(cs.updated_at).toISOString().split('T')[0]
        : new Date().toISOString().split('T')[0];

      sitemap += `  <url>
    <loc>${BASE_URL}/case-studies/${cs.id}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
    }

    sitemap += `</urlset>`;

    const totalUrls = (pages?.length || 0) + (posts?.length || 0) + (caseStudies?.length || 0);
    console.log('Sitemap generated successfully with', totalUrls, 'URLs');

    return new Response(sitemap, {
      headers: { 
        ...corsHeaders, 
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600'
      },
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error generating sitemap:', errorMessage);
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
