// Single source of truth for site-wide constants.

export const SITE_URL = "https://tabby.app"; // TODO: replace with real domain
export const GITHUB_URL = "https://github.com/fujacob/tabby";
export const DOWNLOAD_URL = "https://github.com/fujacob/tabby/releases";

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
