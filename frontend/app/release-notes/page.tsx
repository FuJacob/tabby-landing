import type { Metadata } from "next";
import { LegalPageShell } from "../components/legal-page-shell";

export const metadata: Metadata = {
  title: "Release Notes - tabby",
  description: "Product updates and release notes for tabby.",
};

export default function ReleaseNotesPage() {
  return (
    <LegalPageShell
      current="release-notes"
      title="Release Notes"
      summary="There are no public release notes yet because tabby has not launched."
      updatedAt="APR 19, 2026"
    >
      <p>tabby has not launched yet, so there are no release notes to publish.</p>

      <p>
        Once the first public version is available, this page will track updates,
        fixes, and notable product changes.
      </p>
    </LegalPageShell>
  );
}
