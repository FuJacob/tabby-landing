export function DemoVideoSection() {
  return (
    <div>
      <div className="flex flex-col items-center text-center">
        <span className="tabby-pill inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em]">
          Product demo
        </span>
      </div>

      <h2 className="mt-4 text-center text-[2rem] font-semibold leading-none tracking-tight text-ink sm:text-[2.4rem]">
        Watch Tabby in action
      </h2>

      <div className="tabby-panel mt-8 rounded-[2rem] p-2 sm:p-3">
        <div className="aspect-video w-full overflow-hidden rounded-[1.5rem] border border-line bg-background">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/CGduGREZtlI?autoplay=1&mute=1&playsinline=1&rel=0&loop=1&playlist=CGduGREZtlI"
            title="Tabby demo video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
