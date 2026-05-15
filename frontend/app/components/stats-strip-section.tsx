"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, type ComponentType, type SVGProps } from "react";
import { ModelIcon, OpenSourceIcon, PrivateIcon } from "./icons";
import { CountUp } from "./motion";

type StatProps = {
  displayValue: string;
  label: string;
  hint: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const STATS: StatProps[] = [
  {
    displayValue: "Models",
    label: "open source model customization",
    hint: "Use Tabby's built-in local downloads or bring your own GGUF model.",
    Icon: ModelIcon,
  },
  {
    displayValue: "100%",
    label: "private, no cloud",
    hint: "Your text, keystrokes, and suggestions stay on your Mac.",
    Icon: PrivateIcon,
  },
  {
    displayValue: "AGPL",
    label: "open source and free",
    hint: "No accounts, no dashboard, and nothing locked behind a paywall.",
    Icon: OpenSourceIcon,
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

function Stat({
  displayValue,
  label,
  hint,
  Icon,
}: StatProps) {
  return (
    <div className="flex h-full min-h-64 flex-col rounded-[1.25rem] border-2 border-line bg-background px-5 py-6 shadow-[0_4px_0_var(--line)] sm:px-6">
      <div className="flex items-start justify-between gap-4">
        <div className="tabby-display text-[2.55rem] leading-none tracking-tight text-ink sm:text-[3.2rem]">
          {displayValue === "100%" ? (
            <CountUp to={100} suffix="%" />
          ) : (
            displayValue
          )}
        </div>
        <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-[1rem] border-2 border-line bg-accent-soft text-ink shadow-[0_3px_0_var(--line)] sm:h-14 sm:w-14">
          <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
        </div>
      </div>
      <div className="mt-4 text-base font-semibold tracking-tight text-ink sm:text-lg">
        {label}
      </div>
      <div className="mt-2 text-sm leading-relaxed tracking-tight text-subtle sm:text-base">
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

  const smoothY = useSpring(translate, {
    stiffness: 140,
    damping: 26,
    mass: 0.55,
  });
  const smoothScale = useSpring(scale, {
    stiffness: 150,
    damping: 24,
    mass: 0.55,
  });
  const smoothOpacity = useSpring(opacity, {
    stiffness: 180,
    damping: 28,
    mass: 0.4,
  });

  return (
    <section ref={sectionRef} className="mx-auto max-w-305">
      <motion.div
        style={{
          y: smoothY,
          scale: smoothScale,
          opacity: smoothOpacity,
          transformOrigin: "50% 50%",
        }}
        className="rounded-[1.6rem] p-2 sm:p-3"
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
          className="grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.62, ease: EASE },
                },
              }}
              className="h-full"
            >
              <Stat
                displayValue={stat.displayValue}
                label={stat.label}
                hint={stat.hint}
                Icon={stat.Icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
