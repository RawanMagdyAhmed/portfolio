import type { Metadata } from "next";
import Link from "next/link";
import { frontendProjects, otherProjects } from "@/data/site";

export const metadata: Metadata = {
  title: "Work",
};

function ProjectRow({
  slug,
  title,
  kind,
  year,
  role,
  summary,
  stack,
}: {
  slug: string;
  title: string;
  kind: string;
  year: string;
  role: string;
  summary: string;
  stack: string[];
}) {
  return (
    <li className="reveal border-b border-line py-8">
      <Link href={`/projects/${slug}`} className="block">
        <p className="text-sm text-ink-soft">
          {role} · {kind} · {year}
        </p>
        <h2 className="mt-2 font-serif text-3xl md:text-4xl">{title}</h2>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink-soft">
          {summary}
        </p>
        <p className="mt-3 text-sm text-ink-soft">{stack.join(" · ")}</p>
        <p className="mt-4 text-base text-accent">Read the case →</p>
      </Link>
    </li>
  );
}

export default function WorkPage() {
  return (
    <div className="shell py-14 md:py-16">
      <div className="rise grid gap-5 border-b border-line pb-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:items-start md:gap-12">
        <h1 className="font-serif text-5xl tracking-tight md:text-6xl">Work</h1>
        <p className="text-lg leading-relaxed text-ink-soft md:pt-2">
          Frontend first: web and mobile products I designed and implemented.
          Other pieces from the CV follow, so the React work stays easy to find.
        </p>
      </div>

      <h2 className="mt-14 text-base font-medium text-accent">Frontend</h2>
      <ul>
        {frontendProjects.map((project) => (
          <ProjectRow key={project.slug} {...project} />
        ))}
      </ul>

      <h2 className="mt-16 text-base font-medium text-ink-soft">More from the CV</h2>
      <ul>
        {otherProjects.map((project) => (
          <ProjectRow key={project.slug} {...project} />
        ))}
      </ul>
    </div>
  );
}
