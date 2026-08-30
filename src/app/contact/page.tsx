import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="shell py-14 md:py-16">
      <div className="rise">
        <h1 className="font-serif text-5xl tracking-tight md:text-6xl">Contact</h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-soft">
          If you need a frontend engineer who can own web and mobile UI, write
          to me. {site.availability}.
        </p>
      </div>

      <ul className="mt-12 grid gap-8 sm:grid-cols-2">
        <li className="reveal">
          <p className="text-sm text-ink-soft">Email</p>
          <a href={`mailto:${site.email}`} className="break-all text-xl hover:text-accent">
            {site.email}
          </a>
        </li>
        <li className="reveal">
          <p className="text-sm text-ink-soft">Phone</p>
          <a href={site.phoneHref} className="text-xl hover:text-accent">
            {site.phone}
          </a>
        </li>
        <li className="reveal">
          <p className="text-sm text-ink-soft">LinkedIn</p>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-xl hover:text-accent"
          >
            <span className="break-all">linkedin.com/in/rawan-magdy55</span>
          </a>
        </li>
        <li className="reveal">
          <p className="text-sm text-ink-soft">GitHub</p>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="text-xl hover:text-accent"
          >
            <span className="break-all">github.com/RawanMagdyAhmed</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
