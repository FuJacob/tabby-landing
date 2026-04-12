import type { ReactNode } from "react";

type CustomItemProps = {
  eyebrow: string;
  title: string;
  description: string;
  preview: ReactNode;
};

function CustomItem({
  eyebrow,
  title,
  description,
  preview,
}: CustomItemProps) {
  return (
    <article className="tabby-panel flex h-full flex-col rounded-[1.9rem] p-6 sm:p-7">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
        {eyebrow}
      </p>
      <h3 className="mt-4 text-[1.9rem] font-semibold leading-tight tracking-tight text-ink sm:text-[2.2rem]">
        {title}
      </h3>
      <p className="mt-3 max-w-md text-sm leading-relaxed tracking-tight text-muted sm:text-base">
        {description}
      </p>
      <div className="mt-6">{preview}</div>
    </article>
  );
}

export function CustomizationCardsSection() {
  return (
    <section>
      <div className="text-center">
        <span className="tabby-pill inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em]">
          Control the behavior
        </span>
      </div>

      <h2 className="mb-8 mt-4 text-center text-[2.5rem] font-semibold leading-none tracking-tight text-ink sm:mb-10 sm:text-[3rem]">
        Customize Tabby
      </h2>

      <div className="grid gap-5 lg:grid-cols-[1fr_1fr_0.8fr]">
        <CustomItem
          eyebrow="Models"
          title="Customize model"
          description="Pick the balance that fits your workflow, from instant completions to slower but sharper suggestions."
          preview={
            <div className="space-y-3">
              <div className="tabby-chip flex items-center justify-between rounded-[1.3rem] px-4 py-3">
                <span className="font-medium tracking-tight text-ink">
                  Balanced
                </span>
                <span className="tabby-pill rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]">
                  Recommended
                </span>
              </div>
              <div className="tabby-chip flex items-center justify-between rounded-[1.3rem] px-4 py-3">
                <span className="font-medium tracking-tight text-ink">Fast</span>
                <span className="text-sm tracking-tight text-subtle">
                  Lower latency
                </span>
              </div>
              <div className="tabby-chip flex items-center justify-between rounded-[1.3rem] px-4 py-3">
                <span className="font-medium tracking-tight text-ink">
                  Precise
                </span>
                <span className="text-sm tracking-tight text-subtle">
                  Higher quality
                </span>
              </div>
            </div>
          }
        />
        <CustomItem
          eyebrow="Length"
          title="Customize word count"
          description="Keep completions short and invisible, or let Tabby expand into fuller suggestions when you need momentum."
          preview={
            <div className="rounded-[1.6rem] border border-line bg-background/45 p-5">
              <div className="flex items-center justify-between text-sm font-medium tracking-tight text-muted">
                <span>Short</span>
                <span>Medium</span>
                <span>Long</span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="h-3 rounded-full bg-accent" />
                <div className="h-3 rounded-full bg-accent/50" />
                <div className="h-3 rounded-full bg-surface-4" />
              </div>
              <p className="mt-4 text-sm leading-relaxed tracking-tight text-subtle">
                Suggestions stay concise by default so they feel like an
                extension of your own sentence.
              </p>
            </div>
          }
        />
        <CustomItem
          eyebrow="Tone"
          title="Personalize"
          description="Nudge the voice toward warm, direct, concise, or detailed without forcing a rigid preset."
          preview={
            <div className="space-y-3 rounded-[1.6rem] border border-line bg-background/45 p-5">
              <div className="flex flex-wrap gap-2">
                <span className="tabby-pill rounded-full px-3 py-2 text-sm font-medium tracking-tight">
                  Warm
                </span>
                <span className="tabby-chip rounded-full px-3 py-2 text-sm font-medium tracking-tight text-ink">
                  Concise
                </span>
                <span className="tabby-chip rounded-full px-3 py-2 text-sm font-medium tracking-tight text-ink">
                  Direct
                </span>
              </div>
              <p className="text-sm leading-relaxed tracking-tight text-muted">
                Thanks for the quick turnaround
                <span className="text-accent">
                  . I tightened the message and kept the tone warm.
                </span>
              </p>
            </div>
          }
        />
      </div>
    </section>
  );
}
