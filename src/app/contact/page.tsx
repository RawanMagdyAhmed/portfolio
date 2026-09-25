import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
};

const links = [
  {
    label: "Email",
    href: `mailto:${site.email}`,
    text: site.email,
  },
  {
    label: "Phone",
    href: site.phoneHref,
    text: site.phone,
  },
  {
    label: "LinkedIn",
    href: site.linkedin,
    text: "linkedin.com/in/rawan-magdy55",
    external: true,
  },
  {
    label: "GitHub",
    href: site.github,
    text: "github.com/RawanMagdyAhmed",
    external: true,
  },
] as const;

export default function ContactPage() {
  return (
    <div className="shell py-14 md:py-16">
      <header className="rise grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:items-start md:gap-12">
        <h1 className="font-serif text-5xl tracking-tight md:text-6xl">Contact</h1>
        <p className="text-lg leading-relaxed text-ink-soft md:pt-2 md:text-xl">
          If you need a frontend engineer who can own web and mobile UI, write
          to me. {site.availability}.
        </p>
      </header>

      <ul className="mt-14 border-t border-line">
        {links.map((link) => (
          <li key={link.label} className="reveal border-b border-line">
            <a
              href={link.href}
              className="group grid gap-2 py-6 sm:grid-cols-[8rem_minmax(0,1fr)] sm:items-baseline sm:gap-10"
              {...("external" in link
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
            >
              <span className="text-sm text-ink-soft">{link.label}</span>
              <span className="break-all font-serif text-xl tracking-tight group-hover:text-accent md:text-2xl">
                {link.text}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
