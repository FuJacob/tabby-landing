import { TabbyLogoChip } from "./tabby-logo-chip";

export function AppsCarouselSection() {
  const chips = Array.from({ length: 14 }, (_, index) => index + 1);
  const track = [...chips, ...chips];

  return (
    <div>
      <h2 className="text-center text-[2rem] font-semibold leading-none tracking-tight text-neutral-900 sm:text-[2.3rem]">
        Works in apps like
      </h2>

      <div className="relative mt-6 overflow-hidden rounded-2xl py-4 sm:py-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-neutral-50 to-transparent sm:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-neutral-50 to-transparent sm:w-16" />
        <div
          className="tabby-marquee-track"
          aria-label="Supported apps carousel"
        >
          {track.map((chip, index) => (
            <TabbyLogoChip
              key={`chip-${chip}-${index}`}
              className="tabby-marquee-item"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
