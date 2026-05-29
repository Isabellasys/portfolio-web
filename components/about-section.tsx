"use client";

import { motion } from "framer-motion";
import { useViewMode } from "@/context/view-mode-context";
import { Briefcase, Cloud, Code2, Server } from "lucide-react";

export function AboutSection() {
  const { mode } = useViewMode();

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-2">
            {mode === "hr" ? "About Me" : "// About"}
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />
        </motion.div>

        {mode === "hr" ? <HRAbout /> : <TechnicalAbout />}
      </div>
    </section>
  );
}

function HRAbout() {
  const highlights = [
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "Experienced with AWS services and cloud architecture",
    },
    {
      icon: Server,
      title: "Infrastructure",
      description: "Building scalable and reliable systems",
    },
    {
      icon: Code2,
      title: "Automation",
      description: "Automating everything that can be automated",
    },
    {
      icon: Briefcase,
      title: "Team Player",
      description: "Collaborative approach to problem solving",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-muted-foreground leading-relaxed mb-6">
          I&apos;m a Junior Cloud & DevOps Engineer passionate about building
          and maintaining cloud infrastructure. I specialize in creating
          automated deployment pipelines and ensuring system reliability.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          My journey into DevOps started with a curiosity for how large-scale
          applications are deployed and maintained. Since then, I&apos;ve been
          dedicated to learning and implementing best practices in cloud
          computing and infrastructure automation.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          When I&apos;m not configuring infrastructure, you&apos;ll find me
          exploring new cloud services, contributing to open-source projects, or
          writing technical documentation.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-2 gap-4"
      >
        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            className="glass p-6 rounded-xl hover:border-primary/50 transition-colors group"
          >
            <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

function TechnicalAbout() {
  const specs = [
    { key: "role", value: "Junior Cloud & DevOps Engineer" },
    { key: "cloud", value: "AWS (EC2, S3, Lambda, ECS)" },
    { key: "containers", value: "Docker, Kubernetes, EKS" },
    { key: "iac", value: "Terraform, CloudFormation" },
    { key: "ci_cd", value: "GitHub Actions, Jenkins" },
    { key: "monitoring", value: "Prometheus, Grafana, CloudWatch" },
    { key: "scripting", value: "Bash, Python" },
    { key: "os", value: "Linux (Ubuntu, Amazon Linux)" },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glass rounded-xl p-6 font-mono text-sm"
      >
        <div className="text-muted-foreground mb-4">
          <span className="text-primary">const</span> engineer ={" "}
          <span className="text-primary">{"{"}</span>
        </div>
        {specs.map((spec, index) => (
          <div key={spec.key} className="pl-4 mb-2">
            <span className="text-cyan-400">{spec.key}</span>
            <span className="text-muted-foreground">: </span>
            <span className="text-green-400">&quot;{spec.value}&quot;</span>
            {index < specs.length - 1 && (
              <span className="text-muted-foreground">,</span>
            )}
          </div>
        ))}
        <div className="text-primary">{"}"}</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="space-y-6"
      >
        {/* System Status */}
        <div className="glass rounded-xl p-6">
          <h3 className="text-sm font-mono text-muted-foreground mb-4">
            SYSTEM_STATUS
          </h3>
          <div className="space-y-3">
            <StatusBar label="Cloud Expertise" value={75} />
            <StatusBar label="Container Orchestration" value={70} />
            <StatusBar label="CI/CD Pipelines" value={80} />
            <StatusBar label="Infrastructure as Code" value={72} />
          </div>
        </div>

        {/* Uptime */}
        <div className="glass rounded-xl p-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="font-mono text-sm text-muted-foreground">
              Status: Available for opportunities
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function StatusBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex justify-between text-xs font-mono mb-1">
        <span className="text-muted-foreground">{label}</span>
        <span className="text-primary">{value}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-primary rounded-full"
        />
      </div>
    </div>
  );
}
