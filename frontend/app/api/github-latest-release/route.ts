import { NextResponse } from "next/server";
import { GITHUB_REPO } from "../../lib/site";

type GitHubLatestRelease = {
  tag_name?: string;
};

const STALE_WHILE_REVALIDATE_SECONDS = 60;

export const revalidate = 300;

/**
 * Converts GitHub release tags into the compact version text shown in CTAs.
 */
function formatVersionForDisplay(tagName: string) {
  const trimmed = tagName.trim();
  return trimmed.replace(/^v(?=\d)/i, "") || trimmed;
}

/**
 * Builds the shared-cache policy for the latest-release endpoint.
 */
function buildCacheControl() {
  return [
    "public",
    "max-age=0",
    `s-maxage=${revalidate}`,
    `stale-while-revalidate=${STALE_WHILE_REVALIDATE_SECONDS}`,
  ].join(", ");
}

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  const headers: HeadersInit = { Accept: "application/vnd.github+json" };
  if (token) headers.Authorization = `token ${token}`;

  let version: string | null = null;

  try {
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`,
      {
        headers,
        next: { revalidate },
      },
    );

    if (res.ok) {
      const data = (await res.json()) as GitHubLatestRelease;
      if (typeof data.tag_name === "string") {
        version = formatVersionForDisplay(data.tag_name);
      }
    }
  } catch {
    // Keep the button usable; the client falls back to generic release text.
  }

  return NextResponse.json(
    { version },
    {
      headers: {
        "Cache-Control": buildCacheControl(),
      },
    },
  );
}
