import Image from "next/image";

type TabbyLogoChipProps = {
  className?: string;
};

export function TabbyLogoChip({ className }: TabbyLogoChipProps) {
  return (
    <div
      className={`inline-flex h-14 min-w-[180px] shrink-0 items-center justify-center gap-2 rounded-3xl border border-neutral-900 bg-white px-6 text-lg font-medium tracking-tight text-neutral-900 ${
        className ?? ""
      }`}
    >
      <Image
        src="/32.png"
        alt="Tabby logo"
        width={20}
        height={20}
        className="h-6 w-6 rounded-md"
      />
      <span>Tabby</span>
    </div>
  );
}
