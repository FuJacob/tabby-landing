import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  /** When set, also renders the scroll-anchor offset so in-page links land cleanly. */
  id?: string;
  className?: string;
};

/**
 * Standard horizontal gutters for a landing-page section. Pass an `id` to make
 * it a scroll target (adds `tabby-anchor`).
 */
export function Section({ children, id, className }: SectionProps) {
  return (
    <section
      id={id}
      className={`px-6 sm:px-8 lg:px-10${id ? " tabby-anchor" : ""}${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </section>
  );
}
