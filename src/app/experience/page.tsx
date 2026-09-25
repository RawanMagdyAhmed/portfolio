import type { Metadata } from "next";
import { education, experience } from "@/data/site";

export const metadata: Metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  return (
    <div className="shell py-14 md:py-16">
      <header className="rise grid gap-5 border-b border-line pb-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:items-start md:gap-12">
        <h1 className="font-serif text-5xl tracking-tight md:text-6xl">Experience</h1>
        <p className="text-lg leading-relaxed text-ink-soft md:pt-2 md:text-xl">
          I grow by shipping interface work — first internships, now a full-time
          frontend role on a healthcare platform.
        </p>
      </header>

      <ol className="mt-12">
        {experience.map((job) => (
          <li
            key={job.company}
            className="reveal grid gap-4 border-b border-line py-10 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-10"
          >
            <p className="text-sm text-ink-soft md:pt-2">{job.dates}</p>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl">{job.company}</h2>
              <p className="mt-1 text-base text-ink-soft">
                {job.role} · {job.location}
              </p>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">
                {job.intro}
              </p>
              <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {job.areas.map((area) => (
                  <div key={area.label} className="border-l-2 border-accent pl-4">
                    <h3 className="text-base font-medium">{area.label}</h3>
                    <p className="mt-1 text-base leading-relaxed text-ink-soft">
                      {area.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>

      <h2 className="reveal mt-16 font-serif text-3xl">Education</h2>
      <ul className="mt-6 grid gap-6 md:grid-cols-2">
        {education.map((item) => (
          <li key={item.school} className="reveal border border-line bg-chip p-6">
            <p className="text-sm text-ink-soft">{item.dates}</p>
            <p className="mt-2 font-serif text-xl">{item.school}</p>
            <p className="mt-2 text-base text-ink-soft">{item.detail}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
