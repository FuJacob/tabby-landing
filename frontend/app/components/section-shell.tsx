import type { ReactNode } from "react";

type SectionShellProps = {
  children: ReactNode;
  className?: string;
};

export function SectionShell({ children, className }: SectionShellProps) {
  return (
    <section
      className={`tabby-shell mx-auto flex w-full max-w-[1360px] flex-col rounded-[2rem] ${
        className ?? ""
      }`}
    >
      <div className="relative p-6 sm:p-8 lg:p-10">{children}</div>
    </section>
  );
}
