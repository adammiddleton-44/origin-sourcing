

## Plan: Update Case Study SEO Entries in Database

### Problem
The `page_seo` table contains three outdated case study entries from the old placeholder case studies:
- `/case-studies/fmcg-manufacturer`
- `/case-studies/retail-chain`
- `/case-studies/pharmaceutical`

None of these exist anymore. The live case studies have no SEO entries:
- `/case-studies/sessions-growth-flatform-for-founds-led-brands` (Sessions)
- `/case-studies/mikos-building-scalable-infrastructure-for-rapid-multi-site-expansion` (Mikos)
- `/case-studies/hawkins-diner` (Hawkins Diner)

### Fix (Database Migration)

1. **Delete** the three old SEO entries for `fmcg-manufacturer`, `retail-chain`, and `pharmaceutical`
2. **Insert** three new SEO entries for the live case studies with placeholder titles/descriptions you can then edit via the admin SEO dashboard

| Old Path (delete) | New Path (insert) |
|---|---|
| `/case-studies/fmcg-manufacturer` | `/case-studies/sessions-growth-flatform-for-founds-led-brands` |
| `/case-studies/retail-chain` | `/case-studies/mikos-building-scalable-infrastructure-for-rapid-multi-site-expansion` |
| `/case-studies/pharmaceutical` | `/case-studies/hawkins-diner` |

New entries will have sensible default SEO titles and descriptions based on the live case study content. You can refine them via the admin dashboard afterwards.

### No code changes required
This is a data-only fix — one database migration.

