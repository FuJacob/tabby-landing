import Image from "next/image";

// A static tabby foreleg reaching from the left edge toward a section heading.
// Its parent must be positioned and must not clip overflow.
// Visible at every breakpoint (incl. mobile). It sits at z-10 — behind the
// z-20 heading — so even when it reaches in on small screens the heading text
// stays readable on top. Kept small on mobile so it peeks rather than covers.
const POSITION_CLASS =
  "pointer-events-none absolute left-0 top-[58%] z-10 w-[10rem] -translate-y-1/2 sm:w-[17rem] md:w-[20rem] lg:w-[27rem]";

export function BattingPawMascot() {
  return (
    <div className={POSITION_CLASS} aria-hidden="true">
      <Image
        src="/app-icons/arm.webp"
        alt=""
        aria-hidden="true"
        width={1536}
        height={1024}
        sizes="(min-width: 1024px) 27rem, (min-width: 768px) 20rem, (min-width: 640px) 17rem, 10rem"
        className="h-auto w-full"
      />
    </div>
  );
}
