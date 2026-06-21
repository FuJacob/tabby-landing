import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd } from "@/app/components/layout/structured-data";
import { CREATOR, SITE_NAME, SITE_URL } from "@/app/lib/site";

export function ArticleJsonLd({
  path,
  headline,
  description,
  datePublished,
  dateModified,
}: {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
}) {
  const url = `${SITE_URL}${path}`;
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline,
          description,
          datePublished,
          dateModified,
          mainEntityOfPage: url,
          author: {
            "@type": "Person",
            name: CREATOR.name,
            url: CREATOR.linkedin,
          },
          publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
            logo: {
              "@type": "ImageObject",
              url: `${SITE_URL}/icon-512.png`,
            },
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Cotabby",
              item: SITE_URL,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: headline,
              item: url,
            },
          ],
        }}
      />
    </>
  );
}

export function ArticleSection({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="tabby-anchor grid gap-5 border-t-2 border-line-soft py-10 first:border-t-0 first:pt-0 sm:py-14 lg:grid-cols-[minmax(13rem,0.55fr)_minmax(0,1.45fr)] lg:gap-14">
      <div>
        <h2 className="tabby-display text-[2rem] leading-[1.02] text-ink sm:text-[2.55rem]">
          {title}
        </h2>
        {intro ? <p className="mt-3 text-sm leading-relaxed text-subtle">{intro}</p> : null}
      </div>
      <div className="min-w-0 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
        {children}
      </div>
    </section>
  );
}

export function KeyTakeaway({ children }: { children: ReactNode }) {
  return (
    <aside className="border-l-4 border-accent-deep bg-surface-3 px-5 py-4 text-base font-semibold leading-relaxed text-ink sm:px-6 sm:py-5 sm:text-lg">
      {children}
    </aside>
  );
}

export function CheckList({ children }: { children: ReactNode }) {
  return <ul className="space-y-3">{children}</ul>;
}

export function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="grid grid-cols-[1.35rem_1fr] gap-3">
      <span aria-hidden="true" className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent-deep text-xs font-bold text-white">
        <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3" aria-hidden="true">
          <path d="m3 8 3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span>{children}</span>
    </li>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  const className = "font-bold text-ink underline decoration-accent-deep decoration-2 underline-offset-4";
  if (external) {
    return <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className={className}>{children}</a>;
  }
  return <Link href={href} className={className}>{children}</Link>;
}

export function SourceNote({ children }: { children: ReactNode }) {
  return (
    <p className="border-t border-line-soft pt-4 text-sm leading-relaxed text-subtle">
      {children}
    </p>
  );
}
