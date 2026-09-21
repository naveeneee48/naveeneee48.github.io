import type { ReactNode } from "react";

export default function TerminalWindow({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-term-border bg-term-panel/80 shadow-[0_0_40px_-10px_rgba(34,211,238,0.15)] backdrop-blur">
      <div className="flex items-center gap-2 border-b border-term-border bg-term-bg/60 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-term-red" />
        <span className="h-2.5 w-2.5 rounded-full bg-term-amber" />
        <span className="h-2.5 w-2.5 rounded-full bg-term-green" />
        <span className="ml-2 truncate text-xs text-term-dim">{title}</span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}
