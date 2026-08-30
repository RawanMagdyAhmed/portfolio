import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MediaPlaceholder } from "@/components/Placeholder";
import { projects } from "@/data/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return { title: project?.title ?? "Project" };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  const project = projects[index];
  if (!project) notFound();

  const previous = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;

  return (
    <article className="shell py-14 md:py-16">
      <Link href="/work" className="text-base text-ink-soft hover:text-accent">
        ← Work
      </Link>
      <div className="rise">
        <p className="mt-8 text-sm text-ink-soft">
          {project.role} · {project.kind} · {project.year}
        </p>
        <h1 className="mt-3 max-w-4xl font-serif text-5xl tracking-tight md:text-6xl">
          {project.title}
        </h1>
        <p className="mt-6 max-w-3xl text-xl leading-relaxed text-ink-soft">
          {project.summary}
        </p>
      </div>

      <div className="reveal mt-10">
        <MediaPlaceholder className="min-h-[280px]" />
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-3">
        <section className="reveal">
          <h2 className="text-base font-medium text-accent">Problem</h2>
          <p className="mt-3 text-base leading-relaxed text-ink-soft">{project.problem}</p>
        </section>
        <section className="reveal">
          <h2 className="text-base font-medium text-accent">What I built</h2>
          <ul className="mt-3 space-y-2 text-base text-ink-soft">
            {project.built.map((item) => (
              <li key={item}>— {item}</li>
            ))}
          </ul>
        </section>
        <section className="reveal">
          <h2 className="text-base font-medium text-accent">Frontend focus</h2>
          <ul className="mt-3 space-y-2 text-base text-ink-soft">
            {project.frontend.map((item) => (
              <li key={item}>— {item}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="reveal mt-12 border border-line bg-chip p-7">
        <h2 className="text-base font-medium text-accent">Stack</h2>
        <p className="mt-3 text-base leading-relaxed text-ink-soft">
          {project.stack.join(" · ")}
        </p>
      </section>

      <nav className="mt-16 grid gap-6 border-t border-line pt-8 md:grid-cols-2">
        {previous ? (
          <Link href={`/projects/${previous.slug}`} className="group">
            <p className="text-sm text-ink-soft">Previous</p>
            <p className="mt-2 font-serif text-2xl group-hover:text-accent">
              {previous.title}
            </p>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link href={`/projects/${next.slug}`} className="group md:text-right">
            <p className="text-sm text-ink-soft">Next</p>
            <p className="mt-2 font-serif text-2xl group-hover:text-accent">{next.title}</p>
          </Link>
        ) : null}
      </nav>
    </article>
  );
}
