"use client";

import {
  Accessibility,
  ArrowRight,
  Keyboard,
  Monitor,
  type LucideIcon,
} from "lucide-react";
import {
  HoverLift,
  ScaleIn,
  Stagger,
  StaggerItem,
} from "@/app/components/ui/motion";
import { IconTile } from "@/app/components/ui/icon-tile";
import { SectionHeading } from "@/app/components/ui/section-heading";

type Permission = {
  icon: LucideIcon;
  title: string;
  description: string;
  /** Tailwind bg color for the icon tile. Shadow is the standard tabby drop. */
  tileBg: string;
};

const permissions: Permission[] = [
  {
    icon: Accessibility,
    title: "Accessibility",
    description:
      "Required to detect focused text fields, read their content, and position ghost text suggestions near the caret.",
    tileBg: "bg-blue-500",
  },
  {
    icon: Keyboard,
    title: "Input Monitoring",
    description:
      "Required to detect typing activity and handle Tab key acceptance of suggestions.",
    tileBg: "bg-amber-500",
  },
  {
    icon: Monitor,
    title: "Screen Recording",
    description:
      "Required to capture a screenshot around the focused field for visual context (OCR).",
    tileBg: "bg-red-500",
  },
];

const ROW_GRID =
  "grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1.5fr)]";

function PermissionRow({ permission }: { permission: Permission }) {
  const Icon = permission.icon;
  return (
    <HoverLift lift={4}>
      <div className={`grid ${ROW_GRID} items-stretch gap-4 sm:gap-4`}>
        <article className="tabby-panel group flex items-center gap-4 rounded-[1.55rem] p-5 sm:gap-5 sm:p-6">
          <IconTile size="lg" tone={`${permission.tileBg} text-white`} hoverLift>
            <Icon className="h-6 w-6" strokeWidth={2.5} />
          </IconTile>
          <h3 className="text-[1.35rem] font-bold leading-tight tracking-tight text-ink sm:text-[1.55rem]">
            {permission.title}
          </h3>
        </article>
        <div
          aria-hidden
          className="flex items-center justify-center text-subtle"
        >
          <ArrowRight className="h-6 w-6 rotate-90 sm:h-7 sm:w-7 sm:rotate-0" strokeWidth={2.5} />
        </div>
        <article className="tabby-panel flex items-center rounded-[1.55rem] p-5 sm:p-6">
          <p className="text-sm leading-relaxed tracking-tight text-muted sm:text-base">
            {permission.description}
          </p>
        </article>
      </div>
    </HoverLift>
  );
}

export function PermissionsSection() {
  return (
    <section className="mx-auto max-w-content">
      <SectionHeading
        title="your Mac, your data"
        titleSize="text-[2.9rem] sm:text-[4.1rem]"
        subtitle="Cotabby requests the following macOS permissions:"
      />

      <div className="mx-auto mt-14 max-w-4xl space-y-5">
        <div className={`hidden ${ROW_GRID} gap-4 px-7 sm:grid`}>
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-subtle">
            What
          </h3>
          <span />
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-subtle">
            Why
          </h3>
        </div>

        <Stagger stagger={0.12} className="space-y-5">
          {permissions.map((p, i) => (
            <StaggerItem key={p.title}>
              <ScaleIn delay={i * 0.08}>
                <PermissionRow permission={p} />
              </ScaleIn>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
