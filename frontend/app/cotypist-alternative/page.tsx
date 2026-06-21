import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContentPageShell } from "@/app/components/layout/content-page-shell";
import {
  ArticleJsonLd,
  ArticleSection,
  CheckItem,
  CheckList,
  KeyTakeaway,
  SourceNote,
  TextLink,
} from "@/app/components/content/seo-article";
import { IconTile } from "@/app/components/ui/icon-tile";
import { pageMeta } from "@/app/lib/metadata";

const PATH = "/cotypist-alternative";
const TITLE = "Cotypist Alternative for Mac: Cotabby vs Cotypist";
const DESCRIPTION =
  "Compare Cotabby and Cotypist on pricing, privacy, models, limits, and macOS support. Cotabby is free, open source, and runs on-device.";
const PUBLISHED = "2026-06-21";

export const dynamic = "force-static";

export const metadata: Metadata = pageMeta({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const COMPARISON_ROWS = [
  ["Price", "Free", "Free, Plus, or Pro subscription"],
  ["Completion limit", "Unlimited", "100 completed words/day on Free; unlimited on paid plans"],
  ["Source code", "Public under AGPL-3.0", "App source is not public"],
  ["Processing", "On-device", "On-device"],
  ["Apple Intelligence", "Supported on compatible Macs", "Not listed as an engine"],
  ["Local models", "Choose a GGUF model", "Curated model catalog by plan"],
  ["Autocorrect", "Included", "Paid plans"],
  ["Custom instructions", "Included", "Plus and Pro"],
  ["Clipboard context", "Included", "Pro"],
  ["Macs covered", "Install on your own Macs", "One Mac on Plus; up to three on Pro"],
] as const;

export default function CotypistAlternativePage() {
  return (
    <ContentPageShell
      eyebrow="Product comparison"
      title="a free, open-source Cotypist alternative for Mac"
      description="Cotabby and Cotypist both add local AI autocomplete across macOS. The main difference is the model: Cotabby is community-owned software with no subscription or daily completion cap."
      updatedAt="June 21, 2026"
      readingTime="9 minute read"
    >
      <ArticleJsonLd
        path={PATH}
        headline={TITLE}
        description={DESCRIPTION}
        datePublished={PUBLISHED}
        dateModified={PUBLISHED}
      />

      <ArticleSection id="quick-answer" title="the short answer">
        <KeyTakeaway>
          Choose Cotabby if you want unlimited system-wide autocomplete without
          a subscription, want to inspect or modify the source, or want to use
          Apple Intelligence. Choose Cotypist if you prefer its polished,
          curated model experience and are comfortable with its Free, Plus, or
          Pro limits.
        </KeyTakeaway>
        <p>
          Both apps keep generation on your Mac and place suggestions directly
          in the text fields you already use. Neither requires copying your
          writing into a separate chat window. Cotabby is not a cloud wrapper:
          it runs with Apple&apos;s Foundation Models framework or a local GGUF
          model.
        </p>
        <p>
          This page is published by the Cotabby team. We link to Cotypist&apos;s
          own documentation for its plans and deliberately include reasons
          someone might still choose it.
        </p>
      </ArticleSection>

      <ArticleSection
        id="comparison"
        title="Cotabby vs Cotypist"
        intro="Product and plan details verified June 21, 2026."
      >
        <div className="mb-7 grid grid-cols-2 gap-5 sm:max-w-md">
          <div className="flex items-center gap-3">
            <IconTile size="md" tone="bg-white">
              <Image
                src="/app-icons/cotabby-icon.webp"
                alt="Cotabby app icon"
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </IconTile>
            <strong className="text-ink">Cotabby</strong>
          </div>
          <div className="flex items-center gap-3">
            <IconTile size="md" tone="bg-white">
              <Image
                src="/app-icons/cotypist.webp"
                alt="Cotypist app icon"
                width={48}
                height={48}
                className="h-full w-full scale-125 object-cover"
              />
            </IconTile>
            <strong className="text-ink">Cotypist</strong>
          </div>
        </div>

        <div className="overflow-x-auto border-y-2 border-line">
          <table className="w-full min-w-[46rem] border-collapse text-left text-sm sm:text-base">
            <thead>
              <tr className="bg-surface-3 text-ink">
                <th scope="col" className="w-1/4 px-4 py-4 font-bold">Feature</th>
                <th scope="col" className="px-4 py-4 font-bold">Cotabby</th>
                <th scope="col" className="px-4 py-4 font-bold">Cotypist</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line-soft">
              {COMPARISON_ROWS.map(([feature, cotabby, cotypist]) => (
                <tr key={feature} className="align-top">
                  <th scope="row" className="px-4 py-4 font-bold text-ink">{feature}</th>
                  <td className="px-4 py-4">{cotabby}</td>
                  <td className="px-4 py-4">{cotypist}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <SourceNote>
          Cotypist details come from its{" "}
          <TextLink href="https://cotypist.app/pricing">official pricing page</TextLink>.
          Cotabby details come from the{" "}
          <TextLink href="https://github.com/FuJacob/cotabby">public source repository</TextLink>
          {" "}and current release. Pricing and features can change; report a mismatch to{" "}
          <TextLink href="mailto:hello@cotabby.app">hello@cotabby.app</TextLink>.
        </SourceNote>
      </ArticleSection>

      <ArticleSection id="pricing" title="price and usage limits">
        <p>
          Cotabby is free software. There is no account, license key, daily word
          counter, or paid model tier. The cost of generation is absorbed by
          hardware you already own because inference stays on your Mac.
        </p>
        <p>
          Cotypist Free currently includes 100 completed words per day and a
          30-day Pro trial. Its annual pricing page lists Plus at $6 per month
          and Pro at $9 per month when billed annually. Plus removes the daily
          completion limit for one Mac; Pro adds up to three Macs and its full
          model and context feature set.
        </p>
        <p>
          If you only accept an occasional suggestion, Cotypist Free may be
          enough. If autocomplete becomes part of every email and message, the
          difference between a daily allowance and unlimited completions is
          more consequential.
        </p>
      </ArticleSection>

      <ArticleSection id="privacy" title="privacy and ownership">
        <p>
          Both products advertise on-device processing. Your writing does not
          need to be sent to a remote language model merely to produce the next
          suggestion.
        </p>
        <p>
          Cotabby adds verifiability: its source, permissions, model integration,
          and network behavior can be inspected in public. Cotabby does not
          include telemetry. Network access is used for user-initiated model
          downloads and update checks. Read the complete{" "}
          <TextLink href="/security">Cotabby security model</TextLink> and{" "}
          <TextLink href="/privacy">privacy policy</TextLink>.
        </p>
      </ArticleSection>

      <ArticleSection id="models" title="models and Apple Intelligence">
        <p>
          Cotabby offers two engines. On macOS 26 or later with compatible
          hardware, Apple Intelligence uses Apple&apos;s built-in Foundation
          Models runtime. On macOS 14 or later, Cotabby can instead run a local
          GGUF model through llama.cpp.
        </p>
        <p>
          Apple Intelligence avoids a separate multi-gigabyte model download.
          GGUF support provides more control: you can select a model based on
          latency, quality, memory, and language requirements rather than a
          subscription tier. See the{" "}
          <TextLink href="/apple-intelligence-autocomplete-mac">
            Apple Intelligence setup guide
          </TextLink>.
        </p>
        <p>
          Cotypist instead curates and recommends its model catalog. That is a
          reasonable tradeoff for users who want fewer decisions and prefer the
          app to select an appropriate model for their Mac.
        </p>
      </ArticleSection>

      <ArticleSection id="quality" title="which one writes better?">
        <p>
          There is no honest universal winner. Completion quality depends on the
          model, available context, language, sentence length, Mac hardware, and
          how closely a product&apos;s defaults match your writing. A screenshot
          of one successful sentence does not settle that question.
        </p>
        <CheckList>
          <CheckItem>Try both products in the same three applications.</CheckItem>
          <CheckItem>Use the same email, chat, and long-form writing tasks.</CheckItem>
          <CheckItem>Record accepted suggestions rather than suggestions merely shown.</CheckItem>
          <CheckItem>Watch latency and memory pressure during normal work.</CheckItem>
          <CheckItem>Keep each product&apos;s default settings for the first test.</CheckItem>
        </CheckList>
        <p>
          Cotabby&apos;s practical advantage is that you can keep testing models
          without a paid catalog restriction. Cotypist&apos;s practical advantage
          is a more opinionated default experience.
        </p>
      </ArticleSection>

      <ArticleSection id="switch" title="switching from Cotypist">
        <p>
          You can test Cotabby alongside Cotypist without deleting your existing
          settings. Disable one app globally while evaluating the other so both
          do not attempt to display suggestions in the same field.
        </p>
        <ol className="space-y-3 pl-5 [counter-reset:steps]">
          <li><strong className="text-ink">1.</strong> Install Cotabby from the latest GitHub release or Homebrew.</li>
          <li><strong className="text-ink">2.</strong> Grant Accessibility, Input Monitoring, and optional Screen Recording permissions.</li>
          <li><strong className="text-ink">3.</strong> Select Apple Intelligence or download a local GGUF model.</li>
          <li><strong className="text-ink">4.</strong> Disable Cotypist temporarily and test Cotabby in your normal apps.</li>
          <li><strong className="text-ink">5.</strong> Adjust completion length, context, and disabled apps only after testing the defaults.</li>
        </ol>
        <p>
          The full walkthrough is in the{" "}
          <TextLink href="/guides/cotypist-to-cotabby">Cotypist migration guide</TextLink>.
        </p>
      </ArticleSection>

      <ArticleSection id="faq" title="common questions">
        <div className="divide-y-2 divide-line-soft border-y-2 border-line-soft">
          {[
            ["Is Cotabby really free?", "Yes. Cotabby is licensed under AGPL-3.0 and does not have a paid feature tier, subscription, or daily completion limit."],
            ["Does Cotabby send my writing to a server?", "No. Suggestions run through Apple Intelligence or a local GGUF model on your Mac. Cotabby has no telemetry."],
            ["Does Cotabby work in every Mac app?", "It works in most editable macOS text fields, including many native, browser, and Electron apps. Password fields and terminals are intentionally excluded. Check the compatibility page for tested details."],
            ["Can I use Cotabby and Cotypist together?", "Both can be installed, but only one should be enabled while typing in a given app to avoid competing suggestions."],
            ["Is Cotabby affiliated with Cotypist?", "No. Cotabby is an independent open-source project. Cotypist is referenced only to explain factual product differences."],
          ].map(([question, answer]) => (
            <details key={question} className="group py-5">
              <summary className="cursor-pointer list-none font-bold text-ink">{question}</summary>
              <p className="mt-3 pr-4 text-base leading-relaxed text-muted">{answer}</p>
            </details>
          ))}
        </div>
        <p>
          Ready to evaluate it yourself? Check{" "}
          <Link href="/mac-app-compatibility" className="font-bold text-ink underline decoration-accent-deep decoration-2 underline-offset-4">
            app compatibility
          </Link>{" "}
          before installing.
        </p>
      </ArticleSection>
    </ContentPageShell>
  );
}
