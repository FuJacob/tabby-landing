"use client";

import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";
import { DOWNLOAD_URL, GITHUB_URL } from "../lib/site";
import { AppleIcon, GithubIcon } from "./icons";

const textLinks = [
  { href: "#demo", label: "demo" },
  { href: "#how-it-works", label: "how it works" },
  { href: "#privacy", label: "privacy" },
  { href: "#faq", label: "faq" },
] as const;

const secondaryActionClass =
  "tabby-button tabby-button-secondary inline-flex h-12 items-center justify-center gap-2 rounded-[1rem] px-5 text-sm font-semibold tracking-tight sm:h-14 sm:px-6 sm:text-base";

const primaryActionClass =
  "tabby-button tabby-button-primary inline-flex h-12 items-center justify-center gap-2 rounded-[1rem] px-5 text-sm font-semibold tracking-tight sm:h-14 sm:px-6 sm:text-base";

function scrollToAnchor(event: MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith("#")) {
    return;
  }

  const target = document.querySelector<HTMLElement>(href);
  if (!target) {
    return;
  }

  const y = target.getBoundingClientRect().top + window.scrollY - 80; // Allow some leeway

  event.preventDefault();

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  window.scrollTo({
    top: y,
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
}

export function Header() {
  return (
    <header className="border-b-2 border-line pb-6 sm:pb-8">
      <div className="flex w-full flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:gap-8">
          <Link
            href="#top"
            onClick={(event) => scrollToAnchor(event, "#top")}
            className="flex items-start gap-3"
          >
            <Image
              src="/512.png"
              alt="tabby paw logo"
              width={64}
              height={64}
              className="h-14 w-14 rounded-[1rem] border-2 border-line bg-surface-2 shadow-[0_4px_0_var(--line)] sm:h-16 sm:w-16"
            />
            <span className="flex flex-col pt-1">
              <span className="tabby-display text-[2.5rem] leading-none tracking-tight text-ink sm:text-[3rem]">
                tabby
              </span>
              <span className="mt-1 text-xs font-medium tracking-tight text-subtle sm:text-sm">
                native macOS autocomplete
              </span>
            </span>
          </Link>

          <nav
            aria-label="Primary"
            className="flex flex-wrap items-center gap-x-4 gap-y-2 pl-1 lg:pb-1 lg:pl-0"
          >
            {textLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(event) => scrollToAnchor(event, link.href)}
                className="tabby-link rounded-full border-2 border-line-soft bg-surface-2 px-3 py-1.5 text-xs font-semibold tracking-tight shadow-[0_2px_0_var(--line-soft)] transition hover:border-line hover:text-ink sm:text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
          <Link href={GITHUB_URL} className={secondaryActionClass}>
            <GithubIcon className="h-5 w-5" />
            GitHub
          </Link>
          <Link href={DOWNLOAD_URL} className={primaryActionClass}>
            <AppleIcon className="h-5 w-5" />
            Download for Mac
          </Link>
        </div>
      </div>
    </header>
  );
}
