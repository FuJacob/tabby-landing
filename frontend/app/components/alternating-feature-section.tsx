"use client";

import { motion } from "framer-motion";
import { FadeIn, Typewriter, WordReveal } from "./motion";

type FeatureBlockProps = {
  className?: string;
  label: string;
  typed: string;
  suggestion: string;
};

function FeatureBlock({
  className = "",
  label,
  typed,
  suggestion,
}: FeatureBlockProps) {
  return (
    <div
      className={`tabby-panel-soft rounded-[1.55rem] p-5 sm:p-6 ${className}`}
    >
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-2 rounded-full border-2 border-line bg-surface-2 px-3 py-1 text-xs font-medium tracking-[0.14em] text-ink uppercase shadow-[0_2px_0_var(--line)]">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {label}
        </span>
        <span className="text-xs tracking-tight text-subtle">
          inline · live
        </span>
      </div>
      <div className="mt-4 rounded-[1.25rem] border-2 border-line bg-surface-2 p-4">
        <p className="text-sm leading-relaxed tracking-tight text-ink sm:text-base">
          <Typewriter
            prefix={typed}
            suggestion={suggestion}
            suggestionClassName="text-accent"
          />
        </p>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm tracking-tight text-subtle">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-moss" />
          Ghost text appears inline
        </span>
        <span className="flex items-center gap-2">
          <kbd className="inline-flex h-6 items-center rounded-[0.4rem] border-2 border-line bg-surface-2 px-1.5 text-[0.65rem] font-semibold text-ink shadow-[0_2px_0_var(--line)]">
            Tab
          </kbd>
          to accept
        </span>
      </div>
    </div>
  );
}

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

type HeadlineProps = {
  text: string;
  align?: "left" | "right";
};

function SectionHeadline({ text, align = "left" }: HeadlineProps) {
  return (
    <h3
      className={`tabby-display text-[2.75rem] leading-[0.96] tracking-tight text-ink sm:text-[3.6rem] ${
        align === "right" ? "md:text-right" : ""
      }`}
    >
      {text}
    </h3>
  );
}

type FeatureRowProps = {
  layout: "text-left" | "text-right";
  headline: string;
  label: string;
  typed: string;
  suggestion: string;
};

function FeatureRow({
  layout,
  headline,
  label,
  typed,
  suggestion,
}: FeatureRowProps) {
  const textFromLeft = layout === "text-left";

  return (
    <div className="grid gap-6 md:grid-cols-2 md:items-center">
      <motion.div
        variants={textFromLeft ? slideLeft : slideRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
        className={textFromLeft ? "" : "md:order-2"}
      >
        <SectionHeadline
          text={headline}
          align={textFromLeft ? "left" : "right"}
        />
      </motion.div>
      <motion.div
        variants={textFromLeft ? slideRight : slideLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
        transition={{ delay: 0.12 }}
        className={textFromLeft ? "" : "md:order-1"}
      >
        <FeatureBlock label={label} typed={typed} suggestion={suggestion} />
      </motion.div>
    </div>
  );
}

export function AlternatingFeatureSection() {
  return (
    <section className="mx-auto max-w-[1220px]">
      <FadeIn>
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-line bg-surface-2 px-3 py-1 text-xs font-medium tracking-tight text-ink shadow-[0_2px_0_var(--line)]">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            use cases
          </span>
        </div>
      </FadeIn>
      <WordReveal
        as="h2"
        text="main use cases, one by one"
        className="tabby-display mt-4 text-center text-[2.9rem] leading-[1.02] tracking-tight text-ink sm:text-[4.1rem]"
      />
      <FadeIn delay={0.1}>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed tracking-tight text-muted sm:text-base">
          A few examples of tabby quietly finishing thoughts in the apps you
          already use — the typing below is live.
        </p>
      </FadeIn>
      <div className="mt-14 space-y-14 sm:space-y-16 md:space-y-20">
        <FeatureRow
          layout="text-left"
          headline="Write your emails faster"
          label="email"
          typed="I folded your feedback into the deck and updated the closing slide"
          suggestion=". If you are aligned, I can send the final version before lunch."
        />
        <FeatureRow
          layout="text-right"
          headline="Write your notes faster"
          label="notes"
          typed="The customer kept circling back to onboarding friction"
          suggestion=", so I captured the main blockers and the workaround they actually trusted."
        />
        <FeatureRow
          layout="text-left"
          headline="Write your docs faster"
          label="docs"
          typed="This release introduces quieter inline suggestions across every text field"
          suggestion=", with per-model controls and a lighter system footprint on macOS."
        />
        <FeatureRow
          layout="text-right"
          headline="Write your messages faster"
          label="messages"
          typed="Hey Sam, I pushed the latest changes and cleaned up the edge cases"
          suggestion=". If you want, I can post a short summary in the channel too."
        />
        <FeatureRow
          layout="text-left"
          headline="Write your updates faster"
          label="updates"
          typed="Quick update: onboarding drop-off improved after the new checklist"
          suggestion=". I will share the full numbers and the next experiment in tomorrow's sync."
        />
      </div>
    </section>
  );
}
