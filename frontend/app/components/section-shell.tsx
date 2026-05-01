import type { ReactNode } from "react";

type SectionShellProps = {
  children: ReactNode;
  className?: string;
};

export function SectionShell({ children, className }: SectionShellProps) {
  return (
    <section
      className={`tabby-shell relative mx-auto flex w-full max-w-340 flex-col overflow-hidden rounded-4xl ${
        className ?? ""
      }`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-28 h-104 w-104 rounded-full bg-accent-soft/60 blur-[100px] sm:h-136 sm:w-136 lg:-right-36 lg:-top-36"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 -left-28 h-104 w-104 rounded-full bg-moss/25 blur-[100px] sm:h-136 sm:w-136 lg:-bottom-44 lg:-left-36"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #0a0a0a 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="relative z-10 p-6 sm:p-8 lg:p-10">{children}</div>
    </section>
  );
}
