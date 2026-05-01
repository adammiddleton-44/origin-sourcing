## Homepage performance optimisation

PageSpeed shows Desktop 77 / Mobile 71. Three concrete fixes will lift both scores significantly without any visual or functional change.

### Changes

**1. Convert oversized images to WebP**
- `src/assets/adam-middleton.jpg` (246 KB) → `adam-middleton.webp` (~42 KB) — 83% smaller
- `src/assets/origin-logo.png` (61 KB) → `origin-logo.webp` (~7 KB) — 88% smaller
- Update imports in: `Logo.tsx`, `Header.tsx`, `Footer.tsx`, `Auth.tsx`, `FounderSection.tsx`, `AuthorBio.tsx`

**2. Add `loading="lazy"` + dimensions to below-the-fold images**
- Founder portrait in `FounderSection.tsx`
- Case study tiles in `CaseStudiesSection.tsx`
- Reduces initial download weight and prevents layout shift (CLS)

**3. Defer third-party scripts in `index.html`**
- Move Google Analytics (gtag) and Apollo tracker initialisation to fire after `window.load` using `requestIdleCallback` (with setTimeout fallback)
- Both are analytics — they don't need to block first paint
- Tracking still fires for any user who stays past ~1 second (i.e. virtually everyone except instant bounces)

### Already done (in-place compression, harmless)
- `public/og-image-new.png` re-compressed from 325 KB → 198 KB. No code change needed; visually identical.

### Expected impact
- LCP (Largest Contentful Paint): improves by ~0.5–1.5s on mobile
- TBT (Total Blocking Time): drops because GA + Apollo no longer execute during initial parse
- Realistic target: **Desktop 90+, Mobile 85+**

### What won't change
- Visual design, layout, colours, typography, copy
- SEO (actually improves — Core Web Vitals are a ranking signal)
- Cookie consent flow, admin functionality, backend
- Analytics data quality (only the very first ~1s of the page is excluded)

### Out of scope (can revisit later)
- Code-splitting embla-carousel autoplay plugin
- Service worker / route prefetching
- Static prerendering beyond what Netlify already does for bots
