"use client";

import { useEffect, useState } from "react";
import { CountUp } from "./motion";

const FALLBACK = 700;

export function GithubStarLabel() {
  const [stars, setStars] = useState(FALLBACK);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/github-stars")
      .then((r) => (r.ok ? r.json() : null))
      .then((data: { stars?: number } | null) => {
        if (cancelled || !data?.stars) return;
        setStars(data.stars);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return <CountUp to={stars} duration={1.6} suffix="+ GitHub Stars" />;
}
