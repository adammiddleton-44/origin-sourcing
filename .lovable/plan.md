

## Plan: Publish "UK Restaurant Packaging Spend Benchmarks" Blog Post with Image

### 1. Generate blog image
Use the AI image generation model to create a professional editorial image relevant to UK restaurant packaging spend/benchmarks — e.g. stacked takeaway packaging, cost analysis visuals, food service context. Upload to the `blog-images` storage bucket.

### 2. Insert blog post into `blog_posts` table
- **Title**: UK Restaurant Packaging Spend Benchmarks: What Multi-Site Operators Should Actually Be Paying
- **Slug**: `uk-restaurant-packaging-spend-benchmarks`
- **Category**: Supply Chain & Logistics
- **Excerpt**: Most multi-site UK food service operators are paying 20 to 35% more than benchmark on packaging. Here's what the numbers actually look like by format, and how to tell if you're overspending.
- **Content**: Full article text as provided (markdown formatted)
- **Read time**: 10 min read
- **Published**: true, `published_at` = now
- **SEO title**: UK Restaurant Packaging Spend Benchmarks 2026: What Should You Be Paying? | Origin Sourcing
- **Meta description**: Most multi-site UK food service operators are paying 20 to 35% more than benchmark on packaging. Here's what the numbers actually look like by format, and how to tell if you're overspending.
- **image_url**: URL from uploaded storage image

### 3. Insert `page_seo` entry
For path `/blog/uk-restaurant-packaging-spend-benchmarks` with the same SEO title and meta description.

### No code changes required
Data-only operation plus image generation/upload.

