"use client";

import { m } from "framer-motion";
import { useEffect, useId, useState, type RefObject } from "react";

type AnimatedBeamProps = {
  containerRef: RefObject<HTMLElement | null>;
  fromRef: RefObject<HTMLElement | null>;
  toRef: RefObject<HTMLElement | null>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientMidColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
};

/**
 * Animated SVG beam connecting two refs inside a shared container.
 * A moving gradient slides along a cubic curve from `fromRef` to `toRef`.
 */
export function AnimatedBeam({
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  pathColor = "var(--line)",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#ffaa40",
  gradientMidColor = "#ff5e8a",
  gradientStopColor = "#9c5bff",
  delay = 0,
  duration = 4,
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}: AnimatedBeamProps) {
  const id = useId();
  const [pathD, setPathD] = useState("");
  const [svgSize, setSvgSize] = useState({ width: 0, height: 0 });

  const gradientCoords = reverse
    ? { x1: ["90%", "-10%"], x2: ["100%", "0%"], y1: ["0%", "0%"], y2: ["0%", "0%"] }
    : { x1: ["10%", "110%"], x2: ["0%", "100%"], y1: ["0%", "0%"], y2: ["0%", "0%"] };

  useEffect(() => {
    const update = () => {
      const container = containerRef.current;
      const from = fromRef.current;
      const to = toRef.current;
      if (!container || !from || !to) return;
      const containerRect = container.getBoundingClientRect();
      const fromRect = from.getBoundingClientRect();
      const toRect = to.getBoundingClientRect();

      const svgWidth = containerRect.width;
      const svgHeight = containerRect.height;
      setSvgSize({ width: svgWidth, height: svgHeight });

      const startX =
        fromRect.left - containerRect.left + fromRect.width / 2 + startXOffset;
      const startY =
        fromRect.top - containerRect.top + fromRect.height / 2 + startYOffset;
      const endX =
        toRect.left - containerRect.left + toRect.width / 2 + endXOffset;
      const endY =
        toRect.top - containerRect.top + toRect.height / 2 + endYOffset;

      const controlY = startY - curvature;
      const d = `M ${startX},${startY} Q ${(startX + endX) / 2},${controlY} ${endX},${endY}`;
      setPathD(d);
    };

    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset,
  ]);

  return (
    <svg
      fill="none"
      width={svgSize.width}
      height={svgSize.height}
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute left-0 top-0 z-0"
      viewBox={`0 0 ${svgSize.width} ${svgSize.height}`}
    >
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
      />
      <path
        d={pathD}
        stroke={`url(#${id})`}
        strokeWidth={pathWidth}
        strokeOpacity={1}
        strokeLinecap="round"
      />
      <defs>
        <m.linearGradient
          id={id}
          gradientUnits="userSpaceOnUse"
          initial={{ x1: "0%", x2: "0%", y1: "0%", y2: "0%" }}
          animate={{
            x1: gradientCoords.x1,
            x2: gradientCoords.x2,
            y1: gradientCoords.y1,
            y2: gradientCoords.y2,
          }}
          transition={{
            delay,
            duration,
            ease: [0.16, 1, 0.3, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop stopColor={gradientStartColor} />
          <stop offset="50%" stopColor={gradientMidColor} />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </m.linearGradient>
      </defs>
    </svg>
  );
}
