"use client";

import { useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type DemoGifProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
  icon: string;
  iconPad?: boolean;
  label: string;
};

/**
 * Lazy, reduced-motion-aware GIF demo. The frame keeps the GIF's native aspect
 * ratio (these clips are wide and short), so object-cover fills it with no crop.
 * The (heavy) GIF is only fetched once it nears the viewport, and visitors who
 * prefer reduced motion get a static placeholder instead of an animation they
 * can't pause. A plain <img> is used on purpose: next/image would strip GIF
 * animation.
 */
export function DemoGif({
  src,
  width,
  height,
  alt,
  icon,
  iconPad = false,
  label,
}: DemoGifProps) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const ref = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion || shouldLoad) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "250px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shouldLoad, prefersReducedMotion]);

  const showPlaceholder = prefersReducedMotion || !shouldLoad || !loaded;

  return (
    <div
      ref={ref}
      role="img"
      aria-label={alt}
      className="relative w-full overflow-hidden rounded-[1.35rem] border-2 border-line bg-surface shadow-[0_11.8px_0_var(--shadow-color)]"
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {showPlaceholder && (
        <div className="absolute inset-0 z-10 flex items-center justify-center gap-2.5 bg-surface-3">
          <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-[0.5rem] border-2 border-line bg-white">
            <Image
              src={icon}
              alt=""
              fill
              sizes="32px"
              className={`object-contain ${iconPad ? "p-1.5" : "p-1"}`}
            />
          </span>
          <span className="text-xs font-semibold tracking-tight text-subtle">
            {prefersReducedMotion ? `${label} demo` : "loading demo…"}
          </span>
        </div>
      )}
      {shouldLoad && !prefersReducedMotion && (
        // eslint-disable-next-line @next/next/no-img-element -- animated GIF
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`h-full w-full object-cover transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}
