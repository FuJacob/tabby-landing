import { TabbyLogoChip } from "./tabby-logo-chip";

export function AppsCarouselSection() {
  const chips = [
    { label: "Apple Mail", iconSrc: "/app-icons/apple-mail.png" },
    { label: "Apple Notes", iconSrc: "/app-icons/apple-notes.svg" },
    { label: "Google Chrome", iconSrc: "/app-icons/google-chrome.png" },
    { label: "Microsoft Outlook", iconSrc: "/app-icons/microsoft-outlook.png" },
    { label: "Gmail", iconSrc: "/app-icons/gmail.svg" },
    { label: "iMessage", iconSrc: "/app-icons/imessage.svg" },
    { label: "Notion", iconSrc: "/app-icons/notion.svg" },
    { label: "Discord", iconSrc: "/app-icons/discord.webp" },
    { label: "Slack", iconSrc: "/app-icons/slack.png" },
  ];
  const track = [...chips, ...chips];

  return (
    <div className="mx-auto">
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
          {track.map((app, index) => (
            <TabbyLogoChip
              key={`chip-${app.label}-${index}`}
              label={app.label}
              iconSrc={app.iconSrc}
              className="tabby-marquee-item"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
