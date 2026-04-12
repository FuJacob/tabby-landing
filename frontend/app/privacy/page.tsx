import type { Metadata } from "next";
import { LegalPageShell } from "../components/legal-page-shell";

export const metadata: Metadata = {
  title: "Privacy - tabby",
  description: "Privacy policy for tabby.",
};

export default function PrivacyPage() {
  return (
    <LegalPageShell
      current="privacy"
      title="Privacy"
      summary="A minimal overview of what data tabby uses and how you can contact us."
      updatedAt="APR 12, 2026"
    >
      <section className="space-y-3">
        <h2 className="tabby-display text-[2rem] leading-none tracking-tight text-ink sm:text-[2.4rem]">
          Data used
        </h2>
        <p>
          We use account details, device metadata, and usage events required to
          operate and improve tabby.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="tabby-display text-[2rem] leading-none tracking-tight text-ink sm:text-[2.4rem]">
          Contact
        </h2>
        <p>
          For privacy or deletion requests, email
          <a className="tabby-link ml-1 font-semibold" href="mailto:support@tabby.app">
            support@tabby.app
          </a>
          .
        </p>
      </section>
    </LegalPageShell>
  );
}