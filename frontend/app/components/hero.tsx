"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Link from "next/link";
import { DOWNLOAD_URL, GITHUB_URL } from "../lib/site";
import { AppleIcon, GithubIcon } from "./icons";
import { ParallaxY, Typewriter } from "./motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const secondaryActionClass =
  "tabby-button tabby-button-secondary inline-flex h-12 items-center justify-center gap-2 rounded-2xl px-6 text-base font-semibold tracking-tight sm:h-14 sm:px-7";

const primaryActionClass =
  "tabby-button tabby-button-primary inline-flex h-12 items-center justify-center gap-2 rounded-2xl px-6 text-base font-semibold tracking-tight sm:h-14 sm:px-7";

const copyContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const copyItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: EASE },
  },
};

const headlineLine: Variants = {
  hidden: { opacity: 0, y: "120%", rotate: 2 },
  visible: {
    opacity: 1,
    y: "0%",
    rotate: 0,
    transition: { duration: 0.88, ease: EASE },
  },
};

const underlineVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0.4 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 1.1, ease: EASE, delay: 1 },
  },
};

const heroPanel: Variants = {
  hidden: {
    opacity: 0,
    x: 52,
    y: 32,
    rotate: -2.2,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.95, ease: EASE, delay: 0.24 },
  },
};

const panelContent: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.14,
    },
  },
};

const panelItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: EASE },
  },
};

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
      <kbd className="inline-flex h-10 items-center gap-1.5 rounded-[0.6rem] bg-ink px-3 text-sm font-semibold tracking-tight text-background shadow-[0_4px_0_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.1)]">
        <span className="text-base leading-none opacity-60">⇥</span>
        Tab
      </kbd>
      <span>to accept</span>
    </div>
  );
}

function BackdropPattern({
  revealState,
  shouldReduceMotion,
}: {
  revealState: "hidden" | "visible";
  shouldReduceMotion: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-4xl"
    >
      <ParallaxY
        strength={shouldReduceMotion ? 0 : 40}
        className="absolute -right-20 -top-24 h-72 w-72 rounded-full"
      >
        <motion.div
          initial="hidden"
          animate={revealState}
          variants={{
            hidden: { opacity: 0, scale: 0.72 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 1.05, ease: EASE, delay: 0.14 },
            },
          }}
          className="h-full w-full rounded-full bg-accent-soft/40 blur-3xl"
        />
      </ParallaxY>
      <ParallaxY
        strength={shouldReduceMotion ? 0 : -60}
        className="absolute -bottom-16 -left-20 h-80 w-80 rounded-full"
      >
        <motion.div
          initial="hidden"
          animate={revealState}
          variants={{
            hidden: { opacity: 0, scale: 0.72 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 1.05, ease: EASE, delay: 0.22 },
            },
          }}
          className="h-full w-full rounded-full bg-moss/25 blur-3xl"
        />
      </ParallaxY>
      <motion.div
        initial="hidden"
        animate={revealState}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 0.06,
            transition: { duration: 1.1, ease: EASE, delay: 0.08 },
          },
        }}
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, #0a0a0a 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
    </div>
  );
}

function HeroHeadline({ revealState }: { revealState: "hidden" | "visible" }) {
  return (
    <motion.h1
      initial="hidden"
      animate={revealState}
      className="tabby-display max-w-2xl text-[3.2rem] leading-[0.94] tracking-tight text-ink sm:text-[4.5rem] lg:text-[5.55rem]"
    >
      <span className="block overflow-hidden pb-[0.08em]">
        <motion.span variants={headlineLine} className="block">
          autocomplete
        </motion.span>
      </span>
      <span className="block overflow-hidden pb-[0.12em]">
        <motion.span variants={headlineLine} className="block">
          {" "}
          <span className="relative inline-block">
            <span className="relative z-10">everywhere.</span>
            <motion.span
              aria-hidden="true"
              variants={underlineVariants}
              className="absolute inset-x-0 bottom-1 z-0 h-[0.34em] origin-left rounded-sm bg-accent-soft/80"
            />
          </span>
        </motion.span>
      </span>
    </motion.h1>
  );
}

export function Hero() {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const revealState = "visible" as const;

  return (
    <main id="hero" className="relative pt-6 sm:pt-8">
      <BackdropPattern
        revealState={revealState}
        shouldReduceMotion={prefersReducedMotion}
      />

      <section className="grid gap-10 xl:grid-cols-[1.04fr_0.96fr] xl:items-center">
        <motion.div
          variants={copyContainer}
          initial="hidden"
          animate={revealState}
          className="max-w-2xl space-y-7"
        >
          <motion.div variants={copyItem}>
            <StatusBadge />
          </motion.div>

          <div className="space-y-6">
            <motion.div variants={copyItem}>
              <HeroHeadline revealState={revealState} />
            </motion.div>
          </div>

          <motion.div
            variants={copyItem}
            className="flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <Link
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={secondaryActionClass}
            >
              <GithubIcon className="h-6 w-6" />
              Star on GitHub
            </Link>
            <Link
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={primaryActionClass}
            >
              <AppleIcon className="h-6 w-6" />
              Download for Mac
            </Link>
            <div className="ml-1 hidden sm:block">
              <TabKeyCap />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={heroPanel}
          initial="hidden"
          animate={revealState}
          className="relative w-full max-w-155"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              revealState === "visible"
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 1.1, ease: EASE, delay: 0.34 }}
            className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-accent-soft/50 blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              revealState === "visible"
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 1.1, ease: EASE, delay: 0.44 }}
            className="pointer-events-none absolute -bottom-12 left-0 h-44 w-44 rounded-full bg-moss/25 blur-3xl"
          />

          <div className="tabby-panel relative rounded-[1.8rem] p-3 sm:p-4">
            <motion.div
              variants={panelContent}
              initial="hidden"
              animate={revealState}
              className="overflow-hidden rounded-[1.45rem] border-2 border-line bg-background p-7 sm:p-9"
            >
              <motion.p
                variants={panelItem}
                className="text-[1.35rem] leading-[1.35] tracking-tight text-ink sm:text-[1.7rem] lg:text-[2rem]"
              >
                <Typewriter
                  active={revealState === "visible"}
                  prefix="I reviewed the launch copy and the tone already feels strong"
                  suggestion=". I tightened the headline and simplified the closing CTA."
                  suggestionClassName="text-accent"
                  loopDelay={3200}
                />
              </motion.p>

              <motion.div
                variants={panelItem}
                className="mt-8 flex items-center justify-between text-sm tracking-tight text-subtle"
              >
                <div className="flex items-center gap-2">
                  <kbd className="inline-flex h-8 items-center gap-1 rounded-lg bg-ink px-2.5 text-xs font-semibold tracking-tight text-background shadow-[0_3px_0_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.1)]">
                    <span className="text-sm leading-none opacity-60">⇥</span>
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
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
