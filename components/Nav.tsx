"use client";

import { useState } from "react";

const links = [
  { href: "#about", label: "about-me" },
  { href: "#stack", label: "tech-stack" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#certifications", label: "certifications" },
  { href: "#education", label: "education" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-term-border bg-term-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#"
          className="whitespace-nowrap text-sm text-term-cyan sm:text-base"
        >
          naveen<span className="text-term-dim">@</span>devops
          <span className="text-term-dim">:~$</span>
        </a>

        <nav className="hidden gap-4 text-sm text-term-dim lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="whitespace-nowrap transition hover:text-term-cyan"
            >
              ./{l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/resume/naveenkumar_devops_2025.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden whitespace-nowrap rounded border border-term-cyan px-3 py-1 text-xs text-term-cyan transition hover:bg-term-cyan hover:text-term-bg sm:inline-block"
          >
            ./resume.pdf
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-8 w-8 items-center justify-center rounded border border-term-border text-term-cyan lg:hidden"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-term-border bg-term-bg px-4 pb-4 pt-2 text-sm text-term-dim lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded px-2 py-2 transition hover:bg-term-panel hover:text-term-cyan"
            >
              ./{l.label}
            </a>
          ))}
          <a
            href="/resume/naveenkumar_devops_2025.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-1 rounded border border-term-cyan px-2 py-2 text-center text-term-cyan sm:hidden"
          >
            ./resume.pdf
          </a>
        </nav>
      )}
    </header>
  );
}
