import { NextResponse } from "next/server";

const REPO = "fujacob/cotabby";
const FALLBACK = 600;

export const revalidate = 86400;

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  const headers: HeadersInit = { Accept: "application/vnd.github+json" };
  if (token) headers.Authorization = `token ${token}`;

  let stars = FALLBACK;
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}`, {
      headers,
      next: { revalidate: 86400 },
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

  const rounded = Math.max(FALLBACK, Math.floor(stars / 50) * 50);
  return NextResponse.json(
    { stars: rounded },
    {
      headers: {
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=86400",
      },
    },
  );
}
