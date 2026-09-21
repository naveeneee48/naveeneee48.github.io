"use client";

import dynamic from "next/dynamic";
import TerminalWindow from "./TerminalWindow";

const ClusterScene = dynamic(() => import("./ClusterScene"), { ssr: false });

export default function ClusterState() {
  return (
    <section id="cluster" className="py-20">
      <p className="text-sm text-term-dim">
        <span className="text-term-cyan">$</span> kubectl get nodes --watch
      </p>
      <h2 className="mt-2 text-2xl font-semibold text-term-text">
        Cluster State
      </h2>
      <p className="mt-3 max-w-2xl text-term-dim">
        A live-style visualization of nodes interacting across a mesh &mdash;
        the same shape of thinking behind the self-healing, observability-driven
        infrastructure I build.
      </p>

      <div className="mt-8">
        <TerminalWindow title="cluster-state.sh">
          <div className="h-72 w-full sm:h-96">
            <ClusterScene />
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
