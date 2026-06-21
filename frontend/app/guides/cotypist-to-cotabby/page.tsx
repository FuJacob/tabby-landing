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

const PATH = "/guides/cotypist-to-cotabby";
const TITLE = "How to Switch from Cotypist to Cotabby - Mac Guide";
const DESCRIPTION =
  "Move from Cotypist to Cotabby without conflicting suggestions. Install Cotabby, choose a local model, grant permissions, and test your Mac apps.";
const DATE = "2026-06-21";

export const dynamic = "force-static";
export const metadata: Metadata = pageMeta({ title: TITLE, description: DESCRIPTION, path: PATH });

export default function CotypistMigrationGuidePage() {
  return (
    <ContentPageShell
      eyebrow="Migration guide"
      title="switch from Cotypist to Cotabby without breaking your flow"
      description="Install and test Cotabby alongside your current setup, then switch one app at a time. The process takes about ten minutes plus any local model download."
      updatedAt="June 21, 2026"
      readingTime="6 minute read"
    >
      <ArticleJsonLd path={PATH} headline={TITLE} description={DESCRIPTION} datePublished={DATE} dateModified={DATE} />

      <ArticleSection id="before" title="before you start">
        <KeyTakeaway>
          Do not run two autocomplete utilities in the same text field. Keep
          Cotypist installed while you test, but disable it globally before
          enabling Cotabby.
        </KeyTakeaway>
        <p>
          Cotabby requires macOS 14 or later. Apple Silicon is recommended for
          local GGUF models. The Apple Intelligence engine requires macOS 26 or
          later and a Mac supported by Apple Intelligence.
        </p>
        <CheckList>
          <CheckItem>Save any Cotypist custom instructions you want to reuse.</CheckItem>
          <CheckItem>Note which applications you disabled in Cotypist.</CheckItem>
          <CheckItem>Keep at least 1–5 GB free if you plan to download a GGUF model.</CheckItem>
          <CheckItem>Choose three real writing tasks for a fair comparison.</CheckItem>
        </CheckList>
      </ArticleSection>

      <ArticleSection id="install" title="1. install Cotabby">
        <p>
          Install with Homebrew using <code className="rounded bg-surface-3 px-2 py-1 text-sm font-bold text-ink">brew install --cask cotabby</code>,
          or download the latest disk image from the{" "}
          <TextLink href="https://github.com/FuJacob/cotabby/releases/latest">GitHub release page</TextLink>.
          Move Cotabby to Applications and launch it from there.
        </p>
        <p>
          Cotabby is distributed outside the Mac App Store because a
          system-wide autocomplete utility needs macOS permissions and model
          access that do not fit a conventional sandboxed app.
        </p>
      </ArticleSection>

      <ArticleSection id="permissions" title="2. grant macOS permissions">
        <p>
          Cotabby will request Accessibility and Input Monitoring. Accessibility
          lets it read the active text field and insert accepted words. Input
          Monitoring detects your acceptance and dismissal keys.
        </p>
        <p>
          Screen Recording is optional but improves context by reading nearby
          text that is already visible on screen. Cotabby does not record video,
          store screenshots, or run in password fields. The{" "}
          <TextLink href="/security">security page</TextLink> explains each permission in detail.
        </p>
      </ArticleSection>

      <ArticleSection id="model" title="3. choose an AI engine">
        <p>
          Use Apple Intelligence when available if you want the smallest setup
          and no separate model download. Use the Open Source engine when you
          want model choice or are running macOS 14 or 15.
        </p>
        <p>
          Start with Cotabby&apos;s recommended local model. A larger model is not
          automatically better for autocomplete: suggestions that arrive after
          you have already finished the sentence are not useful. Tune for
          responsive output first, then test quality.
        </p>
      </ArticleSection>

      <ArticleSection id="shortcuts" title="4. learn the three keys">
        <dl className="divide-y divide-line-soft border-y-2 border-line">
          <div className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr] sm:gap-5"><dt className="font-bold text-ink">Tab</dt><dd>Accept the next suggested word.</dd></div>
          <div className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr] sm:gap-5"><dt className="font-bold text-ink">Backtick</dt><dd>Accept the complete suggestion.</dd></div>
          <div className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr] sm:gap-5"><dt className="font-bold text-ink">Esc</dt><dd>Dismiss the suggestion. Continuing to type also dismisses it.</dd></div>
        </dl>
        <p>All three shortcuts can be changed in Cotabby Settings.</p>
      </ArticleSection>

      <ArticleSection id="test" title="5. test normal work">
        <p>
          Test the same short email, chat reply, and longer paragraph you chose
          before installation. Measure whether you accept useful words, not how
          frequently either app displays ghost text.
        </p>
        <p>
          If an application behaves differently, check the{" "}
          <TextLink href="/mac-app-compatibility">compatibility matrix</TextLink>.
          Browser editors can behave differently from native fields because each
          site implements text editing in its own way.
        </p>
      </ArticleSection>

      <ArticleSection id="remove" title="6. finish the switch">
        <p>
          Once Cotabby works in your regular applications, either leave Cotypist
          disabled for a few days as a fallback or remove it using Cotypist&apos;s
          own uninstall instructions. Revoking permissions from the old app in
          System Settings is a separate step from deleting the application.
        </p>
        <p>
          If Cotabby is not a fit, disable it from the menu bar and your original
          setup remains available. You can compare all plan and feature
          differences on the{" "}
          <TextLink href="/cotypist-alternative">Cotabby vs Cotypist page</TextLink>.
        </p>
      </ArticleSection>
    </ContentPageShell>
  );
}
