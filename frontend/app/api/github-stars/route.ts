import { NextResponse } from "next/server";
import { GITHUB_REPO } from "../../lib/site";

const FALLBACK = 700;
const STAR_BUCKET_SIZE = 50;
const STALE_WHILE_REVALIDATE_SECONDS = 60;

export const revalidate = 300;

/**
 * Rounds the live GitHub star count down to the nearest public display bucket.
 *
 * Bucketing keeps the UI stable while still letting the count update quickly
 * after the project crosses a meaningful threshold.
 */
function roundStarsForDisplay(stars: number) {
  return Math.max(
    FALLBACK,
    Math.floor(stars / STAR_BUCKET_SIZE) * STAR_BUCKET_SIZE,
  );
}

/**
 * Builds the shared-cache policy for the GitHub star endpoint.
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

  let stars = FALLBACK;
  try {
    const res = await fetch(`https://api.github.com/repos/${GITHUB_REPO}`, {
      headers,
      next: { revalidate },
    });
    if (res.ok) {
      const data = (await res.json()) as { stargazers_count?: number };
      if (typeof data.stargazers_count === "number") {
        stars = data.stargazers_count;
      }
    }
  } catch {
    // fall through to fallback
  }

  return NextResponse.json(
    { stars: roundStarsForDisplay(stars) },
    {
      headers: {
        "Cache-Control": buildCacheControl(),
      },
    },
  );
}
