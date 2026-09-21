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
  return (
    <header className="sticky top-0 z-50 border-b border-term-border bg-term-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="whitespace-nowrap text-sm text-term-green sm:text-base">
          naveen<span className="text-term-dim">@</span>devops
          <span className="text-term-dim">:~$</span>
        </a>
        <nav className="hidden gap-5 text-sm text-term-dim md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition hover:text-term-green"
            >
              ./{l.label}
            </a>
          ))}
        </nav>
        <a
          href="/resume/naveenkumar_devops_2025.pdf"
          target="_blank"
          rel="noreferrer"
          className="whitespace-nowrap rounded border border-term-green px-3 py-1 text-xs text-term-green transition hover:bg-term-green hover:text-term-bg"
        >
          ./resume.pdf
        </a>
      </div>
    </header>
  );
}
