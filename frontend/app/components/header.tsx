import Image from "next/image";
import Link from "next/link";
import { AppleIcon, GithubIcon } from "./icons";

const secondaryActionClass =
  "tabby-button tabby-button-secondary inline-flex h-12 items-center justify-center gap-2 rounded-[1rem] px-5 text-sm font-semibold tracking-tight sm:h-14 sm:px-6 sm:text-base";

const primaryActionClass =
  "tabby-button tabby-button-primary inline-flex h-12 items-center justify-center gap-2 rounded-[1rem] px-5 text-sm font-semibold tracking-tight sm:h-14 sm:px-6 sm:text-base";

export function Header() {
  return (
    <header className="border-b-2 border-line pb-6 sm:pb-8">
      <div className="flex w-full flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-[1.15rem] border-2 border-line bg-surface-2 shadow-[0_4px_0_var(--line)]">
            <Image
              src="/white-logo.png"
              alt="tabby paw logo"
              width={32}
              height={32}
              className="h-7 w-7"
            />
          </div>
          <span className="tabby-display text-[2.7rem] leading-none tracking-tight text-ink sm:text-[3.2rem]">
            tabby
          </span>
          <Link
            href="#"
            className="tabby-link text-sm font-semibold tracking-tight sm:text-base"
          >
            blog
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
