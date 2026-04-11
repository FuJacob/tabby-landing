import Image from "next/image";
import Link from "next/link";
import { AppleIcon, GithubIcon } from "./icons";

const topButtonClass =
  "inline-flex h-20 w-full items-center justify-center gap-3 rounded-[1.6rem] border border-neutral-900 bg-white px-8 text-[2.6rem] font-medium leading-none tracking-tight text-neutral-900 transition hover:bg-neutral-100";

const bottomButtonClass =
  "inline-flex h-16 w-full items-center justify-center gap-2 rounded-[1.6rem] border border-neutral-900 bg-white px-6 text-[1.7rem] font-medium leading-none tracking-tight text-neutral-900 transition hover:bg-neutral-100";

const FOOTER_LINKS = [
  "Privacy policy",
  "Privacy policy",
  "Privacy policy",
  "Privacy policy",
] as const;

export function FinalFooterSection() {
  return (
    <section className="py-1 sm:py-3">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="text-[4.2rem] font-semibold leading-[0.9] tracking-tight text-neutral-900 sm:text-[6.8rem]">
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

      <div className="mt-9 flex flex-col gap-4 border-t border-neutral-300 pt-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/512.png"
            alt="Tabby paw logo"
            width={26}
            height={26}
            className="h-9 w-9 rounded-lg"
          />
          <span className="text-[2.2rem] font-semibold leading-none tracking-tight text-neutral-900">
            Tabby
          </span>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {FOOTER_LINKS.map((label, index) => (
            <Link
              key={`${label}-${index}`}
              href="#"
              className="text-[1.5rem] font-medium leading-none tracking-tight text-neutral-800 hover:text-neutral-600"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
