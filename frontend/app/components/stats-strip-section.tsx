"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { CountUp } from "./motion";

type StatProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  hint: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;

function Stat({ value, prefix, suffix, label, hint }: StatProps) {
  return (
    <div className="flex flex-col gap-1.5 px-4 py-5 sm:px-6">
      <div className="tabby-display text-[2.3rem] leading-none tracking-tight text-ink sm:text-[2.9rem]">
        <CountUp to={value} prefix={prefix} suffix={suffix} />
      </div>
      <div className="text-sm font-semibold tracking-tight text-ink sm:text-base">
        {label}
      </div>
      <div className="text-xs leading-relaxed tracking-tight text-subtle sm:text-sm">
        {hint}
      </div>
    </div>
  );
}

export function StatsStripSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 88%", "end 45%"],
  });

  const translate = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [30, 0],
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [1, 1] : [0.965, 1],
  );
  const opacity = useTransform(scrollYProgress, [0, 0.55, 1], [0.18, 0.75, 1]);
  const lineScale = useTransform(scrollYProgress, [0, 1], [0.18, 1]);
  const pulseX = useTransform(scrollYProgress, [0, 1], ["2%", "98%"]);

  const smoothY = useSpring(translate, { stiffness: 140, damping: 26, mass: 0.55 });
  const smoothScale = useSpring(scale, { stiffness: 150, damping: 24, mass: 0.55 });
  const smoothOpacity = useSpring(opacity, { stiffness: 180, damping: 28, mass: 0.4 });
  const smoothLineScale = useSpring(lineScale, {
    stiffness: 170,
    damping: 26,
    mass: 0.45,
  });
  const smoothPulseX = useSpring(pulseX, {
    stiffness: 150,
    damping: 26,
    mass: 0.5,
  });

  return (
    <section ref={sectionRef} className="mx-auto max-w-[1220px]">
      <div className="mx-auto max-w-[980px] px-1">
        <div className="mb-5 flex items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-line bg-surface-2 px-3 py-1 text-[0.72rem] font-medium tracking-[0.14em] text-ink uppercase shadow-[0_2px_0_var(--line)]">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            proof at a glance
          </span>
          <div className="relative hidden h-[2px] flex-1 overflow-hidden rounded-full bg-line-soft sm:block">
            <motion.span
              aria-hidden="true"
              style={{ scaleX: smoothLineScale, transformOrigin: "0% 50%" }}
              className="absolute inset-y-0 left-0 right-0 bg-accent"
            />
            {!prefersReducedMotion ? (
              <motion.span
                aria-hidden="true"
                style={{ left: smoothPulseX }}
                className="absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-line bg-background shadow-[0_1px_0_var(--line)]"
              />
            ) : null}
          </div>
        </div>
      </div>

      <motion.div
        style={{
          y: smoothY,
          scale: smoothScale,
          opacity: smoothOpacity,
          transformOrigin: "50% 50%",
        }}
        className="tabby-panel rounded-[1.6rem] p-2 sm:p-3"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.45 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.08 },
            },
          }}
          className="grid grid-cols-2 divide-line-soft rounded-[1.2rem] border-2 border-line bg-surface-3 md:grid-cols-4 md:divide-x-2"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.62, ease: EASE },
              },
            }}
            className="border-b-2 border-line-soft md:border-b-0"
          >
            <Stat
              value={80}
              prefix="<"
              suffix="ms"
              label="suggestion latency"
              hint="Local inference, no round trip"
            />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.62, ease: EASE },
              },
            }}
            className="border-b-2 border-line-soft md:border-b-0"
          >
            <Stat
              value={9}
              suffix="+"
              label="apps supported"
              hint="Mail, Notes, Slack, Notion, more"
            />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.62, ease: EASE },
              },
            }}
          >
            <Stat
              value={0}
              label="data leaves your Mac"
              hint="Every token stays on-device"
            />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.62, ease: EASE },
              },
            }}
          >
            <Stat
              value={100}
              suffix="%"
              label="free & open source"
              hint="MIT licensed, built in public"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
