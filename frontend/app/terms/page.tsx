import type { Metadata } from "next";
import { LegalPageShell } from "../components/legal-page-shell";

export const metadata: Metadata = {
  title: "Terms - tabby",
  description: "Terms of use for tabby.",
};

export default function TermsPage() {
  return (
    <LegalPageShell
      current="terms"
      title="Terms"
      summary="A minimal summary of service use and liability limits."
      updatedAt="APR 12, 2026"
    >
      <section className="space-y-3">
        <h2 className="tabby-display text-[2rem] leading-none tracking-tight text-ink sm:text-[2.4rem]">
          Usage
        </h2>
        <p>
          You may use tabby for lawful workflows and are responsible for
          reviewing generated content before sharing it.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="tabby-display text-[2rem] leading-none tracking-tight text-ink sm:text-[2.4rem]">
          Limits
        </h2>
        <p>
          Tabby is provided as-is and, where permitted by law, liability is
          limited for indirect or consequential damages.
        </p>
      </section>
    </LegalPageShell>
  );
}