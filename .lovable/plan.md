

## Plan: Restore Blog & Clean Up Posts

### 1. Uncomment Blog link in Header
In `src/components/layout/Header.tsx`, uncomment the Blog nav item to make it visible in the main menu again.

### 2. Delete 5 of 6 AI-generated blog posts
Keep one post as a reference template (the first one: "5 Strategies to Reduce Packaging Costs Without Compromising Quality") and delete the other 5. This gives you a working example to reference when creating new posts via the admin dashboard.

### 3. Update blog visibility memory
The blog will be publicly visible again in navigation.

| File / Resource | Change |
|---|---|
| `src/components/layout/Header.tsx` | Uncomment Blog nav link |
| Database (`blog_posts`) | Delete 5 posts, keep 1 as template |

