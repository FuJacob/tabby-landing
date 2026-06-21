import type { MetadataRoute } from "next";
import { SITE_URL } from "@/app/lib/site";

// Real content-change dates so `lastModified` carries signal instead of always
// reporting the build time. The legal pages mirror the "LAST UPDATED" date
// shown on the pages themselves; the homepage and release notes genuinely
// change with each deploy, so they track the build date.
const LEGAL_UPDATED = "2026-05-20";
const SEO_CONTENT_UPDATED = "2026-06-21";

export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date();

  return [
    {
      url: SITE_URL,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: LEGAL_UPDATED,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: LEGAL_UPDATED,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/release-notes`,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/cotypist-alternative`,
      lastModified: SEO_CONTENT_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/guides/cotypist-to-cotabby`,
      lastModified: SEO_CONTENT_UPDATED,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/ai-autocomplete-mac`,
      lastModified: SEO_CONTENT_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/apple-intelligence-autocomplete-mac`,
      lastModified: SEO_CONTENT_UPDATED,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/mac-app-compatibility`,
      lastModified: SEO_CONTENT_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/security`,
      lastModified: SEO_CONTENT_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
