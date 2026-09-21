"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Calendar, Briefcase, GitCommit } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Senior DevOps Engineer",
    company: "Cognisive",
    period: "02/2026 - Present",
    description:
      "Leading self-healing infrastructure workflows combining AWS Bedrock Agents and n8n for automated root cause analysis. Architecting agentic AI automation with MCP, LangChain, and LangGraph across the AWS and Azure estate.",
    tech: ["AWS Bedrock", "n8n", "LangChain", "Azure", "Terraform"],
  },
  {
    id: 2,
    role: "DevOps Engineer",
    company: "Cognisive",
    period: "01/2025 - 02/2026",
    description:
      "Automated CI/CD pipelines using Jenkins, GitLab CI, and GitHub Actions. Managed cloud and containerized workloads across AWS and Azure with Docker and Kubernetes, backed by Terraform and Salt Stack.",
    tech: ["Jenkins", "Kubernetes", "Docker", "Salt Stack", "n8n"],
  },
  {
    id: 3,
    role: "DevOps Engineer",
    company: "Wellspring Systems Pvt Ltd",
    period: "06/2019 - 01/2025",
    description:
      "Handled 200+ application deployments across Production, DR, and QA using Jenkins CI/CD. Built CI/CD pipelines with Ansible and Salt Stack, containerized apps with Docker/Kubernetes, and ran monitoring with Prometheus and Grafana.",
    tech: ["AWS", "Jenkins", "Ansible", "Docker", "Prometheus"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-20 px-4">
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/5 -translate-x-1/2 hidden md:block">
        <motion.div
          className="absolute top-0 bottom-0 w-full bg-gradient-to-b from-neon-blue via-neon-purple to-neon-green"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 2, ease: "linear" }}
          viewport={{ once: true }}
        />
      </div>

      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-4xl font-bold mb-16 font-mono text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-neon-blue">git log</span> --experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`relative flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-8 h-8 rounded-full bg-black border-2 border-neon-purple z-10">
                <GitCommit className="w-4 h-4 text-white" />
              </div>

              <div className="w-full md:w-1/2">
                <GlassCard className="p-6 relative group hover:border-neon-purple/50 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-neon-purple transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-neon-blue text-sm font-mono border border-neon-blue/20 px-2 py-1 rounded">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-2 py-1 bg-white/5 rounded text-gray-400"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </div>

              <div className="w-full md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
