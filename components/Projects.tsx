const projects = [
  {
    name: "AI-Powered Self-Healing Infrastructure",
    status: "IN PRODUCTION",
    description:
      "AIOps workflows that detect, diagnose, and remediate infrastructure issues automatically using agentic AI.",
    stack: ["AWS Bedrock Agents", "n8n", "MCP", "LangChain", "LangGraph"],
  },
  {
    name: "Infrastructure as Code with Terraform",
    status: "IN PRODUCTION",
    description:
      "Reusable Terraform modules for provisioning and configuring cloud resources across environments.",
    stack: ["Terraform", "AWS", "GitHub"],
  },
  {
    name: "Log Aggregation with ELK Stack",
    status: "IN PRODUCTION",
    description:
      "Centralized log aggregation with custom parsing rules and real-time dashboards for observability.",
    stack: ["Elasticsearch", "Logstash", "Kibana"],
  },
  {
    name: "Dockerized Application Deployment",
    status: "IN PRODUCTION",
    description:
      "Containerized deployment pipeline with Docker and Kubernetes orchestration for multi-environment rollout.",
    stack: ["Docker", "Kubernetes"],
  },
  {
    name: "Monitoring & Alerting System",
    status: "IN PRODUCTION",
    description:
      "Centralized monitoring with Prometheus and Grafana dashboards, alerting to Slack and email via Alertmanager.",
    stack: ["Prometheus", "Grafana", "Alertmanager"],
  },
  {
    name: "CI/CD Pipeline",
    status: "IN PRODUCTION",
    description:
      "Jenkins-based CI/CD pipeline automating build, test, and deployment with zero-downtime releases.",
    stack: ["Jenkins", "Docker", "GitHub"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <p className="text-sm text-term-dim">
        <span className="text-term-green">$</span> ls ./projects
      </p>
      <h2 className="mt-2 text-2xl font-semibold text-term-text">Projects</h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.name}
            className="rounded border border-term-border bg-term-panel p-5 transition hover:border-term-green"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-term-text">{p.name}</h3>
              <span className="whitespace-nowrap rounded-full border border-term-green px-2 py-0.5 text-[10px] text-term-green">
                {p.status}
              </span>
            </div>
            <p className="mt-2 text-sm text-term-dim">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="text-xs text-term-dim">
                  #{s.replace(/\s+/g, "")}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
