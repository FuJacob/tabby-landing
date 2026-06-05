"use client";

import {
  BatteryFull,
  Pause,
  Power,
  Settings,
  Wifi,
} from "lucide-react";
import Image from "next/image";
import { FadeIn, ScaleIn, WordReveal } from "./motion";

const HIGHLIGHTS = [
  "No dock icon, no extra window — just a quiet menu-bar tab.",
  "Pause it for a meeting, flip it back on with one click.",
  "Pick your engine and model without leaving the bar.",
] as const;

function MenuRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between px-3.5 py-2 text-sm">
      <span className="tracking-tight text-muted">{label}</span>
      <span className="font-semibold tracking-tight text-ink">{value}</span>
    </div>
  );
}

function MenuItem({
  icon: Icon,
  label,
  hint,
  danger = false,
}: {
  icon: typeof Pause;
  label: string;
  hint?: string;
  danger?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2.5 rounded-[0.6rem] px-3 py-2 text-sm ${
        danger ? "text-accent-deep" : "text-ink"
      }`}
    >
      <Icon className="h-4 w-4 shrink-0" strokeWidth={2} />
      <span className="font-medium tracking-tight">{label}</span>
      {hint && (
        <span className="ml-auto text-xs tracking-tight text-subtle">{hint}</span>
      )}
    </div>
  );
}

function MenuBarMockup() {
  return (
    <div className="w-full max-w-md">
      {/* faux menu bar */}
      <div className="flex items-center justify-end gap-3 rounded-t-[1rem] border-2 border-line bg-surface-3 px-4 py-2 text-ink/80 shadow-[0_5px_0_var(--shadow-color)]">
        <Wifi className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
        <BatteryFull className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
        <span className="text-xs font-semibold tracking-tight">9:41</span>
        {/* highlighted Cotabby tab */}
        <span className="relative ml-1 flex h-7 w-7 items-center justify-center rounded-[0.55rem] bg-accent/20 ring-2 ring-accent">
          <Image
            src="/app-icons/new-logo.webp"
            alt="Cotabby menu-bar icon"
            width={36}
            height={36}
            sizes="28px"
            className="h-5 w-5 rounded-[0.35rem]"
          />
        </span>
      </div>

      {/* dropdown */}
      <div className="mx-auto -mt-px w-[92%] overflow-hidden rounded-[1rem] border-2 border-line bg-surface-2 shadow-[0_8.4px_0_var(--shadow-color)]">
        <div className="flex items-center gap-2.5 border-b-2 border-line-soft px-3.5 py-3">
          <Image
            src="/app-icons/new-logo.webp"
            alt=""
            width={40}
            height={40}
            sizes="32px"
            className="h-8 w-8 rounded-[0.55rem] border-2 border-line"
          />
          <span className="tabby-display text-[1.15rem] leading-none tracking-tight text-ink">
            Cotabby
          </span>
          <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border-2 border-line bg-moss/20 px-2.5 py-0.5 text-[0.62rem] font-bold uppercase tracking-widest text-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-moss" />
            On
          </span>
        </div>

        <div className="border-b-2 border-line-soft py-1">
          <MenuRow label="Engine" value="Open Source" />
          <MenuRow label="Model" value="tabby-2-base" />
          <MenuRow label="Suggestion length" value="7–12 words" />
        </div>

        <div className="p-1.5">
          <MenuItem icon={Pause} label="Pause suggestions" hint="⌥⌘P" />
          <MenuItem icon={Settings} label="Settings…" hint="⌘," />
          <MenuItem icon={Power} label="Quit Cotabby" hint="⌘Q" danger />
        </div>
      </div>
    </div>
  );
}

export function MenuBarSection() {
  return (
    <section className="mx-auto max-w-305">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <WordReveal
            as="h2"
            text="lives quietly in your menu bar"
            className="tabby-display text-[2.6rem] leading-[1.04] tracking-tight text-ink sm:text-[3.6rem]"
          />
          <FadeIn delay={0.1}>
            <p className="mt-4 max-w-md text-sm leading-relaxed tracking-tight text-muted sm:text-base">
              Cotabby isn&apos;t another app to manage. It tucks into the menu
              bar and stays out of the way until you start typing.
            </p>
          </FadeIn>
          <ul className="mt-6 space-y-3">
            {HIGHLIGHTS.map((item, i) => (
              <FadeIn key={item} delay={0.16 + i * 0.06}>
                <li className="flex items-start gap-3 text-sm leading-relaxed tracking-tight text-ink/85 sm:text-base">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>

        <ScaleIn from={0.95} className="flex justify-center md:justify-end">
          <MenuBarMockup />
        </ScaleIn>
      </div>
    </section>
  );
}
