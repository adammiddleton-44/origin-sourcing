

## Add Netlify SPA Redirect File

Create `public/_redirects` with a single rewrite rule so Netlify serves `index.html` for all routes, enabling SPA client-side routing.

### Change

| File | Action |
|---|---|
| `public/_redirects` | Create with `/* /index.html 200` |

