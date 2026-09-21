export default function About() {
  return (
    <section id="about" className="py-20">
      <p className="text-sm text-term-dim">
        <span className="text-term-green">$</span> cat ./about-me.md
      </p>
      <h2 className="mt-2 text-2xl font-semibold text-term-text">About Me</h2>
      <div className="mt-6 max-w-3xl space-y-4 text-term-dim">
        <p>
          I&rsquo;m a DevOps &amp; SRE Engineer with 7+ years of experience
          building scalable, automated, and self-healing cloud
          infrastructures across AWS, Azure, Kubernetes, and on-prem
          environments.
        </p>
        <p>
          My work focuses on combining DevOps, AIOps, and observability to
          create smarter systems &mdash; from automating CI/CD pipelines to
          deploying AI-powered root cause analysis (RCA) and self-healing
          infrastructure workflows using n8n and AWS Bedrock Agents.
        </p>
        <p>
          I believe in an{" "}
          <span className="text-term-green">&quot;Automation-First&quot;</span>{" "}
          mindset &mdash; if something needs to be done twice, it should be
          scripted once. My passion lies in making infrastructure
          intelligent, ensuring high reliability, fast recovery, and zero
          manual effort.
        </p>
      </div>
    </section>
  );
}
