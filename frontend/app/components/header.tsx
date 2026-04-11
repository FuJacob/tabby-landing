import Image from "next/image";
import Link from "next/link";
import { AppleIcon, GithubIcon } from "./icons";

const topActionClass =
  "inline-flex h-14 items-center justify-center gap-2 rounded-3xl border border-neutral-900 bg-white px-6 text-lg font-medium tracking-tight text-neutral-900 transition hover:bg-neutral-100";

export function Header() {
  return (
    <header>
      <div className="flex w-full flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src="/512.png"
            alt="Tabby paw logo"
            width={32}
            height={32}
            className="h-12 w-12 items-center justify-center overflow-hidden rounded-xl"
          />
          <span className="text-4xl font-semibold leading-none tracking-tight text-neutral-950">
            Tabby
          </span>
          <Link
            href="#"
            className="ml-2 text-3xl font-medium leading-none tracking-tight text-neutral-900 hover:text-neutral-700"
          >
            blog
          </Link>
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
          <Link href="#" className={topActionClass}>
            <GithubIcon className="h-5 w-5" />
            GitHub
          </Link>
          <Link href="#" className={topActionClass}>
            <AppleIcon className="h-5 w-5" />
            Download for Mac
          </Link>
        </div>
      </div>
    </header>
  );
}
