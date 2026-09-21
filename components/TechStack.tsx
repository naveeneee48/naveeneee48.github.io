const groups = [
  {
    title: "Cloud & Identity",
    tags: ["AWS", "Microsoft Azure", "Microsoft Entra ID", "GCP"],
  },
  {
    title: "CI/CD & Automation",
    tags: ["Jenkins", "GitLab CI", "GitHub Actions", "ArgoCD"],
  },
  {
    title: "Infrastructure as Code",
    tags: ["Terraform", "Ansible", "Salt Stack"],
  },
  {
    title: "Containers & Orchestration",
    tags: ["Docker", "Docker Swarm", "Kubernetes", "Helm"],
  },
  {
    title: "Observability",
    tags: ["Prometheus", "Grafana", "ELK Stack", "OpenSearch", "CloudWatch"],
  },
  {
    title: "AIOps & Agentic AI",
    tags: [
      "AWS Bedrock Agents",
      "Azure AI Foundry",
      "n8n",
      "CrewAI",
      "LangChain",
      "LangGraph",
      "RAG",
      "MCP Architecture",
      "Ollama",
      "Amazon Q",
    ],
  },
  {
    title: "Scripting",
    tags: ["Python (boto3, Flask)", "Bash", "Go"],
  },
];

const proficiency = [
  { skill: "AWS", level: 95 },
  { skill: "Kubernetes", level: 90 },
  { skill: "Terraform", level: 90 },
  { skill: "CI/CD Pipelines", level: 90 },
  { skill: "AIOps & Agentic AI", level: 85 },
  { skill: "Microsoft Azure", level: 80 },
];

export default function TechStack() {
  return (
    <section id="stack" className="py-20">
      <p className="text-sm text-term-dim">
        <span className="text-term-green">$</span> cat ./tech-stack.yaml
      </p>
      <h2 className="mt-2 text-2xl font-semibold text-term-text">
        Tech Stack
      </h2>

      <div className="mt-8 space-y-5">
        {proficiency.map((p) => (
          <div key={p.skill}>
            <div className="flex justify-between text-sm text-term-text">
              <span>{p.skill}</span>
              <span className="text-term-green">{p.level}%</span>
            </div>
            <div className="mt-1 h-2 rounded bg-term-border">
              <div
                className="h-2 rounded bg-term-green"
                style={{ width: `${p.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {groups.map((g) => (
          <div
            key={g.title}
            className="rounded border border-term-border bg-term-panel p-4"
          >
            <h3 className="text-sm font-semibold text-term-green">
              # {g.title}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-term-border px-3 py-1 text-xs text-term-dim"
                >
                  #{t.replace(/\s+/g, "")}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
