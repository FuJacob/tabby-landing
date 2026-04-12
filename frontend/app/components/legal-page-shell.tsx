import type { ReactNode } from "react";
import { LegalHeader, type LegalPageKey } from "./legal-header";

type LegalPageShellProps = {
  current: LegalPageKey;
  title: string;
  summary: string;
  updatedAt: string;
  children: ReactNode;
};

export function LegalPageShell({
  current,
  title,
  summary,
  updatedAt,
  children,
}: LegalPageShellProps) {
  return (
    <div className="relative px-3 pb-14 pt-5 sm:px-4 sm:pb-16 sm:pt-8 lg:px-6 lg:pb-20 lg:pt-10">
      <div className="mx-auto flex w-full max-w-[1360px] flex-col gap-8 sm:gap-10">
        <section className="tabby-shell rounded-[2rem] p-6 sm:p-8 lg:p-10">
          <LegalHeader current={current} />

          <div className="mt-7 space-y-3 sm:mt-8 sm:space-y-4">
            <h1 className="tabby-display text-[2.9rem] leading-[0.92] tracking-tight text-ink sm:text-[4rem] lg:text-[4.8rem]">
              {title}
            </h1>
            <p className="max-w-3xl text-sm leading-relaxed tracking-tight text-muted sm:text-base">
              {summary}
            </p>
            <p className="text-xs font-medium tracking-[0.08em] text-subtle sm:text-sm">
              LAST UPDATED {updatedAt}
            </p>
          </div>
        </section>

        <section className="tabby-shell rounded-[2rem] p-6 sm:p-8 lg:p-10">
          <div className="space-y-8 text-sm leading-relaxed tracking-tight text-muted sm:space-y-10 sm:text-base">
            {children}
          </div>
        </section>
      </div>
    </div>
  );
}