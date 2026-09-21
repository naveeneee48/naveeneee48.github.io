import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import ClusterState from "@/components/ClusterState";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <TechStack />
        <ClusterState />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
    </>
  );
}
