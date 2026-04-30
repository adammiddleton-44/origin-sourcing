## Plan: Fully Automated Sitemap for SEO / GEO / AEO

### The good news
Your project already has a working `generate-sitemap` edge function. It pulls live data from the database — every published blog post, case study, and SEO page is automatically included with correct `lastmod` dates. It's just not wired up to your domain yet.

I tested it: it currently returns all 3 blog posts, all 3 case studies, and all main pages — no manual editing required.

### The fix (one-time setup, ~2 minutes of work)

**Step 1 — Route `/sitemap.xml` to the dynamic function via Netlify**

Add one line to `public/_redirects` so requests to `https://www.originsourcing.co.uk/sitemap.xml` are silently rewritten (HTTP 200, not a redirect) to the edge function:

```
/sitemap.xml  https://ndfehpeygflwgbnegqwi.supabase.co/functions/v1/generate-sitemap  200
```

This rewrite is invisible to Google — crawlers see the XML at the original URL.

**Step 2 — Delete the static `public/sitemap.xml`**

Once the rewrite is in place, the static file is obsolete and would conflict. Remove it so the dynamic version is the single source of truth.

**Step 3 — Resubmit the sitemap in Search Console once**

After deploy, submit `https://www.originsourcing.co.uk/sitemap.xml` again in GSC. From then on, Google re-fetches it on its own schedule and picks up new posts automatically.

### What this means for your blog workflow going forward

1. Write a post in the admin panel → click **Publish**
2. Done. The next time Google crawls `/sitemap.xml`, your new post is in it with today's date as `lastmod`.

No code changes, no manual sitemap edits, no redeploys needed per post.

### Why this also helps GEO & AEO (AI search visibility)

Generative engines (ChatGPT Search, Perplexity, Google AI Overviews, Claude) discover content the same way classical SEO does — sitemaps + crawlable HTML + clean structure. Your `robots.txt` already allows GPTBot, ClaudeBot, PerplexityBot, and ChatGPT-User, so as soon as posts are in the sitemap, they're discoverable by AI engines too.

**Additional GEO/AEO best practices to layer on (optional, can be follow-up tasks):**

- **JSON-LD `Article` schema** on each blog post (author, datePublished, headline) — helps AI engines extract and cite your content
- **FAQ schema** on posts that answer specific questions — high impact for AI Overviews
- **Clear H2/H3 question-style headings** ("What is PPWR?", "How much do UK restaurants spend on packaging?") — AI engines prefer extractable Q&A blocks
- **Internal linking** from homepage / service pages to blog posts — speeds up crawl discovery
- **Author bio with credentials** (already in place via `AuthorBio.tsx`) — boosts E-E-A-T signal

I can scope these as a separate plan if you want to pursue them after the sitemap is live.

### Technical details

- File modified: `public/_redirects` (add one line at the top, before the SPA catch-all)
- File deleted: `public/sitemap.xml`
- Edge function: `generate-sitemap` already exists, deployed, public (`verify_jwt = false`), and returns valid XML with `Cache-Control: public, max-age=3600` (Google re-fetches hourly max)
- No database changes
- No new dependencies
