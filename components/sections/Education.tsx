"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <motion.h2
          className="text-4xl font-bold mb-12 font-mono"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-neon-purple">./</span>education
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GlassCard className="p-6 flex items-start gap-4 hover:border-neon-purple/50">
            <GraduationCap className="w-8 h-8 text-neon-purple shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-white">
                Institute of Road and Transport Technology
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                Bachelor of Engineering &ndash; Electrical and Electronics Engineering
              </p>
              <p className="text-xs text-gray-500 font-mono mt-2">
                Erode, Tamil Nadu &middot; 2015 - 2019
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
