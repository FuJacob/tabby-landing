import Image from "next/image";
import { FadeIn, ScaleIn, Stagger, StaggerItem } from "./motion";

type PillarProps = {
  label: string;
  description: string;
};

function Pillar({ label, description }: PillarProps) {
  return (
    <div className="flex gap-4 rounded-[1.1rem] border-2 border-line bg-surface-2 p-5 shadow-[0_3px_0_var(--line)]">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-line bg-accent/15 text-ink">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-base font-semibold tracking-tight text-ink">
          {label}
        </span>
        <span className="text-sm leading-relaxed tracking-tight text-muted">
          {description}
        </span>
      </div>
    </div>
  );
}

function DataFlowVisual() {
  return (
    <div className="relative flex items-center justify-center rounded-[1.5rem] border-2 border-line bg-surface-3 p-8 shadow-[0_5px_0_var(--line)]">
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[1.5rem] opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #0a0a0a 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="relative flex w-full max-w-[360px] flex-col items-center gap-6">
        <div className="tabby-chip flex items-center gap-3 rounded-[1rem] px-4 py-3">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="text-sm font-medium tracking-tight text-ink">
            your text
          </span>
        </div>

        <svg
          width="24"
          height="34"
          viewBox="0 0 24 34"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-ink"
          aria-hidden="true"
        >
          <path d="M12 4v22" />
          <path d="m6 20 6 6 6-6" />
        </svg>

        <div className="relative flex items-center justify-center rounded-[1.3rem] border-2 border-line bg-background px-8 py-6 shadow-[0_4px_0_var(--line)]">
          <Image
            src="/white-logo.png"
            alt="Tabby logo"
            width={52}
            height={52}
            className="h-13 w-13"
          />
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border-2 border-line bg-moss/20 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.1em] text-ink uppercase shadow-[0_2px_0_var(--line)]">
            on your Mac
          </div>
        </div>

        <div className="mt-4 flex w-full items-center justify-between">
          <div className="flex items-center gap-2 rounded-full border-2 border-dashed border-line-soft bg-background px-3 py-1.5 text-xs tracking-tight text-subtle line-through decoration-accent decoration-2">
            cloud
          </div>
          <div className="flex items-center gap-2 rounded-full border-2 border-dashed border-line-soft bg-background px-3 py-1.5 text-xs tracking-tight text-subtle line-through decoration-accent decoration-2">
            telemetry
          </div>
          <div className="flex items-center gap-2 rounded-full border-2 border-dashed border-line-soft bg-background px-3 py-1.5 text-xs tracking-tight text-subtle line-through decoration-accent decoration-2">
            accounts
          </div>
        </div>
      </div>
    </div>
  );
}

export function PrivacySection() {
  return (
    <section className="mx-auto max-w-[1220px]">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-6">
          <FadeIn>
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-line bg-accent/15 px-3 py-1 text-xs font-semibold tracking-[0.14em] uppercase text-ink shadow-[0_2px_0_var(--line)]">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              local-first
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="tabby-display max-w-xl text-[2.7rem] leading-[1] tracking-tight text-ink sm:text-[3.9rem]">
              your writing stays on your Mac.
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="max-w-xl text-base leading-relaxed tracking-tight text-muted sm:text-lg">
              Tabby runs a compact language model on Apple&apos;s Neural Engine.
              Every keystroke, every suggestion, every token stays inside your
              laptop. No sign-up, no subscription, no background uploads.
            </p>
          </FadeIn>

          <Stagger stagger={0.1} className="grid gap-3">
            <StaggerItem>
              <Pillar
                label="On-device inference"
                description="Suggestions generated by a local model using Apple's Neural Engine — works offline, in airplane mode, on a plane."
              />
            </StaggerItem>
            <StaggerItem>
              <Pillar
                label="No accounts, ever"
                description="There is no login. There is no dashboard. There is nothing to sign up for. You own the app and the data."
              />
            </StaggerItem>
            <StaggerItem>
              <Pillar
                label="Auditable"
                description="Open source under MIT. Read the network layer, compile from source, run a diff against every release."
              />
            </StaggerItem>
          </Stagger>
        </div>

        <ScaleIn delay={0.2}>
          <DataFlowVisual />
        </ScaleIn>
      </div>
    </section>
  );
}
