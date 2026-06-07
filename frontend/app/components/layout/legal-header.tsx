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
    <header className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-line-soft pb-4">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-subtle transition-colors hover:text-ink"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-3.5 w-3.5"
        >
          <path
            fillRule="evenodd"
            d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z"
            clipRule="evenodd"
          />
        </svg>
        Back to Cotabby
      </Link>

      <nav aria-label="Legal pages" className="flex flex-wrap gap-x-5 gap-y-1.5">
        {LEGAL_LINKS.map((link) => {
          const isCurrent = link.key === current;

          return (
            <Link
              key={link.key}
              href={link.href}
              aria-current={isCurrent ? "page" : undefined}
              className={`text-sm font-semibold tracking-tight transition-colors ${
                isCurrent
                  ? "text-ink"
                  : "text-subtle hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
