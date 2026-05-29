"use client";

import { motion } from "framer-motion";
import { useViewMode } from "@/context/view-mode-context";
import {
  ExternalLink,
  Github,
  ArrowRight,
  Server,
  Cloud,
  GitBranch,
  Activity,
} from "lucide-react";

const projects = [
  {
    title: "Cloud Infrastructure Automation",
    description:
      "Automated AWS infrastructure provisioning using Terraform, including VPC, EC2, RDS, and S3 configurations with proper IAM roles.",
    hrDescription:
      "Reduced infrastructure setup time by 80% and improved deployment consistency across environments.",
    stack: ["Terraform", "AWS", "GitHub Actions"],
    metrics: { deployTime: "5 min", uptime: "99.9%", cost: "-40%" },
    pipeline: ["Code", "Terraform Plan", "Review", "Apply", "Monitor"],
  },
  {
    title: "Kubernetes Cluster Management",
    description:
      "Deployed and managed production-grade Kubernetes clusters on AWS EKS with auto-scaling, monitoring, and GitOps workflows.",
    hrDescription:
      "Enabled the team to deploy applications 10x faster with zero-downtime deployments.",
    stack: ["Kubernetes", "Helm", "ArgoCD", "EKS"],
    metrics: { pods: "50+", nodes: "5", deploys: "100/week" },
    pipeline: ["Push", "Build", "Test", "Deploy", "Scale"],
  },
  {
    title: "CI/CD Pipeline Optimization",
    description:
      "Built comprehensive CI/CD pipelines using GitHub Actions for automated testing, building, and deployment of containerized applications.",
    hrDescription:
      "Improved developer productivity by automating repetitive tasks and catching bugs early.",
    stack: ["GitHub Actions", "Docker", "Jest", "SonarQube"],
    metrics: { buildTime: "3 min", coverage: "85%", frequency: "Daily" },
    pipeline: ["Lint", "Test", "Build", "Security", "Deploy"],
  },
];

export function ProjectsSection() {
  const { mode } = useViewMode();

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-2">
            {mode === "hr" ? "Featured Projects" : "// Projects"}
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-4" />
          <p className="text-muted-foreground mb-12 max-w-2xl">
            {mode === "hr"
              ? "Real-world projects showcasing my cloud and DevOps expertise."
              : "Infrastructure and automation implementations"}
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {mode === "hr" ? (
                <HRProjectCard project={project} />
              ) : (
                <TechnicalProjectCard project={project} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HRProjectCard({
  project,
}: {
  project: (typeof projects)[0];
}) {
  return (
    <div className="glass rounded-xl p-6 hover:border-primary/50 transition-all group">
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-4">{project.hrDescription}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-secondary rounded-full text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <Github className="w-4 h-4" />
              View Code
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <ExternalLink className="w-4 h-4" />
              Learn More
            </a>
          </div>
        </div>

        <div className="flex gap-4">
          {Object.entries(project.metrics).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-2xl font-bold text-primary">{value}</div>
              <div className="text-xs text-muted-foreground capitalize">
                {key.replace(/([A-Z])/g, " $1").trim()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TechnicalProjectCard({
  project,
}: {
  project: (typeof projects)[0];
}) {
  return (
    <div className="glass rounded-xl overflow-hidden hover:border-primary/50 transition-all">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/30">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="flex-1 text-center text-xs text-muted-foreground font-mono">
          {project.title.toLowerCase().replace(/\s+/g, "-")}.yaml
        </span>
      </div>

      <div className="p-6">
        {/* Title & Description */}
        <div className="mb-6">
          <h3 className="text-lg font-mono text-foreground mb-2">
            <span className="text-primary">#</span> {project.title}
          </h3>
          <p className="text-sm text-muted-foreground font-mono">
            {project.description}
          </p>
        </div>

        {/* CI/CD Pipeline Visualization */}
        <div className="mb-6">
          <h4 className="text-xs font-mono text-muted-foreground mb-3">
            PIPELINE:
          </h4>
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {project.pipeline.map((step, index) => (
              <div key={step} className="flex items-center">
                <div className="flex items-center gap-2 px-3 py-2 bg-secondary rounded-lg">
                  {index === 0 && <GitBranch className="w-4 h-4 text-primary" />}
                  {index === project.pipeline.length - 1 && (
                    <Cloud className="w-4 h-4 text-primary" />
                  )}
                  {index > 0 && index < project.pipeline.length - 1 && (
                    <Server className="w-4 h-4 text-primary" />
                  )}
                  <span className="text-xs font-mono whitespace-nowrap">
                    {step}
                  </span>
                </div>
                {index < project.pipeline.length - 1 && (
                  <div className="flex items-center mx-1">
                    <div className="w-4 h-0.5 pipeline-flow" />
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Metrics Dashboard */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {Object.entries(project.metrics).map(([key, value]) => (
            <div key={key} className="bg-secondary/50 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <Activity className="w-3 h-3 text-primary" />
                <span className="text-xs text-muted-foreground font-mono uppercase">
                  {key}
                </span>
              </div>
              <div className="text-lg font-mono text-foreground">{value}</div>
            </div>
          ))}
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-mono bg-primary/10 border border-primary/30 rounded text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
