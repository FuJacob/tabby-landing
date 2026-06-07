import { forwardRef, type CSSProperties, type ReactNode } from "react";

/**
 * IconTile — the single source of truth for the bordered + shadowed rounded
 * square that holds a Lucide icon, Next/Image, or check mark across the site.
 *
 * Always use this instead of hand-rolling `border-2 border-line shadow-tabby-*`.
 * The lint guard (`npm run lint:shadows`) flags every other site that tries.
 *
 * Sizes are paired (radius + shadow depth) so visual rhythm stays consistent:
 *   2xs h-6           rounded-lg          shadow-tabby-2xs   (micro buttons inside chips)
 *   xs  h-8 sm:h-10   rounded-[0.55rem]   shadow-tabby-2xs   (column-header logos)
 *   sm  h-9           rounded-lg          shadow-tabby-2xs   (check marks, kbd, faq chips)
 *   md  h-10 sm:h-11  rounded-[0.95rem]   shadow-tabby-sm    (header/footer logo chips)
 *   lg  h-12          rounded-xl          shadow-tabby-sm    (feature/permission tiles)
 *   xl  h-14          rounded-2xl         shadow-tabby       (wordmark, hero badges)
 *   2xl h-16          rounded-2xl         shadow-tabby       (success states, large CTAs)
 *   3xl h-24 sm:h-28  rounded-[1.6rem]    shadow-tabby       (beam destination hub)
 *
 * `tone` is a Tailwind bg utility (`bg-violet-500`, `bg-white`, `bg-surface-2`).
 * `hoverLift` opts into the lift+scale used by feature/permission cards.
 */
type Size = "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

const SIZE: Record<Size, string> = {
  "2xs": "h-6 w-6 rounded-lg shadow-tabby-2xs",
  xs: "h-8 w-8 rounded-[0.55rem] shadow-tabby-2xs sm:h-10 sm:w-10",
  sm: "h-9 w-9 rounded-lg shadow-tabby-2xs",
  md: "h-10 w-10 rounded-[0.95rem] shadow-tabby-sm sm:h-11 sm:w-11",
  lg: "h-12 w-12 rounded-xl shadow-tabby-sm",
  xl: "h-14 w-14 rounded-2xl shadow-tabby",
  "2xl": "h-16 w-16 rounded-2xl shadow-tabby",
  "3xl": "h-24 w-24 rounded-[1.6rem] shadow-tabby sm:h-28 sm:w-28",
};

type IconTileProps = {
  size?: Size;
  /** Tailwind bg utility, e.g. "bg-violet-500", "bg-white", "bg-surface-2". */
  tone?: string;
  /** Apply the lift + scale transform used inside `group`-hoverable cards. */
  hoverLift?: boolean;
  /** Extra Tailwind for one-off tweaks (avoid; prefer adding a size). */
  className?: string;
  /** Inline styles (for absolute positioning inside scatter layouts). */
  style?: CSSProperties;
  children: ReactNode;
};

export const IconTile = forwardRef<HTMLDivElement, IconTileProps>(function IconTile(
  {
    size = "md",
    tone = "bg-surface-2",
    hoverLift = false,
    className,
    style,
    children,
  },
  ref,
) {
  return (
    <div
      ref={ref}
      style={style}
      className={[
        "inline-flex shrink-0 items-center justify-center overflow-hidden border-2 border-line",
        SIZE[size],
        tone,
        hoverLift
          ? "transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:scale-110"
          : "",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
});
