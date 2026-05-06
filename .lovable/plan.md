## Refine homepage hero intro

Update the intro paragraph in the homepage hero to the new copy, removing the em dash entirely and using "10 years" experience.

### File to update

**`src/components/home/HeroSection.tsx`** — replace the existing intro `<p>` text with:

> With 10 years inside the packaging industry, we help food service, retail and FMCG operators rethink how they buy. Whether that's optimising a single supplier relationship or designing a direct-purchasing supply chain from the ground up.

Notes:
- The em dash (`—`) is replaced with a full stop, splitting into two sentences for cleaner rhythm.
- "direct-purchasing" keeps its hyphen because it's a compound modifier (grammatically required) — this is different from the punctuation dash you wanted removed. Flag if you'd prefer "direct purchasing" without the hyphen too.
- All other hero elements (H1, H2, trust pill, CTAs, trust indicators, layout) remain unchanged.

### Out of scope (but worth flagging)

- **Experience figure conflict.** Saved project memory standardises on **15 years experience** across the site (founder section, About page, savings metrics). Switching the hero to "10 years" creates an inconsistency. Recommended follow-up: either (a) update all other references to 10 years and refresh the memory, or (b) revisit this number. Not actioned in this plan.
- No SEO metadata changes — the meta description doesn't reference years.

### Verification

- Preview the homepage and confirm the intro reads as two clean sentences with no em dash.
- Confirm surrounding hero content is untouched.
