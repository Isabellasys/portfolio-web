"use client";

import { motion } from "framer-motion";
import { useViewMode } from "@/context/view-mode-context";
import { ArrowRight, CheckCircle2, Cloud, Server, GitBranch, Activity } from "lucide-react";

export function ArchitectureSection() {
  const { mode } = useViewMode();

  if (mode !== "technical") return null;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-2">
            {"// Infrastructure_Architecture"}
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-4" />
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Modern cloud-native architecture patterns I implement
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-xl p-8"
        >
          <h3 className="text-sm font-mono text-muted-foreground mb-6">
            TYPICAL_DEPLOYMENT_FLOW:
          </h3>

          {/* Pipeline Visualization */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 mb-8">
            <PipelineStep
              icon={<GitBranch className="w-6 h-6" />}
              label="Source"
              sublabel="GitHub"
              index={0}
            />
            <ArrowConnector />
            <PipelineStep
              icon={<Activity className="w-6 h-6" />}
              label="CI/CD"
              sublabel="GitHub Actions"
              index={1}
            />
            <ArrowConnector />
            <PipelineStep
              icon={<Server className="w-6 h-6" />}
              label="Container"
              sublabel="Docker/ECR"
              index={2}
            />
            <ArrowConnector />
            <PipelineStep
              icon={<Cloud className="w-6 h-6" />}
              label="Deploy"
              sublabel="EKS/ECS"
              index={3}
            />
            <ArrowConnector />
            <PipelineStep
              icon={<CheckCircle2 className="w-6 h-6" />}
              label="Monitor"
              sublabel="CloudWatch"
              index={4}
            />
          </div>

          {/* Infrastructure Components */}
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <InfraCard
              title="Network Layer"
              items={["VPC", "Subnets", "Security Groups", "NAT Gateway"]}
            />
            <InfraCard
              title="Compute Layer"
              items={["EC2/EKS", "Auto Scaling", "Load Balancer", "Lambda"]}
            />
            <InfraCard
              title="Data Layer"
              items={["RDS", "ElastiCache", "S3", "DynamoDB"]}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PipelineStep({
  icon,
  label,
  sublabel,
  index,
}: {
  icon: React.ReactNode;
  label: string;
  sublabel: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="flex flex-col items-center"
    >
      <div className="w-16 h-16 rounded-xl bg-secondary border border-border flex items-center justify-center text-primary mb-2 hover:border-primary/50 hover:scale-105 transition-all">
        {icon}
      </div>
      <span className="text-sm font-medium text-foreground">{label}</span>
      <span className="text-xs text-muted-foreground font-mono">{sublabel}</span>
    </motion.div>
  );
}

function ArrowConnector() {
  return (
    <div className="hidden md:flex items-center">
      <div className="w-8 h-0.5 pipeline-flow" />
      <ArrowRight className="w-4 h-4 text-primary" />
    </div>
  );
}

function InfraCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-secondary/50 rounded-lg p-4">
      <h4 className="text-sm font-mono text-primary mb-3">{title}</h4>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 text-sm text-muted-foreground font-mono"
          >
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
