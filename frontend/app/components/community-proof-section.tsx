import Link from "next/link";
import { DISCORD_URL, GITHUB_URL } from "../lib/site";
import { GithubStarLabel } from "./github-star-label";
import { DiscordIcon, GithubIcon } from "./icons";
import { FadeIn, ScaleIn, WordReveal } from "./motion";

const githubActionClass =
  "tabby-button tabby-button-primary inline-flex h-12 items-center justify-center gap-2 rounded-2xl px-6 text-sm font-bold tracking-tight sm:h-13 sm:text-base";

const discordActionClass =
  "tabby-button tabby-button-secondary inline-flex h-12 items-center justify-center gap-2 rounded-2xl px-6 text-sm font-bold tracking-tight sm:h-13 sm:text-base";

function StatTile({
  value,
  label,
}: {
  value: React.ReactNode;
  label: string;
}) {
  return (
    <div className="rounded-[1.2rem] border-2 border-line bg-surface-3 px-5 py-6 text-center shadow-[0_5px_0_var(--shadow-color)]">
      <div className="tabby-display text-[2.4rem] leading-none tracking-tight text-ink sm:text-[2.9rem]">
        {value}
      </div>
      <div className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-subtle">
        {label}
      </div>
    </div>
  );
}

export function CommunityProofSection() {
  return (
    <section className="mx-auto max-w-305">
      <div className="overflow-hidden rounded-4xl border-2 border-line bg-surface-2 px-6 py-12 shadow-[0_11.8px_0_var(--shadow-color)] sm:px-10 sm:py-14">
        <div className="flex flex-col items-center gap-3 text-center">
          <WordReveal
            as="h2"
            text="free, and built in the open"
            className="tabby-display text-[2.5rem] leading-[1.04] tracking-tight text-ink sm:text-[3.6rem]"
          />
          <FadeIn delay={0.1}>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed tracking-tight text-muted sm:text-base">
              No pitch decks or fake five-star quotes — just a public repo you can
              read end to end, a license that keeps it free, and everything
              running on your own machine.
            </p>
          </FadeIn>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
          <ScaleIn from={0.95}>
            <StatTile value={<GithubStarLabel suffix="+" />} label="GitHub stars" />
          </ScaleIn>
          <ScaleIn from={0.95} delay={0.08}>
            <StatTile value="AGPL-3.0" label="open-source license" />
          </ScaleIn>
          <ScaleIn from={0.95} delay={0.16}>
            <StatTile value="100%" label="on-device inference" />
          </ScaleIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={githubActionClass}
            >
              <GithubIcon className="h-5 w-5" />
              Star on GitHub
            </Link>
            <Link
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={discordActionClass}
            >
              <DiscordIcon className="h-5 w-5" />
              Join the Discord
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
