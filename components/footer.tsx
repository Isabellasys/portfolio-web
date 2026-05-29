"use client";

import { motion } from "framer-motion";
import { useViewMode } from "@/context/view-mode-context";
import { Github, Linkedin, Mail, Heart, Terminal } from "lucide-react";

export function Footer() {
  const { mode } = useViewMode();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {mode === "hr" ? (
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <a href="#" className="font-mono text-lg font-medium text-foreground">
                <span className="text-primary">&lt;</span>
                DevOps
                <span className="text-primary">/&gt;</span>
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                Building reliable cloud infrastructure
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-4"
            >
              <a
                href="https://github.com/Isabellasys"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/isabella5"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm text-muted-foreground flex items-center gap-1"
            >
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>© {currentYear}</span>
            </motion.div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg mb-4">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm text-muted-foreground">
                $ echo &quot;Thanks for visiting!&quot;
              </span>
            </div>

            <div className="flex items-center justify-center gap-6 mb-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
              >
                github
              </a>
              <span className="text-border">|</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
              >
                linkedin
              </a>
              <span className="text-border">|</span>
              <a
                href="mailto:contact@example.com"
                className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
              >
                email
              </a>
            </div>

            <p className="font-mono text-xs text-muted-foreground">
              <span className="text-primary">#</span> © {currentYear} | v1.0.0 |
              MIT License
            </p>
          </motion.div>
        )}
      </div>
    </footer>
  );
}
