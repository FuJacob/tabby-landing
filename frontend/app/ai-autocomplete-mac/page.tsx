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

const PATH = "/ai-autocomplete-mac";
const TITLE = "AI Autocomplete for Mac Apps - Local and System-Wide";
const DESCRIPTION =
  "Add private AI autocomplete to Mail, Notes, Slack, browsers, and other Mac apps. Learn how system-wide suggestions work and how to run them locally.";
const DATE = "2026-06-21";

export const dynamic = "force-static";
export const metadata: Metadata = pageMeta({ title: TITLE, description: DESCRIPTION, path: PATH });

export default function AiAutocompleteMacPage() {
  return (
    <ContentPageShell
      eyebrow="macOS guide"
      title="AI autocomplete that works across your Mac"
      description="System-wide autocomplete predicts the next words inside the app you are already using. Cotabby runs those suggestions locally and keeps the writing workflow in place."
      updatedAt="June 21, 2026"
      readingTime="7 minute read"
    >
      <ArticleJsonLd path={PATH} headline={TITLE} description={DESCRIPTION} datePublished={DATE} dateModified={DATE} />

      <ArticleSection id="definition" title="what system-wide autocomplete means">
        <KeyTakeaway>
          Unlike a chat assistant, system-wide autocomplete does not require a
          prompt, a browser tab, or copying text. A suggestion appears as ghost
          text beside the cursor; Tab accepts the next word.
        </KeyTakeaway>
        <p>
          The operating system&apos;s Accessibility APIs expose the active editable
          field. A local language model receives limited nearby context and
          predicts a continuation. Cotabby displays that continuation without
          replacing what you have already written.
        </p>
      </ArticleSection>

      <ArticleSection id="where" title="where it works">
        <p>
          Cotabby is designed for native Mac applications, browser text fields,
          and many Electron applications. Common examples include Apple Mail,
          Notes, Messages, Slack, Discord, Gmail, Notion, Linear, and Google
          Docs.
        </p>
        <p>
          Compatibility is not identical in every editor. Some web apps build
          custom text controls that expose less information to macOS. Cotabby
          intentionally stays out of password fields and terminals. Check the{" "}
          <TextLink href="/mac-app-compatibility">tested app compatibility page</TextLink>
          {" "}for current limitations.
        </p>
      </ArticleSection>

      <ArticleSection id="local" title="why run autocomplete locally?">
        <CheckList>
          <CheckItem>Your draft does not need to cross the network for every suggestion.</CheckItem>
          <CheckItem>Suggestions continue without an internet connection.</CheckItem>
          <CheckItem>There is no per-token API bill or cloud rate limit.</CheckItem>
          <CheckItem>You can choose a model that fits the memory and speed of your Mac.</CheckItem>
        </CheckList>
        <p>
          Local inference is not free of tradeoffs. A model occupies disk and
          memory, and larger models can respond too slowly for fluid typing.
          Apple Intelligence reduces setup on supported Macs; GGUF models
          provide more control on a broader range of systems.
        </p>
      </ArticleSection>

      <ArticleSection id="features" title="more than sentence completion">
        <p>
          Cotabby can suggest emoji shortcodes, correct recent typos, expand
          saved macros, use clipboard context, and adjust completion length.
          Those features share the same system-wide interaction: suggestions
          remain optional and disappear when you keep typing.
        </p>
        <p>
          Context can improve relevance, but should be scoped. Cotabby reads the
          active text field and, when enabled, nearby screen text or clipboard
          contents. It does not keep a writing history or send telemetry. Read
          the{" "}<TextLink href="/security">permission and data-flow explanation</TextLink>.
        </p>
      </ArticleSection>

      <ArticleSection id="choose" title="choosing a Mac autocomplete app">
        <p>Evaluate a product using repeatable work rather than a demo sentence:</p>
        <CheckList>
          <CheckItem>Measure accepted words during normal email, chat, and document writing.</CheckItem>
          <CheckItem>Check suggestion latency while other applications are open.</CheckItem>
          <CheckItem>Confirm how much text leaves the device and whether telemetry exists.</CheckItem>
          <CheckItem>Check daily limits, model restrictions, and long-term subscription cost.</CheckItem>
          <CheckItem>Verify behavior in the exact editors you use.</CheckItem>
        </CheckList>
        <p>
          If Cotypist is your current reference point, see the detailed{" "}
          <TextLink href="/cotypist-alternative">Cotabby and Cotypist comparison</TextLink>.
        </p>
      </ArticleSection>

      <ArticleSection id="setup" title="getting started">
        <p>
          Install Cotabby, grant Accessibility and Input Monitoring, choose an
          engine, and begin typing. Press Tab for the next word, backtick for the
          complete suggestion, and Esc to dismiss. No account is required.
        </p>
        <p>
          On a compatible Mac running macOS 26 or later, start with the{" "}
          <TextLink href="/apple-intelligence-autocomplete-mac">Apple Intelligence engine</TextLink>.
          Otherwise, use Cotabby&apos;s recommended local model and test response
          time before experimenting with larger files.
        </p>
      </ArticleSection>
    </ContentPageShell>
  );
}
