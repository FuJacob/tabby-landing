import { TabbyLogoChip } from "./tabby-logo-chip";

export function AppsCarouselSection() {
  const chips = [
    "Mail",
    "Notes",
    "Docs",
    "Messages",
    "Browser",
    "Calendar",
    "CRM",
  ];
  const track = [...chips, ...chips];

  return (
    <div>
      <h2 className="text-center text-[2rem] font-semibold leading-none tracking-tight text-ink sm:text-[2.4rem]">
        Works in apps like
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed tracking-tight text-muted sm:text-base">
        Tabby stays calm and system-like until you need the next few words.
      </p>

      <div className="tabby-panel relative mt-7 overflow-hidden rounded-[1.9rem] px-3 py-4 sm:px-4 sm:py-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-surface-2 to-transparent sm:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-surface-2 to-transparent sm:w-16" />
        <div
          className="tabby-marquee-track"
          aria-label="Supported apps carousel"
        >
          {track.map((label, index) => (
            <TabbyLogoChip
              key={`chip-${label}-${index}`}
              label={label}
              className="tabby-marquee-item"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
