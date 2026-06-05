"use client";

import { Check, X } from "lucide-react";
import Image from "next/image";
import { FadeIn, ScaleIn, WordReveal } from "./motion";

const COTABBY = [
  "Runs entirely on your Mac",
  "Free & open source (AGPL-3.0)",
  "No account, ever",
  "Works fully offline",
  "Your text never leaves the device",
] as const;

const CLOUD = [
  "Keystrokes sent to a server",
  "Monthly subscription",
  "Account & sign-in required",
  "Needs a connection",
  "Telemetry & analytics",
] as const;

const STRIKE_STYLE = {
  textDecorationColor: "rgba(225, 29, 72, 0.8)",
  textDecorationSkipInk: "none" as const,
};

export function ComparisonSection() {
  return (
    <section className="mx-auto max-w-305">
      <div className="flex flex-col items-center gap-3 text-center">
        <WordReveal
          as="h2"
          text="not another cloud tool"
          className="tabby-display text-[2.7rem] leading-[1.04] tracking-tight text-ink sm:text-[4rem]"
        />
        <FadeIn delay={0.1}>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed tracking-tight text-muted sm:text-base">
            Most AI writing tools quietly ship your keystrokes off to a server.
            Cotabby does the opposite — here&apos;s the trade you&apos;re making.
          </p>
        </FadeIn>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {/* Cotabby */}
        <ScaleIn from={0.96}>
          <div className="relative h-full overflow-hidden rounded-[1.6rem] border-2 border-line bg-surface-2 p-6 shadow-[0_8.4px_0_var(--shadow-color)] sm:p-8">
            <div className="flex items-center gap-3">
              <Image
                src="/app-icons/new-logo.webp"
                alt=""
                width={44}
                height={44}
                sizes="40px"
                className="h-10 w-10 rounded-[0.7rem] border-2 border-line"
              />
              <span className="tabby-display text-[1.7rem] leading-none tracking-tight text-ink sm:text-[2rem]">
                Cotabby
              </span>
            </div>
            <ul className="mt-6 space-y-3.5">
              {COTABBY.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-moss text-background">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-semibold tracking-tight text-ink sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </ScaleIn>

        {/* Cloud autocomplete */}
        <ScaleIn from={0.96} delay={0.08}>
          <div className="relative h-full overflow-hidden rounded-[1.6rem] border-2 border-line-soft bg-surface-3 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[0.7rem] border-2 border-line-soft text-subtle">
                <X className="h-5 w-5" strokeWidth={2.4} />
              </span>
              <span className="tabby-display text-[1.7rem] leading-none tracking-tight text-subtle sm:text-[2rem]">
                Cloud autocomplete
              </span>
            </div>
            <ul className="mt-6 space-y-3.5">
              {CLOUD.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-line-soft text-subtle">
                    <X className="h-3.5 w-3.5" strokeWidth={2.6} />
                  </span>
                  <span
                    className="text-sm font-medium tracking-tight text-subtle line-through decoration-2 sm:text-base"
                    style={STRIKE_STYLE}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}
