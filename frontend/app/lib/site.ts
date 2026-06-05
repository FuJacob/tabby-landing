// Single source of truth for site-wide constants.

export const SITE_URL = "https://cotabby.app";
export const GITHUB_URL = "https://github.com/FuJacob/cotabby";
export const DOWNLOAD_URL = "https://github.com/FuJacob/cotabby/releases/latest/download/cotabby.dmg";

export const DISCORD_URL = "https://discord.gg/qBq5RHcruX";
export const SUPPORT_EMAIL = "hello@cotabby.app";

export const CREATOR = {
  name: "Jacob Fu",
  linkedin: "https://www.linkedin.com/in/fujacob/",
  x: "https://x.com/fujacobb",
  xHandle: "@fujacobb",
} as const;

// Current release shown in the announcement banner. Bumping `version` re-shows
// the banner to visitors who dismissed an older one.
export const RELEASE = {
  version: "v0.4.2-beta",
  date: "2026-06-02T00:00:00Z",
} as const;

export const BANNER_DISMISS_KEY = "cotabby-banner-dismissed";
