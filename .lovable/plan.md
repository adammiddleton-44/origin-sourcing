

## Plan: Lowercase Hawkins-Diner Slug + Add 301 Redirects

The database stores case study IDs as the URL slug. The ID `Hawkins-Diner` needs to become `hawkins-diner`. This requires a database migration plus updates to all code/static references.

### 1. Database Migration
Update the case study ID from `Hawkins-Diner` to `hawkins-diner`:
```sql
UPDATE public.case_studies SET id = 'hawkins-diner' WHERE id = 'Hawkins-Diner';
```

### 2. Code & Static File Updates

| File | Change |
|---|---|
| `src/components/services/PackagingDevelopmentPage.tsx` | `caseStudyId="Hawkins-Diner"` → `"hawkins-diner"` |
| `index.html` | Static link href `Hawkins-Diner` → `hawkins-diner` |
| `public/sitemap.xml` | URL `Hawkins-Diner` → `hawkins-diner` |
| `public/_redirects` | Add two 301 rules above the catch-all |

### 3. `public/_redirects` (final content)
```
/case-studies/Hawkins-Diner /case-studies/hawkins-diner 301
/case-studies/sessions-growth-flatform-for-founds-led-brands /case-studies/sessions-growth-platform-for-founder-led-brands 301
/*    /index.html   200
```

### 4. Generate-sitemap edge function
No changes needed — it dynamically reads IDs from the database, so it will automatically use `hawkins-diner` after the migration.

