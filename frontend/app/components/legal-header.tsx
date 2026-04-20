import Image from "next/image";
import Link from "next/link";

export type LegalPageKey = "privacy" | "terms" | "release-notes";

const LEGAL_LINKS: Array<{ key: LegalPageKey; href: string; label: string }> = [
  { key: "privacy", href: "/privacy", label: "Privacy" },
  { key: "terms", href: "/terms", label: "Terms of Service" },
  { key: "release-notes", href: "/release-notes", label: "Release notes" },
];

type LegalHeaderProps = {
  current: LegalPageKey;
};

export function LegalHeader({ current }: LegalHeaderProps) {
  return (
    <header className="border-b-2 border-line pb-5 sm:pb-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/512.png"
            alt="tabby paw logo"
            width={56}
            height={56}
            className="h-14 w-14 rounded-2xl border-2 border-line bg-surface-2 shadow-[0_4px_0_var(--line)]"
          />
          <span className="flex h-14 flex-col justify-center">
            <span className="tabby-display text-[2.4rem] leading-[0.88] tracking-tight text-ink sm:text-[2.8rem]">
              tabby
            </span>
            <span className="mt-1 text-xs font-medium leading-none tracking-tight text-subtle sm:text-sm">
              legal and release docs
            </span>
          </span>
        </Link>

        <nav aria-label="Legal pages" className="flex flex-wrap gap-2 sm:gap-3">
          {LEGAL_LINKS.map((link) => {
            const isCurrent = link.key === current;

            return (
              <Link
                key={link.key}
                href={link.href}
                aria-current={isCurrent ? "page" : undefined}
                className={`rounded-[0.8rem] border-2 px-3 py-1.5 text-sm font-semibold tracking-tight transition sm:px-4 sm:text-base ${
                  isCurrent
                    ? "border-line bg-surface-4 text-ink"
                    : "border-line-soft bg-surface-2 text-muted hover:border-line hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
