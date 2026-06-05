"use client";

import { useEffect, useState } from "react";

type LatestReleaseResponse = {
  version?: string | null;
};

const FALLBACK_LABEL = "Latest release";

let cachedLabel: string | null = null;
let pendingRequest: Promise<string | null> | null = null;

/**
 * Reads the latest release label through our server route so GITHUB_TOKEN never
 * reaches the browser.
 */
function fetchLatestReleaseLabel() {
  if (cachedLabel) {
    return Promise.resolve(cachedLabel);
  }

  pendingRequest ??= fetch("/api/github-latest-release")
    .then((response) => (response.ok ? response.json() : null))
    .then((data: LatestReleaseResponse | null) => {
      const version = data?.version?.trim();
      cachedLabel = version ? `Version ${version}` : null;
      return cachedLabel;
    })
    .catch(() => null)
    .finally(() => {
      pendingRequest = null;
    });

  return pendingRequest;
}

export function DownloadVersionLabel() {
  const [label, setLabel] = useState(cachedLabel ?? FALLBACK_LABEL);

  useEffect(() => {
    let cancelled = false;

    fetchLatestReleaseLabel().then((nextLabel) => {
      if (!cancelled && nextLabel) {
        setLabel(nextLabel);
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return label;
}
