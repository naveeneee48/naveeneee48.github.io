"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "about-me" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#certifications", label: "certifications" },
  { href: "#education", label: "education" },
  { href: "#contact", label: "contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#" className="whitespace-nowrap font-mono text-sm text-neon-blue sm:text-base">
          naveen<span className="text-gray-500">@</span>devops
          <span className="text-gray-500">:~$</span>
        </a>

        <nav className="hidden gap-5 font-mono text-sm text-gray-400 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="whitespace-nowrap transition hover:text-neon-blue"
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
            className="hidden whitespace-nowrap rounded border border-neon-blue px-3 py-1 font-mono text-xs text-neon-blue transition hover:bg-neon-blue hover:text-black sm:inline-block"
          >
            ./resume.pdf
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-8 w-8 items-center justify-center rounded border border-white/10 text-neon-blue lg:hidden"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-black/90 px-4 pb-4 pt-2 font-mono text-sm text-gray-400 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded px-2 py-2 transition hover:bg-white/5 hover:text-neon-blue"
            >
              ./{l.label}
            </a>
          ))}
          <a
            href="/resume/naveenkumar_devops_2025.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-1 rounded border border-neon-blue px-2 py-2 text-center text-neon-blue sm:hidden"
          >
            ./resume.pdf
          </a>
        </nav>
      )}
    </header>
  );
}
