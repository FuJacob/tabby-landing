import Image from "next/image";
import Link from "next/link";
import { AppleIcon, GithubIcon } from "./icons";

const secondaryActionClass =
  "tabby-button tabby-button-secondary inline-flex h-12 items-center justify-center gap-2 rounded-[1rem] px-6 text-base font-semibold tracking-tight sm:h-14 sm:px-7";

const primaryActionClass =
  "tabby-button tabby-button-primary inline-flex h-12 items-center justify-center gap-2 rounded-[1rem] px-6 text-base font-semibold tracking-tight sm:h-14 sm:px-7";

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
      <section className="grid gap-10 xl:grid-cols-[1.05fr_0.95fr] xl:items-end">
        <div className="max-w-2xl space-y-7">
          <p className="text-sm font-medium tracking-tight text-moss sm:text-base">
            native ai autocomplete for mac
          </p>

          <div className="space-y-6">
            <h1 className="tabby-display max-w-2xl text-[3.2rem] leading-[0.94] tracking-tight text-ink sm:text-[4.4rem] lg:text-[5.4rem]">
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

          <p className="max-w-lg text-base leading-relaxed tracking-tight text-subtle sm:text-lg">
            Works in email, notes, docs, and more, without turning writing
            into a whole production.
          </p>
        </div>

        <div className="tabby-panel w-full max-w-[600px] rounded-[1.8rem] p-4 sm:p-5">
          <div className="rounded-[1.45rem] border-2 border-line bg-surface-3 p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-[1rem] border-2 border-line bg-surface-2">
                  <Image
                    src="/white-logo.png"
                    alt="tabby white logo"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </div>
                <div>
                  <p className="tabby-display text-[1.6rem] leading-none tracking-tight text-ink">
                    tabby
                  </p>
                  <p className="text-sm tracking-tight text-subtle">
                    a little help while you write
                  </p>
                </div>
              </div>

              <p className="text-sm tracking-tight text-moss">
                suggests softly in the background
              </p>
            </div>

            <div className="mt-6 rounded-[1.35rem] border-2 border-line bg-background p-5">
              <div className="text-xs font-semibold tracking-[0.12em] text-subtle">
                draft
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

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t-2 border-line-soft pt-4 text-sm tracking-tight text-subtle">
                <span>press tab to accept</span>
                <span>feels like your own next thought</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
