## Fit all four trust pills on one line + clarify "auto-publishing"

### Part 1 — Trust pills onto one row

The four pills (Direct manufacturer relationships / Supplier transitions / Performance-based pricing / 3PL integration expertise) currently wrap because the row uses `flex-wrap` with `gap-8` (32px gaps) inside a `max-w-6xl` container, and the combined pill widths exceed the available width on a 1158px viewport.

To force one row at desktop width, update the trust-indicator row in `src/components/home/HeroSection.tsx`:

- Replace `flex flex-wrap justify-center gap-8` with `flex flex-nowrap justify-center gap-3 lg:gap-4 overflow-x-auto md:overflow-visible`.
- Tighten each pill: change `gap-2 px-4 py-2` to `gap-1.5 px-3 py-1.5` and add `whitespace-nowrap shrink-0`.
- Drop icon size from `w-5 h-5` to `w-4 h-4`.
- Keep text at `text-sm` on desktop; add `text-xs md:text-sm` so smaller screens stay tidy.

Mobile fallback: at narrow widths the row becomes horizontally scrollable (or we can switch back to wrapping under `md`). Recommendation: keep wrapping on mobile (`flex-wrap md:flex-nowrap`) since horizontal scroll on a hero feels off — pills will stack on phones, sit on one line from `md` upwards.

### Part 2 — Why edits seem to go "live"

What you're seeing isn't really live publishing — it's the **preview URL** updating in real time. Two different URLs exist:

- **Preview** (`id-preview--…lovable.app`) — updates on every edit, only visible to you/collaborators logged into Lovable.
- **Published** (`origin-sourcing.lovable.app` and any custom domain) — only updates when you click **Publish → Update** in the top-right.

Frontend changes (UI/copy/styling like these hero tweaks) require a manual Update click to reach the live site. Backend changes (edge functions, DB migrations) do deploy automatically — but none of the recent edits have touched backend.

If the live site genuinely is reflecting your edits without you clicking Update, the most likely causes are:
1. You're checking the preview URL and assuming it's the live one.
2. Someone clicked Publish recently (history will show it).
3. A custom domain is pointed at the preview rather than the published build (unlikely, worth checking under Project Settings → Domains).

### Verification

- Reload the homepage in preview at 1158px and confirm the four pills sit on one row.
- Resize narrower (≤768px) to confirm they wrap cleanly.
- Compare the preview URL vs the published URL to confirm the live site is unchanged until you Publish.
