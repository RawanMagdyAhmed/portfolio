"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { pages, site } from "@/data/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/work") return pathname === "/work" || pathname.startsWith("/projects/");
  return pathname === href;
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/80 backdrop-blur-md">
      <div className="shell flex items-center justify-between gap-3 py-3">
        <Link href="/" className="flex min-h-11 items-center gap-2.5">
          <span className="font-mono text-base tracking-[0.16em] text-accent md:text-lg">
            {site.initials}
          </span>
          <span className="text-lg tracking-tight md:text-xl">
            <span className="sm:hidden">Rawan</span>
            <span className="hidden sm:inline">{site.shortName}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-base md:flex">
          {pages.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive(pathname, link.href)
                  ? "text-accent"
                  : "text-ink-soft hover:text-accent"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center border border-line px-3 text-sm md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Open menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-paper md:hidden">
          <div className="shell py-2">
            {pages.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex min-h-12 items-center border-b border-line/70 text-base ${
                  isActive(pathname, link.href) ? "text-accent" : "text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
