"use client";

import { motion } from "framer-motion";
import { useViewMode } from "@/context/view-mode-context";
import { Mail, Github, Linkedin, Send, MapPin, Terminal } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const { mode } = useViewMode();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("[v0] Form submitted:", formState);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground mb-2">
            {mode === "hr" ? "Get in Touch" : "// Contact"}
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            {mode === "hr"
              ? "I'm always open to discussing new opportunities, projects, or just having a chat about cloud and DevOps."
              : "Available for collaboration and opportunities"}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {mode === "hr" ? (
              <div className="space-y-6">
                <div className="glass rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:contact@example.com"
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Mail className="w-5 h-5 text-primary" />
                      contact@example.com
                    </a>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-primary" />
                      Remote / Worldwide
                    </div>
                  </div>
                </div>

                <div className="glass rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-4">
                    Social Links
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-all"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="mailto:contact@example.com"
                      className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-all"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="glass rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/30">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="flex-1 text-center text-xs text-muted-foreground font-mono">
                    contact.sh
                  </span>
                  <Terminal className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="p-6 font-mono text-sm space-y-3">
                  <div className="text-primary">
                    $ cat contact_info.json
                  </div>
                  <div className="text-muted-foreground pl-2">
                    <div>{"{"}</div>
                    <div className="pl-4">
                      <span className="text-cyan-400">&quot;email&quot;</span>:{" "}
                      <span className="text-green-400">
                        &quot;contact@example.com&quot;
                      </span>
                      ,
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-400">&quot;github&quot;</span>:{" "}
                      <span className="text-green-400">
                        &quot;github.com/username&quot;
                      </span>
                      ,
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-400">&quot;linkedin&quot;</span>
                      :{" "}
                      <span className="text-green-400">
                        &quot;linkedin.com/in/username&quot;
                      </span>
                      ,
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-400">&quot;location&quot;</span>
                      :{" "}
                      <span className="text-green-400">
                        &quot;Remote / Worldwide&quot;
                      </span>
                      ,
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-400">&quot;status&quot;</span>:{" "}
                      <span className="text-green-400">
                        &quot;Open to opportunities&quot;
                      </span>
                    </div>
                    <div>{"}"}</div>
                  </div>
                  <div className="text-primary">
                    $ echo $AVAILABILITY
                  </div>
                  <div className="flex items-center gap-2 pl-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-green-400">
                      Currently available for work
                    </span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-xl p-6">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {mode === "hr" ? "Name" : "name:"}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder={mode === "hr" ? "Your name" : "string"}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {mode === "hr" ? "Email" : "email:"}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder={mode === "hr" ? "your@email.com" : "string"}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {mode === "hr" ? "Message" : "message:"}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder={
                      mode === "hr"
                        ? "Tell me about your project or opportunity..."
                        : "string"
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {mode === "hr" ? "Send Message" : "submit()"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
