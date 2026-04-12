import Image from "next/image";
import Link from "next/link";
import { AppleIcon } from "./icons";

const ctaActionClass =
  "tabby-button tabby-button-primary inline-flex h-14 min-w-[280px] items-center justify-center gap-3 rounded-[1rem] px-8 text-[1.25rem] font-semibold leading-none tracking-tight sm:min-w-[380px] sm:text-[1.7rem]";

export function SloganCtaSection() {
  return (
    <section className="py-2 sm:py-4">
      <div className="flex flex-col items-center gap-5 text-center sm:gap-7">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-[1rem] border-2 border-line bg-surface-2 shadow-[0_4px_0_var(--line)]">
            <Image
              src="/white-logo.png"
              alt="tabby paw logo"
              width={24}
              height={24}
              className="h-6 w-6"
            />
          </div>
          <span className="tabby-display text-[2rem] leading-none tracking-tight text-ink sm:text-[2.4rem]">
            tabby
          </span>
        </div>

        <h2 className="tabby-display text-[2.8rem] leading-none tracking-tight text-ink sm:text-[4.4rem]">
          ready to try tabby?
        </h2>
        <p className="max-w-xl text-sm leading-relaxed tracking-tight text-muted sm:text-base">
          It is built to feel like a small cozy helper, not another dashboard
          asking for attention.
        </p>

        <Link href="#" className={ctaActionClass}>
          <AppleIcon className="h-7 w-7 sm:h-8 sm:w-8" />
          Download for Mac
        </Link>
      </div>
    </section>
  );
}
