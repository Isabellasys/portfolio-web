"use client";

import { motion } from "framer-motion";
import { useViewMode } from "@/context/view-mode-context";
import { ArrowDown, Github, Linkedin, Mail, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

const terminalLines = [
  "$ whoami",
  "junior-cloud-devops-engineer",
  "$ cat skills.txt",
  "AWS | Docker | Kubernetes | Terraform | CI/CD",
  "$ echo $STATUS",
  "Ready to build scalable infrastructure",
];

export function HeroSection() {
  const { mode } = useViewMode();
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (mode !== "technical") return;

    setDisplayedLines([]);
    setCurrentLineIndex(0);
    setCurrentCharIndex(0);
  }, [mode]);

  useEffect(() => {
    if (mode !== "technical") return;
    if (currentLineIndex >= terminalLines.length) return;

    const currentLine = terminalLines[currentLineIndex];

    if (currentCharIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          if (newLines.length <= currentLineIndex) {
            newLines.push("");
          }
          newLines[currentLineIndex] = currentLine.slice(0, currentCharIndex + 1);
          return newLines;
        });
        setCurrentCharIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [mode, currentLineIndex, currentCharIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {mode === "hr" ? (
          <HRHero />
        ) : (
          <TechnicalHero displayedLines={displayedLines} />
        )}

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function HRHero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      {/* Profile Photo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="relative w-32 h-32 mx-auto">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
          <div className="relative w-full h-full rounded-full bg-gradient-to-br from-secondary to-muted border-2 border-primary/30 flex items-center justify-center overflow-hidden">
            <span className="text-4xl font-bold gradient-text">AE</span>
          </div>
        </div>
      </motion.div>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-primary font-mono text-sm mb-4"
      >
        Junior Cloud & DevOps Engineer
      </motion.p>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance"
      >
        Building Reliable
        <br />
        <span className="gradient-text">Cloud Infrastructure</span>
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty"
      >
        Passionate about automating deployments, managing cloud resources, and
        creating efficient CI/CD pipelines. I help teams ship faster and more
        reliably.
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex items-center justify-center gap-4"
      >
        <a
          href="#contact"
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          Get in Touch
        </a>
        <a
          href="#projects"
          className="px-6 py-3 border border-border rounded-lg font-medium text-foreground hover:bg-secondary transition-colors"
        >
          View Work
        </a>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex items-center justify-center gap-6 mt-8"
      >
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="mailto:contact@example.com"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Mail className="w-5 h-5" />
        </a>
      </motion.div>
    </motion.div>
  );
}

function TechnicalHero({ displayedLines }: { displayedLines: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      {/* Terminal Window */}
      <div className="glass rounded-xl overflow-hidden glow-cyan">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="flex-1 text-center text-xs text-muted-foreground font-mono">
            portfolio.sh
          </span>
          <Terminal className="w-4 h-4 text-muted-foreground" />
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono text-sm space-y-2">
          {displayedLines.map((line, index) => (
            <div
              key={index}
              className={
                line.startsWith("$")
                  ? "text-primary"
                  : "text-muted-foreground pl-2"
              }
            >
              {line}
              {index === displayedLines.length - 1 && (
                <span className="cursor-blink text-primary">▋</span>
              )}
            </div>
          ))}
          {displayedLines.length === 0 && (
            <div className="text-primary">
              $<span className="cursor-blink">▋</span>
            </div>
          )}
        </div>
      </div>

      {/* Tech Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="mt-8 flex flex-wrap justify-center gap-3"
      >
        {["AWS", "Docker", "K8s", "Terraform", "GitHub Actions"].map(
          (tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono bg-secondary border border-border rounded-full text-muted-foreground"
            >
              {tech}
            </span>
          )
        )}
      </motion.div>
    </motion.div>
  );
}
