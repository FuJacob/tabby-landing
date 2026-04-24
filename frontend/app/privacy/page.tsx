import type { Metadata } from "next";
import { LegalPageShell } from "../components/legal-page-shell";
import { SUPPORT_EMAIL } from "../lib/site";

export const metadata: Metadata = {
  title: "Privacy - tabby",
  description: "Privacy policy for tabby.",
};

export default function PrivacyPage() {
  return (
    <LegalPageShell
      current="privacy"
      title="Privacy"
      summary="tabby collects no personal data, no usage analytics, and no cloud-stored writing data."
      updatedAt="APR 19, 2026"
    >
      <p>We collect 0 personal information.</p>

      <p>
        tabby does not require an account, does not run a hosted dashboard, and
        does not send your writing or prompts to our servers.
      </p>

      <p>
        The app is built around local-first behavior. Your text stays on your
        Mac, and there is no analytics or telemetry pipeline tied to your
        identity.
      </p>

      <p>
        For questions or concerns, email
        <a
          className="tabby-link ml-1 font-semibold"
          href={`mailto:${SUPPORT_EMAIL}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {SUPPORT_EMAIL}
        </a>
        .
      </p>
    </LegalPageShell>
  );
}
