import Image from "next/image";
import Link from "next/link";
import { AppleIcon, GithubIcon } from "./icons";

const secondaryActionClass =
  "tabby-button tabby-button-secondary inline-flex h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold tracking-tight sm:h-13 sm:px-6 sm:text-base";

const primaryActionClass =
  "tabby-button tabby-button-primary inline-flex h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold tracking-tight sm:h-13 sm:px-6 sm:text-base";

export function Header() {
  return (
    <header className="border-b border-line pb-6 sm:pb-8">
      <div className="flex w-full flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-surface-2 shadow-[var(--shadow-soft)]">
            <Image
              src="/white-logo.png"
              alt="Tabby paw logo"
              width={32}
              height={32}
              className="h-7 w-7"
            />
          </div>
          <span className="text-3xl font-semibold leading-none tracking-tight text-ink sm:text-4xl">
            Tabby
          </span>
          <Link
            href="#"
            className="tabby-chip inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted hover:text-ink"
          >
            Blog
          </Link>
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
