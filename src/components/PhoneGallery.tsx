"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import type { ProjectScreen } from "@/data/site";

export function PhoneGallery({ screens }: { screens: ProjectScreen[] }) {
  const [active, setActive] = useState(0);
  const [reduced, setReduced] = useState(false);
  const labelId = useId();
  const current = screens[active] ?? screens[0];

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  if (!current) return null;

  const src = current.light;
  const go = (index: number) => {
    setActive((index + screens.length) % screens.length);
  };

  return (
    <section className="reveal" aria-labelledby={labelId}>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h2 id={labelId} className="font-serif text-2xl md:text-3xl">
          Product shots
        </h2>
        <p className="hidden text-sm text-ink-soft md:block">
          {active + 1} / {screens.length}
        </p>
      </div>

      <div className="mt-6 hidden items-end gap-8 md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,1fr)]">
        <PeekShot
          screen={screens[(active - 1 + screens.length) % screens.length]}
          side="left"
          onSelect={() => go(active - 1)}
          reduced={reduced}
        />

        <div className="mx-auto w-full max-w-[260px]">
          <div className="phone-shot shadow-[0_18px_40px_rgb(var(--shadow)/0.14)]">
            <Image
              key={src}
              src={src}
              alt={current.caption}
              width={471}
              height={985}
              sizes="260px"
              className={`h-auto w-full ${
                reduced ? "" : "animate-[gallery-fade_0.35s_ease]"
              }`}
              priority={active === 0}
            />
          </div>
          <p className="mt-4 text-center text-base leading-relaxed text-ink-soft">
            {current.caption}
          </p>
        </div>

        <PeekShot
          screen={screens[(active + 1) % screens.length]}
          side="right"
          onSelect={() => go(active + 1)}
          reduced={reduced}
        />
      </div>

      <div className="mt-6 hidden flex-wrap items-center justify-center gap-2 md:flex">
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

      <ul className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:hidden">
        {screens.map((screen) => (
          <li key={`mobile-${screen.light}`} className="w-[70%] shrink-0 snap-center">
            <div className="phone-shot">
              <Image
                src={screen.light}
                alt={screen.caption}
                width={471}
                height={985}
                sizes="70vw"
                className="h-auto w-full"
              />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{screen.caption}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function PeekShot({
  screen,
  side,
  onSelect,
  reduced,
}: {
  screen: ProjectScreen;
  side: "left" | "right";
  onSelect: () => void;
  reduced: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full max-w-[190px] justify-self-center text-left ${
        side === "left" ? "md:justify-self-end" : "md:justify-self-start"
      }`}
      aria-label={`Show: ${screen.caption}`}
    >
      <div
        className={`phone-shot opacity-50 transition-opacity hover:opacity-85 ${
          reduced ? "" : side === "left" ? "-rotate-2" : "rotate-2"
        }`}
      >
        <Image
          src={screen.light}
          alt=""
          width={471}
          height={985}
          sizes="190px"
          className="h-auto w-full"
        />
      </div>
    </button>
  );
}
