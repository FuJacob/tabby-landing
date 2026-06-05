"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./use-theme";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`relative inline-flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-[0.85rem] border-2 border-line bg-surface-2 text-ink shadow-[0_3.4px_0_var(--shadow-color)] transition-[transform,background-color] duration-200 hover:-translate-y-px hover:bg-surface-3 active:translate-y-px ${className}`}
    >
      {/* Sun and moon are cross-faded so the swap reads as one control. The
          icon reflects the *current* theme; the label says what tapping does. */}
      <Sun
        className={`absolute h-4.5 w-4.5 transition-all duration-300 ${
          isDark
            ? "rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100"
        }`}
        strokeWidth={2.2}
        aria-hidden="true"
      />
      <Moon
        className={`absolute h-4.5 w-4.5 transition-all duration-300 ${
          isDark
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-0 opacity-0"
        }`}
        strokeWidth={2.2}
        aria-hidden="true"
      />
    </button>
  );
}
