import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { DownloadButton } from "@/app/components/ui/download-button";
import { IconTile } from "@/app/components/ui/icon-tile";
import { AppleIcon } from "@/app/components/ui/icons";
import { TabbyButton } from "@/app/components/ui/tabby-button";
import { GITHUB_URL, SUPPORT_EMAIL } from "@/app/lib/site";

const RESOURCE_LINKS = [
  { href: "/cotypist-alternative", label: "Cotabby vs Cotypist" },
  { href: "/ai-autocomplete-mac", label: "AI autocomplete for Mac" },
  { href: "/mac-app-compatibility", label: "App compatibility" },
  { href: "/security", label: "Security" },
] as const;

type ContentPageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  updatedAt: string;
  readingTime: string;
  children: ReactNode;
};

export function ContentPageShell({
  eyebrow,
  title,
  description,
  updatedAt,
  readingTime,
  children,
}: ContentPageShellProps) {
  return (
    <div className="relative flex-1 px-3 pb-14 pt-4 sm:px-4 sm:pb-16 sm:pt-5 lg:px-6 lg:pb-20">
      <header className="mx-auto flex w-full max-w-shell flex-col gap-5 border-b-2 border-line pb-5 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Cotabby home">
          <IconTile size="md" tone="bg-white">
            <Image
              src="/logo.webp"
              alt="Cotabby logo"
              width={48}
              height={48}
              className="h-full w-full object-contain"
            />
          </IconTile>
          <span className="tabby-display text-[2rem] leading-none text-ink sm:text-[2.3rem]">
            Cotabby
          </span>
        </Link>

        <nav aria-label="Resources" className="flex flex-wrap gap-x-5 gap-y-2">
          {RESOURCE_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="tabby-link text-sm font-bold tracking-tight"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="mx-auto w-full max-w-content">
        <header className="grid gap-8 border-b-2 border-line-soft py-12 sm:py-16 lg:grid-cols-[minmax(0,1.55fr)_minmax(16rem,0.65fr)] lg:items-end lg:gap-16 lg:py-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink sm:text-sm">
              {eyebrow}
            </p>
            <h1 className="tabby-display mt-4 max-w-4xl text-[2.7rem] leading-[0.94] tracking-tight text-ink sm:text-[4.4rem] lg:text-[5.25rem]">
              {title}
            </h1>
          </div>
          <div className="lg:border-l-2 lg:border-line-soft lg:pl-8">
            <p className="text-base leading-relaxed tracking-tight text-muted sm:text-lg">
              {description}
            </p>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-subtle">
              Updated {updatedAt} · {readingTime}
            </p>
          </div>
        </header>

        <article className="py-12 sm:py-16">{children}</article>

        <section className="grid gap-7 border-y-2 border-line py-10 sm:py-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-12">
          <div>
            <h2 className="tabby-display text-[2.3rem] leading-none text-ink sm:text-[3.2rem]">
              try Cotabby on your Mac
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
              Free, open source, and local. Use Apple Intelligence or a GGUF
              model, then accept the next word with Tab.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <DownloadButton
              size="sm"
              icon={<AppleIcon className="h-5 w-5" />}
            >
              Download for Mac
            </DownloadButton>
            <TabbyButton href={GITHUB_URL} external variant="secondary" size="sm">
              View source
            </TabbyButton>
          </div>
        </section>
      </main>

      <footer className="mx-auto mt-10 flex w-full max-w-shell flex-col gap-4 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Cotabby. AGPL-3.0.</p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer">
          <Link href="/privacy" className="tabby-link font-semibold">Privacy</Link>
          <Link href="/terms" className="tabby-link font-semibold">Terms</Link>
          <Link href="/release-notes" className="tabby-link font-semibold">Release notes</Link>
          <a href={`mailto:${SUPPORT_EMAIL}`} className="tabby-link font-semibold">Contact</a>
        </nav>
      </footer>
    </div>
  );
}
