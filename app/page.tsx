import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { ClusterState } from "@/components/sections/ClusterState";
import { Certifications } from "@/components/sections/Certifications";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { CustomCursor } from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-neon-purple selection:text-white pt-16">
      <CustomCursor />
      <Nav />

      <Hero />
      <About />
      <Experience />
      <Projects />

      <section className="py-20 px-4 container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 font-mono text-center text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          <span className="text-neon-blue drop-shadow-[0_0_15px_rgba(0,243,255,0.8)]">
            ./
          </span>
          infrastructure-view
        </h2>
        <ClusterState />
      </section>

      <Certifications />
      <Education />
      <Contact />

      <footer className="py-6 text-center text-gray-600 text-sm font-mono border-t border-white/5">
        <p>&copy; 2026 Naveen Kumar. All rights reserved.</p>
      </footer>
    </main>
  );
}
