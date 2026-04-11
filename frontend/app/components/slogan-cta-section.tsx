import Image from "next/image";
import Link from "next/link";

const ctaActionClass =
  "inline-flex h-20 min-w-[280px] items-center justify-center rounded-[1.9rem] border border-neutral-900 bg-white px-10 text-[2rem] font-medium leading-none tracking-tight text-neutral-900 transition hover:bg-neutral-100 sm:min-w-[440px] sm:text-[2.7rem]";

export function SloganCtaSection() {
  return (
    <section className="py-2 sm:py-4">
      <div className="flex flex-col items-center gap-6 text-center sm:gap-8">
        <div className="inline-flex items-center gap-3">
          <Image
            src="/512.png"
            alt="Tabby paw logo"
            width={32}
            height={32}
            className="h-10 w-10 rounded-xl"
          />
          <span className="text-[2.4rem] font-semibold leading-none tracking-tight text-neutral-900 sm:text-[2.9rem]">
            Tabby
          </span>
        </div>

        <h2 className="text-[2.2rem] font-semibold leading-none tracking-tight text-neutral-900 sm:text-[4.4rem]">
          Convinced? Download now
        </h2>

        <Link href="#" className={ctaActionClass}>
          Download for Mac
        </Link>
      </div>
    </section>
  );
}
