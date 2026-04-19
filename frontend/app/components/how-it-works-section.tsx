import { FadeIn, HoverLift, ScaleIn, Stagger, StaggerItem } from "./motion";

type StepProps = {
  number: string;
  title: string;
  description: string;
  visual: React.ReactNode;
};

function Step({ number, title, description, visual }: StepProps) {
  return (
    <HoverLift lift={3}>
      <article className="tabby-panel-soft flex h-full flex-col gap-5 rounded-[1.55rem] p-6 sm:p-7">
        <div className="flex items-center justify-between">
          <span className="tabby-display text-[2.8rem] leading-none tracking-tight text-ink/90">
            {number}
          </span>
          <span className="h-[2px] flex-1 ml-5 bg-line-soft" />
        </div>
        <h3 className="text-[1.55rem] font-semibold leading-tight tracking-tight text-ink sm:text-[1.75rem]">
          {title}
        </h3>
        <p className="text-sm leading-relaxed tracking-tight text-muted sm:text-base">
          {description}
        </p>
        <div className="mt-auto">{visual}</div>
      </article>
    </HoverLift>
  );
}

function InstallVisual() {
  return (
    <div className="rounded-[1.1rem] border-2 border-line bg-surface-2 p-4">
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full border border-line bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full border border-line bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full border border-line bg-[#28C840]" />
      </div>
      <div className="mt-3 flex items-center gap-2 text-xs font-medium tracking-tight text-ink">
        <span className="text-moss">$</span>
        <span>brew install tabby</span>
        <span className="ml-auto inline-flex h-5 items-center rounded-[0.4rem] border border-line bg-surface-3 px-1.5 text-[0.65rem] text-subtle">
          or .dmg
        </span>
      </div>
    </div>
  );
}

function TypeAnywhereVisual() {
  const apps = ["Mail", "Notes", "Slack", "Notion", "Docs"];
  return (
    <div className="flex flex-wrap gap-2">
      {apps.map((app) => (
        <span
          key={app}
          className="inline-flex items-center rounded-[0.7rem] border-2 border-line bg-surface-2 px-3 py-1.5 text-xs font-medium tracking-tight text-ink shadow-[0_2px_0_var(--line)] sm:text-sm"
        >
          {app}
        </span>
      ))}
      <span className="inline-flex items-center rounded-[0.7rem] border-2 border-dashed border-line-soft px-3 py-1.5 text-xs font-medium tracking-tight text-subtle sm:text-sm">
        + anywhere
      </span>
    </div>
  );
}

function TabVisual() {
  return (
    <div className="rounded-[1.1rem] border-2 border-line bg-surface-2 p-4">
      <div className="flex items-center gap-3">
        <kbd className="inline-flex h-10 min-w-[52px] items-center justify-center rounded-[0.6rem] border-2 border-line bg-background px-2.5 text-sm font-semibold text-ink shadow-[0_3px_0_var(--line)]">
          Tab
        </kbd>
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-ink"
          aria-hidden="true"
        >
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
        <span className="text-sm tracking-tight text-ink">
          ghost text becomes <span className="font-semibold">your</span> words
        </span>
      </div>
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <section className="mx-auto max-w-[1220px]">
      <FadeIn>
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-line bg-surface-2 px-3 py-1 text-xs font-medium tracking-tight text-ink shadow-[0_2px_0_var(--line)]">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            three steps
          </span>
          <h2 className="tabby-display text-[2.7rem] leading-[1.02] tracking-tight text-ink sm:text-[4rem]">
            how tabby works
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed tracking-tight text-muted sm:text-base">
            Install once. It lives in your menu bar and listens quietly in every
            text field on your Mac.
          </p>
        </div>
      </FadeIn>

      <Stagger stagger={0.14} className="mt-12 grid gap-6 md:grid-cols-3">
        <StaggerItem>
          <ScaleIn>
            <Step
              number="01"
              title="Install once"
              description="Download the .dmg and drag tabby into Applications. It registers with macOS and starts your local model."
              visual={<InstallVisual />}
            />
          </ScaleIn>
        </StaggerItem>
        <StaggerItem>
          <ScaleIn delay={0.06}>
            <Step
              number="02"
              title="Type anywhere"
              description="tabby watches your cursor. When you pause mid-sentence, it suggests the next thought inline as ghost text."
              visual={<TypeAnywhereVisual />}
            />
          </ScaleIn>
        </StaggerItem>
        <StaggerItem>
          <ScaleIn delay={0.12}>
            <Step
              number="03"
              title="Press Tab"
              description="The suggestion snaps in. Keep typing to adjust it, or press Escape and tabby steps out of the way."
              visual={<TabVisual />}
            />
          </ScaleIn>
        </StaggerItem>
      </Stagger>
    </section>
  );
}
