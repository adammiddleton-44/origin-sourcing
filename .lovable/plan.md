## Homepage hero repositioning

Update the homepage hero copy and SEO metadata to reflect the new category-led positioning as a UK packaging purchasing consultancy for multi-site operators.

### Files to update

**1. `src/components/home/HeroSection.tsx`**

- **H1:** Replace "Transform your Packaging Supply Chain" with:
  > The packaging purchasing specialists
  
  Keep the gradient treatment on "purchasing specialists" (the second half) so the visual rhythm matches the current design.

- **H2:** Replace "Direct Purchasing Strategy for the Food Service Industry" with:
  > Smarter buying for food service, retail and FMCG brands

- **Intro paragraph:** Replace existing copy with:
  > We help multi-site operators buy packaging better — from a straightforward switch to a stronger supplier, through to building a full direct-purchasing supply chain. Expect 20-30% cost savings, reliable supply and seamless 3PL fulfilment.

- Trust pills, CTAs and layout: **unchanged.**

**2. `src/pages/Index.tsx`** (fallback SEO)

- **fallbackTitle:** `Packaging Purchasing Consultancy for Multi-Site Operators`
- **fallbackDescription:** `Independent UK packaging purchasing and procurement consultancy helping multi-site food service, retail and FMCG operators cut cost by 20-30% with smarter buying and 3PL fulfilment.`

(The "procurement" keyword appears once here only, for SEO capture, without affecting on-page voice.)

**3. `src/components/SEO.tsx`** (default fallbacks)

- Update `DEFAULT_TITLE` to `Origin Sourcing | Packaging Purchasing Consultancy for Multi-Site Operators`
- Update `DEFAULT_DESCRIPTION` to match the new meta description above.

### Out of scope

- No changes to services, footer, other pages, or routing.
- No changes to the admin SEO override system — if a custom title/description has been set in `AdminSEO` for `/`, that still wins (these are fallbacks only).
- No image, layout or component structure changes.

### Verification

After implementation, confirm in the preview that:
- Hero renders the new H1/H2/intro with the existing gradient styling intact.
- Browser tab title and `<meta name="description">` reflect the new SEO copy (assuming no admin override is set).
