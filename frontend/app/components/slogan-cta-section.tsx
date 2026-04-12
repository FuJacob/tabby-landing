import Image from "next/image";
import Link from "next/link";
import { AppleIcon } from "./icons";

const ctaActionClass =
  "tabby-button tabby-button-primary inline-flex h-18 min-w-[280px] items-center justify-center gap-3 rounded-full px-10 text-[1.6rem] font-semibold leading-none tracking-tight sm:min-w-[420px] sm:text-[2.2rem]";

export function SloganCtaSection() {
  return (
    <section className="py-2 sm:py-4">
      <div className="flex flex-col items-center gap-6 text-center sm:gap-8">
        <div className="tabby-chip inline-flex items-center gap-3 rounded-full px-4 py-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-line bg-surface-3">
            <Image
              src="/white-logo.png"
              alt="Tabby paw logo"
              width={24}
              height={24}
              className="h-6 w-6"
            />
          </div>
          <span className="text-[1.5rem] font-semibold leading-none tracking-tight text-ink sm:text-[1.8rem]">
            Tabby
          </span>
        </div>

        <h2 className="text-[2.2rem] font-semibold leading-none tracking-tight text-ink sm:text-[4.4rem]">
          Convinced? Download now
        </h2>

        <Link href="#" className={ctaActionClass}>
          <AppleIcon className="h-7 w-7 sm:h-8 sm:w-8" />
          Download for Mac
        </Link>
      </div>
    </section>
  );
}
