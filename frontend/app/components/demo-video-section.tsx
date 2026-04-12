export function DemoVideoSection() {
  return (
    <div className="mx-auto max-w-[980px]">
      <div className="text-center">
        <p className="text-sm font-medium tracking-tight text-moss sm:text-base">
          a quick look
        </p>
        <h2 className="tabby-display mt-4 text-[2.8rem] leading-none tracking-tight text-ink sm:text-[4rem]">
          watch tabby in action
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed tracking-tight text-muted sm:text-base">
          See how the suggestions feel inside a real writing flow, instead of
          floating around like a checklist.
        </p>
      </div>

      <div className="tabby-panel mt-8 rounded-[1.7rem] p-3 sm:p-4">
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
    </div>
  );
}
