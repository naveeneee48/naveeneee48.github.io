const roles = [
  {
    company: "Cognisive",
    title: "Senior DevOps Engineer",
    period: "Feb 2026 - Present",
    location: "Coimbatore, India",
    hash: "a1b2c3d",
    bullets: [
      "Lead self-healing infrastructure workflows combining AWS Bedrock Agents and n8n to automate root cause analysis (RCA) and incident remediation.",
      "Architect agentic AI automation using MCP (Model Context Protocol), LangChain, LangGraph, and CrewAI to extend AIOps capabilities across the AWS and Azure estate.",
      "Drive observability strategy across Prometheus, Grafana, ELK Stack, OpenSearch, and CloudWatch to shorten detection and recovery time.",
      "Mentor the DevOps team on Infrastructure as Code (Terraform, Ansible) and CI/CD best practices across Jenkins, GitLab CI, GitHub Actions, and ArgoCD.",
      "Manage Kubernetes and Docker workloads on AWS and Azure, with Microsoft Entra ID for identity and access management.",
    ],
  },
  {
    company: "Cognisive",
    title: "DevOps Engineer",
    period: "Jan 2025 - Feb 2026",
    location: "Coimbatore, Tamil Nadu, India",
    hash: "e4f5a6b",
    bullets: [
      "Automated CI/CD pipelines using Jenkins, GitLab CI, and GitHub Actions to streamline software delivery.",
      "Managed cloud and containerized workloads across AWS and Azure using Docker and Kubernetes.",
      "Built and maintained Infrastructure as Code with Terraform and Ansible, with Salt Stack for configuration management.",
      "Implemented monitoring and logging with Prometheus, Grafana, and the ELK stack to improve system visibility.",
      "Introduced AI agentic workflow automation using n8n to reduce manual operational effort.",
    ],
  },
  {
    company: "Wellspring Systems Pvt Ltd",
    title: "DevOps Engineer",
    period: "Jun 2019 - Jan 2025",
    location: "Chennai, India",
    hash: "9c8d7e6",
    bullets: [
      "Deployed and managed infrastructure using Terraform across Production, DR, Pre-production, Dev & QA.",
      "Handled 200+ application deployments using Jenkins CI/CD parameterized jobs.",
      "Set up CI/CD pipelines integrating Ansible plugins and Salt Stack configuration management.",
      "Containerized applications with Docker and orchestrated them with Kubernetes.",
      "Ran service monitoring with Collectd, Prometheus, Alertmanager, and Grafana, alerting to PagerDuty, Microsoft Teams, and Slack.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <p className="text-sm text-term-dim">
        <span className="text-term-green">$</span> git log --experience
      </p>
      <h2 className="mt-2 text-2xl font-semibold text-term-text">
        Experience
      </h2>

      <div className="mt-8 space-y-10 border-l border-term-border pl-6">
        {roles.map((r) => (
          <div key={r.hash} className="relative">
            <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full border-2 border-term-green bg-term-bg" />
            <p className="font-mono text-xs text-term-amber">
              commit {r.hash}
            </p>
            <p className="text-xs text-term-dim">Date: {r.period}</p>
            <h3 className="mt-2 text-lg font-semibold text-term-text">
              {r.title} <span className="text-term-dim">@ {r.company}</span>
            </h3>
            <p className="text-xs text-term-dim">{r.location}</p>
            <ul className="mt-3 space-y-1.5 text-sm text-term-dim">
              {r.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="shrink-0 text-term-green">+</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
