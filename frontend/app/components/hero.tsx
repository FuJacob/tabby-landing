import Link from "next/link";
import {
  AppleIcon,
  ArrowRightIcon,
  GithubIcon,
  SparklesIcon,
} from "./icons";

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

        <div className="rounded-[2.2rem] border border-neutral-900 bg-white p-4 shadow-[3px_3px_0_rgba(0,0,0,0.75)] sm:p-6">
          <div className="rounded-[1.8rem] border border-neutral-300 bg-neutral-50 p-5 sm:p-6">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <span className="text-sm font-medium text-neutral-600">
                Mail Draft
              </span>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-neutral-300 bg-white p-4">
                <p className="text-sm font-medium tracking-tight text-neutral-500">
                  Re: Launch update
                </p>
                <p className="mt-3 text-base leading-relaxed tracking-tight text-neutral-800 sm:text-lg">
                  I wrapped the QA pass and shipped today&apos;s build. I can
                  also
                </p>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-700">
                  <SparklesIcon className="h-4 w-4" />
                  add the release notes before lunch
                  <ArrowRightIcon className="h-4 w-4" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-xs font-medium tracking-tight text-neutral-600 sm:text-sm">
                <div className="rounded-xl border border-neutral-300 bg-white px-3 py-2 text-center">
                  Mail
                </div>
                <div className="rounded-xl border border-neutral-300 bg-white px-3 py-2 text-center">
                  Notes
                </div>
                <div className="rounded-xl border border-neutral-300 bg-white px-3 py-2 text-center">
                  Slack
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}