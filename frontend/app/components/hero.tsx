"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { DOWNLOAD_URL, GITHUB_URL } from "../lib/site";
import { GithubStarLabel } from "./github-star-label";
import { AppleIcon, GithubIcon } from "./icons";
import { Typewriter } from "./motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const secondaryActionClass =
  "tabby-button tabby-button-secondary inline-flex h-14 w-full items-center justify-center gap-3 rounded-2xl px-7 text-[1.05rem] font-semibold tracking-tight sm:h-16 sm:w-auto sm:min-w-[270px] sm:text-[1.2rem]";

const primaryActionClass =
  "tabby-button tabby-button-primary inline-flex h-14 w-full items-center justify-center gap-3 rounded-2xl px-7 text-[1.05rem] font-semibold tracking-tight sm:h-16 sm:w-auto sm:min-w-[270px] sm:text-[1.2rem]";

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

function HeroHeadline({ active }: { active: boolean }) {
  return (
    <motion.h1
      variants={copyItem}
      aria-label="Write at the speed of thought. In any app."
      className="tabby-display mx-auto flex min-h-[9.1rem] max-w-5xl items-center justify-center text-center text-[3.15rem] leading-[0.96] tracking-tight text-ink sm:min-h-[9.25rem] sm:text-[4.8rem] lg:min-h-[12.4rem] lg:text-[6.45rem]"
    >
      <span aria-hidden="true">
        <Typewriter
          active={active}
          prefix="Write at the speed of thought"
          suggestion=". In any app."
          suggestionClassName="text-accent"
          loopDelay={2600}
        />
      </span>
    </motion.h1>
  );
}

export function Hero() {
  const revealState = "visible" as const;

  return (
    <main id="hero" className="relative mt-6 sm:mt-8">
      <section className="mx-auto flex max-w-6xl flex-col items-center px-2 py-10 text-center sm:px-4 sm:py-14 lg:py-18">
        <motion.div
          variants={copyContainer}
          initial="hidden"
          animate={revealState}
          className="flex w-full flex-col items-center"
        >
          <HeroHeadline active={revealState === "visible"} />

          <motion.p
            variants={copyItem}
            className="mt-6 max-w-3xl text-balance text-base leading-relaxed tracking-tight text-muted sm:text-xl lg:text-2xl"
          >
            The local AI autocomplete that learns your tone. 100% free,
            open-source, and runs entirely on your Mac so your data never leaves
            your device.
          </motion.p>

          <motion.div
            variants={copyItem}
            className="mt-9 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row"
          >
            <Link
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={secondaryActionClass}
            >
              <GithubIcon className="h-6 w-6 shrink-0" />
              <GithubStarLabel />
            </Link>
            <Link
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={primaryActionClass}
            >
              <AppleIcon className="h-6 w-6 shrink-0" />
              Download for Mac
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
