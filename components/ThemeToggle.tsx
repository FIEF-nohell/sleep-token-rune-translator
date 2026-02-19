"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

function readInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }

  const fromDocument = document.documentElement.dataset.theme;
  if (fromDocument === "light" || fromDocument === "dark") {
    return fromDocument;
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return "dark";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(readInitialTheme);

  useEffect(() => {
    applyTheme(theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  function updateTheme(nextTheme: Theme) {
    setTheme(nextTheme);
  }

  return (
    <div className="theme-switcher" role="group" aria-label="Theme">
      <span className="theme-label">theme</span>
      <button
        type="button"
        className={`theme-option ${theme === "light" ? "is-active" : ""}`}
        onClick={() => updateTheme("light")}
        aria-pressed={theme === "light"}
      >
        light
      </button>
      <span className="theme-divider" aria-hidden="true">
        |
      </span>
      <button
        type="button"
        className={`theme-option ${theme === "dark" ? "is-active" : ""}`}
        onClick={() => updateTheme("dark")}
        aria-pressed={theme === "dark"}
      >
        dark
      </button>
    </div>
  );
}
