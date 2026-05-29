"use client";

import { motion } from "framer-motion";
import { useViewMode } from "@/context/view-mode-context";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const { mode, setMode } = useViewMode();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#stack", label: "Stack" },
    { href: "#projects", label: "Projects" },
    { href: "#certifications", label: "Certs" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#"
            className="font-mono text-lg font-medium text-foreground"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-primary">&lt;</span>
            DevOps
            <span className="text-primary">/&gt;</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ y: -1 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Mode Toggle */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center bg-secondary rounded-lg p-1">
              <button
                onClick={() => setMode("hr")}
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all duration-300 ${
                  mode === "hr"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                HR
              </button>
              <button
                onClick={() => setMode("technical")}
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all duration-300 ${
                  mode === "technical"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Technical
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass border-t border-border"
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-border">
              <div className="flex items-center bg-secondary rounded-lg p-1">
                <button
                  onClick={() => setMode("hr")}
                  className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all ${
                    mode === "hr"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  HR
                </button>
                <button
                  onClick={() => setMode("technical")}
                  className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all ${
                    mode === "technical"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  Technical
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
