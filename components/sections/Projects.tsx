"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Github, Terminal, CheckCircle } from "lucide-react";

type Project = {
  id: number;
  title: string;
  desc: string;
  tags: string[];
  status: string;
  github?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Self-Healing Infrastructure",
    desc: "AIOps workflows that detect, diagnose, and remediate infrastructure issues automatically using agentic AI.",
    tags: ["AWS Bedrock Agents", "n8n", "LangChain", "LangGraph"],
    status: "production",
  },
  {
    id: 2,
    title: "Infrastructure as Code with Terraform",
    desc: "Reusable Terraform modules for provisioning and configuring cloud resources across environments.",
    tags: ["Terraform", "AWS", "GitHub"],
    status: "production",
    github: "https://github.com/naveeneee48/",
  },
  {
    id: 3,
    title: "Log Aggregation with ELK Stack",
    desc: "Centralized log aggregation with custom parsing rules and real-time dashboards for observability.",
    tags: ["Elasticsearch", "Logstash", "Kibana"],
    status: "production",
  },
  {
    id: 4,
    title: "Monitoring & Alerting System",
    desc: "Centralized monitoring with Prometheus and Grafana dashboards, alerting to Slack and email via Alertmanager.",
    tags: ["Prometheus", "Grafana", "Alertmanager"],
    status: "production",
  },
  {
    id: 5,
    title: "Dockerized Application Deployment",
    desc: "Containerized deployment pipeline with Docker and Kubernetes orchestration for multi-environment rollout.",
    tags: ["Docker", "Kubernetes"],
    status: "production",
  },
  {
    id: 6,
    title: "CI/CD Pipeline",
    desc: "Jenkins-based CI/CD pipeline automating build, test, and deployment with zero-downtime releases.",
    tags: ["Jenkins", "Docker", "GitHub"],
    status: "production",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            <span className="text-neon-green drop-shadow-[0_0_15px_rgba(0,255,0,0.8)]">
              ./
            </span>
            projects
          </h2>
          <p className="text-gray-400">Infrastructure and automation work.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="group hover:bg-white/10 transition-colors h-full flex flex-col justify-between p-6">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-neon-green/50 transition-colors">
                      <Terminal className="w-6 h-6 text-neon-green" />
                    </div>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-neon-green transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{project.desc}</p>
                </div>

                <div className="flex justify-between items-center border-t border-white/10 pt-4">
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-gray-500 bg-white/5 px-1.5 py-0.5 rounded"
                      >
                        #{tag.replace(/\s+/g, "")}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-xs font-mono shrink-0 text-neon-green">
                    <CheckCircle className="w-3 h-3" />
                    <span>{project.status.toUpperCase()}</span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
