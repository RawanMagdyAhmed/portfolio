import type { Metadata } from "next";
import { site, skillGroups } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  const [lead, ...rest] = site.about;

  return (
    <div className="shell py-14 md:py-16">
      <header className="rise grid gap-5 border-b border-line pb-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-start md:gap-12">
        <h1 className="font-serif text-5xl tracking-tight md:text-6xl">About</h1>
        <p className="text-lg leading-relaxed text-ink-soft md:pt-2 md:text-xl">
          {site.summary}
        </p>
      </header>

      <div className="reveal mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:gap-14">
        <p className="font-serif text-2xl leading-snug text-ink md:text-3xl">{lead}</p>
        <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
          {rest.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <h2 className="reveal mt-16 font-serif text-3xl">Stack</h2>
      <div className="reveal mt-8 grid gap-10 sm:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.label} className="border-t border-line pt-4">
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
