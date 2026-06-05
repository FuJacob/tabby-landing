"use client";

import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

// Soft red / amber / green — a desaturated nod to macOS traffic lights that
// still sits in the cream palette.
const WINDOW_DOTS = ["#e8806f", "#e8c06f", "#7fc8a0"] as const;

type Phase = "typing" | "suggest" | "accept" | "hold";

// Phase machine — same shape as how-it-works-section.tsx (TabVisual). "typing"
// is driven char-by-char below; these are the durations for the timed phases.
const PHASE_MS: Record<Phase, number> = {
  typing: 0, // unused — typing is driven char-by-char below
  suggest: 1100,
  accept: 950,
  hold: 1700,
};
const TYPE_SPEED_MS = 32;
const POST_TYPE_PAUSE_MS = 340;

type Kind = "email" | "channel" | "imessage" | "note" | "doc";

type AppMock = {
  key: string;
  /** Window title-bar label. */
  name: string;
  /** Short label for the app tab (used in aria-label). */
  short: string;
  iconSrc: string;
  kind: Kind;
  dark?: boolean;
  // Per-app palette so each window reads like the real app.
  surface: string;
  text: string;
  subtle: string;
  ghost: string;
  accent: string;
  /** Primary context label: recipient / channel / contact / title. */
  meta: string;
  /** Secondary context: email subject, note date. */
  sub?: string;
  /** Incoming message for the iMessage thread. */
  received?: string;
  /** Text the "user" has already typed. */
  prefix: string;
  /** The suggestion that ghosts in, then commits to the app's text color. */
  ghostText: string;
};

const APPS: AppMock[] = [
  {
    key: "gmail",
    name: "Gmail — Compose",
    short: "Gmail",
    iconSrc: "/app-icons/gmail.svg",
    kind: "email",
    surface: "#ffffff",
    text: "#202124",
    subtle: "#5f6368",
    ghost: "#bdc1c6",
    accent: "#1a73e8",
    meta: "alex@cotabby.app",
    sub: "Quick notes from today",
    prefix: "Thanks for the quick notes — ",
    ghostText: "I'll fold them into the deck tonight.",
  },
  {
    key: "applemail",
    name: "Mail — New Message",
    short: "Apple Mail",
    iconSrc: "/app-icons/apple-mail.webp",
    kind: "email",
    surface: "#ffffff",
    text: "#1d1d1f",
    subtle: "#86868b",
    ghost: "#c7c7cc",
    accent: "#1f8aff",
    meta: "dana@team.com",
    sub: "Re: Launch plan",
    prefix: "Looks great — ",
    ghostText: "let's ship it Friday and tell the team.",
  },
  {
    key: "outlook",
    name: "Outlook — New Mail",
    short: "Outlook",
    iconSrc: "/app-icons/microsoft-outlook.webp",
    kind: "email",
    surface: "#ffffff",
    text: "#242424",
    subtle: "#616161",
    ghost: "#c8c8c8",
    accent: "#0f6cbd",
    meta: "finance@corp.com",
    sub: "Q3 numbers",
    prefix: "Attaching the deck — ",
    ghostText: "the totals are on slide four.",
  },
  {
    key: "slack",
    name: "Slack — #design",
    short: "Slack",
    iconSrc: "/app-icons/slack.webp",
    kind: "channel",
    surface: "#ffffff",
    text: "#1d1c1d",
    subtle: "#616061",
    ghost: "#bcbcbc",
    accent: "#4a154b",
    meta: "design",
    prefix: "Shipping the new hero today — ",
    ghostText: "I'll drop a Loom once it's on staging.",
  },
  {
    key: "discord",
    name: "Discord — #general",
    short: "Discord",
    iconSrc: "/app-icons/discord.webp",
    kind: "channel",
    dark: true,
    surface: "#313338",
    text: "#dbdee1",
    subtle: "#949ba4",
    ghost: "#5d6066",
    accent: "#5865f2",
    meta: "general",
    prefix: "Pushed the fix — ",
    ghostText: "give it a pull and let me know.",
  },
  {
    key: "imessage",
    name: "Messages",
    short: "iMessage",
    iconSrc: "/app-icons/imessage.svg",
    kind: "imessage",
    surface: "#ffffff",
    text: "#ffffff",
    subtle: "#8e8e93",
    ghost: "rgba(255,255,255,0.6)",
    accent: "#0b84ff",
    meta: "Maya",
    received: "Are you close?",
    prefix: "Running five late — ",
    ghostText: "grab a table and I'll be right there.",
  },
  {
    key: "notes",
    name: "Notes — Weekend trip",
    short: "Apple Notes",
    iconSrc: "/app-icons/apple-notes.svg",
    kind: "note",
    surface: "#fffdf5",
    text: "#1c1c1e",
    subtle: "#b0a075",
    ghost: "#d8cfb8",
    accent: "#f5c33b",
    meta: "Weekend trip",
    sub: "Today at 9:41 AM",
    prefix: "Don't forget to pack ",
    ghostText: "chargers, trail snacks, and the camera.",
  },
  {
    key: "notion",
    name: "Notion — Q3 planning",
    short: "Notion",
    iconSrc: "/app-icons/notion.svg",
    kind: "doc",
    surface: "#ffffff",
    text: "#37352f",
    subtle: "#9b9a97",
    ghost: "#cfcdc8",
    accent: "#37352f",
    meta: "Q3 planning",
    prefix: "This quarter we'll ",
    ghostText: "halve onboarding time and ship the API.",
  },
];

function renderBody(app: AppMock, typed: ReactNode, line: string): ReactNode {
  switch (app.kind) {
    case "email":
      return (
        <div className="px-6 pb-7 pt-5">
          <div className="space-y-2.5">
            <div className="flex items-center gap-3 text-[0.95rem] sm:text-[1.02rem]">
              <span className="w-16 shrink-0" style={{ color: app.subtle }}>
                To
              </span>
              <span className="truncate font-medium" style={{ color: app.text }}>
                {app.meta}
              </span>
            </div>
            <div className="flex items-center gap-3 text-[0.95rem] sm:text-[1.02rem]">
              <span className="w-16 shrink-0" style={{ color: app.subtle }}>
                Subject
              </span>
              <span className="truncate font-semibold" style={{ color: app.text }}>
                {app.sub}
              </span>
            </div>
          </div>
          <div className="my-5 h-px w-full" style={{ background: line }} />
          <p className="text-[1.22rem] leading-relaxed tracking-tight sm:text-[1.4rem]">
            {typed}
          </p>
        </div>
      );
    case "channel": {
      const username = app.dark ? app.accent : app.text;
      return (
        <div className="px-6 pb-7 pt-4">
          <div
            className="flex items-center gap-2 pb-3"
            style={{ borderBottom: `1px solid ${line}` }}
          >
            <span
              className="text-[1.1rem] font-bold sm:text-[1.2rem]"
              style={{ color: app.text }}
            >{`# ${app.meta}`}</span>
          </div>
          <div className="mt-4 flex gap-3.5">
            <span
              className="mt-0.5 h-11 w-11 shrink-0 rounded-full"
              style={{ background: app.accent }}
              aria-hidden="true"
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline gap-2">
                <span
                  className="text-[1.02rem] font-bold"
                  style={{ color: username }}
                >
                  you
                </span>
                <span className="text-[0.8rem]" style={{ color: app.subtle }}>
                  now
                </span>
              </div>
              <p className="mt-1 text-[1.15rem] leading-relaxed tracking-tight sm:text-[1.3rem]">
                {typed}
              </p>
            </div>
          </div>
        </div>
      );
    }
    case "imessage":
      return (
        <div className="px-5 pb-6 pt-4">
          <p
            className="text-center text-[0.82rem] font-semibold"
            style={{ color: app.subtle }}
          >
            {app.meta}
          </p>
          <div className="mt-4 flex">
            <span
              className="max-w-[78%] rounded-[1.3rem] rounded-bl-[0.45rem] px-4 py-2.5 text-[1.08rem] sm:text-[1.18rem]"
              style={{ background: "#e9e9eb", color: "#000000" }}
            >
              {app.received}
            </span>
          </div>
          <div className="mt-3 flex justify-end">
            <span
              className="max-w-[84%] rounded-[1.3rem] rounded-br-[0.45rem] px-4 py-2.5 text-[1.08rem] leading-relaxed sm:text-[1.18rem]"
              style={{ background: app.accent }}
            >
              {typed}
            </span>
          </div>
        </div>
      );
    case "note":
      return (
        <div className="px-6 pb-7 pt-5">
          <h4
            className="text-[1.55rem] font-bold tracking-tight sm:text-[1.8rem]"
            style={{ color: app.text }}
          >
            {app.meta}
          </h4>
          <p className="mt-1.5 text-[0.82rem]" style={{ color: app.subtle }}>
            {app.sub}
          </p>
          <p className="mt-4 text-[1.22rem] leading-relaxed tracking-tight sm:text-[1.4rem]">
            {typed}
          </p>
        </div>
      );
    case "doc":
      return (
        <div className="px-6 pb-7 pt-6">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="text-[1.7rem] leading-none">
              🗒️
            </span>
            <h4
              className="text-[1.65rem] font-bold tracking-tight sm:text-[1.95rem]"
              style={{ color: app.text }}
            >
              {app.meta}
            </h4>
          </div>
          <p className="mt-5 text-[1.22rem] leading-relaxed tracking-tight sm:text-[1.4rem]">
            {typed}
          </p>
        </div>
      );
  }
}

export function HeroAppDemo() {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const reduce = prefersReducedMotion;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [index, setIndex] = useState(0);
  // Start mid-suggestion on the first app so the very first paint shows the
  // payoff (ghost text + the Cotabby chip), not an empty field.
  const [phase, setPhase] = useState<Phase>("suggest");
  const [typedLen, setTypedLen] = useState(APPS[0].prefix.length);

  const app = APPS[index];
  const active = isInView && !hovered && !reduce;

  // Pause when scrolled out of view (matches the how-it-works visuals).
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Char-by-char typing, then hand off to "suggest".
  useEffect(() => {
    if (!active || phase !== "typing") return;
    if (typedLen >= app.prefix.length) {
      const id = setTimeout(() => setPhase("suggest"), POST_TYPE_PAUSE_MS);
      return () => clearTimeout(id);
    }
    const id = setTimeout(() => setTypedLen((n) => n + 1), TYPE_SPEED_MS);
    return () => clearTimeout(id);
  }, [active, phase, typedLen, app.prefix.length]);

  // Timed phases: suggest → accept → hold → next app.
  useEffect(() => {
    if (!active || phase === "typing") return;
    const id = setTimeout(() => {
      if (phase === "suggest") setPhase("accept");
      else if (phase === "accept") setPhase("hold");
      else {
        setIndex((i) => (i + 1) % APPS.length);
        setTypedLen(0);
        setPhase("typing");
      }
    }, PHASE_MS[phase]);
    return () => clearTimeout(id);
  }, [active, phase]);

  function selectApp(i: number) {
    setIndex(i);
    setTypedLen(reduce ? APPS[i].prefix.length : 0);
    setPhase(reduce ? "hold" : "typing");
  }

  const showGhost = reduce || phase !== "typing";
  const inked = reduce || phase === "accept" || phase === "hold";
  const showCaret = !reduce && (phase === "typing" || phase === "suggest");
  const typed = reduce || phase !== "typing" ? app.prefix : app.prefix.slice(0, typedLen);
  const line = app.dark ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.08)";

  const typedLine = (
    <>
      <span style={{ color: app.text }}>{typed}</span>
      {showCaret && (
        <m.span
          aria-hidden="true"
          className="ml-px inline-block h-[1.05em] w-[2px] translate-y-[0.12em] rounded-[1px] align-baseline"
          style={{ backgroundColor: app.text }}
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
        />
      )}
      <m.span
        initial={false}
        animate={{ opacity: showGhost ? 1 : 0, color: inked ? app.text : app.ghost }}
        transition={{
          opacity: { duration: 0.3, ease: EASE },
          color: { duration: 0.35, ease: EASE },
        }}
        style={{ color: app.ghost }}
      >
        {app.ghostText}
      </m.span>
    </>
  );

  return (
    <div ref={containerRef} className="w-full select-none">
      <span className="sr-only">
        A live preview of Cotabby suggesting text inside Gmail, Apple Mail,
        Outlook, Slack, Discord, iMessage, Notes, and Notion.
      </span>

      <m.div
        aria-hidden="true"
        initial={false}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{ rotate: hovered || reduce ? 0 : -1.2, y: hovered ? -4 : 0 }}
        transition={{ duration: 0.35, ease: EASE }}
        className="relative mx-auto w-full max-w-[34rem] overflow-hidden rounded-[1.5rem] border-2 border-line bg-surface shadow-[0_11.8px_0_var(--line)]"
      >
        <AnimatePresence mode="wait" initial={false}>
          <m.div
            key={app.key}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.24, ease: EASE }}
          >
            {/* macOS title bar (window chrome) */}
            <div className="flex items-center gap-3 border-b-2 border-line-soft bg-surface-3 px-4 py-3">
              <div className="flex items-center gap-1.5">
                {WINDOW_DOTS.map((color) => (
                  <span
                    key={color}
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <div className="ml-1 flex min-w-0 items-center gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-[0.5rem] border border-line-soft bg-white">
                  <Image
                    src={app.iconSrc}
                    alt=""
                    width={32}
                    height={32}
                    sizes="20px"
                    className="h-3.5 w-3.5 object-contain"
                  />
                </span>
                <span className="truncate text-[0.82rem] font-bold tracking-tight text-subtle">
                  {app.name}
                </span>
              </div>
            </div>

            {/* App content (per-app skin) */}
            <div
              className="relative min-h-[15rem] sm:min-h-[16.5rem]"
              style={{ background: app.surface }}
            >
              {renderBody(app, typedLine, line)}
            </div>
          </m.div>
        </AnimatePresence>

        {/* Persistent Tab key — the accept affordance. Always present; it only
            presses down on accept (never fades in/out). */}
        <m.kbd
          aria-hidden="true"
          animate={
            phase === "accept" && !reduce
              ? { y: [0, 3, 0], scale: [1, 0.92, 1] }
              : { y: 0, scale: 1 }
          }
          transition={{ duration: 0.34, ease: "easeOut", times: [0, 0.4, 1] }}
          style={{ boxShadow: "0 3px 0 var(--line)" }}
          className="absolute bottom-4 right-4 z-10 inline-flex h-9 items-center gap-1.5 rounded-[0.6rem] border-2 border-line bg-background px-3 text-sm font-bold tracking-tight text-ink"
        >
          <span aria-hidden="true">⇥</span> Tab
        </m.kbd>
      </m.div>

      {/* App tabs — progress indicator + jump-to control. */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
        {APPS.map((entry, i) => {
          const isActive = i === index;
          return (
            <button
              key={entry.key}
              type="button"
              onClick={() => selectApp(i)}
              aria-label={`Show Cotabby in ${entry.short}`}
              aria-pressed={isActive}
              className={`flex h-10 w-10 items-center justify-center rounded-[0.75rem] border-2 bg-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink ${
                isActive
                  ? "-translate-y-0.5 border-line shadow-[0_4px_0_var(--line)]"
                  : "border-line-soft opacity-50 hover:-translate-y-0.5 hover:opacity-100"
              }`}
            >
              <Image
                src={entry.iconSrc}
                alt=""
                width={40}
                height={40}
                sizes="22px"
                className="h-6 w-6 object-contain"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
