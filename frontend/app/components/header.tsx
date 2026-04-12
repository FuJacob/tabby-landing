import Image from "next/image";
import Link from "next/link";
import { AppleIcon, GithubIcon } from "./icons";

const textLinks = [
  { href: "#demo", label: "demo" },
  { href: "#how-it-works", label: "how it works" },
  { href: "#faq", label: "faq" },
] as const;

const secondaryActionClass =
  "tabby-button tabby-button-secondary inline-flex h-12 items-center justify-center gap-2 rounded-[1rem] px-5 text-sm font-semibold tracking-tight sm:h-14 sm:px-6 sm:text-base";

const primaryActionClass =
  "tabby-button tabby-button-primary inline-flex h-12 items-center justify-center gap-2 rounded-[1rem] px-5 text-sm font-semibold tracking-tight sm:h-14 sm:px-6 sm:text-base";

export function Header() {
  return (
    <header className="border-b-2 border-line pb-6 sm:pb-8">
      <div className="flex w-full flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-6">
          <Link href="#top" className="flex items-center sm:gap-1">
              <Image
                src="/white-logo.png"
                alt="tabby paw logo"
                width={64}
                height={64}
                className="h-16 w-16"
              />

            <span className="tabby-display text-[2.7rem] leading-none tracking-tight text-ink sm:text-[3.2rem]">
              tabby
            </span>
          </Link>

          <nav
            aria-label="Primary"
            className="flex flex-wrap items-center gap-x-5 gap-y-2 pl-1 lg:pl-0"
          >
            {textLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="tabby-link text-sm font-semibold tracking-tight sm:text-base"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
          <Link href="#" className={secondaryActionClass}>
            <GithubIcon className="h-5 w-5" />
            GitHub
          </Link>
          <Link href="#" className={primaryActionClass}>
            <AppleIcon className="h-5 w-5" />
            Download for Mac
          </Link>
        </div>
      </div>
    </header>
  );
}
