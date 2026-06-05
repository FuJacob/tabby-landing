"use client";

import {
  m,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  type PointerEvent,
  type ReactNode,
} from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  /** Max tilt in degrees at the card edges. */
  max?: number;
};

/**
 * Subtle pointer-reactive 3D tilt. Springs back to flat on leave. Disabled for
 * touch/coarse pointers and when the visitor prefers reduced motion, in which
 * case it renders a plain wrapper so layout is identical.
 */
export function TiltCard({ children, className = "", max = 6 }: TiltCardProps) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const [hoverable, setHoverable] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 220, damping: 20, mass: 0.4 };
  const sx = useSpring(px, spring);
  const sy = useSpring(py, spring);
  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const rotateY = useTransform(sx, [0, 1], [-max, max]);

  useEffect(() => {
    setHoverable(
      window.matchMedia("(hover: hover) and (pointer: fine)").matches,
    );
  }, []);

  if (prefersReducedMotion || !hoverable) {
    return <div className={className}>{children}</div>;
  }

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;
    const r = node.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };

  const onLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <m.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={className}
    >
      {children}
    </m.div>
  );
}
