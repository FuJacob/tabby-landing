import type { ReactNode } from "react";

type SectionShellProps = {
  children: ReactNode;
  className?: string;
};

export function SectionShell({ children, className }: SectionShellProps) {
  return (
    <section
      className={`mx-auto flex w-full max-w-320 flex-col rounded-[2.5rem] border border-neutral-300 bg-white shadow-[0_1px_0_rgba(0,0,0,0.04)] ${
        className ?? ""
      }`}
    >
      <div className="p-8 sm:p-12">{children}</div>
    </section>
  );
}
