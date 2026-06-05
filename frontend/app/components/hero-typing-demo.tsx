"use client";

import { m, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;
const GHOST_COLOR = "rgba(255, 130, 115, 0.62)"; // accent @ 62%

type Scene = {
  app: string;
  icon: string;
  iconPad?: boolean;
  prefix: string;
  suggestion: string;
};

// Real-feeling, concise continuations (the product's default 7–12 word range),
// each in a different everyday app to echo "works anywhere you type".
const SCENES: Scene[] = [
  {
    app: "Gmail",
    icon: "/app-icons/gmail.svg",
    prefix: "Hey Sam — thanks for the notes.",
    suggestion: " I'll fold them in and resend by end of day.",
  },
  {
    app: "Slack",
    icon: "/app-icons/slack.webp",
    iconPad: true,
    prefix: "Fix is deployed,",
    suggestion: " I'll keep an eye on the dashboards tonight.",
  },
  {
    app: "Notes",
    icon: "/app-icons/apple-notes.svg",
    prefix: "Weekend list:",
    suggestion: " oat milk, matcha, and more cat treats.",
  },
  {
    app: "iMessage",
    icon: "/app-icons/imessage.svg",
    prefix: "running a few minutes late —",
    suggestion: " grab us a table and I'll be right over.",
  },
];

type Phase = "typing" | "ghost" | "accepting" | "accepted";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const TRAFFIC = ["#ff5f57", "#febc2e", "#28c840"] as const;

export function HeroTypingDemo({ className = "" }: { className?: string }) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const [sceneIndex, setSceneIndex] = useState(0);
  const [typed, setTyped] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");
  const [inView, setInView] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !inView) return;
    let cancelled = false;

    async function run() {
      // small loop guard so we always resume from a clean state
      while (!cancelled) {
        for (let s = 0; s < SCENES.length; s++) {
          if (cancelled) return;
          const scene = SCENES[s];
          setSceneIndex(s);
          setPhase("typing");
          setTyped(0);
          await sleep(320);

          for (let i = 1; i <= scene.prefix.length; i++) {
            if (cancelled) return;
            setTyped(i);
            await sleep(26);
          }
          await sleep(360);
          if (cancelled) return;

          setPhase("ghost");
          await sleep(1000);
          if (cancelled) return;

          setPhase("accepting");
          await sleep(240);
          if (cancelled) return;

          setPhase("accepted");
          await sleep(1600);
        }
      }
    }

    void run();
    return () => {
      cancelled = true;
    };
  }, [prefersReducedMotion, inView]);

  const scene = SCENES[sceneIndex];
  const staticMode = prefersReducedMotion;
  const showPrefix = staticMode ? scene.prefix : scene.prefix.slice(0, typed);
  const showGhost =
    staticMode || phase === "ghost" || phase === "accepting" || phase === "accepted";
  const accepted = staticMode || phase === "accepted";
  const pressing = phase === "accepting";

  return (
    <div
      ref={rootRef}
      role="img"
      aria-label="Cotabby suggesting the rest of a sentence inline and accepting it with the Tab key"
      className={`tabby-panel w-full overflow-hidden rounded-[1.4rem] ${className}`}
    >
      {/* window chrome */}
      <div className="flex items-center gap-3 border-b-2 border-line-soft bg-surface-3 px-4 py-2.5">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          {TRAFFIC.map((c) => (
            <span
              key={c}
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-5 w-5 items-center justify-center overflow-hidden rounded-[0.4rem] border border-line-soft bg-white">
            <Image
              src={scene.icon}
              alt=""
              fill
              sizes="20px"
              className={`object-contain ${scene.iconPad ? "p-1" : "p-0.5"}`}
            />
          </span>
          <span className="text-xs font-bold tracking-tight text-subtle">
            {scene.app}
          </span>
        </div>
      </div>

      {/* text field */}
      <div className="px-5 py-5 sm:px-6 sm:py-6">
        <p className="min-h-[5.25rem] text-left text-[1.05rem] leading-relaxed tracking-tight text-ink sm:min-h-[4.75rem] sm:text-[1.2rem]">
          <span>{showPrefix}</span>
          {showGhost && (
            <m.span
              initial={false}
              animate={{ color: accepted ? "var(--foreground)" : GHOST_COLOR }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              {scene.suggestion}
            </m.span>
          )}
          {!staticMode && !accepted && (
            <span className="tabby-caret-blink ml-px inline-block h-[1.05em] w-[2px] translate-y-[0.18em] bg-accent align-baseline" />
          )}
        </p>

        <div className="mt-4 flex items-center justify-between border-t-2 border-line-soft pt-3">
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-subtle">
            {accepted ? "accepted" : showGhost ? "suggestion" : "typing…"}
          </span>
          <span className="flex items-center gap-2 text-[0.7rem] font-semibold tracking-tight text-subtle">
            press
            <m.kbd
              animate={
                staticMode || !pressing
                  ? { y: 0, scale: 1 }
                  : { y: [0, 3, 0], scale: [1, 0.9, 1] }
              }
              transition={{ duration: 0.24, ease: "easeOut" }}
              style={{ boxShadow: "0 2.5px 0 var(--shadow-color)" }}
              className="inline-flex h-7 min-w-11 items-center justify-center gap-1 rounded-[0.5rem] border-2 border-line bg-background px-2 text-[0.78rem] font-bold text-ink"
            >
              <span aria-hidden="true">⇥</span> Tab
            </m.kbd>
            to accept
          </span>
        </div>
      </div>
    </div>
  );
}
