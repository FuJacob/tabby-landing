"use client";

import Image from "next/image";
import Link from "next/link";
import { DOWNLOAD_URL, GITHUB_URL } from "../lib/site";
import { AppleIcon, GithubIcon } from "./icons";
import { HeroReveal, ParallaxY, Typewriter } from "./motion";

const secondaryActionClass =
  "tabby-button tabby-button-secondary inline-flex h-12 items-center justify-center gap-2 rounded-[1rem] px-6 text-base font-semibold tracking-tight sm:h-14 sm:px-7";

const primaryActionClass =
  "tabby-button tabby-button-primary inline-flex h-12 items-center justify-center gap-2 rounded-[1rem] px-6 text-base font-semibold tracking-tight sm:h-14 sm:px-7";

function StatusBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border-2 border-line bg-surface-2 px-3 py-1.5 text-xs font-medium tracking-tight text-ink shadow-[0_3px_0_var(--line)] sm:text-sm">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-moss opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-moss" />
      </span>
      <span>open source</span>
      <span className="text-line-soft">·</span>
      <span>100% local</span>
      <span className="text-line-soft">·</span>
      <span>Mac native</span>
    </div>
  );
}

function TabKeyCap() {
  return (
    <div className="inline-flex items-center gap-3 text-sm tracking-tight text-muted">
      <kbd className="inline-flex h-9 min-w-[44px] items-center justify-center rounded-[0.6rem] border-2 border-line bg-surface-2 px-2.5 text-xs font-semibold text-ink shadow-[0_3px_0_var(--line)]">
        Tab
      </kbd>
      <span>to accept</span>
    </div>
  );
}

function MacWindowChrome() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="h-3 w-3 rounded-full border border-line bg-[#FF5F57]" />
      <span className="h-3 w-3 rounded-full border border-line bg-[#FEBC2E]" />
      <span className="h-3 w-3 rounded-full border border-line bg-[#28C840]" />
    </div>
  );
}

function BackdropPattern() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[2rem]"
    >
      <ParallaxY
        strength={40}
        className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-accent-soft/40 blur-3xl"
      >
        <div />
      </ParallaxY>
      <ParallaxY
        strength={-60}
        className="absolute -bottom-16 -left-20 h-80 w-80 rounded-full bg-moss/25 blur-3xl"
      >
        <div />
      </ParallaxY>
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #0a0a0a 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
    </div>
  );
}

export function Hero() {
  return (
    <main id="hero" className="relative pt-6 sm:pt-8">
      <BackdropPattern />
      <section className="grid gap-10 xl:grid-cols-[1.05fr_0.95fr] xl:items-end">
        <div className="max-w-2xl space-y-7">
          <HeroReveal delay={0.05}>
            <StatusBadge />
          </HeroReveal>

          <div className="space-y-6">
            <HeroReveal delay={0.15}>
              <h1 className="tabby-display max-w-2xl text-[3.2rem] leading-[0.96] tracking-tight text-ink sm:text-[4.4rem] lg:text-[5.4rem]">
                stop rewriting <br />
                the{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">same email.</span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-1 -z-0 h-[0.35em] rounded-sm bg-accent-soft/70"
                  />
                </span>
              </h1>
            </HeroReveal>
            <HeroReveal delay={0.3}>
              <p className="max-w-xl text-lg leading-relaxed tracking-tight text-muted sm:text-xl">
                Tabby is a native macOS AI autocomplete that writes with you in
                any app. Quiet inline suggestions in Mail, Notes, Slack, and
                Docs. Press Tab to accept — nothing leaves your Mac.
              </p>
            </HeroReveal>
          </div>

          <HeroReveal delay={0.45}>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Link href={GITHUB_URL} className={secondaryActionClass}>
                <GithubIcon className="h-6 w-6" />
                GitHub
              </Link>
              <Link href={DOWNLOAD_URL} className={primaryActionClass}>
                <AppleIcon className="h-6 w-6" />
                Download for Mac
              </Link>
              <div className="ml-1 hidden sm:block">
                <TabKeyCap />
              </div>
            </div>
          </HeroReveal>

          <HeroReveal delay={0.6}>
            <p className="max-w-lg text-base leading-relaxed tracking-tight text-subtle sm:text-lg">
              Runs on your Mac&apos;s Neural Engine. No accounts, no cloud
              round-trips, no telemetry — just quiet text that finishes your
              sentence.
            </p>
          </HeroReveal>
        </div>

        <HeroReveal delay={0.35}>
          <div className="tabby-panel relative w-full max-w-[600px] rounded-[1.8rem] p-3 sm:p-4">
            <div className="rounded-[1.45rem] border-2 border-line bg-surface-3 p-4 sm:p-5">
              <div className="flex items-center justify-between gap-3 border-b-2 border-line-soft pb-3">
                <MacWindowChrome />
                <span className="text-xs font-medium tracking-[0.14em] text-subtle uppercase">
                  draft · mail.app
                </span>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-[0.6rem] border-2 border-line bg-surface-2">
                    <Image
                      src="/white-logo.png"
                      alt="Tabby logo"
                      width={18}
                      height={18}
                      className="h-[18px] w-[18px]"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-4 rounded-[1.1rem] border-2 border-line bg-background p-4 sm:p-5">
                <p className="text-sm leading-relaxed tracking-tight text-ink sm:text-base">
                  Hi Maya,
                </p>
                <p className="text-sm leading-relaxed tracking-tight text-ink sm:text-base">
                  <Typewriter
                    prefix="I reviewed the launch copy and the tone already feels strong"
                    suggestion=". I tightened the headline and simplified the closing CTA."
                    suggestionClassName="text-accent"
                    loopDelay={3200}
                  />
                </p>
                <p className="text-sm leading-relaxed tracking-tight text-subtle sm:text-base">
                  If you are happy with that pass, I can send the final version
                  before 4 PM<span className="text-accent">
                    {" "}so design can ship it today.
                  </span>
                </p>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs tracking-tight text-subtle sm:text-sm">
                <div className="flex items-center gap-2">
                  <kbd className="inline-flex h-7 items-center justify-center rounded-[0.5rem] border-2 border-line bg-surface-2 px-2 text-[0.7rem] font-semibold text-ink shadow-[0_2px_0_var(--line)]">
                    Tab
                  </kbd>
                  <span>to accept</span>
                </div>
                <span className="flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-moss opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-moss" />
                  </span>
                  running locally
                </span>
              </div>
            </div>
          </div>
        </HeroReveal>
      </section>
    </main>
  );
}
