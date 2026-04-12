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
    <div className="mx-auto max-w-[1180px]">
      <h2 className="tabby-display text-center text-[2.7rem] leading-none tracking-tight text-ink sm:text-[3.6rem]">
        Works in apps like
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed tracking-tight text-muted sm:text-base">
        Mail, notes, docs, messages, wherever you happen to be typing.
      </p>

      <div className="mt-8 overflow-hidden rounded-[1.5rem] border-2 border-line bg-surface-2 px-3 py-4 shadow-[0_5px_0_var(--line)] sm:px-4 sm:py-5">
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
