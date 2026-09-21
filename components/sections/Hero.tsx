"use client";

import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { motion } from "framer-motion";
import { Terminal } from "@/components/ui/Terminal";
import { Button } from "@/components/ui/Button";
import { ParticleBackground } from "@/components/canvas/ParticleBackground";
import { useState, useEffect } from "react";
import { ChevronRight, Terminal as TerminalIcon } from "lucide-react";

export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Automating infrastructure, one commit at a time...";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 60);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full max-w-[100vw] flex items-center justify-center overflow-hidden bg-neutral-950">
      <BackgroundBeams className="z-0" />

      <div className="absolute inset-0 z-0 opacity-40">
        <ParticleBackground />
      </div>

      <div className="relative z-10 container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
              className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-neon-blue/50 shadow-[0_0_25px_rgba(0,195,255,0.3)] shrink-0"
            >
              <Image
                src="/img/naveen_portfolio.jpg"
                alt="Naveen Kumar"
                fill
                className="object-cover"
                priority
                fetchPriority="high"
              />
            </motion.div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-mono text-gray-400">System Online</span>
            </div>
          </div>

          <div className="mb-6 font-mono tracking-tighter">
            <span className="block text-lg md:text-xl text-neon-green mb-2 tracking-widest">
              Hello, I&apos;m
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
              NAVEEN KUMAR
            </h1>
            <span className="block text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue bg-[length:200%_auto] animate-gradient">
              SENIOR DEVOPS ENGINEER
            </span>
          </div>

          <p className="text-xl text-gray-400 mb-8 max-w-lg">
            Building scalable, automated, and self-healing cloud infrastructure across AWS,
            Azure, and Kubernetes &mdash; combining DevOps, AIOps, and agentic AI.
          </p>

          <div className="flex gap-4">
            <a href="#projects">
              <Button variant="primary">
                View Projects <ChevronRight className="w-4 h-4" />
              </Button>
            </a>
            <a href="#contact">
              <Button variant="secondary">
                Contact Me <TerminalIcon className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 blur-xl opacity-50 rounded-full" />

          <Terminal title="portfolio-init.sh">
            <div className="space-y-2">
              <div className="text-green-400">$ init sequence started</div>
              <div className="text-gray-400">&gt; loading modules...</div>
              <div className="text-gray-400">&gt; verifying integrity...</div>
              <div className="text-neon-blue">
                &gt; {displayText}
                <span className="animate-blink">_</span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 text-xs opacity-70">
                <div>
                  <span className="text-purple-400">EXPERIENCE:</span> 7+ yrs
                </div>
                <div>
                  <span className="text-purple-400">AUTOMATION:</span> 90%
                </div>
                <div>
                  <span className="text-purple-400">CERTS:</span> 5
                </div>
                <div>
                  <span className="text-purple-400">STATUS:</span>{" "}
                  <span className="text-green-400">AVAILABLE</span>
                </div>
              </div>
            </div>
          </Terminal>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-transparent via-neon-blue to-transparent" />
      </motion.div>
    </section>
  );
}
