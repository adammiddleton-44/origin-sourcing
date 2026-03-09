

## Fix All RESTRICTIVE RLS Policies to PERMISSIVE

Every RLS policy across all 6 tables is currently set as RESTRICTIVE. PostgreSQL requires at least one PERMISSIVE policy per command type for access to work. This means database-level access control is non-functional — the app only works because some queries use the service role key (bypassing RLS entirely).

### Migration

A single SQL migration will drop and recreate all policies as PERMISSIVE across these tables:

1. **contact_submissions** (2 policies) — SELECT for admins, INSERT for public
2. **services** (4 policies) — SELECT for public, INSERT/UPDATE/DELETE for admins
3. **blog_posts** (4 policies) — SELECT published for public, INSERT/UPDATE/DELETE for admins
4. **case_studies** (5 policies) — SELECT published for public, SELECT all + INSERT/UPDATE/DELETE for admins
5. **page_seo** (4 policies) — SELECT for public, INSERT/UPDATE/DELETE for admins
6. **user_roles** (2 policies) — SELECT own roles for authenticated, ALL for admins

Total: 21 policies dropped and recreated as PERMISSIVE. No code changes needed — only the policy type changes from RESTRICTIVE to PERMISSIVE, preserving the exact same access rules.

