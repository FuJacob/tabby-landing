"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { BANNER_DISMISS_KEY, RELEASE } from "../lib/site";

const RELEASE_DATE = new Date(RELEASE.date);

function formatRelative(from: Date, to: Date) {
  const seconds = Math.max(0, Math.floor((to.getTime() - from.getTime()) / 1000));
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days} day${days === 1 ? "" : "s"} ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} month${months === 1 ? "" : "s"} ago`;
  const years = Math.floor(days / 365);
  return `${years} year${years === 1 ? "" : "s"} ago`;
}

export function AnnouncementBanner() {
  const [relative, setRelative] = useState(() =>
    formatRelative(RELEASE_DATE, new Date()),
  );
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const update = () => setRelative(formatRelative(RELEASE_DATE, new Date()));
    update();
    const id = setInterval(update, 60_000);

    // The init script may have already flagged this as dismissed (no-flash);
    // mirror that into React state so the node is removed from the tree.
    try {
      if (localStorage.getItem(BANNER_DISMISS_KEY) === RELEASE.version) {
        setDismissed(true);
      }
    } catch {
      // ignore
    }
    return () => clearInterval(id);
  }, []);

  const dismiss = () => {
    setDismissed(true);
    try {
      localStorage.setItem(BANNER_DISMISS_KEY, RELEASE.version);
    } catch {
      // ignore — still hidden for this session
    }
    const root = document.documentElement;
    root.style.setProperty("--banner-height", "0px");
    root.classList.add("tabby-banner-dismissed");
  };

  if (dismissed) return null;

  return (
    <div
      id="announcement-banner"
      style={{ color: "#ffffff" }}
      className="fixed inset-x-0 top-0 z-[60] flex h-12 items-center justify-center gap-3 bg-[var(--button-blue)] px-10 text-sm font-medium tracking-tight sm:text-base"
    >
      <span className="truncate">
        {RELEASE.version} released {relative}. Send feedback at{" "}
        <Link
          href="/feedback"
          className="underline underline-offset-2 decoration-white/70 hover:decoration-white"
          style={{ color: "#ffffff" }}
        >
          cotabby.app/feedback
        </Link>
      </span>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="absolute right-2 flex h-7 w-7 items-center justify-center rounded-lg text-white/80 transition-colors hover:bg-white/15 hover:text-white"
      >
        <X className="h-4 w-4" strokeWidth={2.5} />
      </button>
    </div>
  );
}
