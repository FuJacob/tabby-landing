"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { FadeIn } from "./motion";

const EASE = [0.22, 1, 0.36, 1] as const;

type StepDefinition = {
  number: string;
  title: string;
  description: string;
  railLabel: string;
  visual: ReactNode;
};

const stepCardVariants: Variants = {
  hidden: (index: number) => ({
    opacity: 0,
    y: 26,
    rotate: index % 2 === 0 ? -1.2 : 1.2,
    scale: 0.965,
  }),
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.72,
      ease: EASE,
      delay: index * 0.06,
    },
  }),
};

const railNodeVariants: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.9 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: EASE,
      delay: 0.08 + index * 0.08,
    },
  }),
};

function InstallVisual() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  return (
    <div className="rounded-[1.1rem] border-2 border-line bg-surface-2 p-4">
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full border border-line bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full border border-line bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full border border-line bg-[#28C840]" />
      </div>
      <div className="mt-3 flex items-center gap-2 text-xs font-medium tracking-tight text-ink">
        <span className="text-moss">$</span>
        <span>brew install tabby</span>
        <motion.span
          animate={
            prefersReducedMotion ? { opacity: 1 } : { opacity: [1, 0.2, 1] }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 1.1, repeat: Infinity, ease: "easeInOut" }
          }
          className="inline-block h-[1em] w-[2px] bg-ink"
        />
        <span className="ml-auto inline-flex h-5 items-center rounded-[0.4rem] border border-line bg-surface-3 px-1.5 text-[0.65rem] text-subtle">
          or .dmg
        </span>
      </div>
    </div>
  );
}

function TypeAnywhereVisual() {
  const apps = ["Mail", "Notes", "Slack", "Notion", "Docs"];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.06, delayChildren: 0.08 },
        },
      }}
      className="flex flex-wrap gap-2"
    >
      {apps.map((app) => (
        <motion.span
          key={app}
          variants={{
            hidden: { opacity: 0, y: 12, scale: 0.92 },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.42, ease: EASE },
            },
          }}
          className="inline-flex items-center rounded-[0.7rem] border-2 border-line bg-surface-2 px-3 py-1.5 text-xs font-medium tracking-tight text-ink shadow-[0_2px_0_var(--line)] sm:text-sm"
        >
          {app}
        </motion.span>
      ))}
      <motion.span
        variants={{
          hidden: { opacity: 0, y: 12, scale: 0.92 },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.42, ease: EASE },
          },
        }}
        className="inline-flex items-center rounded-[0.7rem] border-2 border-dashed border-line-soft px-3 py-1.5 text-xs font-medium tracking-tight text-subtle sm:text-sm"
      >
        + anywhere
      </motion.span>
    </motion.div>
  );
}

function TabVisual() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  return (
    <div className="rounded-[1.1rem] border-2 border-line bg-surface-2 p-4">
      <div className="flex items-center gap-3">
        <motion.kbd
          animate={
            prefersReducedMotion
              ? { y: 0, boxShadow: "0 3px 0 var(--line)" }
              : {
                  y: [0, -2, 0],
                  boxShadow: [
                    "0 3px 0 var(--line)",
                    "0 5px 0 var(--line)",
                    "0 3px 0 var(--line)",
                  ],
                }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 1.3, ease: "easeInOut", repeat: Infinity }
          }
          className="inline-flex h-10 min-w-[52px] items-center justify-center rounded-[0.6rem] border-2 border-line bg-background px-2.5 text-sm font-semibold text-ink"
        >
          Tab
        </motion.kbd>
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-ink"
          aria-hidden="true"
        >
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
        <span className="text-sm tracking-tight text-ink">
          ghost text becomes <span className="font-semibold">your</span> words
        </span>
      </div>
      <div className="mt-4 overflow-hidden rounded-[0.8rem] border border-line-soft bg-background px-3 py-2 text-sm tracking-tight text-muted">
        I folded your feedback into the deck
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 1, 1] }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="text-accent"
        >
          {" and tightened the closing CTA."}
        </motion.span>
      </div>
    </div>
  );
}

const steps: StepDefinition[] = [
  {
    number: "01",
    title: "Install once",
    description:
      "Download the .dmg and drag tabby into Applications. It registers with macOS and starts your local model.",
    railLabel: "install",
    visual: <InstallVisual />,
  },
  {
    number: "02",
    title: "Type anywhere",
    description:
      "tabby watches your cursor. When you pause mid-sentence, it suggests the next thought inline as ghost text.",
    railLabel: "write",
    visual: <TypeAnywhereVisual />,
  },
  {
    number: "03",
    title: "Press Tab",
    description:
      "The suggestion snaps in. Keep typing to adjust it, or press Escape and tabby steps out of the way.",
    railLabel: "accept",
    visual: <TabVisual />,
  },
];

function ProcessRail() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.75 }}
      className="relative hidden md:block"
    >
      <div className="relative mx-auto mb-8 max-w-[920px] px-6">
        <div className="absolute left-[8%] right-[8%] top-[1.55rem] h-[2px] rounded-full bg-line-soft" />
        <motion.div
          variants={{
            hidden: { scaleX: 0.2, opacity: 0.3 },
            visible: {
              scaleX: 1,
              opacity: 1,
              transition: { duration: 0.85, ease: EASE, delay: 0.06 },
            },
          }}
          style={{ transformOrigin: "0% 50%" }}
          className="absolute left-[8%] right-[8%] top-[1.55rem] h-[2px] rounded-full bg-accent"
        />
        {!prefersReducedMotion ? (
          <motion.span
            aria-hidden="true"
            initial={{ x: "0%" }}
            whileInView={{ x: "590%" }}
            viewport={{ once: true, amount: 0.75 }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.18 }}
            className="absolute left-[8%] top-[1.55rem] h-3 w-3 -translate-y-1/2 rounded-full border border-line bg-background shadow-[0_2px_0_var(--line)]"
          />
        ) : null}
        <div className="grid grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              custom={index}
              variants={railNodeVariants}
              className="flex flex-col items-center gap-2 text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-line bg-surface-2 shadow-[0_3px_0_var(--line)]">
                <span className="text-sm font-semibold tracking-[0.16em] text-ink">
                  {step.number}
                </span>
              </div>
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-subtle">
                {step.railLabel}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function StepCard({
  index,
  step,
  isLast,
}: {
  index: number;
  step: StepDefinition;
  isLast: boolean;
}) {
  return (
    <motion.article
      custom={index}
      variants={stepCardVariants}
      whileHover={{ y: -4, transition: { duration: 0.22, ease: EASE } }}
      className="tabby-panel-soft relative flex h-full flex-col gap-5 rounded-[1.55rem] p-6 sm:p-7"
    >
      <motion.span
        initial={{ scaleX: 0.2, opacity: 0.25 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.65 }}
        transition={{ duration: 0.55, ease: EASE, delay: 0.12 + index * 0.06 }}
        style={{ transformOrigin: "0% 50%" }}
        className="absolute inset-x-6 top-0 h-[4px] rounded-full bg-accent"
      />

      {!isLast ? (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.65 }}
          transition={{ duration: 0.45, ease: EASE, delay: 0.35 + index * 0.08 }}
          className="absolute -right-5 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-line bg-background shadow-[0_3px_0_var(--line)] md:flex"
          aria-hidden="true"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-ink"
          >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </motion.div>
      ) : null}

      <div className="flex items-center justify-between">
        <span className="tabby-display text-[2.8rem] leading-none tracking-tight text-ink/90">
          {step.number}
        </span>
        <span className="ml-5 h-[2px] flex-1 bg-line-soft" />
      </div>
      <div className="space-y-3">
        <span className="inline-flex items-center gap-2 rounded-full border-2 border-line bg-surface-2 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-subtle shadow-[0_2px_0_var(--line)]">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {step.railLabel}
        </span>
        <h3 className="text-[1.55rem] font-semibold leading-tight tracking-tight text-ink sm:text-[1.75rem]">
          {step.title}
        </h3>
      </div>
      <p className="text-sm leading-relaxed tracking-tight text-muted sm:text-base">
        {step.description}
      </p>
      <div className="mt-auto">{step.visual}</div>
    </motion.article>
  );
}

export function HowItWorksSection() {
  return (
    <section className="mx-auto max-w-[1220px]">
      <FadeIn>
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-line bg-surface-2 px-3 py-1 text-xs font-medium tracking-tight text-ink shadow-[0_2px_0_var(--line)]">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            three steps
          </span>
          <h2 className="tabby-display text-[2.7rem] leading-[1.02] tracking-tight text-ink sm:text-[4rem]">
            how tabby works
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed tracking-tight text-muted sm:text-base">
            Install once. It lives in your menu bar and listens quietly in every
            text field on your Mac.
          </p>
        </div>
      </FadeIn>

      <ProcessRail />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.14, delayChildren: 0.06 },
          },
        }}
        className="mt-12 grid gap-6 md:grid-cols-3"
      >
        {steps.map((step, index) => (
          <StepCard
            key={step.number}
            index={index}
            step={step}
            isLast={index === steps.length - 1}
          />
        ))}
      </motion.div>
    </section>
  );
}
