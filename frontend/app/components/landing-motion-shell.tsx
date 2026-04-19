"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import Image from "next/image";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

type LandingMotionPhase = "intro" | "revealing" | "settled";

type LandingMotionContextValue = {
  phase: LandingMotionPhase;
  heroReady: boolean;
  introActive: boolean;
  shouldReduceMotion: boolean;
};

const INTRO_STORAGE_KEY = "tabby-landing-intro-v1";
const INTRO_REVEAL_MS = 980;
const INTRO_SETTLE_MS = 1380;
const EASE = [0.22, 1, 0.36, 1] as const;

const LandingMotionContext = createContext<LandingMotionContextValue | null>(
  null,
);

const shellGlowVariants: Variants = {
  intro: { opacity: 0, scale: 0.86 },
  revealing: { opacity: 0.55, scale: 1.02 },
  settled: { opacity: 0, scale: 1.12 },
};

const shellCardVariants: Variants = {
  intro: { opacity: 0, y: 36, scale: 0.9, rotate: -4 },
  revealing: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.9, ease: EASE },
  },
  settled: {
    opacity: 0,
    y: -28,
    scale: 0.96,
    rotate: 2,
    transition: { duration: 0.45, ease: EASE },
  },
};

const shellTrackVariants: Variants = {
  intro: { opacity: 0, y: 18 },
  revealing: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: 0.18 },
  },
  settled: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.35, ease: EASE },
  },
};

/**
 * LandingMotionShell contains the page-level motion state for the landing
 * experience. Keeping this boundary in a dedicated client component lets the
 * page stay server-rendered while still coordinating the intro overlay and
 * hero timing from one place.
 */
export function LandingMotionShell({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const [phase, setPhase] = useState<LandingMotionPhase>("intro");
  const introStartedRef = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      const frame = window.requestAnimationFrame(() => setPhase("settled"));
      return () => window.cancelAnimationFrame(frame);
    }

    const hasSeenIntro =
      typeof window !== "undefined" &&
      window.sessionStorage.getItem(INTRO_STORAGE_KEY) === "1";

    if (hasSeenIntro) {
      const frame = window.requestAnimationFrame(() => setPhase("settled"));
      return () => window.cancelAnimationFrame(frame);
    }

    if (introStartedRef.current) return;

    introStartedRef.current = true;
    window.sessionStorage.setItem(INTRO_STORAGE_KEY, "1");

    const revealTimer = window.setTimeout(
      () => setPhase("revealing"),
      INTRO_REVEAL_MS,
    );
    const settleTimer = window.setTimeout(
      () => setPhase("settled"),
      INTRO_SETTLE_MS,
    );

    return () => {
      window.clearTimeout(revealTimer);
      window.clearTimeout(settleTimer);
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion || phase === "settled") {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [phase, prefersReducedMotion]);

  const value = useMemo<LandingMotionContextValue>(
    () => ({
      phase,
      heroReady: phase !== "intro",
      introActive: !prefersReducedMotion && phase !== "settled",
      shouldReduceMotion: prefersReducedMotion,
    }),
    [phase, prefersReducedMotion],
  );

  return (
    <LandingMotionContext.Provider value={value}>
      {children}
      <AnimatePresence>
        {value.introActive ? <LandingSplash phase={phase} /> : null}
      </AnimatePresence>
    </LandingMotionContext.Provider>
  );
}

/**
 * useLandingMotion exposes the small amount of page-level motion state that
 * shared interactive sections need to coordinate against.
 */
export function useLandingMotion() {
  const context = useContext(LandingMotionContext);

  if (!context) {
    throw new Error("useLandingMotion must be used within LandingMotionShell");
  }

  return context;
}

function LandingSplash({ phase }: { phase: LandingMotionPhase }) {
  return (
    <motion.div
      className="tabby-intro-overlay fixed inset-0 z-[90] overflow-hidden bg-background"
      initial={{ opacity: 1 }}
      animate={phase === "settled" ? { opacity: 0 } : { opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.24, ease: EASE } }}
      transition={{ duration: 0.4, ease: EASE }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0a0a0a 1px, transparent 1px), linear-gradient(to bottom, #0a0a0a 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-soft/35 blur-3xl"
        variants={shellGlowVariants}
        initial="intro"
        animate={phase}
        transition={{ duration: 1, ease: EASE }}
      />
      <motion.div
        className="absolute left-[18%] top-[18%] h-56 w-56 rounded-full bg-moss/20 blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          phase === "intro"
            ? { opacity: 0.25, scale: 1, x: 0, y: 0 }
            : phase === "revealing"
              ? { opacity: 0.35, scale: 1.08, x: 18, y: 12 }
              : { opacity: 0, scale: 1.16, x: 32, y: 24 }
        }
        transition={{ duration: 1.2, ease: EASE }}
      />
      <motion.div
        className="absolute bottom-[12%] right-[10%] h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          phase === "intro"
            ? { opacity: 0.22, scale: 1, x: 0, y: 0 }
            : phase === "revealing"
              ? { opacity: 0.28, scale: 1.06, x: -16, y: -10 }
              : { opacity: 0, scale: 1.14, x: -28, y: -18 }
        }
        transition={{ duration: 1.2, ease: EASE }}
      />

      <div className="relative flex h-full items-center justify-center px-6">
        <motion.div
          variants={shellCardVariants}
          initial="intro"
          animate={phase}
          className="w-full max-w-[36rem] rounded-[2rem] border-2 border-line bg-surface-2 p-4 shadow-[0_10px_0_var(--line)] sm:p-5"
        >
          <div className="rounded-[1.55rem] border-2 border-line bg-surface-3 p-5 sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full border border-line bg-[#FF5F57]" />
                <span className="h-3 w-3 rounded-full border border-line bg-[#FEBC2E]" />
                <span className="h-3 w-3 rounded-full border border-line bg-[#28C840]" />
              </div>
              <span className="text-[0.65rem] font-semibold tracking-[0.18em] text-subtle uppercase sm:text-xs">
                local-first boot
              </span>
            </div>

            <div className="mt-8 flex flex-col items-center gap-6 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.78, rotate: -10 }}
                animate={
                  phase === "intro"
                    ? { opacity: 1, scale: 1, rotate: 0 }
                    : phase === "revealing"
                      ? { opacity: 1, scale: 1, rotate: 0 }
                      : { opacity: 0, scale: 0.94, rotate: 6 }
                }
                transition={{ duration: 0.72, ease: EASE }}
                className="flex h-24 w-24 items-center justify-center rounded-[1.65rem] border-2 border-line bg-ink shadow-[0_5px_0_var(--line)]"
              >
                <Image
                  src="/white-logo.png"
                  alt=""
                  width={56}
                  height={56}
                  className="h-14 w-14"
                />
              </motion.div>

              <div className="space-y-3">
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={
                    phase === "settled"
                      ? { opacity: 0, y: -16 }
                      : { opacity: 1, y: 0 }
                  }
                  transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
                  className="tabby-display text-[2.6rem] leading-[0.9] tracking-tight text-ink sm:text-[3.2rem]"
                >
                  tabby is waking up
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={
                    phase === "settled"
                      ? { opacity: 0, y: -14 }
                      : { opacity: 1, y: 0 }
                  }
                  transition={{ duration: 0.6, ease: EASE, delay: 0.14 }}
                  className="mx-auto max-w-[28rem] text-sm leading-relaxed tracking-tight text-muted sm:text-base"
                >
                  Quiet local autocomplete, right where you already write.
                </motion.p>
              </div>

              <motion.div
                variants={shellTrackVariants}
                initial="intro"
                animate={phase}
                className="w-full rounded-[1.2rem] border-2 border-line bg-background p-4 text-left shadow-[0_3px_0_var(--line)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[0.7rem] font-semibold tracking-[0.16em] text-subtle uppercase">
                    inline suggestion
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[0.72rem] tracking-tight text-moss">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-moss opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-moss" />
                    </span>
                    on-device
                  </span>
                </div>
                <div className="mt-4 overflow-hidden rounded-[0.9rem] border border-line-soft bg-surface-2 p-3 sm:p-4">
                  <p className="text-sm leading-relaxed tracking-tight text-ink sm:text-base">
                    I folded your feedback into the deck
                    <motion.span
                      className="text-accent"
                      initial={{ opacity: 0, y: 10 }}
                      animate={
                        phase === "intro"
                          ? { opacity: [0, 0, 1], y: [10, 10, 0] }
                          : phase === "revealing"
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: -6 }
                      }
                      transition={{
                        duration: 0.9,
                        ease: EASE,
                        times: [0, 0.56, 1],
                      }}
                    >
                      {" and tightened the closing CTA."}
                    </motion.span>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
