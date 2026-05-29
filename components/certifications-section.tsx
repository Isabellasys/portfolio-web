"use client";

import { motion } from "framer-motion";
import { useViewMode } from "@/context/view-mode-context";
import { Award, ExternalLink, Calendar } from "lucide-react";

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "ABC123XYZ",
    icon: "☁️",
  },
  {
    name: "Docker Certified Associate",
    issuer: "Docker, Inc.",
    date: "2024",
    credentialId: "DCA-456",
    icon: "🐳",
  },
  {
    name: "Kubernetes Administrator (CKA)",
    issuer: "CNCF",
    date: "In Progress",
    credentialId: "—",
    icon: "☸️",
  },
];

const timeline = [
  {
    year: "2024",
    title: "Started as Junior DevOps Engineer",
    description: "Joined a startup to help build cloud infrastructure from scratch.",
  },
  {
    year: "2024",
    title: "AWS Cloud Practitioner Certification",
    description: "Validated cloud knowledge with first AWS certification.",
  },
  {
    year: "2023",
    title: "First CI/CD Pipeline",
    description: "Built automated deployment pipeline for production application.",
  },
  {
    year: "2023",
    title: "Discovered DevOps",
    description: "Started learning Docker, Linux, and cloud technologies.",
  },
];

export function CertificationsSection() {
  const { mode } = useViewMode();

  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-2">
            {mode === "hr" ? "Certifications & Learning" : "// Certifications"}
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              {mode === "hr" ? "Certifications" : "CERTS:"}
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="glass rounded-xl p-4 hover:border-primary/50 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{cert.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer}
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {cert.date}
                        </span>
                        {cert.credentialId !== "—" && (
                          <a
                            href="#"
                            className="flex items-center gap-1 text-primary hover:underline"
                          >
                            <ExternalLink className="w-3 h-3" />
                            Verify
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              {mode === "hr" ? "Learning Journey" : "TIMELINE:"}
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="relative pl-10"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />

                    <div className="glass rounded-xl p-4">
                      <span className="text-xs font-mono text-primary">
                        {item.year}
                      </span>
                      <h4 className="font-medium text-foreground mt-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
