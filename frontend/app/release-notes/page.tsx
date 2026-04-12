import type { Metadata } from "next";
import { LegalPageShell } from "../components/legal-page-shell";

export const metadata: Metadata = {
  title: "Release Notes - tabby",
  description: "Product updates and release notes for tabby.",
};

const RELEASES = [
  {
    version: "v0.9.3",
    date: "Apr 2026",
    note: "Performance and reliability improvements.",
  },
  {
    version: "v0.9.2",
    date: "Mar 2026",
    note: "Expanded app support and completion quality updates.",
  },
  {
    version: "v0.9.1",
    date: "Feb 2026",
    note: "Initial public beta release.",
  },
] as const;

export default function ReleaseNotesPage() {
  return (
    <LegalPageShell
      current="release-notes"
      title="Release Notes"
      summary="A concise log of product updates."
      updatedAt="APR 12, 2026"
    >
      <section className="tabby-panel-soft rounded-[1.2rem] p-4 sm:p-5">
        <ul className="space-y-3">
          {RELEASES.map((release) => (
            <li key={release.version} className="space-y-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="tabby-display text-[1.7rem] leading-none tracking-tight text-ink sm:text-[2rem]">
                  {release.version}
                </h2>
                <p className="text-xs font-semibold tracking-[0.08em] text-subtle sm:text-sm">
                  {release.date}
                </p>
              </div>
              <p>{release.note}</p>
            </li>
          ))}
        </ul>
      </section>
    </LegalPageShell>
  );
}