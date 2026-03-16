

## Plan: Add "About the Author" Section + Related Articles to Blog Posts

### 1. Create `AuthorBio` component (`src/components/blog/AuthorBio.tsx`)
A reusable card placed after blog content, before the CTA section. Contains:
- Adam's photo (reusing `adam-middleton.jpg` asset, same styling as homepage)
- "About the Author" heading
- Name: Adam Middleton, Founder of Origin Sourcing
- Bio text (as provided)
- Link to `/contact` ("Get in Touch") and `/about` ("Learn More")

### 2. Create `RelatedArticles` component (`src/components/blog/RelatedArticles.tsx`)
Fetches up to 3 published blog posts from the same category (excluding current post), falling back to recent posts if fewer than 3 match. Displays as small cards with title, category, and read time. Links to `/blog/{slug}`.

### 3. Update `BlogPost.tsx`
Insert `AuthorBio` after the content section and `RelatedArticles` after it, before the existing CTA section. Pass the current post's category and slug to `RelatedArticles`.

### Layout Order (bottom of post)
1. Blog content (existing)
2. **About the Author** — card with photo, bio, links
3. **Related Articles** — up to 3 posts
4. CTA section (existing, already has "Get in Touch" link)

| File | Change |
|---|---|
| `src/components/blog/AuthorBio.tsx` | New component |
| `src/components/blog/RelatedArticles.tsx` | New component |
| `src/pages/BlogPost.tsx` | Import and insert both components |

