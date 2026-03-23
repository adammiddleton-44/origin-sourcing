

## Updated Plan: `window.prerenderReady` — Services Page Clarification

**Finding**: `src/pages/Services.tsx` imports from `src/data/services` (a static TypeScript file), not from Supabase. It has no `useQuery`, no `isLoading` state, and no Supabase calls. The `usePageSEO` hook does fetch SEO metadata from Supabase, but that's non-content metadata and irrelevant to prerender readiness.

**Conclusion**: The original plan is correct — `/services` should use `usePrerenderReady(true)` (mount-based). No change needed.

Note: Individual service detail pages (`/services/:serviceId` via `ServiceDetail.tsx`) do fetch from Supabase and would need the async pattern, but per the user's original instructions those are listed as mount-based. If desired, those could be updated too, but the services listing page itself is purely static.

### No changes to the approved plan required.

