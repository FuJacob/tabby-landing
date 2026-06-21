import type { Metadata } from "next";
import { ContentPageShell } from "@/app/components/layout/content-page-shell";
import {
  ArticleJsonLd,
  ArticleSection,
  CheckItem,
  CheckList,
  KeyTakeaway,
  TextLink,
} from "@/app/components/content/seo-article";
import { pageMeta } from "@/app/lib/metadata";

const PATH = "/security";
const TITLE = "Cotabby Security - Local AI, Permissions, and Data Flow";
const DESCRIPTION =
  "Understand how Cotabby handles text, screen context, clipboard data, local AI models, macOS permissions, network access, telemetry, and password fields.";
const DATE = "2026-06-21";

export const dynamic = "force-static";
export const metadata: Metadata = pageMeta({ title: TITLE, description: DESCRIPTION, path: PATH });

export default function SecurityPage() {
  return (
    <ContentPageShell
      eyebrow="Security model"
      title="what Cotabby reads, where it goes, and why"
      description="System-wide autocomplete needs access to the field where you type. Cotabby keeps generation local, does not include telemetry, and publishes its source so that behavior can be verified."
      updatedAt="June 21, 2026"
      readingTime="7 minute read"
    >
      <ArticleJsonLd path={PATH} headline={TITLE} description={DESCRIPTION} datePublished={DATE} dateModified={DATE} />

      <ArticleSection id="summary" title="security summary">
        <KeyTakeaway>
          Suggestions run on your Mac through Apple Intelligence or a local
          GGUF model. Cotabby does not send your writing to a completion server,
          does not include analytics or telemetry, and does not run in password
          fields.
        </KeyTakeaway>
        <CheckList>
          <CheckItem>Active-field text is used transiently to generate the next suggestion.</CheckItem>
          <CheckItem>Optional screen and clipboard context is not stored by Cotabby.</CheckItem>
          <CheckItem>Model inference works offline after any required model download.</CheckItem>
          <CheckItem>Source code is available under AGPL-3.0 for independent inspection.</CheckItem>
        </CheckList>
      </ArticleSection>

      <ArticleSection id="data-flow" title="suggestion data flow">
        <ol className="space-y-4">
          <li><strong className="text-ink">1. You type.</strong> Cotabby detects a supported editable field and reads nearby text exposed by macOS Accessibility.</li>
          <li><strong className="text-ink">2. Context is assembled.</strong> The active field is combined with enabled nearby-screen or clipboard context.</li>
          <li><strong className="text-ink">3. The local engine runs.</strong> Apple&apos;s Foundation Models runtime or llama.cpp generates a continuation on your Mac.</li>
          <li><strong className="text-ink">4. Ghost text appears.</strong> The suggestion remains separate from your document until you accept it.</li>
          <li><strong className="text-ink">5. You decide.</strong> Tab accepts one word, backtick accepts the full continuation, and Esc dismisses it.</li>
        </ol>
      </ArticleSection>

      <ArticleSection id="permissions" title="macOS permissions explained">
        <dl className="divide-y-2 divide-line-soft border-y-2 border-line">
          <div className="py-5"><dt className="font-bold text-ink">Accessibility</dt><dd className="mt-2">Reads the active editable field, positions ghost text, and inserts words you explicitly accept.</dd></div>
          <div className="py-5"><dt className="font-bold text-ink">Input Monitoring</dt><dd className="mt-2">Detects acceptance and dismissal shortcuts while another application is active.</dd></div>
          <div className="py-5"><dt className="font-bold text-ink">Screen Recording</dt><dd className="mt-2">Optionally reads text visible near the cursor to make a suggestion relevant to the surrounding email, document, or conversation. Cotabby does not record video.</dd></div>
        </dl>
        <p>
          Permissions can be revoked at any time under System Settings, then Privacy
          &amp; Security. Removing a permission disables the capability that depends
          on it.
        </p>
      </ArticleSection>

      <ArticleSection id="network" title="network access">
        <p>
          Cotabby does not need network access to generate suggestions. Network
          requests are limited to checking for application updates and
          downloading a local model when you explicitly choose one. Model files
          may be hosted by Hugging Face, whose server receives the ordinary
          metadata associated with that download request.
        </p>
        <p>
          The Apple Intelligence engine uses the model runtime built into macOS
          and does not require Cotabby to download a GGUF model. After setup,
          both engines can produce autocomplete offline.
        </p>
      </ArticleSection>

      <ArticleSection id="storage" title="what is stored">
        <p>
          Cotabby stores application settings, keyboard bindings, disabled-app
          preferences, custom instructions, macro definitions, and downloaded
          model files on your Mac. It does not maintain a cloud account or a
          server-side history of your writing.
        </p>
        <p>
          Clipboard and nearby screen text are transient inputs to a suggestion;
          Cotabby does not save them as a history. The definitive policy is the{" "}
          <TextLink href="/privacy">Cotabby privacy policy</TextLink>.
        </p>
      </ArticleSection>

      <ArticleSection id="verify" title="how to verify the claims">
        <p>
          Cotabby&apos;s repository includes the application source and release
          history. Security researchers and users can inspect permission use,
          network code, model integration, and changes between releases on{" "}
          <TextLink href="https://github.com/FuJacob/cotabby">GitHub</TextLink>.
        </p>
        <p>
          Report a suspected vulnerability privately to{" "}
          <TextLink href="mailto:hello@cotabby.app">hello@cotabby.app</TextLink>.
          Do not include sensitive text beyond what is necessary to reproduce
          the issue. General bugs can use <TextLink href="/feedback">the feedback form</TextLink>.
        </p>
      </ArticleSection>

      <ArticleSection id="compare" title="comparing privacy claims">
        <p>
          “On-device” should be evaluated separately from source availability,
          telemetry, update checks, model downloads, and the breadth of macOS
          permissions. Cotabby documents each of those dimensions rather than
          treating local inference as the whole security story.
        </p>
        <p>
          If you are comparing another autocomplete product, the{" "}
          <TextLink href="/cotypist-alternative">Cotabby vs Cotypist guide</TextLink>
          {" "}separates their shared local-processing model from their ownership,
          pricing, and feature differences.
        </p>
      </ArticleSection>
    </ContentPageShell>
  );
}
