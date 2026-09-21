"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "glass-card p-6 border border-white/10 bg-white/5 backdrop-blur-md rounded-xl transition-all duration-300 hover:border-neon-blue/50",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
