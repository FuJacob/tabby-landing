import type { ReactNode } from "react";

type CustomItemProps = {
  eyebrow: string;
  title: string;
  description: string;
  preview: ReactNode;
};

function CustomItem({ eyebrow, title, description, preview }: CustomItemProps) {
  return (
    <article className="flex h-full flex-col gap-4">
      <p className="text-sm font-medium tracking-tight text-moss sm:text-base">
        {eyebrow}
      </p>
      <h3 className="text-[1.95rem] font-semibold leading-tight tracking-tight text-ink sm:text-[2.2rem]">
        {title}
      </h3>
      <p className="max-w-md text-sm leading-relaxed tracking-tight text-muted sm:text-base">
        {description}
      </p>
      <div className="mt-auto lg:h-[190px]">{preview}</div>
    </article>
  );
}

export function CustomizationCardsSection() {
  return (
    <section className="mx-auto max-w-[1220px]">
      <h2 className="tabby-display text-center text-[2.9rem] leading-none tracking-tight text-ink sm:text-[4.1rem]">
        make tabby feel like yours
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed tracking-tight text-muted sm:text-base">
        Tune the suggestions so they feel helpful, not intrusive.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr_0.9fr]">
        <CustomItem
          eyebrow="models"
          title="choose your model"
          description="Pick the balance that fits your workflow, from instant completions to slower but sharper suggestions."
          preview={
            <div className="tabby-panel-soft h-full rounded-[1.5rem] p-5">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3 border-b-2 border-line-soft pb-3">
                  <span className="font-medium tracking-tight text-ink">
                    tabby-balanced-1
                  </span>
                  <span className="text-sm tracking-tight text-moss">
                    good place to start
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3 border-b-2 border-line-soft pb-3">
                  <span className="font-medium tracking-tight text-ink">
                    tabby-fast-1
                  </span>
                  <span className="text-sm tracking-tight text-subtle">
                    lower latency
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-medium tracking-tight text-ink">
                    tabby-depth-1
                  </span>
                  <span className="text-sm tracking-tight text-subtle">
                    higher quality
                  </span>
                </div>
              </div>
            </div>
          }
        />
        <CustomItem
          eyebrow="length"
          title="keep it short or long"
          description="Keep completions short and invisible, or let tabby expand into fuller suggestions when you need momentum."
          preview={
            <div className="tabby-panel-soft h-full rounded-[1.5rem] p-5">
              <div className="flex items-center justify-between text-sm font-medium tracking-tight text-muted">
                <span>Short</span>
                <span>Medium</span>
                <span>Long</span>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="h-3 rounded-full border-2 border-line bg-accent" />
                <div className="h-3 rounded-full border-2 border-line bg-accent-soft" />
                <div className="h-3 rounded-full border-2 border-line bg-surface-4" />
              </div>
              <p className="mt-5 text-sm leading-relaxed tracking-tight text-subtle">
                Suggestions stay concise by default so they still feel like an
                extension of your own sentence.
              </p>
            </div>
          }
        />
        <CustomItem
          eyebrow="tone"
          title="nudge the voice"
          description="Customize the tone between warm, concise, or direct and keep editing naturally."
          preview={
            <div className="tabby-panel-soft h-full rounded-[1.5rem] p-5">
              <p className="text-sm font-medium tracking-tight text-moss">
                warm / concise / direct
              </p>
              <p className="mt-4 text-sm leading-relaxed tracking-tight text-muted">
                Hey Maya,
                <span className="text-accent">
                  {
                    " thanks again for turning this around so quickly - really appreciate it."
                  }
                </span>
              </p>
              <p className="mt-4 text-sm tracking-tight text-subtle">
                Keep typing and tabby adjusts the tone without locking you into
                one preset.
              </p>
            </div>
          }
        />
      </div>
    </section>
  );
}
