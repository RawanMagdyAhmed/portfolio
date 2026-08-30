import type { Metadata } from "next";
import { PortraitPlaceholder } from "@/components/Placeholder";
import { site, skillGroups } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="shell py-14 md:py-16">
      <div className="rise">
        <h1 className="font-serif text-5xl tracking-tight md:text-6xl">About</h1>
        <p className="mt-5 max-w-4xl text-xl leading-relaxed text-ink-soft">
          {site.summary}
        </p>
      </div>

      <div className="reveal mt-12 grid gap-10 lg:grid-cols-[280px_1fr]">
        <div>
          <PortraitPlaceholder />
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
          {site.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <h2 className="reveal mt-16 font-serif text-3xl">How I work</h2>
      <div className="reveal mt-8 grid gap-10 sm:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className="text-base font-medium text-accent">{group.label}</h3>
            <ul className="mt-3 space-y-2 text-base">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
