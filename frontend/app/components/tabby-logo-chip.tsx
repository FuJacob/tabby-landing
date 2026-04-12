import Image from "next/image";

type TabbyLogoChipProps = {
  label: string;
  className?: string;
};

export function TabbyLogoChip({ label, className }: TabbyLogoChipProps) {
  return (
    <div
      className={`tabby-chip inline-flex h-14 min-w-[170px] shrink-0 items-center gap-3 rounded-[1.25rem] px-4 text-sm font-medium tracking-tight text-ink sm:min-w-[190px] sm:text-base ${
        className ?? ""
      }`}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-surface-3">
        <Image
          src="/white-logo.png"
          alt="Tabby logo"
          width={20}
          height={20}
          className="h-5 w-5"
        />
      </div>
      <span>{label}</span>
    </div>
  );
}
