import Image from "next/image";
import Link from "next/link";
import { AppleIcon, GithubIcon } from "./icons";

const topButtonClass =
  "tabby-button tabby-button-secondary inline-flex h-18 w-full items-center justify-center gap-3 rounded-full px-8 text-[1.7rem] font-semibold leading-none tracking-tight sm:text-[2rem]";

const bottomButtonClass =
  "tabby-button tabby-button-primary inline-flex h-15 w-full items-center justify-center gap-2 rounded-full px-6 text-[1.2rem] font-semibold leading-none tracking-tight sm:text-[1.45rem]";

const FOOTER_LINKS = [
  "Privacy",
  "Terms",
  "Release notes",
  "Blog",
] as const;

export function FinalFooterSection() {
  return (
    <section className="py-1 sm:py-3">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="max-w-[700px] text-[3.4rem] font-semibold leading-[0.9] tracking-tight text-ink sm:text-[5.8rem]">
          Type faster
        </h2>

        <div className="w-full max-w-[360px] space-y-3">
          <Link href="#" className={topButtonClass}>
            <GithubIcon className="h-8 w-8" />
            GitHub
          </Link>
          <Link href="#" className={bottomButtonClass}>
            <AppleIcon className="h-6 w-6" />
            Download for Mac
          </Link>
        </div>
      </div>

      <div className="mt-9 flex flex-col gap-4 border-t border-line pt-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-surface-3">
            <Image
              src="/white-logo.png"
              alt="Tabby paw logo"
              width={22}
              height={22}
              className="h-5.5 w-5.5"
            />
          </div>
          <span className="text-[2rem] font-semibold leading-none tracking-tight text-ink sm:text-[2.2rem]">
            Tabby
          </span>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {FOOTER_LINKS.map((label, index) => (
            <Link
              key={`${label}-${index}`}
              href="#"
              className="text-[1.1rem] font-medium leading-none tracking-tight text-muted hover:text-ink sm:text-[1.25rem]"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
