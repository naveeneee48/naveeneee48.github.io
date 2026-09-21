"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal } from "@/components/ui/Terminal";
import { Button } from "@/components/ui/Button";
import { Send } from "lucide-react";

const CONTACT_EMAIL = "naveeneee48@gmail.com";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio contact from ${formState.name || "a visitor"}`;
    const body = `${formState.message}\n\n— ${formState.name} (${formState.email})`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 font-mono">
            <span className="text-neon-blue">./</span>contact-me
          </h2>
          <p className="text-gray-400">Initialize handshake.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Terminal
            title="message.sh"
            className="h-full min-h-[400px] border-neon-blue/50 shadow-[0_0_30px_rgba(0,243,255,0.1)]"
          >
            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-sm">
              <div>
                <label className="block text-neon-blue mb-1">$ input --name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-gray-700 focus:border-neon-blue outline-none py-1 text-gray-300 transition-colors"
                  placeholder="Enter your name..."
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-neon-purple mb-1">$ input --email</label>
                <input
                  type="email"
                  required
                  className="w-full bg-transparent border-b border-gray-700 focus:border-neon-purple outline-none py-1 text-gray-300 transition-colors"
                  placeholder="Enter your email..."
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-neon-green mb-1">$ input --message</label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-gray-700 focus:border-neon-green outline-none py-1 text-gray-300 transition-colors resize-none"
                  placeholder="Type your message..."
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                />
              </div>

              <p className="text-xs text-gray-500">
                &gt; opens your email client with this pre-filled &mdash; nothing is
                sent from here directly.
              </p>

              <div className="pt-2">
                <Button type="submit" variant="outline" className="w-full">
                  Deploy Message <Send className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </Terminal>

          <div className="space-y-6">
            <h3 className="text-xl font-bold font-mono text-white mb-4">
              Connect via <span className="text-neon-purple">SSH</span> (Social Shell)
            </h3>

            <div className="p-4 rounded-lg bg-white/10 border border-neon-blue/30 space-y-2 mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(0,243,255,0.05)] hover:bg-white/15 transition-all">
              <div className="flex items-center justify-between text-sm font-mono">
                <span className="text-gray-300">Email:</span>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-neon-blue hover:text-white transition-colors hover:underline hover:shadow-[0_0_10px_rgba(0,243,255,0.5)]"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div className="flex items-center justify-between text-sm font-mono">
                <span className="text-gray-300">Phone:</span>
                <a
                  href="tel:+919487224739"
                  className="text-neon-green hover:shadow-[0_0_10px_rgba(10,255,0,0.5)] transition-shadow"
                >
                  +91-9487224739
                </a>
              </div>
              <div className="flex items-center justify-between text-sm font-mono">
                <span className="text-gray-300">Location:</span>
                <span className="text-neon-purple hover:shadow-[0_0_10px_rgba(188,19,254,0.5)] transition-shadow cursor-default">
                  Chennai, India
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <a
                href="http://linkedin.com/in/naveeneee48"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 hover:border-[#0A66C2] hover:shadow-[0_0_20px_rgba(10,102,194,0.3)] transition-all group backdrop-blur-md"
              >
                <div className="w-10 h-10 rounded bg-[#0A66C2] flex items-center justify-center text-white shadow-lg shadow-[#0A66C2]/40 group-hover:scale-110 transition-transform">
                  in
                </div>
                <div>
                  <div className="font-bold text-white group-hover:text-[#0A66C2] transition-colors">
                    LinkedIn
                  </div>
                  <div className="text-xs text-gray-400 group-hover:text-gray-200">
                    /in/naveeneee48
                  </div>
                </div>
              </a>

              <a
                href="http://github.com/naveeneee48"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white transition-all group backdrop-blur-md"
              >
                <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  &lt;/&gt;
                </div>
                <div>
                  <div className="font-bold text-white transition-colors">GitHub</div>
                  <div className="text-xs text-gray-400 group-hover:text-gray-200">
                    /naveeneee48
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
