

## Fix Domain Mismatch: `originsourcing.co.uk` → `www.originsourcing.co.uk`

Update all references from `https://originsourcing.co.uk` to `https://www.originsourcing.co.uk` in these files:

1. **`public/sitemap.xml`** — All 12 `<loc>` URLs
2. **`index.html`** — canonical link, og:url, og:image, twitter:image, schema.org JSON-LD url
3. **`src/components/SEO.tsx`** — `BASE_URL` constant
4. **`public/robots.txt`** — Sitemap URL
5. **`supabase/functions/generate-sitemap/index.ts`** — base URL used for dynamic sitemap generation (needs verification)

Will also run a codebase search for any other `originsourcing.co.uk` references to ensure nothing is missed.

