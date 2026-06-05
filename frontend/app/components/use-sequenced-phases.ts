"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

type Options = {
  /** IntersectionObserver threshold for "in view". */
  threshold?: number;
  /** Pause the sequence (e.g. while a parent is collapsed). */
  enabled?: boolean;
};

/**
 * Drives a looping, in-view, reduced-motion-aware phase machine — the shared
 * engine behind the inline product demos (install drag, Tab-accept, hero typing,
 * etc.). Advances through `order` on the per-phase timings in `durations`, only
 * while the returned `containerRef` element is on screen, and holds on the first
 * phase when the visitor prefers reduced motion.
 *
 * Pass module-level constants for `order`/`durations` so the effect deps stay
 * stable across renders.
 */
export function useSequencedPhases<P extends string>(
  order: readonly P[],
  durations: Record<P, number>,
  options: Options = {},
) {
  const { threshold = 0.45, enabled = true } = options;
  const prefersReducedMotion = useReducedMotion() ?? false;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  useEffect(() => {
    if (!enabled || prefersReducedMotion || !isInView) return;
    const id = setTimeout(() => {
      setIndex((i) => (i + 1) % order.length);
    }, durations[order[index]]);
    return () => clearTimeout(id);
  }, [index, isInView, enabled, prefersReducedMotion, order, durations]);

  return {
    phase: order[index],
    index,
    isInView,
    prefersReducedMotion,
    containerRef,
  };
}
