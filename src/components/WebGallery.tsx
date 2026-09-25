"use client";

import Image from "next/image";
import { useEffect, useId, useMemo, useState } from "react";
import type { ProjectScreen } from "@/data/site";

function readTheme(): "light" | "dark" {
  if (typeof document === "undefined") return "light";
  if (document.documentElement.classList.contains("dark")) return "dark";
  const stored = localStorage.getItem("theme");
  return stored === "dark" ? "dark" : "light";
}

export function WebGallery({ screens }: { screens: ProjectScreen[] }) {
  const [active, setActive] = useState(0);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [reduced, setReduced] = useState(false);
  const labelId = useId();
  const current = screens[active] ?? screens[0];

  const groups = useMemo(() => {
    const seen = new Set<string>();
    const ordered: string[] = [];
    for (const screen of screens) {
      if (screen.group && !seen.has(screen.group)) {
        seen.add(screen.group);
        ordered.push(screen.group);
      }
    }
    return ordered;
  }, [screens]);

  const followsTheme = useMemo(
    () => screens.some((screen) => screen.light !== screen.dark),
    [screens],
  );
  const heading =
    screens[0]?.frame === "wide" ? "Project shots" : "Product shots";

  useEffect(() => {
    setTheme(readTheme());
    const root = document.documentElement;
    const observer = new MutationObserver(() => setTheme(readTheme()));
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    const onStorage = (event: StorageEvent) => {
      if (event.key === "theme") setTheme(readTheme());
    };
    window.addEventListener("storage", onStorage);

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onMotion = () => setReduced(mq.matches);
    mq.addEventListener("change", onMotion);

    return () => {
      observer.disconnect();
      window.removeEventListener("storage", onStorage);
      mq.removeEventListener("change", onMotion);
    };
  }, []);

  if (!current) return null;

  const src = theme === "dark" ? current.dark : current.light;
  const activeGroup = current.group;

  const go = (index: number) => {
    setActive((index + screens.length) % screens.length);
  };

  const jumpToGroup = (group: string) => {
    const index = screens.findIndex((screen) => screen.group === group);
    if (index >= 0) setActive(index);
  };

  return (
    <section className="reveal" aria-labelledby={labelId}>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 id={labelId} className="font-serif text-2xl md:text-3xl">
            {heading}
          </h2>
          {followsTheme ? (
            <p className="mt-2 text-sm text-ink-soft">
              Product shots follow the site theme.
            </p>
          ) : null}
        </div>
        <p className="text-sm text-ink-soft">
          {active + 1} / {screens.length}
        </p>
      </div>

      {groups.length > 0 ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {groups.map((group, index) => {
            const isActive = activeGroup === group;
            return (
              <button
                key={group}
                type="button"
                onClick={() => jumpToGroup(group)}
                className={`border px-3 py-1.5 text-sm ${
                  isActive
                    ? "border-accent bg-chip text-accent"
                    : "border-line text-ink-soft hover:border-accent hover:text-accent"
                } ${reduced ? "" : "rise"}`}
                style={reduced ? undefined : { animationDelay: `${index * 0.06}s` }}
              >
                {group}
              </button>
            );
          })}
        </div>
      ) : null}

      <figure className="mt-6">
        <div
          className={`web-shot border border-line bg-chip p-2 md:p-3 ${
            reduced ? "" : "transition-[border-color,box-shadow,transform] duration-200 ease"
          } hover:border-accent hover:shadow-[0_18px_40px_rgb(var(--shadow)/0.16)]`}
        >
          <Image
            key={`${src}-${active}`}
            src={src}
            alt={current.caption}
            width={1900}
            height={820}
            sizes="(max-width: 768px) 100vw, 1100px"
            className={`h-auto w-full bg-paper-2 ${
              reduced ? "" : "animate-[gallery-fade_0.35s_ease]"
            }`}
            priority={active === 0}
          />
        </div>
        <figcaption className="mt-4 text-center font-serif text-xl text-ink md:text-2xl">
          {current.caption}
        </figcaption>
      </figure>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => go(active - 1)}
          className="border border-line px-3 py-1.5 text-sm hover:border-accent"
          aria-label="Previous screen"
        >
          ←
        </button>
        {screens.map((screen, index) => (
          <button
            key={screen.light}
            type="button"
            onClick={() => setActive(index)}
            className={`h-2.5 w-2.5 rounded-full border ${
              index === active
                ? "border-accent bg-accent"
                : "border-line bg-transparent hover:border-accent"
            }`}
            aria-label={screen.caption}
            aria-current={index === active ? "true" : undefined}
          />
        ))}
        <button
          type="button"
          onClick={() => go(active + 1)}
          className="border border-line px-3 py-1.5 text-sm hover:border-accent"
          aria-label="Next screen"
        >
          →
        </button>
      </div>
    </section>
  );
}
