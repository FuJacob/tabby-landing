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

const PATH = "/apple-intelligence-autocomplete-mac";
const TITLE = "Use Apple Intelligence for Autocomplete Across Mac Apps";
const DESCRIPTION =
  "Use Apple's on-device Foundation Models for system-wide Mac autocomplete with Cotabby. Check requirements, permissions, setup, and local-model alternatives.";
const DATE = "2026-06-21";

export const dynamic = "force-static";
export const metadata: Metadata = pageMeta({ title: TITLE, description: DESCRIPTION, path: PATH });

export default function AppleIntelligenceAutocompletePage() {
  return (
    <ContentPageShell
      eyebrow="Apple Intelligence guide"
      title="use Apple Intelligence as system-wide autocomplete"
      description="Cotabby connects Apple's on-device Foundation Models runtime to editable fields across macOS, without requiring a separate model download or cloud API key."
      updatedAt="June 21, 2026"
      readingTime="5 minute read"
    >
      <ArticleJsonLd path={PATH} headline={TITLE} description={DESCRIPTION} datePublished={DATE} dateModified={DATE} />

      <ArticleSection id="answer" title="the short answer">
        <KeyTakeaway>
          Cotabby can use Apple Intelligence for local autocomplete on supported
          Macs running macOS 26 or later. The model stays inside Apple&apos;s
          system framework; Cotabby supplies text context and displays the
          resulting suggestion.
        </KeyTakeaway>
        <p>
          Apple Intelligence by itself does not add persistent ghost-text
          autocomplete to every third-party text field. Cotabby provides that
          system-wide interaction layer while using Apple&apos;s model runtime as
          the engine.
        </p>
      </ArticleSection>

      <ArticleSection id="requirements" title="requirements">
        <CheckList>
          <CheckItem>A Mac supported by Apple Intelligence.</CheckItem>
          <CheckItem>macOS 26 or a later compatible release.</CheckItem>
          <CheckItem>Apple Intelligence enabled and available for your language and region.</CheckItem>
          <CheckItem>Cotabby with Accessibility and Input Monitoring permissions.</CheckItem>
        </CheckList>
        <p>
          If the Apple Intelligence engine is unavailable, Cotabby&apos;s Open
          Source engine still works on macOS 14 or later using a local GGUF
          model.
        </p>
      </ArticleSection>

      <ArticleSection id="setup" title="setup">
        <ol className="space-y-4">
          <li><strong className="text-ink">1. Install Cotabby.</strong> Use Homebrew or the latest signed disk image.</li>
          <li><strong className="text-ink">2. Grant permissions.</strong> Accessibility inserts accepted text; Input Monitoring observes the acceptance keys.</li>
          <li><strong className="text-ink">3. Open Settings.</strong> Select Apple Intelligence as the completion engine.</li>
          <li><strong className="text-ink">4. Test a normal text field.</strong> Type in Notes or Mail and pause briefly for ghost text.</li>
          <li><strong className="text-ink">5. Tune only if needed.</strong> Adjust completion length and context after testing the defaults.</li>
        </ol>
      </ArticleSection>

      <ArticleSection id="privacy" title="what stays on your Mac">
        <p>
          Cotabby sends context to Apple&apos;s local Foundation Models API, not to
          a third-party completion server. Cotabby has no telemetry and does not
          save a transcript of your writing. It does not activate in password
          fields.
        </p>
        <p>
          Screen context and clipboard context are optional. macOS requires
          explicit permissions because Cotabby works across application
          boundaries. See the complete{" "}
          <TextLink href="/security">security and permissions model</TextLink>.
        </p>
      </ArticleSection>

      <ArticleSection id="comparison" title="Apple Intelligence or GGUF?">
        <div className="overflow-x-auto border-y-2 border-line">
          <table className="w-full min-w-[38rem] text-left text-sm sm:text-base">
            <thead className="bg-surface-3 text-ink"><tr><th className="px-4 py-4">Consideration</th><th className="px-4 py-4">Apple Intelligence</th><th className="px-4 py-4">Local GGUF</th></tr></thead>
            <tbody className="divide-y divide-line-soft">
              <tr><th className="px-4 py-4 text-ink">Setup</th><td className="px-4 py-4">No separate model file</td><td className="px-4 py-4">Download 1–5 GB</td></tr>
              <tr><th className="px-4 py-4 text-ink">System</th><td className="px-4 py-4">Compatible Mac, macOS 26+</td><td className="px-4 py-4">macOS 14+, Apple Silicon recommended</td></tr>
              <tr><th className="px-4 py-4 text-ink">Model choice</th><td className="px-4 py-4">Managed by Apple</td><td className="px-4 py-4">Choose a compatible GGUF model</td></tr>
              <tr><th className="px-4 py-4 text-ink">Offline use</th><td className="px-4 py-4">Yes</td><td className="px-4 py-4">Yes after download</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Start with Apple Intelligence when supported. Switch to GGUF when you
          need a different language, model behavior, or more direct control over
          the speed and memory tradeoff.
        </p>
      </ArticleSection>

      <ArticleSection id="next" title="next steps">
        <p>
          Learn how system-wide suggestions behave in the broader{" "}
          <TextLink href="/ai-autocomplete-mac">AI autocomplete for Mac guide</TextLink>,
          or check whether your main editor appears in the{" "}
          <TextLink href="/mac-app-compatibility">compatibility matrix</TextLink>.
        </p>
      </ArticleSection>
    </ContentPageShell>
  );
}
