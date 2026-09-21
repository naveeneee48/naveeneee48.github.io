"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import StarField from "./StarField";
import TerminalWindow from "./TerminalWindow";

const ROLES = [
  "SENIOR DEVOPS ENGINEER",
  "SITE RELIABILITY ENGINEER",
  "AIOPS & AUTOMATION SPECIALIST",
  "AGENTIC AI BUILDER",
];

const BOOT_LINES = [
  "init sequence started",
  "loading modules...",
  "verifying integrity...",
];

function useTypewriter(
  words: string[],
  typeSpeed = 60,
  backSpeed = 30,
  hold = 1500
) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), hold);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting
              ? current.slice(0, t.length - 1)
              : current.slice(0, t.length + 1)
          );
        },
        deleting ? backSpeed : typeSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeSpeed, backSpeed, hold]);

  return text;
}

const STATS = [
  { label: "UPTIME", value: "99.99%" },
  { label: "AUTOMATION", value: "90%" },
  { label: "EXPERIENCE", value: "7+ YRS" },
  { label: "STATUS", value: "AVAILABLE" },
];

export default function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center overflow-hidden py-20"
    >
      <StarField />

      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div className="max-w-xl">
          <div className="mb-6 flex items-center gap-4">
            <div className="rounded-full border-2 border-term-cyan/50 p-1 shadow-[0_0_25px_-4px_rgba(34,211,238,0.6)]">
              <Image
                src="/img/naveen_portfolio.jpg"
                alt="Naveen Kumar"
                width={80}
                height={80}
                className="rounded-full object-cover"
                priority
              />
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-term-border bg-term-panel px-3 py-1 text-xs text-term-dim">
              <span className="h-2 w-2 animate-pulse rounded-full bg-term-green" />
              System Online
            </span>
          </div>

          <p className="text-term-cyan">Hello, I&rsquo;m</p>
          <h1 className="mt-2 text-4xl font-extrabold uppercase tracking-tight text-term-text sm:text-5xl">
            Naveen Kumar
          </h1>
          <h2 className="mt-3 h-10 bg-gradient-to-r from-term-cyan to-term-purple bg-clip-text text-xl font-bold uppercase tracking-tight text-transparent sm:text-2xl">
            {typed}
            <span className="cursor-blink text-term-cyan">_</span>
          </h2>
          <p className="mt-6 text-term-dim">
            Building scalable, automated, and self-healing cloud
            infrastructure across AWS, Azure, and Kubernetes &mdash;
            combining DevOps, AIOps, and agentic AI to keep systems reliable,
            fast to recover, and easy to run.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <a
              href="#projects"
              className="rounded bg-term-cyan px-6 py-2.5 font-semibold text-term-bg transition hover:opacity-90"
            >
              View Projects &gt;
            </a>
            <a
              href="#contact"
              className="rounded border border-term-border px-6 py-2.5 font-semibold text-term-text transition hover:border-term-cyan hover:text-term-cyan"
            >
              Contact Me &gt;_
            </a>
          </div>
        </div>

        <TerminalWindow title="portfolio-init.sh">
          <div className="space-y-1.5 text-sm">
            {BOOT_LINES.map((line) => (
              <p key={line} className="text-term-dim">
                <span className="text-term-cyan">
                  {line === BOOT_LINES[0] ? "$" : ">"}
                </span>{" "}
                {line}
              </p>
            ))}
            <p className="text-term-cyan">
              <span className="text-term-cyan">&gt;</span> Automating
              infrastructure, one commit at a time
              <span className="cursor-blink">_</span>
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 border-t border-term-border pt-4 text-xs">
            {STATS.map((s) => (
              <div key={s.label}>
                <span className="text-term-purple">{s.label}:</span>{" "}
                <span className="text-term-text">{s.value}</span>
              </div>
            ))}
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
