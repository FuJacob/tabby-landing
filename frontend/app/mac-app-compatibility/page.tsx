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

const PATH = "/mac-app-compatibility";
const TITLE = "Cotabby Mac App Compatibility - Browsers, Mail, Slack";
const DESCRIPTION =
  "See where Cotabby's local AI autocomplete works on macOS, including native apps, browsers, and Electron editors, plus intentional exclusions and fixes.";
const DATE = "2026-06-21";

export const dynamic = "force-static";
export const metadata: Metadata = pageMeta({ title: TITLE, description: DESCRIPTION, path: PATH });

const APP_GROUPS = [
  {
    group: "Native macOS apps",
    examples: "Mail, Notes, Messages, TextEdit",
    behavior: "Best compatibility with standard editable text fields",
  },
  {
    group: "Browsers",
    examples: "Safari, Chrome, Arc, Firefox",
    behavior: "Works in standard fields; complex web editors can vary by site",
  },
  {
    group: "Electron apps",
    examples: "Slack, Discord, Notion, Linear, Obsidian",
    behavior: "Generally supported when the editor exposes accessibility text",
  },
  {
    group: "Office and email",
    examples: "Outlook, Gmail, Google Docs",
    behavior: "Supported, with browser-editor differences possible",
  },
  {
    group: "Protected or command input",
    examples: "Password fields, terminals",
    behavior: "Intentionally disabled",
  },
] as const;

export default function MacAppCompatibilityPage() {
  return (
    <ContentPageShell
      eyebrow="Compatibility reference"
      title="where Cotabby autocomplete works on macOS"
      description="Cotabby works through the macOS accessibility system rather than an extension for each app. Standard text fields are the most reliable; custom web editors can expose different behavior."
      updatedAt="June 21, 2026"
      readingTime="6 minute read"
    >
      <ArticleJsonLd path={PATH} headline={TITLE} description={DESCRIPTION} datePublished={DATE} dateModified={DATE} />

      <ArticleSection id="summary" title="compatibility at a glance">
        <KeyTakeaway>
          Cotabby supports most editable text fields in native Mac apps,
          Chromium and Safari browsers, and Electron apps. It intentionally
          stays out of password fields and terminals.
        </KeyTakeaway>
        <div className="overflow-x-auto border-y-2 border-line">
          <table className="w-full min-w-[44rem] text-left text-sm sm:text-base">
            <thead className="bg-surface-3 text-ink"><tr><th className="px-4 py-4">App type</th><th className="px-4 py-4">Examples</th><th className="px-4 py-4">Expected behavior</th></tr></thead>
            <tbody className="divide-y divide-line-soft">
              {APP_GROUPS.map((row) => (
                <tr key={row.group} className="align-top">
                  <th className="px-4 py-4 font-bold text-ink">{row.group}</th>
                  <td className="px-4 py-4">{row.examples}</td>
                  <td className="px-4 py-4">{row.behavior}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-subtle">
          This is a behavior reference, not a guarantee that every release of
          every third-party editor exposes identical accessibility data.
        </p>
      </ArticleSection>

      <ArticleSection id="how" title="why apps behave differently">
        <p>
          Native fields usually expose the current text, selection, and cursor
          position directly to macOS. Cotabby can use that data to request and
          position a suggestion.
        </p>
        <p>
          Browsers and Electron apps add another layer. A standard HTML input or
          textarea generally maps cleanly to macOS accessibility. Rich-text
          editors may split a paragraph into many elements or manage the cursor
          in JavaScript, so available context and ghost-text placement can
          differ from site to site.
        </p>
      </ArticleSection>

      <ArticleSection id="troubleshoot" title="if suggestions do not appear">
        <CheckList>
          <CheckItem>Confirm Cotabby is enabled globally and the current app is not disabled.</CheckItem>
          <CheckItem>Check Accessibility and Input Monitoring under System Settings, then Privacy &amp; Security.</CheckItem>
          <CheckItem>Place the cursor in a normal editable field and type a complete phrase.</CheckItem>
          <CheckItem>Quit and reopen the affected app after granting permissions.</CheckItem>
          <CheckItem>Test Notes or TextEdit to separate an app-specific issue from a global setup issue.</CheckItem>
          <CheckItem>Verify the selected model has completed downloading and is running.</CheckItem>
        </CheckList>
      </ArticleSection>

      <ArticleSection id="exclusions" title="intentional exclusions">
        <p>
          Cotabby does not activate in password fields. It also stays out of
          terminals, where intercepting Tab or backtick would conflict with
          command-line behavior and shell completion.
        </p>
        <p>
          Individual applications can be disabled from Cotabby Settings. This
          is useful for editors with specialized keyboard behavior or for apps
          where you simply do not want automatic suggestions.
        </p>
      </ArticleSection>

      <ArticleSection id="report" title="report a compatibility issue">
        <p>
          A useful report includes the app name and version, macOS version,
          Cotabby version, editor or website, selected model engine, and the
          smallest sequence that reproduces the problem. Do not include private
          writing or screenshots containing sensitive text.
        </p>
        <p>
          Submit a report through <TextLink href="/feedback">Cotabby feedback</TextLink>
          {" "}or open a public issue in the{" "}
          <TextLink href="https://github.com/FuJacob/cotabby/issues">GitHub repository</TextLink>.
          For data-flow questions, read the <TextLink href="/security">security page</TextLink>.
        </p>
      </ArticleSection>
    </ContentPageShell>
  );
}
