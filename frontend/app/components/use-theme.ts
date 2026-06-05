"use client";

import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "cotabby-theme";

function systemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/**
 * Theme controller. Until the visitor picks a theme we leave `data-theme` unset
 * and let the CSS `prefers-color-scheme` rules drive the palette; the first
 * explicit toggle pins an override in localStorage.
 */
export function useTheme() {
  // `null` until mounted to avoid a hydration mismatch between the server
  // (which can't know the visitor's preference) and the client.
  const [theme, setTheme] = useState<Theme | null>(null);
  const [explicit, setExplicit] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(THEME_STORAGE_KEY);
    } catch {
      stored = null;
    }

    if (stored === "light" || stored === "dark") {
      setExplicit(true);
      setTheme(stored);
      return;
    }

    // Following the system: reflect it in the icon and keep tracking changes
    // until the visitor makes an explicit choice.
    setTheme(systemTheme());
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => setTheme(systemTheme());
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const apply = useCallback((next: Theme) => {
    setTheme(next);
    setExplicit(true);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // ignore — non-persistent is fine
    }
  }, []);

  const toggle = useCallback(() => {
    apply((theme ?? systemTheme()) === "dark" ? "light" : "dark");
  }, [theme, apply]);

  return { theme, explicit, toggle, setTheme: apply };
}
