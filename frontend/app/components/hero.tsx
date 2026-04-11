import Image from "next/image";
import Link from "next/link";
import { AppleIcon, GithubIcon } from "./icons";

const heroActionClass =
  "inline-flex h-16 items-center justify-center gap-2 rounded-3xl border border-neutral-900 bg-white px-7 text-[2rem] font-medium leading-none tracking-tight text-neutral-900 transition hover:bg-neutral-100";

export function Hero() {
  return (
    <main className="pt-8 sm:pt-12">
      <section className="flex justify-between w-full">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="max-w-2xl text-[2.5rem] font-semibold leading-[1.08] tracking-tight text-neutral-950 sm:text-[3rem] lg:text-[3.5rem]">
              What if AI could just finish my sentence? Well, now it can.
            </h1>
            <p className="max-w-xl text-xl leading-relaxed tracking-tight text-neutral-700">
              A native Mac autocomplete that writes with you in any app.
              Faster emails, notes, messages, and docs without breaking your
              flow.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Link href="#" className={heroActionClass}>
              <GithubIcon className="h-6 w-6" />
              GitHub
            </Link>
            <Link href="#" className={heroActionClass}>
              <AppleIcon className="h-6 w-6" />
              Download for Mac
            </Link>
          </div>

          <p className="text-[2rem] font-medium leading-none tracking-tight text-neutral-900">
            Works in email, notes, docs, and more.
          </p>
        </div>

        <div className="w-full max-w-[560px] rounded-[2.2rem] border border-neutral-900 bg-white p-4 shadow-[3px_3px_0_rgba(0,0,0,0.75)] sm:p-6">
          <div className="h-full overflow-hidden rounded-[1.8rem] border border-neutral-300 bg-neutral-50">
            <Image
              src="/placeholder.jpg"
              alt="Tabby placeholder preview"
              width={1200}
              height={900}
              className="h-[340px] w-full object-cover sm:h-[420px]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}