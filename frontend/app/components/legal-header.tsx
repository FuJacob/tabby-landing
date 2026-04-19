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
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/white-logo.png"
            alt="tabby paw logo"
            width={56}
            height={56}
            className="h-14 w-14"
          />
          <span className="tabby-display text-[2.4rem] leading-none tracking-tight text-ink sm:text-[2.8rem]">
            Tabby
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
