import type { ReactNode } from "react";

type SectionShellProps = {
  children: ReactNode;
  className?: string;
};

export function SectionShell({ children, className }: SectionShellProps) {
  return (
    <section
      className={`tabby-shell mx-auto flex w-full max-w-340 flex-col rounded-4xl ${
        className ?? ""
      }`}
    >
      <div className="relative p-6 sm:p-8 lg:p-10">{children}</div>
    </section>
  );
}
