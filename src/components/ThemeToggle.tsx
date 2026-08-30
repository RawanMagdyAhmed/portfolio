"use client";

import { useEffect, useState } from "react";

function applyTheme(next: "light" | "dark") {
  const root = document.documentElement;
  root.classList.toggle("dark", next === "dark");
  localStorage.setItem("theme", next);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored === "dark" || stored === "light" ? stored : prefersDark ? "dark" : "light";
    setTheme(initial);
    applyTheme(initial);
  }, []);

  return (
    <button
      type="button"
      onClick={() => {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        applyTheme(next);
      }}
      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-3 text-[11px] uppercase tracking-[0.14em] text-ink-soft transition hover:border-accent hover:text-accent"
      aria-label="Toggle color theme"
    >
      <span className="size-1.5 rounded-full bg-accent" />
      {theme === "dark" ? "Dusk" : "Day"}
    </button>
  );
}
