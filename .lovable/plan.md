

## Plan: Bold Markdown Headings in Blog Post Content

### Problem
Blog post content is rendered as plain text (`whitespace-pre-wrap`), so `###` heading lines appear as raw text instead of styled headings.

### Fix
Replace the plain text `{post.content}` rendering in `BlogPost.tsx` with a simple content parser that splits the content by lines and renders any line starting with `###` as a bold heading element, while keeping all other lines as regular text.

### Changes
**File: `src/pages/BlogPost.tsx`** (lines 150-152)

Replace the raw `{post.content}` div with a component that:
1. Splits `post.content` by newlines
2. For lines starting with `### `, renders them as `<h3>` with `font-bold` styling
3. For lines starting with `## `, renders as `<h2>` with `font-bold`
4. All other lines render as regular text paragraphs

This keeps the existing `whitespace-pre-wrap` approach but adds heading detection. No other pages or styling affected.

