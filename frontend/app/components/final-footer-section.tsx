import Image from "next/image";
import Link from "next/link";
import { AppleIcon, GithubIcon } from "./icons";

const topButtonClass =
  "tabby-button tabby-button-secondary inline-flex h-14 w-full items-center justify-center gap-3 rounded-[1rem] px-8 text-[1.15rem] font-semibold leading-none tracking-tight sm:text-[1.3rem]";

export const bottomButtonClass =
  "tabby-button tabby-button-primary inline-flex h-12 w-full items-center justify-center gap-2 rounded-[1rem] px-6 text-[1rem] font-semibold leading-none tracking-tight sm:h-14 sm:text-[1.2rem]";

const FOOTER_LINKS = [
  "Privacy",
  "Terms",
  "Release notes",
  "Blog",
] as const;

export function FinalFooterSection() {
  return (
    <section className="border-t-2 border-line-soft pt-8 sm:pt-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-4">
          <h2 className="tabby-display max-w-[700px] text-[3.4rem] leading-[0.9] tracking-tight text-ink sm:text-[5.4rem]">
            type a lot faster.
          </h2>
          <p className="max-w-xl text-sm leading-relaxed tracking-tight text-muted sm:text-base">
            Cozy AI autocomplete for the everyday notes, emails, and messages
            you were going to write anyway.
          </p>
        </div>

        <div className="w-full max-w-[340px] space-y-3">
          <Link href="#" className={bottomButtonClass}>
            <AppleIcon className="h-5 w-5" />
            Download for Mac
          </Link>
          <Link href="#" className={topButtonClass}>
            <GithubIcon className="h-5 w-5" />
            GitHub
          </Link>
        </div>
      </div>

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
            tabby
          </span>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {FOOTER_LINKS.map((label, index) => (
            <Link
              key={`${label}-${index}`}
              href="#"
              className="tabby-link text-[1rem] font-medium leading-none tracking-tight sm:text-[1.1rem]"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
