const links = [
  {
    label: "email",
    value: "naveeneee48@gmail.com",
    href: "mailto:naveeneee48@gmail.com",
  },
  {
    label: "phone",
    value: "+91 94872 24739",
    href: "tel:+919487224739",
  },
  {
    label: "github",
    value: "github.com/naveeneee48",
    href: "https://github.com/naveeneee48",
  },
  {
    label: "linkedin",
    value: "linkedin.com/in/naveeneee48",
    href: "https://linkedin.com/in/naveeneee48",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <p className="text-sm text-term-dim">
        <span className="text-term-cyan">$</span> ./contact --send
      </p>
      <h2 className="mt-2 text-2xl font-semibold text-term-text">Contact</h2>
      <p className="mt-4 max-w-xl text-term-dim">
        Open to DevOps, SRE, and AIOps opportunities. Reach out through any of
        the channels below.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="flex items-center justify-between rounded border border-term-border bg-term-panel px-4 py-3 text-sm text-term-dim transition hover:border-term-cyan hover:text-term-cyan"
          >
            <span className="text-term-cyan">./{l.label}</span>
            <span>{l.value}</span>
          </a>
        ))}
      </div>
      <footer className="mt-16 border-t border-term-border pt-6 text-xs text-term-dim">
        naveen@devops:~$ echo &quot;Built with Next.js, Tailwind &amp;
        Three.js&quot;
      </footer>
    </section>
  );
}
