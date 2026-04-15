import Link from "next/link";
import { DOWNLOAD_URL } from "../lib/site";
import { AppleIcon } from "./icons";

const primaryActionClass =
  "tabby-button tabby-button-primary inline-flex h-12 items-center justify-center gap-2 rounded-[1rem] px-6 text-base font-semibold tracking-tight sm:h-14 sm:px-7";

const INCLUDES = [
  "Every feature, today and tomorrow",
  "Works across Mail, Notes, Slack, Docs",
  "Bring your own model, or use ours",
  "No subscription, no seat math",
] as const;

export function PricingSection() {
  return (
    <section className="mx-auto max-w-[1220px]">
      <h2 className="tabby-display text-center text-[2.9rem] leading-none tracking-tight text-ink sm:text-[4.1rem]">
        one price, forever.
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed tracking-tight text-muted sm:text-base">
        Pay once, use tabby for life. No monthly bill in your inbox.
      </p>

      <div className="mx-auto mt-10 max-w-xl">
        <div className="tabby-panel rounded-[1.8rem] p-5 sm:p-6">
          <div className="rounded-[1.45rem] border-2 border-line bg-surface-3 p-6 sm:p-8">
            <div className="flex flex-col items-center text-center">
              <p className="text-sm font-medium tracking-tight text-moss">
                lifetime access
              </p>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="tabby-display text-[4.2rem] leading-none tracking-tight text-ink sm:text-[5.4rem]">
                  $10
                </span>
                <span className="text-base tracking-tight text-subtle sm:text-lg">
                  USD, one-time
                </span>
              </div>

              <p className="mt-3 max-w-sm text-sm leading-relaxed tracking-tight text-muted sm:text-base">
                Buy it once. Keep it forever. Updates included.
              </p>

              <ul className="mt-6 w-full space-y-2 text-left">
                {INCLUDES.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed tracking-tight text-ink sm:text-base"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-accent"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={DOWNLOAD_URL}
                className={`${primaryActionClass} mt-8 w-full`}
              >
                <AppleIcon className="h-6 w-6" />
                Download for Mac
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
