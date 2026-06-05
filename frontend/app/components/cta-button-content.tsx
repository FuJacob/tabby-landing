"use client";

import type { ReactNode } from "react";
import { GITHUB_REPO } from "../lib/site";
import { DownloadVersionLabel } from "./download-version-label";
import { GithubStarLabel } from "./github-star-label";
import { AppleIcon, GithubIcon } from "./icons";

type CtaButtonContentProps = {
  icon: ReactNode;
  label: ReactNode;
  sublabel: ReactNode;
};

type ProductCtaContentProps = {
  iconClassName: string;
};

/**
 * Shared two-line CTA layout for keeping download and GitHub buttons aligned.
 */
function CtaButtonContent({
  icon,
  label,
  sublabel,
}: CtaButtonContentProps) {
  return (
    <>
      <span
        aria-hidden="true"
        className="flex shrink-0 items-center justify-center leading-none"
      >
        {icon}
      </span>
      <span className="flex min-w-0 flex-col items-start justify-center gap-1 text-left leading-none">
        <span className="leading-none">{label}</span>
        <span className="max-w-full truncate text-[0.58em] font-semibold leading-none tracking-normal opacity-[0.72]">
          {sublabel}
        </span>
      </span>
    </>
  );
}

export function DownloadCtaContent({ iconClassName }: ProductCtaContentProps) {
  return (
    <CtaButtonContent
      icon={<AppleIcon className={iconClassName} />}
      label="Download for Mac"
      sublabel={<DownloadVersionLabel />}
    />
  );
}

export function GithubCtaContent({ iconClassName }: ProductCtaContentProps) {
  return (
    <CtaButtonContent
      icon={<GithubIcon className={iconClassName} />}
      label={<GithubStarLabel />}
      sublabel={GITHUB_REPO}
    />
  );
}
