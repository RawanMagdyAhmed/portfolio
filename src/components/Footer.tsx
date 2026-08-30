import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col gap-3 py-6 text-sm text-ink-soft md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p>Frontend Engineer · React · TypeScript · React Native</p>
      </div>
    </footer>
  );
}
