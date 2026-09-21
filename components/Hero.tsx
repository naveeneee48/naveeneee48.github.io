"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const ClusterScene = dynamic(() => import("./ClusterScene"), { ssr: false });

const ROLES = [
  "Senior DevOps Engineer",
  "Site Reliability Engineer",
  "AIOps & Automation Specialist",
  "Agentic AI Builder",
];

function useTypewriter(
  words: string[],
  typeSpeed = 70,
  backSpeed = 35,
  hold = 1400
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

export default function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] items-center overflow-hidden py-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
        <ClusterScene />
      </div>

      <div className="grid w-full items-center gap-10 sm:grid-cols-[1fr_auto]">
        <div className="max-w-2xl">
          <p className="text-sm text-term-dim">
            <span className="text-term-green">$</span> whoami
          </p>
          <h1 className="mt-4 text-4xl font-bold text-term-text sm:text-5xl">
            Naveen Kumar
          </h1>
          <h2 className="mt-3 h-8 text-lg text-term-green sm:text-xl">
            {typed}
            <span className="cursor-blink">_</span>
          </h2>
          <p className="mt-6 max-w-xl text-term-dim">
            Senior DevOps &amp; SRE Engineer with 7+ years building scalable,
            automated, and self-healing cloud infrastructure across AWS,
            Azure, and Kubernetes &mdash; combining DevOps, AIOps, and agentic
            AI to keep systems reliable, fast to recover, and easy to run.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <a
              href="#contact"
              className="rounded border border-term-green bg-term-green/10 px-5 py-2 text-term-green transition hover:bg-term-green hover:text-term-bg"
            >
              ./contact --send
            </a>
            <a
              href="#projects"
              className="rounded border border-term-border px-5 py-2 text-term-text transition hover:border-term-green hover:text-term-green"
            >
              ls ./projects
            </a>
          </div>
        </div>

        <div className="hidden justify-self-end sm:block">
          <div className="rounded-full border-2 border-term-green/40 p-1">
            <Image
              src="/img/naveen_portfolio.jpg"
              alt="Naveen Kumar"
              width={140}
              height={140}
              className="rounded-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
