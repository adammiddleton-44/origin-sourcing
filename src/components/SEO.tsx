import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
  };
  noindex?: boolean;
}

const BASE_URL = "https://originsourcing.co.uk";
const DEFAULT_TITLE = "Origin Sourcing | Expert Packaging Procurement Consultancy";
const DEFAULT_DESCRIPTION = "Transform your packaging supply chain with expert procurement strategy. Achieve 20-35% cost savings with Origin Sourcing's specialist consulting services.";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

export function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  article,
  noindex = false,
}: SEOProps) {
  const fullTitle = title ? `${title} | Circular Sourcing` : DEFAULT_TITLE;
  const fullCanonical = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Origin Sourcing" />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Article Meta (for blog posts) */}
      {article?.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {article?.modifiedTime && (
        <meta property="article:modified_time" content={article.modifiedTime} />
      )}
      {article?.author && (
        <meta property="article:author" content={article.author} />
      )}
      {article?.section && (
        <meta property="article:section" content={article.section} />
      )}
    </Helmet>
  );
}
