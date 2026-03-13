

## Plan: Static HTML Fallback, Robots.txt, Sitemap Updates

### Confirmed Case Study Slugs (from database)

The actual database IDs are:
- `sessions-growth-flatform-for-founds-led-brands` (Sessions)
- `mikos-building-scalable-infrastructure-for-rapid-multi-site-expansion` (Mikos)
- `Hawkins-Diner` (Hawkins Diner)

These will be used as the routes in the sitemap: `/case-studies/{id}`.

### Flash of Static Content (FOSC)

Yes, the static HTML will briefly flash before React hydrates and replaces it. To minimise this:
- Add a small `<style>` block in `index.html` that sets `#root` content to `opacity: 0` initially
- Add a CSS transition: `#root { opacity: 0; transition: opacity 0.15s ease-in; }`
- In `main.tsx`, after `createRoot().render()`, set `opacity: 1` on the root element
- This gives a smooth fade-in rather than a jarring content swap

### Changes

**1. `index.html`** — Add static SEO fallback inside `<div id="root">`
- Add inline `<style>` for opacity fade transition on `#root`
- Include semantic HTML: nav with links, h1/h2/p from hero, services summary list, company info, contact details
- Content mirrors the real homepage so crawlers index meaningful text
- React's `createRoot().render()` replaces this content on hydration

**2. `src/main.tsx`** — Add fade-in after render
- After `createRoot(rootEl).render(...)`, set `rootEl.style.opacity = '1'`

**3. `public/robots.txt`** — Add AI crawler rules (before wildcard)
```
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ChatGPT-User
Allow: /
```

**4. `public/sitemap.xml`** — Update dates + add case study URLs
- All `<lastmod>` → `2026-03-13`
- Add three case study URLs with priority 0.7:
  - `/case-studies/sessions-growth-flatform-for-founds-led-brands`
  - `/case-studies/mikos-building-scalable-infrastructure-for-rapid-multi-site-expansion`
  - `/case-studies/Hawkins-Diner`

**5. `supabase/functions/generate-sitemap/index.ts`** — Add case study query
- Query `case_studies` table for all entries
- Generate `<url>` entries for each at `/case-studies/{id}` with priority 0.7

### Files Modified
| File | Change |
|---|---|
| `index.html` | Static HTML fallback + opacity style |
| `src/main.tsx` | Fade-in after render |
| `public/robots.txt` | AI bot rules |
| `public/sitemap.xml` | Updated dates + case study URLs |
| `supabase/functions/generate-sitemap/index.ts` | Dynamic case study inclusion |

