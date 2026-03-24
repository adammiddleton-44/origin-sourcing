

## Plan: Publish EPR Blog Post

Insert the blog post into the `blog_posts` table with all provided content, published immediately.

### Database Insert

One row into `blog_posts` with:
- **Title**: How EPR Changed Food Service Packaging: The PLA vs Aqueous Coating Debate, Settled
- **Slug**: `epr-pla-vs-aqueous-coating-food-service-packaging`
- **Category**: Sustainability
- **Excerpt**: UK EPR fees created a £265/tonne gap between PLA and aqueous coated packaging. What the new fee structure means for food service operators planning 2025-2028 packaging strategy.
- **Content**: Full article text as provided
- **Read time**: 8 min read
- **Published**: true, with `published_at` set to now
- **SEO title**: How EPR Changed Food Service Packaging: PLA vs Aqueous Coatings Explained | Origin Sourcing
- **Meta description**: UK EPR fees created a £265/tonne gap between PLA and aqueous coated packaging. What the new fee structure means for food service operators planning 2025-2028 packaging strategy.

### Also insert a `page_seo` entry

For path `/blog/epr-pla-vs-aqueous-coating-food-service-packaging` with the same SEO title and meta description.

### No code changes required
Data-only operation via two database inserts.

