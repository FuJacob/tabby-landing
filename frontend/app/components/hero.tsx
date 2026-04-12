import Image from "next/image";
import Link from "next/link";
import { AppleIcon, GithubIcon, SparklesIcon } from "./icons";

const secondaryActionClass =
  "tabby-button tabby-button-secondary inline-flex h-14 items-center justify-center gap-2 rounded-full px-6 text-base font-semibold tracking-tight sm:h-15 sm:px-7 sm:text-lg";

const primaryActionClass =
  "tabby-button tabby-button-primary inline-flex h-14 items-center justify-center gap-2 rounded-full px-6 text-base font-semibold tracking-tight sm:h-15 sm:px-7 sm:text-lg";

type SuggestionLineProps = {
  typed: string;
  suggestion: string;
};

function SuggestionLine({ typed, suggestion }: SuggestionLineProps) {
  return (
    <p className="text-base leading-relaxed tracking-tight text-ink sm:text-lg">
      {typed}
      <span className="text-accent">{suggestion}</span>
    </p>
  );
}

export function Hero() {
  return (
    <main className="pt-8 sm:pt-10">
      <section className="flex w-full flex-col gap-10 xl:flex-row xl:items-end xl:justify-between">
        <div className="max-w-2xl space-y-8">
          <div className="tabby-chip inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-muted">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Native AI autocomplete for Mac
          </div>

          <div className="space-y-6">
            <h1 className="max-w-2xl text-[2.9rem] font-semibold leading-[1.02] tracking-tight text-ink sm:text-[3.6rem] lg:text-[4.6rem]">
              What if AI could just finish my sentence? Well, now it can.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed tracking-tight text-muted sm:text-xl">
              A native Mac autocomplete that writes with you in any app.
              Faster emails, notes, messages, and docs without breaking your
              flow.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Link href="#" className={secondaryActionClass}>
              <GithubIcon className="h-6 w-6" />
              GitHub
            </Link>
            <Link href="#" className={primaryActionClass}>
              <AppleIcon className="h-6 w-6" />
              Download for Mac
            </Link>
          </div>

          <p className="text-base font-medium leading-relaxed tracking-tight text-subtle sm:text-lg">
            Works in email, notes, docs, and more.
          </p>
        </div>

        <div className="w-full max-w-[580px] rounded-[2.1rem] border border-line bg-surface-2 p-4 shadow-[var(--shadow-soft)] sm:p-5">
          <div className="tabby-panel h-full rounded-[1.75rem] p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-line bg-surface-3">
                  <Image
                    src="/white-logo.png"
                    alt="Tabby white logo"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold tracking-tight text-ink">
                    Compose in Mail
                  </p>
                  <p className="text-sm tracking-tight text-subtle">
                    Quiet help, right when you need it
                  </p>
                </div>
              </div>

              <div className="tabby-pill inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em]">
                <SparklesIcon className="h-3.5 w-3.5" />
                AI suggestion
              </div>
            </div>

            <div className="mt-6 rounded-[1.4rem] border border-line bg-background/55 p-5">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-subtle">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Draft
              </div>

              <div className="mt-4 space-y-4">
                <p className="text-sm leading-relaxed tracking-tight text-muted">
                  Hi Maya,
                </p>
                <SuggestionLine
                  typed="I reviewed the launch copy and the tone already feels strong"
                  suggestion=". I tightened the headline and simplified the closing CTA."
                />
                <SuggestionLine
                  typed="If you are happy with that pass, I can send the final version before 4 PM"
                  suggestion=" so design can ship it today."
                />
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
                <span className="tabby-chip inline-flex rounded-full px-3 py-2 text-sm font-medium tracking-tight text-ink">
                  Press Tab to accept
                </span>
                <span className="text-sm tracking-tight text-subtle">
                  Accepted text fades into your draft
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
