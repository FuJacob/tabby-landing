type FeatureBlockProps = {
  className?: string;
  label: string;
  typed: string;
  suggestion: string;
};

function FeatureBlock({
  className = "",
  label,
  typed,
  suggestion,
}: FeatureBlockProps) {
  return (
    <div
      className={`tabby-panel rounded-[1.9rem] p-5 sm:p-6 ${className}`}
    >
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
        <span className="h-2 w-2 rounded-full bg-accent" />
        {label}
      </div>
      <div className="mt-4 rounded-[1.4rem] border border-line bg-background/50 p-4">
        <p className="text-sm leading-relaxed tracking-tight text-ink sm:text-base">
          {typed}
          <span className="text-accent">{suggestion}</span>
        </p>
      </div>
      <div className="mt-4 flex items-center justify-between text-sm tracking-tight text-subtle">
        <span>Ghost text appears inline</span>
        <span>Press Tab to accept</span>
      </div>
    </div>
  );
}

export function AlternatingFeatureSection() {
  return (
    <section className="space-y-8 sm:space-y-10">
      <div className="grid gap-6 md:grid-cols-2 md:items-center">
        <h3 className="text-[2.25rem] font-semibold leading-[0.95] tracking-tight text-ink sm:text-[2.9rem]">
          Write your emails faster
        </h3>
        <FeatureBlock
          label="Email"
          typed="I folded your feedback into the deck and updated the closing slide"
          suggestion=". If you are aligned, I can send the final version before lunch."
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 md:items-center">
        <FeatureBlock
          className="md:order-1"
          label="Notes"
          typed="The customer kept circling back to onboarding friction"
          suggestion=", so I captured the main blockers and the workaround they actually trusted."
        />
        <h3 className="text-[2.25rem] font-semibold leading-[0.95] tracking-tight text-ink sm:text-[2.9rem] md:order-2 md:text-right">
          Write your notes faster
        </h3>
      </div>

      <div className="grid gap-6 md:grid-cols-2 md:items-center">
        <h3 className="text-[2.25rem] font-semibold leading-[0.95] tracking-tight text-ink sm:text-[2.9rem]">
          Write your docs faster
        </h3>
        <FeatureBlock
          label="Docs"
          typed="This release introduces quieter inline suggestions across every text field"
          suggestion=", with per-model controls and a lighter system footprint on macOS."
        />
      </div>
    </section>
  );
}
