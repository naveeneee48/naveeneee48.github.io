"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export function Terminal({ children, className, title = "bash" }: TerminalProps) {
  return (
    <motion.div
      className={cn(
        "w-full rounded-lg overflow-hidden border border-white/10 bg-[#0c0c0c] shadow-2xl",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between px-4 py-2 bg-[#1a1a1a] border-b border-white/5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="text-xs text-gray-400 font-mono">{title}</div>
        <div className="w-12" />
      </div>
      <div className="p-4 font-mono text-sm text-gray-300 overflow-x-auto">
        {children}
      </div>
    </motion.div>
  );
}
