import Link from "next/link";
import { AppleIcon } from "./icons";

const ctaActionClass =
  "inline-flex h-16 items-center justify-center gap-2 rounded-3xl border border-neutral-900 bg-white px-8 text-[2rem] font-medium leading-none tracking-tight text-neutral-900 transition hover:bg-neutral-100";

export function SloganCtaSection() {
  return (
    <section className="py-2 sm:py-4">
      <div className="flex flex-col items-center gap-7 text-center sm:gap-9">
        <h2 className="text-[2.8rem] font-semibold leading-none tracking-tight text-neutral-900 sm:text-[4.2rem]">
          (some slogan headline)
        </h2>

        <Link href="#" className={ctaActionClass}>
          <AppleIcon className="h-6 w-6" />
          Download for Mac
        </Link>
      </div>
    </section>
  );
}
