

## Plan: Delete 3 Original Sample Blog Posts

Remove the three placeholder blog posts that were created with the initial site setup and have no user-written content.

### Posts to delete

| Title | Slug |
|---|---|
| 5 Strategies to Reduce Packaging Costs Without Compromising Quality | `5-strategies-reduce-packaging-costs` |
| Case Study: How We Helped a Food Manufacturer Save £310K | `case-study-food-manufacturer-310k` |
| Understanding EPR: What UK Businesses Need to Know in 2024 | `understanding-epr-uk-2024` |

### Action

Single database DELETE statement removing these three rows from `blog_posts` by their IDs. No `page_seo` entries exist for these posts, so no additional cleanup needed. No code changes required.

