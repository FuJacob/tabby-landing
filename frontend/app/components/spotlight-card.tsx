"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
  /** Glow color (defaults to the brand coral, low alpha). */
  color?: string;
  /** Glow radius in px. */
  radius?: number;
};

/**
 * Wraps content with a coral radial glow that follows the cursor, revealed on
 * hover. The glow position is written straight to CSS vars on the layer (no
 * React re-render per move), and the reveal is pure CSS group-hover — so on
 * touch devices, where there's no hover, it simply never appears.
 */
export function SpotlightCard({
  children,
  className = "",
  color = "rgba(255, 130, 115, 0.18)",
  radius = 340,
}: SpotlightCardProps) {
  const glowRef = useRef<HTMLDivElement | null>(null);
  const hostRef = useRef<HTMLDivElement | null>(null);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const host = hostRef.current;
    const glow = glowRef.current;
    if (!host || !glow) return;
    const r = host.getBoundingClientRect();
    glow.style.setProperty("--spot-x", `${e.clientX - r.left}px`);
    glow.style.setProperty("--spot-y", `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={hostRef}
      onPointerMove={onMove}
      className={`group relative ${className}`}
    >
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(${radius}px circle at var(--spot-x, 50%) var(--spot-y, 0%), ${color}, transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
}
