"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Server, Shield, Zap } from "lucide-react";

const skills = [
  { name: "AWS / Azure", level: 95, color: "bg-blue-500" },
  { name: "Kubernetes / Docker", level: 90, color: "bg-orange-500" },
  { name: "IaC (Terraform/Ansible)", level: 90, color: "bg-purple-500" },
  { name: "CI/CD (Jenkins/ArgoCD)", level: 90, color: "bg-red-500" },
  { name: "AIOps & Agentic AI", level: 85, color: "bg-yellow-500" },
  { name: "Observability (Prom/Grafana)", level: 90, color: "bg-green-500" },
];

const badges = [
  "AWS",
  "Microsoft Azure",
  "Microsoft Entra ID",
  "Kubernetes",
  "Docker",
  "Terraform",
  "Ansible",
  "Salt Stack",
  "Jenkins",
  "GitLab CI",
  "GitHub Actions",
  "ArgoCD",
  "Prometheus",
  "Grafana",
  "ELK Stack",
  "OpenSearch",
  "AWS Bedrock",
  "n8n",
  "LangChain",
  "LangGraph",
  "Python",
  "Bash",
  "Go",
];

const systemStatus = [
  { label: "Experience", status: "7+ Years", color: "text-neon-blue" },
  { label: "Infrastructure", status: "Multi-Cloud", color: "text-purple-500" },
  { label: "Automation", status: "AIOps-first", color: "text-green-500" },
  { label: "Certifications", status: "5", color: "text-yellow-500" },
];

export function About() {
  return (
    <section id="about" className="relative py-20 px-4 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4 font-mono">
                <span className="text-neon-purple">./</span>about-me
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                DevOps &amp; SRE Engineer with 7+ years of experience building scalable,
                automated, and self-healing cloud infrastructures across AWS, Azure,
                Kubernetes, and on-prem environments. My work focuses on combining
                DevOps, AIOps, and observability &mdash; from automating CI/CD pipelines
                to deploying AI-powered root cause analysis and self-healing workflows
                using n8n and AWS Bedrock Agents.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 font-mono text-neon-blue">
                &gt; tech_stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {badges.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm font-mono text-gray-300 cursor-default hover:border-neon-blue/50 hover:bg-neon-blue/10 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.03 }}
                    viewport={{ once: true }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            <GlassCard className="p-6">
              <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                <Zap className="w-5 h-5 text-neon-green" />
                <span className="font-mono font-bold">CAREER STATS</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {systemStatus.map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center text-sm font-mono"
                  >
                    <span className="text-gray-400">{item.label}</span>
                    <span className={item.color}>{item.status}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          <div className="space-y-8">
            <GlassCard>
              <h3 className="text-xl font-bold mb-6 font-mono text-neon-green">
                &gt; proficiency_levels
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2 text-sm font-mono">
                      <span>{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${skill.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            <div className="grid grid-cols-2 gap-4">
              <GlassCard className="flex flex-col items-center justify-center p-6 text-center hover:bg-white/10">
                <Server className="w-8 h-8 text-neon-purple mb-2" />
                <div className="text-2xl font-bold">200+</div>
                <div className="text-xs text-gray-400 font-mono">DEPLOYMENTS SHIPPED</div>
              </GlassCard>
              <GlassCard className="flex flex-col items-center justify-center p-6 text-center hover:bg-white/10">
                <Shield className="w-8 h-8 text-neon-blue mb-2" />
                <div className="text-2xl font-bold">2</div>
                <div className="text-xs text-gray-400 font-mono">COMPANIES</div>
              </GlassCard>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
