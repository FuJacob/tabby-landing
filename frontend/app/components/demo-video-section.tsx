import { FadeIn, ScaleIn, WordReveal } from "./motion";

export function DemoVideoSection() {
  return (
    <div className="mx-auto">
      <FadeIn>
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-line bg-surface-2 px-3 py-1 text-xs font-medium tracking-tight text-ink shadow-[0_2px_0_var(--line)]">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            60 seconds
          </span>
        </div>
      </FadeIn>

      <WordReveal
        as="h2"
        text="watch Tabby in action"
        className="tabby-display mt-4 text-center text-[2.8rem] leading-[1.02] tracking-tight text-ink sm:text-[4rem]"
      />
      <FadeIn delay={0.1}>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed tracking-tight text-muted sm:text-base">
          See how the suggestions feel inside a real writing flow, instead of
          floating around like a checklist.
        </p>
      </FadeIn>

      <ScaleIn delay={0.1} from={0.94}>
        <div className="tabby-panel mt-10 rounded-[1.7rem] p-3 sm:p-4">
          <div className="mb-2 flex items-center justify-between px-2 pb-1 sm:px-3">
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full border border-line bg-[#FF5F57]" />
              <span className="h-3 w-3 rounded-full border border-line bg-[#FEBC2E]" />
              <span className="h-3 w-3 rounded-full border border-line bg-[#28C840]" />
            </div>
            <span className="text-xs font-medium tracking-[0.14em] text-subtle uppercase">
              tabby · live
            </span>
            <span className="flex items-center gap-1.5 text-xs tracking-tight text-subtle">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              recording
            </span>
          </div>
          <div className="aspect-video w-full overflow-hidden rounded-[1.3rem] border-2 border-line bg-background">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/CGduGREZtlI?autoplay=1&mute=1&playsinline=1&rel=0&loop=1&playlist=CGduGREZtlI"
              title="tabby demo video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </ScaleIn>
    </div>
  );
}
