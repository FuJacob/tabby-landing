// Single source of truth for site-wide constants. Update SITE_URL and
// DOWNLOAD_URL once the production domain and Mac build are available.

export const SITE_URL = "https://tabby.app"; // TODO: replace with real domain
export const DOWNLOAD_URL = "#"; // TODO: replace with real .dmg or App Store URL

export const SUPPORT_EMAIL = "hi@jacobfu.com";

export const CREATOR = {
  name: "Jacob Fu",
  linkedin: "https://www.linkedin.com/in/fujacob/",
  x: "https://x.com/fujacobb",
  xHandle: "@fujacobb",
} as const;

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: CREATOR.linkedin },
  { label: "X", href: CREATOR.x },
] as const;
