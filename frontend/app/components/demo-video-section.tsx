export function DemoVideoSection() {
  return (
    <div>
      <h2 className="text-center text-[2rem] font-semibold leading-none tracking-tight text-neutral-900 sm:text-[2.3rem]">
        Watch Tabby in action
      </h2>

      <div className="mt-8 aspect-video w-full overflow-hidden rounded-[2.4rem] border border-neutral-900 bg-neutral-100 shadow-[3px_3px_0_rgba(0,0,0,0.75)]">
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
  );
}
