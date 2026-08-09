import { site } from "../../data/site";

/**
 * React 19 hoists `<title>` and `<meta>` rendered anywhere in the tree into
 * `<head>`, so page-level SEO needs no external helmet library.
 */
export default function Seo({ title, description }) {
  return (
    <>
      <title>{title ? `${title} | ${site.name}` : `${site.name} | ${site.role}`}</title>
      {description && <meta name="description" content={description} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:title" content={title ? `${title} | ${site.name}` : site.name} />
    </>
  );
}
