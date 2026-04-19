import Image from "next/image";
import Link from "next/link";
import { CREATOR, DOWNLOAD_URL, GITHUB_URL } from "../lib/site";
import { AppleIcon, GithubIcon, LinkedInIcon, XIcon } from "./icons";
import { FadeIn } from "./motion";

const footerPrimaryActionClass =
  "tabby-button tabby-button-primary inline-flex h-12 w-full items-center justify-center gap-2 rounded-[1rem] px-6 text-[1rem] font-semibold leading-none tracking-tight sm:h-14 sm:text-[1.2rem]";

const footerSecondaryActionClass =
  "tabby-button tabby-button-secondary inline-flex h-14 w-full items-center justify-center gap-2 rounded-[1rem] px-6 text-[1rem] font-semibold leading-none tracking-tight sm:text-[1.2rem]";

const FOOTER_LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Release notes", href: "/release-notes" },
] as const;

const SOCIALS = [
  { label: "LinkedIn", href: CREATOR.linkedin, Icon: LinkedInIcon },
  { label: "X", href: CREATOR.x, Icon: XIcon },
] as const;

export function FinalFooterSection() {
  return (
    <section className="border-t-2 border-line-soft pt-8 sm:pt-10">
      <FadeIn>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <h2 className="tabby-display max-w-[700px] text-[3.4rem] leading-[0.94] tracking-tight text-ink sm:text-[5.4rem]">
              type a lot faster.
            </h2>
            <p className="max-w-xl text-sm leading-relaxed tracking-tight text-muted sm:text-base">
              Cozy AI autocomplete for the everyday notes, emails, and messages
              you were going to write anyway.
            </p>
          </div>

          <div className="w-full max-w-[340px] space-y-3">
            <Link href={DOWNLOAD_URL} className={footerPrimaryActionClass}>
              <AppleIcon className="h-5 w-5" />
              Download for Mac
            </Link>
            <Link href={GITHUB_URL} className={footerSecondaryActionClass}>
              <GithubIcon className="h-5 w-5" />
              GitHub
            </Link>
          </div>
        </div>
      </FadeIn>

      <div className="mt-10 flex flex-col gap-4 border-t-2 border-line-soft pt-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-[1rem] border-2 border-line bg-surface-2 shadow-[0_4px_0_var(--line)]">
            <Image
              src="/white-logo.png"
              alt="tabby paw logo"
              width={22}
              height={22}
              className="h-[1.375rem] w-[1.375rem]"
            />
          </div>
          <span className="tabby-display text-[2rem] leading-none tracking-tight text-ink sm:text-[2.4rem]">
            Tabby
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="text-sm tracking-tight text-subtle sm:text-base">
            made by{" "}
            <Link
              href={CREATOR.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="tabby-link font-semibold"
            >
              {CREATOR.name}
            </Link>
          </span>

          <div className="flex items-center gap-2">
            {SOCIALS.map(({ label, href, Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-[0.75rem] border-2 border-line bg-surface-2 text-ink transition-colors hover:bg-surface-3"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="tabby-link text-[1rem] font-medium leading-none tracking-tight sm:text-[1.1rem]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
