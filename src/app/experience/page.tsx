import type { Metadata } from "next";
import { education, experience } from "@/data/site";

export const metadata: Metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  return (
    <div className="shell py-14 md:py-16">
      <div className="rise">
        <h1 className="font-serif text-5xl tracking-tight md:text-6xl">Experience</h1>
        <p className="mt-5 max-w-3xl text-lg text-ink-soft">
          I grow by shipping interface work — first internships, now a full-time
          frontend role on a healthcare platform.
        </p>
      </div>

      <ol className="mt-12 space-y-14">
        {experience.map((job) => (
          <li key={job.company} className="reveal">
            <p className="text-sm text-ink-soft">{job.dates}</p>
            <h2 className="mt-2 font-serif text-3xl">{job.company}</h2>
            <p className="text-base text-ink-soft">
              {job.role} · {job.location}
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">
              {job.intro}
            </p>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {job.areas.map((area) => (
                <div key={area.label} className="border-l-2 border-accent pl-4">
                  <h3 className="text-base font-medium">{area.label}</h3>
                  <p className="mt-1 text-base leading-relaxed text-ink-soft">
                    {area.text}
                  </p>
                </div>
              ))}
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
