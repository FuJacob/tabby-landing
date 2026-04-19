"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { FadeIn, ScaleIn, Stagger, StaggerItem } from "./motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const flowContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const flowItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: EASE },
  },
};

type PillarProps = {
  label: string;
  description: string;
};

function Pillar({ label, description }: PillarProps) {
  return (
    <div className="flex gap-4 rounded-[1.1rem] border-2 border-line bg-surface-2 p-5 shadow-[0_3px_0_var(--line)]">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-line bg-accent/15 text-ink">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-base font-semibold tracking-tight text-ink">
          {label}
        </span>
        <span className="text-sm leading-relaxed tracking-tight text-muted">
          {description}
        </span>
      </div>
    </div>
  );
}

function RejectedPill({ label }: { label: string }) {
  return (
    <motion.div
      variants={flowItem}
      className="flex min-w-[6.75rem] items-center justify-center gap-2 rounded-full border-2 border-dashed border-line-soft bg-background px-3 py-1.5 text-xs tracking-tight text-subtle line-through decoration-accent decoration-2"
    >
      {label}
    </motion.div>
  );
}

function DataFlowVisual() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.45 }}
      variants={flowContainer}
      className="relative flex min-h-[34rem] items-center justify-center overflow-hidden rounded-[1.7rem] border-2 border-line bg-surface-3 px-6 py-8 shadow-[0_5px_0_var(--line)] sm:px-8 sm:py-10"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[1.5rem] opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle, #0a0a0a 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.9, ease: EASE }}
        className="pointer-events-none absolute inset-x-[18%] top-[16%] h-32 rounded-full bg-accent-soft/35 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.12 }}
        className="pointer-events-none absolute bottom-[14%] left-[20%] h-36 w-36 rounded-full bg-moss/20 blur-3xl"
      />

      <div className="relative flex w-full max-w-[28rem] flex-col items-center justify-between gap-7">
        <motion.div
          variants={flowItem}
          className="tabby-chip flex items-center gap-3 rounded-[1rem] px-4 py-3"
        >
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="text-sm font-medium tracking-tight text-ink">
            your text
          </span>
        </motion.div>

        <motion.div variants={flowItem} className="relative flex h-10 items-center">
          <motion.span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
            animate={{ y: [-12, 10, -12], opacity: [0, 1, 0] }}
            transition={{ duration: 1.9, ease: "easeInOut", repeat: Infinity }}
          />
          <svg
            width="24"
            height="34"
            viewBox="0 0 24 34"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-ink"
            aria-hidden="true"
          >
            <path d="M12 4v22" />
            <path d="m6 20 6 6 6-6" />
          </svg>
        </motion.div>

        <motion.div
          variants={flowItem}
          className="relative flex h-[10.5rem] w-[10.5rem] items-center justify-center rounded-[1.5rem] border-2 border-line bg-ink shadow-[0_4px_0_var(--line)]"
        >
          <motion.div
            aria-hidden="true"
            className="absolute inset-[-10%] rounded-[1.8rem] border border-accent/35"
            animate={{ opacity: [0.2, 0.55, 0.2], scale: [0.96, 1.04, 0.96] }}
            transition={{ duration: 2.8, ease: "easeInOut", repeat: Infinity }}
          />
          <Image
            src="/512.png"
            alt="tabby logo"
            width={76}
            height={76}
            className="relative z-10 h-[4.75rem] w-[4.75rem] rounded-[1rem]"
          />
          <motion.div
            variants={flowItem}
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border-2 border-line bg-moss/30 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.1em] text-ink uppercase shadow-[0_2px_0_var(--line)]"
          >
            on your Mac
          </motion.div>
        </motion.div>

        <motion.div
          variants={flowContainer}
          className="mt-2 flex w-full flex-wrap items-center justify-center gap-3 sm:flex-nowrap sm:justify-between"
        >
          <RejectedPill label="cloud" />
          <RejectedPill label="telemetry" />
          <RejectedPill label="accounts" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export function PrivacySection() {
  return (
    <section className="mx-auto max-w-[1220px]">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-6">
          <FadeIn>
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-line bg-accent/15 px-3 py-1 text-xs font-semibold tracking-[0.14em] uppercase text-ink shadow-[0_2px_0_var(--line)]">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              local-first
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="tabby-display max-w-xl text-[2.7rem] leading-[1] tracking-tight text-ink sm:text-[3.9rem]">
              your writing stays on your Mac.
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="max-w-xl text-base leading-relaxed tracking-tight text-muted sm:text-lg">
              tabby runs a compact language model on Apple&apos;s Neural Engine.
              Every keystroke, every suggestion, every token stays inside your
              laptop. No sign-up, no subscription, no background uploads.
            </p>
          </FadeIn>

          <Stagger stagger={0.1} className="grid gap-3">
            <StaggerItem>
              <Pillar
                label="On-device inference"
                description="Suggestions generated by a local model using Apple's Neural Engine — works offline, in airplane mode, on a plane."
              />
            </StaggerItem>
            <StaggerItem>
              <Pillar
                label="No accounts, ever"
                description="There is no login. There is no dashboard. There is nothing to sign up for. You own the app and the data."
              />
            </StaggerItem>
            <StaggerItem>
              <Pillar
                label="Auditable"
                description="Open source under MIT. Read the network layer, compile from source, run a diff against every release."
              />
            </StaggerItem>
          </Stagger>
        </div>

        <ScaleIn delay={0.2}>
          <DataFlowVisual />
        </ScaleIn>
      </div>
    </section>
  );
}
