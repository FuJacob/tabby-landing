// Pure constants, helpers, and presentational bits for the feedback form.
// Kept separate from feedback-form.tsx (which owns all the stateful logic) so
// the form-shape data and URL-prefill helpers are easy to find and test.
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export type FeedbackType = "bug" | "feature";

export type Screenshot = { file: File; previewUrl: string };

export type Step = { id: string; value: string };

export const CATEGORIES: { label: string; value: string; description: string }[] = [
  { label: "Keystroke / Input", value: "area:input", description: "Tab not working, keystrokes swallowed, input blocked" },
  { label: "App Compatibility", value: "area:compat", description: "Bug only in a specific app (Word, Outlook, Mail, etc.)" },
  { label: "Performance / Crash", value: "area:perf", description: "Slow response, hang, or crash" },
];

export const inputClass =
  "w-full rounded-xl border-2 border-line-soft bg-surface-2 px-4 py-3 text-sm font-semibold tracking-tight text-ink placeholder:text-subtle/60 transition focus:border-line focus:outline-none sm:text-base";

export const textareaClass = `${inputClass} min-h-28 resize-y`;

export const STEP_PLACEHOLDERS = [
  "Open Cotabby preferences",
  "Switch to the Models tab",
  "What happens next?",
];

export function newStepId() {
  return Math.random().toString(36).slice(2, 9);
}

export function freshSteps(): Step[] {
  return [{ id: newStepId(), value: "" }];
}

/// Snapshot of host details Cotabby attaches to the feedback URL. Each field is independently
/// optional so a partial fill (e.g. running an older build that doesn't yet send hardware) still
/// pre-fills the rest.
export type PrefilledEnvironment = {
  appVersion?: string;
  macosVersion?: string;
  model?: string;
  chip?: string;
  memoryGB?: string;
};

const ENV_KEYS = [
  "appVersion",
  "macosVersion",
  "model",
  "chip",
  "memoryGB",
] as const;

export function readPrefilledEnvironment(): PrefilledEnvironment {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const env: PrefilledEnvironment = {};
  for (const key of ENV_KEYS) {
    const value = params.get(key);
    if (value && value.trim()) env[key] = value.trim();
  }
  return env;
}

export function readPrefilledType(): FeedbackType | null {
  if (typeof window === "undefined") return null;
  const value = new URLSearchParams(window.location.search).get("type");
  return value === "bug" || value === "feature" ? value : null;
}

export function FieldLabel({
  htmlFor,
  children,
  required,
}: {
  icon?: LucideIcon;
  htmlFor?: string;
  children: ReactNode;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 block text-sm font-bold tracking-tight text-ink"
    >
      {children}
      {required && <span className="ml-1 text-accent">*</span>}
    </label>
  );
}
