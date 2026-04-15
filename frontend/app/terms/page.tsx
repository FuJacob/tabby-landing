import type { Metadata } from "next";
import { LegalPageShell } from "../components/legal-page-shell";

export const metadata: Metadata = {
  title: "Terms of Service - tabby",
  description: "Terms of use for tabby.",
};

export default function TermsPage() {
  return (
    <LegalPageShell
      current="terms"
      title="Terms of Service"
      summary="A minimal summary of service use and liability limits."
      updatedAt="APR 12, 2026"
    >
      <p>
        You may use tabby for lawful workflows and are responsible for reviewing
        generated content before sharing it.
      </p>

      <p>
        Tabby is provided as-is and, where permitted by law, liability is
        limited for indirect or consequential damages.
      </p>
    </LegalPageShell>
  );
}
