"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  FadeIn,
  HoverLift,
  ScaleIn,
  Stagger,
  StaggerItem,
  WordReveal,
} from "./motion";

type CustomItemProps = {
  eyebrow: string;
  title: string;
  description: string;
  preview: ReactNode;
};

function CustomItem({ eyebrow, title, description, preview }: CustomItemProps) {
  return (
    <HoverLift lift={5} className="h-full">
      <article className="tabby-panel-soft flex h-full flex-col gap-4 rounded-[1.55rem] p-6 sm:p-7">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-moss sm:text-[0.75rem]">
            {eyebrow}
          </p>
        </div>
        <h3 className="text-[1.65rem] font-semibold leading-tight tracking-tight text-ink sm:text-[1.9rem]">
          {title}
        </h3>
        <p className="max-w-md text-sm leading-relaxed tracking-tight text-muted sm:text-base">
          {description}
        </p>
        <div className="mt-auto">{preview}</div>
      </article>
    </HoverLift>
  );
}

function ModelsPreview() {
  const models = [
    { name: "tabby-balanced-1", note: "good place to start", active: true },
    { name: "tabby-fast-1", note: "lower latency", active: false },
    { name: "tabby-depth-1", note: "higher quality", active: false },
  ];
  return (
    <div className="rounded-[1.2rem] border-2 border-line bg-surface-2 p-4 shadow-[0_3px_0_var(--line)]">
      <div className="space-y-2.5">
        {models.map((m) => (
          <div
            key={m.name}
            className={`flex items-center justify-between gap-3 rounded-[0.7rem] border-2 px-3 py-2 ${
              m.active
                ? "border-line bg-accent/15 shadow-[0_2px_0_var(--line)]"
                : "border-line-soft bg-background"
            }`}
          >
            <div className="flex items-center gap-2">
              <span
                className={`h-2 w-2 rounded-full ${m.active ? "bg-accent" : "bg-subtle-foreground/40"}`}
              />
              <span className="text-sm font-semibold tracking-tight text-ink">
                {m.name}
              </span>
            </div>
            <span className="text-xs tracking-tight text-subtle">{m.note}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LengthPreview() {
  return (
    <div className="rounded-[1.2rem] border-2 border-line bg-surface-2 p-5 shadow-[0_3px_0_var(--line)]">
      <div className="flex items-center justify-between text-xs font-semibold tracking-[0.12em] uppercase text-muted">
        <span>Short</span>
        <span className="text-ink">Medium</span>
        <span>Long</span>
      </div>
      <div className="relative mt-4 h-2 rounded-full border-2 border-line bg-background">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "55%" }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 top-0 h-full rounded-full bg-accent"
        />
        <motion.div
          initial={{ left: "0%" }}
          whileInView={{ left: "55%" }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-line bg-background shadow-[0_2px_0_var(--line)]"
        />
      </div>
      <p className="mt-4 text-sm leading-relaxed tracking-tight text-subtle">
        Suggestions stay concise by default so they still feel like an
        extension of your own sentence.
      </p>
    </div>
  );
}

function TonePreview() {
  const tones = ["warm", "concise", "direct"];
  return (
    <div className="rounded-[1.2rem] border-2 border-line bg-surface-2 p-5 shadow-[0_3px_0_var(--line)]">
      <div className="flex flex-wrap gap-2">
        {tones.map((t, i) => (
          <span
            key={t}
            className={`inline-flex items-center rounded-full border-2 border-line px-3 py-1 text-xs font-semibold tracking-tight shadow-[0_2px_0_var(--line)] ${
              i === 0 ? "bg-accent/20 text-ink" : "bg-background text-muted"
            }`}
          >
            {t}
          </span>
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed tracking-tight text-muted">
        Hey Maya,
        <span className="text-accent">
          {" thanks again for turning this around so quickly — really appreciate it."}
        </span>
      </p>
      <p className="mt-3 text-xs tracking-tight text-subtle">
        Tone adjusts without locking you into one preset.
      </p>
    </div>
  );
}

export function CustomizationCardsSection() {
  return (
    <section className="mx-auto max-w-[1220px]">
      <FadeIn>
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-line bg-surface-2 px-3 py-1 text-xs font-medium tracking-tight text-ink shadow-[0_2px_0_var(--line)]">
            <span className="h-1.5 w-1.5 rounded-full bg-moss" />
            yours, tuned
          </span>
        </div>
      </FadeIn>
      <WordReveal
        as="h2"
        text="make Tabby feel like yours"
        className="tabby-display mt-4 text-center text-[2.9rem] leading-[1.02] tracking-tight text-ink sm:text-[4.1rem]"
      />
      <FadeIn delay={0.1}>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed tracking-tight text-muted sm:text-base">
          Tune the suggestions so they feel helpful, not intrusive.
        </p>
      </FadeIn>

      <Stagger
        stagger={0.12}
        className="mt-12 grid gap-6 lg:grid-cols-3"
      >
        <StaggerItem>
          <ScaleIn>
            <CustomItem
              eyebrow="models"
              title="choose your model"
              description="Pick the balance that fits your workflow, from instant completions to slower but sharper suggestions."
              preview={<ModelsPreview />}
            />
          </ScaleIn>
        </StaggerItem>
        <StaggerItem>
          <ScaleIn delay={0.08}>
            <CustomItem
              eyebrow="length"
              title="short or long"
              description="Keep completions short and invisible, or let Tabby expand into fuller suggestions when you need momentum."
              preview={<LengthPreview />}
            />
          </ScaleIn>
        </StaggerItem>
        <StaggerItem>
          <ScaleIn delay={0.16}>
            <CustomItem
              eyebrow="tone"
              title="nudge the voice"
              description="Customize the tone between warm, concise, or direct and keep editing naturally."
              preview={<TonePreview />}
            />
          </ScaleIn>
        </StaggerItem>
      </Stagger>
    </section>
  );
}
