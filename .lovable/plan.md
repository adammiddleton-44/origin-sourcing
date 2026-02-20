
## Change "Book a Call" Buttons to "Contact Us"

This plan updates all "Book a Call" call-to-action buttons across the site to say "Contact Us" instead, and changes the link destination to the `/contact` page rather than the external Apollo booking link.

---

### Files to Update

#### 1. src/components/layout/Header.tsx (2 changes)
- Desktop nav button (line 123): "Book a Call" → "Contact Us", link → `/contact`
- Mobile menu button (line 181): "Book a Call" → "Contact Us", link → `/contact`

#### 2. src/components/home/HeroSection.tsx (1 change)
- Hero CTA button (line 48): "Book a Call" → "Contact Us", link → `/contact`

#### 3. src/components/home/CTASection.tsx (1 change)
- Main CTA button (line 50): "Book a Call" → "Contact Us", link → `/contact`
- Also swap the external `<a>` tag for a React Router `<Link>` component
- Remove the `Calendar` icon (or swap for a relevant icon like `Mail`)

#### 4. src/components/home/FounderSection.tsx (1 change)
- Founder section button (line 52): "Book a Call" → "Contact Us", link → `/contact`
- Swap external `<a>` for `<Link>`, remove `Calendar` icon

#### 5. src/pages/Contact.tsx (1 change)
- The "Book a Call" button on the Contact page itself (line 244) can also be updated or left as-is since it's on the contact page where it makes sense to still offer a calendar booking. This will be left unchanged as it's a secondary option on an already-relevant page.

---

### Summary

| Location | Change |
|----------|--------|
| Header (desktop) | "Book a Call" → "Contact Us", links to /contact |
| Header (mobile) | "Book a Call" → "Contact Us", links to /contact |
| Hero section | "Book a Call" → "Contact Us", links to /contact |
| CTA section | "Book a Call" → "Contact Us", links to /contact |
| Founder section | "Book a Call" → "Contact Us", links to /contact |
| Contact page | Left as-is (secondary booking option on contact page) |

All external Apollo booking links on these buttons will be replaced with internal navigation to the `/contact` page, keeping users on your site.
