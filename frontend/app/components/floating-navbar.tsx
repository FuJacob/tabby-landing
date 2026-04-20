"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type MouseEvent } from "react";
import { DOWNLOAD_URL, GITHUB_URL } from "../lib/site";
import { AppleIcon, GithubIcon } from "./icons";

const textLinks = [
  { href: "#demo", label: "demo" },
  { href: "#how-it-works", label: "how it works" },
  { href: "#privacy", label: "privacy" },
  { href: "#faq", label: "faq" },
] as const;

function scrollToAnchor(event: MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith("#")) {
    return;
  }

  const target = document.querySelector<HTMLElement>(href);
  if (!target) {
    return;
  }

  const y = target.getBoundingClientRect().top + window.scrollY - 96;

  event.preventDefault();

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  window.scrollTo({
    top: y,
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
}

export function FloatingNavbar() {
  const [showFloating, setShowFloating] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const header = document.getElementById("site-header");
    if (!header) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFloating(!entry.isIntersecting);
      },
      {
        threshold: 0,
      },
    );

    observer.observe(header);

    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {showFloating && (
        <motion.div
          initial={
            prefersReducedMotion
              ? { opacity: 0 }
              : { opacity: 0, y: -18, scale: 0.98 }
          }
          animate={
            prefersReducedMotion
              ? { opacity: 1 }
              : { opacity: 1, y: 0, scale: 1 }
          }
          exit={
            prefersReducedMotion
              ? { opacity: 0 }
              : { opacity: 0, y: -12, scale: 0.98 }
          }
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none fixed left-1/2 top-4 z-70 w-[calc(100%-1rem)] max-w-280 -translate-x-1/2 px-1 sm:w-[calc(100%-2rem)] sm:px-0"
        >
          <div className="pointer-events-auto flex items-center gap-4 rounded-[1.35rem] border-2 border-line bg-background/94 px-4 py-3 shadow-[0_8px_0_var(--line)] backdrop-blur-sm sm:px-5">
            <Link
              href="#top"
              onClick={(event) => scrollToAnchor(event, "#top")}
              className="flex min-w-0 items-center gap-3"
            >
              <Image
                src="/512.png"
                alt="tabby paw logo"
                width={48}
                height={48}
                className="h-11 w-11 rounded-[0.95rem] border-2 border-line bg-surface-2 shadow-[0_3px_0_var(--line)]"
              />
              <span className="hidden min-w-0 flex-col justify-center sm:flex">
                <span className="tabby-display text-[2rem] leading-[0.88] tracking-tight text-ink">
                  tabby
                </span>
                <span className="mt-1 text-xs font-medium leading-none tracking-tight text-subtle">
                  macOS AI autocomplete
                </span>
              </span>
            </Link>

            <nav
              aria-label="Floating primary"
              className="ml-2 hidden items-center gap-6 lg:flex"
            >
              {textLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(event) => scrollToAnchor(event, link.href)}
                  className="tabby-link text-sm font-semibold tracking-tight transition hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="ml-auto flex items-center gap-2">
              <Link
                href={GITHUB_URL}
                className="tabby-button tabby-button-secondary hidden h-11 items-center justify-center gap-2 rounded-[0.95rem] px-4 text-sm font-semibold tracking-tight md:inline-flex"
              >
                <GithubIcon className="h-4.5 w-4.5" />
                Star on GitHub
              </Link>
              <Link
                href={DOWNLOAD_URL}
                className="tabby-button tabby-button-primary inline-flex h-11 items-center justify-center gap-2 rounded-[0.95rem] px-4 text-sm font-semibold tracking-tight sm:px-5"
              >
                <AppleIcon className="h-4.5 w-4.5" />
                <span className="hidden sm:inline">Download for Mac</span>
                <span className="sm:hidden">Download</span>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
