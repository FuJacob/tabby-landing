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
    <div className={`tabby-panel-soft rounded-[1.55rem] p-5 sm:p-6 ${className}`}>
      <div className="text-sm font-medium tracking-tight text-moss">
        {label}
      </div>
      <div className="mt-4 rounded-[1.25rem] border-2 border-line bg-surface-2 p-4">
        <p className="text-sm leading-relaxed tracking-tight text-ink sm:text-base">
          {typed}
          <span className="text-accent">{suggestion}</span>
        </p>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm tracking-tight text-subtle">
        <span>Ghost text appears inline</span>
        <span>Press Tab to accept</span>
      </div>
    </div>
  );
}

export function AlternatingFeatureSection() {
  return (
    <section className="mx-auto max-w-[1220px] space-y-10 sm:space-y-12">
      <div className="grid gap-6 md:grid-cols-2 md:items-center">
        <h3 className="tabby-display text-[2.75rem] leading-[0.92] tracking-tight text-ink sm:text-[3.6rem]">
          Write your emails faster
        </h3>
        <FeatureBlock
          label="email"
          typed="I folded your feedback into the deck and updated the closing slide"
          suggestion=". If you are aligned, I can send the final version before lunch."
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 md:items-center">
        <FeatureBlock
          className="md:order-1"
          label="notes"
          typed="The customer kept circling back to onboarding friction"
          suggestion=", so I captured the main blockers and the workaround they actually trusted."
        />
        <h3 className="tabby-display text-[2.75rem] leading-[0.92] tracking-tight text-ink sm:text-[3.6rem] md:order-2 md:text-right">
          Write your notes faster
        </h3>
      </div>

      <div className="grid gap-6 md:grid-cols-2 md:items-center">
        <h3 className="tabby-display text-[2.75rem] leading-[0.92] tracking-tight text-ink sm:text-[3.6rem]">
          Write your docs faster
        </h3>
        <FeatureBlock
          label="docs"
          typed="This release introduces quieter inline suggestions across every text field"
          suggestion=", with per-model controls and a lighter system footprint on macOS."
        />
      </div>
    </section>
  );
}
