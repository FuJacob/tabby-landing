import type { ReactNode } from "react";
import { FadeIn, WordReveal } from "@/app/components/ui/motion";

const TITLE_BASE =
  "tabby-display text-center leading-[1.02] tracking-tight text-ink";
const SUBTITLE_CLASS =
  "mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed tracking-tight text-muted sm:text-base";

type SectionHeadingProps = {
  title: string;
  subtitle?: ReactNode;
  /** Tailwind size classes for the heading, e.g. "text-[2.9rem] sm:text-[4.1rem]". */
  titleSize?: string;
};

/**
 * The shared "animated heading + muted subtitle" block used by most sections.
 * The reveal animation and subtitle styling are centralized here; callers only
 * pass copy and (optionally) a per-section heading size.
 */
export function SectionHeading({
  title,
  subtitle,
  titleSize = "text-[2.8rem] sm:text-[4rem]",
}: SectionHeadingProps) {
  return (
    <>
      <WordReveal
        as="h2"
        text={title}
        className={`${TITLE_BASE} ${titleSize}`}
      />
      {subtitle ? (
        <FadeIn delay={0.1}>
          <p className={SUBTITLE_CLASS}>{subtitle}</p>
        </FadeIn>
      ) : null}
    </>
  );
}
