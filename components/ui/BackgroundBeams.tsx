"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const beamsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveBeams = (e: MouseEvent) => {
      if (!beamsRef.current) return;
      const { clientX, clientY } = e;
      const x = clientX - window.innerWidth / 2;
      const y = clientY - window.innerHeight / 2;
      beamsRef.current.style.setProperty("--x", `${x}px`);
      beamsRef.current.style.setProperty("--y", `${y}px`);
    };

    window.addEventListener("mousemove", moveBeams);
    return () => window.removeEventListener("mousemove", moveBeams);
  }, []);

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_at_center,white,transparent)]",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl opacity-20" />
      <div
        ref={beamsRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vh] opacity-20 transition-transform duration-300 ease-out"
        style={
          {
            "--x": "0px",
            "--y": "0px",
            transform: "translate(var(--x), var(--y))",
            backgroundImage: `repeating-linear-gradient(
                90deg,
                transparent 0,
                transparent 50px,
                rgba(255, 255, 255, 0.05) 50px,
                rgba(255, 255, 255, 0.05) 51px
            ), repeating-linear-gradient(
                180deg,
                transparent 0,
                transparent 50px,
                rgba(255, 255, 255, 0.05) 50px,
                rgba(255, 255, 255, 0.05) 51px
            )`,
          } as React.CSSProperties
        }
      />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent z-10" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent z-10" />
    </div>
  );
};
