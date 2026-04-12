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
      <ul className="space-y-3">
        {RELEASES.map((release) => (
          <li key={release.version} className="space-y-1">
            <p className="font-semibold text-ink">
              {release.version}
              <span className="font-medium text-subtle"> - {release.date}</span>
            </p>
            <p>{release.note}</p>
          </li>
        ))}
      </ul>
    </LegalPageShell>
  );
}
