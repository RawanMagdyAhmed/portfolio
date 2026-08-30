import Link from "next/link";
import { PortraitPlaceholder } from "@/components/Placeholder";
import { frontendProjects, site } from "@/data/site";

export default function Home() {
  return (
    <div className="shell py-12 md:py-16">
      <section className="grid items-start gap-8 md:grid-cols-[1fr_260px] md:gap-12">
        <div className="rise">
          <p className="text-base text-ink-soft">{site.location}</p>
          <h1 className="mt-3 font-serif leading-[0.95] tracking-tight">
            <span className="block text-5xl md:text-7xl">{site.name}</span>
            <span className="mt-3 block text-3xl text-ink-soft md:text-5xl">
              {site.headline}
            </span>
          </h1>
          <p className="mt-6 max-w-3xl text-2xl leading-snug text-ink md:text-3xl">
            {site.tagline}
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {site.stack.map((item) => (
              <span
                key={item}
                className="border border-line bg-chip px-3 py-1.5 text-sm text-ink"
              >
                {item}
              </span>
            ))}
          </div>
          <ul className="mt-8 max-w-2xl space-y-2.5 text-base text-ink-soft">
            {site.strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/work"
              className="inline-flex items-center bg-ink px-5 py-2.5 text-base text-paper hover:bg-accent"
            >
              View work
            </Link>
            <Link
              href="/experience"
              className="inline-flex items-center border border-line px-5 py-2.5 text-base hover:border-accent"
            >
              Experience
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center border border-line px-5 py-2.5 text-base hover:border-accent"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="rise rise-delay">
          <PortraitPlaceholder />
        </div>
      </section>

      <section className="reveal mt-20 border-t border-line pt-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-serif text-3xl md:text-4xl">Selected frontend work</h2>
          <Link href="/work" className="text-base text-accent">
            All projects
          </Link>
        </div>
        <ul className="mt-6">
          {frontendProjects.map((project) => (
            <li key={project.slug} className="reveal border-b border-line py-6">
              <Link href={`/projects/${project.slug}`} className="block">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-serif text-2xl">{project.title}</h3>
                  <span className="text-sm text-ink-soft">
                    {project.kind} · {project.year}
                  </span>
                </div>
                <p className="mt-2 max-w-3xl text-base leading-relaxed text-ink-soft">
                  {project.summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
