"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { BadgeCheck } from "lucide-react";

const certs = [
  "Microsoft Certified: Azure Administrator Associate (AZ-104)",
  "Aviatrix Certified Multi Cloud Network Associate",
  "Splunk 7.x Fundamentals",
  "Splunk User Behavior Analytics",
  "Cyber Security Operations and Technology Solutions",
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 font-mono"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-neon-green">./</span>certifications
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certs.map((cert, index) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <GlassCard className="flex items-center gap-3 p-4 hover:border-neon-green/50">
                <BadgeCheck className="w-5 h-5 text-neon-green shrink-0" />
                <span className="text-sm text-gray-300 font-mono">{cert}</span>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
