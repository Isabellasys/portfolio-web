"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useViewMode } from "@/context/view-mode-context";
import {
  SiKubernetes,
  SiTerraform,
  SiGithubactions,
  SiAnsible,
  SiPrometheus,
  SiGrafana,
  SiHelm,
  SiArgo,
  SiGnubash,
  SiProxmox,
  SiMqtt,
  SiNetlify,
  SiPfsense,
  SiMariadb,
  SiJavascript,
  SiVirtualbox,
  SiEclipsemosquitto,
  SiRedhat,
  SiPaloaltonetworks,
  SiDocker,
  SiLinux,
  SiGithub,
  SiHtml5,
  SiCss,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import {
  DiAws,
  DiDocker,
  DiLinux,
  DiPython,
  DiGit,
  DiNginx,
  DiJenkins,
} from "react-icons/di";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  FileText,
  Download,
  Globe,
  Terminal,
  Server,
  GitBranch,
  CheckCircle,
  Clock,
  Calendar,
  Youtube,
  Layers,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";

// ============================================
// DATOS PARA RELLENAR - EDITA AQUI TUS DATOS
// ============================================

const personalInfo = {
  name: "Efranyeli Ramirez",
  title: "Linux, Cloud & Automation",
  location: "Madrid, Espana",
  email: "[tu@email.com]",
  phone: "+34 622 906 233",
  linkedin: "linkedin.com/in/efranyeli-ramirez",
  github: "github.com/Isabellasys",
  website: "",
  summary:
    "Tecnica Superior en Administracion de Sistemas Informaticos en Red (ASIR) con interes en Linux, Cloud Computing, Automatizacion e Infraestructura. Actualmente ampliando conocimientos mediante proyectos practicos con Azure, Docker, Ansible y tecnologias orientadas a DevOps.",
  subtitle: "Construyendo infraestructura, automatizacion y proyectos en la nube con Linux, Azure, Docker y Ansible.",
  photo: "/images/profile.jpg",
};

const experience = [
  {
    company: "Computer Space",
    position: "Practicas Curriculares ASIR",
    period: "Dic 2024 - Abr 2025",
    location: "Madrid, Espana",
    intro: "Periodo de practicas curriculares realizado durante el CFGS de Administracion de Sistemas Informaticos en Red (ASIR). Formacion practica orientada a Linux empresarial, automatizacion con Ansible y tecnologias Red Hat mediante laboratorios guiados y contenidos oficiales.",
    description: [
      "Administracion de sistemas Red Hat Enterprise Linux (RHEL 8/9)",
      "Gestion de usuarios, permisos y servicios",
      "Automatizacion mediante Ansible Playbooks",
      "Conceptos de firewalld y SELinux",
      "Laboratorios practicos de administracion Linux",
    ],
    formation: [
      "RH134 - Red Hat System Administration II",
      "RH294 - Red Hat Enterprise Linux Automation with Ansible",
      "AU374 - Developing Advanced Automation with Red Hat Ansible Automation Platform",
    ],
    technologies: ["RHEL", "Ansible", "Bash", "Git", "systemd", "SELinux"],
  },
];

const education = [
  {
    institution: "Universidad Europea de Madrid",
    degree: "CFGS Administracion de Sistemas Informaticos en Red (ASIR)",
    specialization: "Especializacion en Ciberseguridad",
    period: "2024 - 2025",
    location: "Madrid, Espana",
    status: "Finalizado",
  },
  {
    institution: "Instituto Universitario de Seguros",
    degree: "TSU Administracion de Riesgos y Seguros",
    specialization: "Gestion analitica y evaluacion de riesgos",
    period: "Completado",
    location: "Caracas, Venezuela",
  },
];

// Insignias organizadas por grupo
const redHatBadges = [
  {
    name: "RH134 - Red Hat System Administration II - Official Badge",
    issuer: "Red Hat",
    date: "2025",
    pdfUrl: "/certifications/rh134-badge.pdf",
    icon: SiRedhat,
    skills: ["RHEL", "systemd", "Storage", "Networking", "SELinux"],
    color: "#EE0000",
  },
  {
    name: "RH294 - Red Hat Ansible Automation - Official Badge",
    issuer: "Red Hat",
    date: "2025",
    pdfUrl: "/certifications/rh294-badge.pdf",
    icon: SiRedhat,
    skills: ["Ansible", "Playbooks", "Automation", "IaC", "YAML"],
    color: "#EE0000",
  },
  {
    name: "AU374 - Advanced Ansible Automation Platform - Official Badge",
    issuer: "Red Hat",
    date: "2025",
    pdfUrl: "/certifications/au374-badge.pdf",
    icon: SiRedhat,
    skills: ["Ansible", "Automation Platform", "Advanced Playbooks"],
    color: "#EE0000",
  },
];

const paloAltoBadges = [
  {
    name: "Cybersecurity Foundation - Official Badge",
    issuer: "Palo Alto Networks",
    date: "2025",
    pdfUrl: "/certifications/palo-alto-cybersecurity.pdf",
    icon: SiPaloaltonetworks,
    skills: ["Cybersecurity", "Threat Prevention", "Security Fundamentals"],
    color: "#F04E23",
  },
  {
    name: "Network Security - Official Badge",
    issuer: "Palo Alto Networks",
    date: "2025",
    pdfUrl: "/certifications/network-security-badge.pdf",
    icon: SiPaloaltonetworks,
    skills: ["Network Security", "Firewalls", "Zero Trust"],
    color: "#F04E23",
  },
  {
    name: "Security Operations - Official Badge",
    issuer: "Palo Alto Networks",
    date: "2025",
    pdfUrl: "/certifications/security-operations-badge.pdf",
    icon: SiPaloaltonetworks,
    skills: ["SOC", "Incident Response", "Threat Detection"],
    color: "#F04E23",
  },
  {
    name: "Cloud Security - Official Badge",
    issuer: "Palo Alto Networks",
    date: "2025",
    pdfUrl: "/certifications/cloud-security-badge.pdf",
    icon: SiPaloaltonetworks,
    skills: ["Cloud Security", "Azure", "Compliance"],
    color: "#F04E23",
  },
];

// Combinado para compatibilidad
const certifications = [...redHatBadges, ...paloAltoBadges];

// Tech Stack - Compact badges por categoria
const techStackCategories = [
  { category: "Linux & Systems", items: ["Linux", "RHEL", "Bash", "SELinux"] },
  { category: "Cloud & AWS", items: ["AWS", "ECS", "Fargate", "ECR", "CloudWatch", "Azure"] },
  { category: "IaC & Automation", items: ["Terraform", "Ansible", "Git", "GitHub", "GitHub Actions"] },
  { category: "Containers", items: ["Docker"] },
  { category: "Development", items: ["Python", "HTML", "CSS", "JavaScript", "Next.js", "TypeScript"] },
  { category: "Infrastructure", items: ["Nginx", "HAProxy", "MQTT", "Mosquitto", "MariaDB", "pfSense"] },
];

const languages = [
  { name: "Espanol", level: "Nativo" },
  { name: "Ingles", level: "Intermedio (B1-B2)" },
];

// Proyectos
const otherProjects = [
  {
    title: "DevOps Portfolio Platform",
    description: "Proyecto personal utilizado como laboratorio DevOps para desplegar este portfolio en un entorno cloud real. La aplicacion esta desarrollada con Next.js, empaquetada mediante Docker y desplegada sobre AWS ECS Fargate. La infraestructura se define mediante Terraform, las imagenes se almacenan en Amazon ECR y los logs se centralizan mediante CloudWatch.",
    technologies: ["Terraform", "AWS", "ECS", "Fargate", "ECR", "CloudWatch", "Docker", "GitHub Actions", "Next.js", "TypeScript", "Linux"],
    icons: [SiTerraform, DiAws, SiDocker, SiGithubactions, SiLinux],
    demoUrl: "#top",
    githubUrl: "https://github.com/Isabellasys/devops-portfolio",
    category: "Cloud Native DevOps",
    isLiveProject: true,
    lessonsLearned: [
      "Infrastructure as Code con Terraform",
      "Despliegue de contenedores en AWS ECS Fargate",
      "Gestion de imagenes mediante Amazon ECR",
      "Centralizacion de logs con CloudWatch",
      "Seguridad mediante Security Groups",
      "Resolucion de incidencias reales de despliegue",
      "Optimizacion de costes cloud",
    ],
  },
  {
    title: "HORSEBIT (My Version)",
    description: "Proyecto Final de ASIR integrando administracion de sistemas, redes, automatizacion y desarrollo web. Infraestructura de 4 VMs: pfSense (firewall), Nodo Central (HAProxy, MQTT, MariaDB, Python, Ansible), y 2 servidores NGINX. Simula carreras en tiempo real via MQTT.",
    technologies: ["pfSense", "HAProxy", "NGINX", "Linux", "Python", "MQTT", "MariaDB", "Ansible", "Bash"],
    icons: [SiPfsense, DiNginx, SiLinux, DiPython, SiMqtt, SiMariadb, SiAnsible],
    demoUrl: "https://asir-final-project-myversion.netlify.app",
    githubUrl: "https://github.com/Isabellasys/asir-final-project-myversion",
    videoUrl: "https://youtu.be/L4A0ei0gYSA",
    category: "Infrastructure",
  },
  {
    title: "Azure Linux Infrastructure Basic",
    description: "Proyecto de automatizacion de infraestructura en Microsoft Azure utilizando Ansible, Linux y Docker. El playbook automatiza la creacion de Resource Group, VNet, Subred, NSG, IP Publica, NIC y VM Ubuntu Server. Cloud-Init instala Docker, clona el repo y ejecuta la app en contenedor.",
    technologies: ["Azure", "Ansible", "Ubuntu Server", "Linux", "Docker", "GitHub", "Netlify"],
    icons: [VscAzure, SiAnsible, SiLinux, SiDocker, SiGithub, SiNetlify],
    demoUrl: "https://azure-linux-infrastructure-basic.netlify.app",
    githubUrl: "https://github.com/Isabellasys/azure-linux-infrastructure-basic",
    category: "Cloud & IaC",
  },
  {
    title: "ASIR Infrastructure Presentation",
    description: "Presentacion web interactiva desarrollada para la defensa del Proyecto Final de ASIR. Explica la arquitectura, tecnologias y componentes utilizados, permitiendo mostrar de forma visual la infraestructura disenada.",
    technologies: ["HTML", "CSS", "JavaScript", "GitHub", "Netlify"],
    icons: [SiHtml5, SiCss, SiJavascript, SiGithub, SiNetlify],
    demoUrl: "https://asir-infrastructure-presentation.netlify.app",
    githubUrl: "https://github.com/Isabellasys/asir-infrastructure-presentation",
    category: "Documentation",
  },
];

// ============================================
// COMPONENTE PRINCIPAL
// ============================================

export function SinglePagePortfolio() {
  const { mode, setMode } = useViewMode();

  return (
    <div 
      className={`min-h-screen transition-colors duration-300 ${
        mode === "technical" 
          ? "bg-[#0d1117]" 
          : "bg-white"
      }`}
      style={{
        '--background': mode === "technical" ? 'oklch(0.1 0.008 260)' : 'oklch(0.995 0 0)',
        '--foreground': mode === "technical" ? 'oklch(0.92 0 0)' : 'oklch(0.15 0.01 260)',
        '--card': mode === "technical" ? 'oklch(0.13 0.008 260)' : 'oklch(0.98 0 0)',
        '--card-foreground': mode === "technical" ? 'oklch(0.92 0 0)' : 'oklch(0.15 0.01 260)',
        '--primary': mode === "technical" ? 'oklch(0.78 0.15 180)' : 'oklch(0.45 0.15 250)',
        '--primary-foreground': mode === "technical" ? 'oklch(0.1 0.01 260)' : 'oklch(0.99 0 0)',
        '--secondary': mode === "technical" ? 'oklch(0.18 0.008 260)' : 'oklch(0.95 0.005 260)',
        '--secondary-foreground': mode === "technical" ? 'oklch(0.92 0 0)' : 'oklch(0.15 0.01 260)',
        '--muted': mode === "technical" ? 'oklch(0.2 0.008 260)' : 'oklch(0.93 0.005 260)',
        '--muted-foreground': mode === "technical" ? 'oklch(0.65 0.01 260)' : 'oklch(0.45 0.01 260)',
        '--border': mode === "technical" ? 'oklch(0.28 0.015 260)' : 'oklch(0.88 0.01 260)',
        '--accent': mode === "technical" ? 'oklch(0.78 0.15 180)' : 'oklch(0.45 0.15 250)',
        '--accent-foreground': mode === "technical" ? 'oklch(0.1 0.01 260)' : 'oklch(0.99 0 0)',
        color: mode === "technical" ? 'oklch(0.92 0 0)' : 'oklch(0.15 0.01 260)',
      } as React.CSSProperties}
    >
        {/* Premium Navbar */}
        <nav className={`sticky top-0 z-50 no-print transition-all duration-300 ${
          mode === "technical" 
            ? "navbar-premium" 
            : "bg-white/95 backdrop-blur-xl border-b border-border"
        }`}>
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className={`p-2 rounded-lg ${mode === "technical" ? "bg-primary/10" : "bg-secondary"}`}>
                {mode === "technical" ? (
                  <Terminal size={18} className="text-primary" />
                ) : (
                  <Briefcase size={18} className="text-primary" />
                )}
              </div>
              <div>
                <span className="font-semibold text-sm text-foreground">
                  {personalInfo.name.split(" ")[0]}
                </span>
                <span className="text-xs text-muted-foreground block">
                  {mode === "technical" ? "Technical Portfolio" : "Curriculum Vitae"}
                </span>
              </div>
            </motion.div>

            <div className="flex items-center gap-3">
              {/* Premium Mode Toggle */}
              <div className={`flex items-center rounded-xl p-1 ${
                mode === "technical" ? "bg-secondary/50" : "bg-secondary"
              }`}>
                <button
                  onClick={() => setMode("hr")}
                  className={`px-4 py-2 text-xs font-medium rounded-lg transition-all duration-300 ${
                    mode === "hr"
                      ? "bg-white text-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  RRHH
                </button>
                <button
                  onClick={() => setMode("technical")}
                  className={`px-4 py-2 text-xs font-medium rounded-lg transition-all duration-300 ${
                    mode === "technical"
                      ? "bg-primary text-primary-foreground shadow-md glow-subtle"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  TECHNICAL
                </button>
              </div>

              {/* Download CV button - only in HR mode */}
              {mode === "hr" && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onClick={() => window.print()}
                  className="flex items-center gap-2 px-4 py-2 text-xs font-medium border border-border rounded-lg hover:bg-secondary hover:border-primary/30 transition-all duration-300"
                >
                  <Download size={14} />
                  Descargar CV
                </motion.button>
              )}
            </div>
          </div>
        </nav>

        {/* Content */}
        <main className={`max-w-5xl mx-auto px-6 py-10 ${mode === "technical" ? "bg-grid-subtle" : ""}`}>
          <AnimatePresence mode="wait">
            {mode === "hr" ? <HRView key="hr" /> : <TechnicalView key="tech" />}
          </AnimatePresence>
        </main>

        {/* Premium Footer */}
        <footer className={`border-t py-6 no-print ${
          mode === "technical" ? "border-border/50 bg-card/30" : "border-border"
        }`}>
          <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <span className="font-mono">
              {mode === "technical" ? "// " : ""}Ultima actualizacion: Mayo 2025
            </span>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className={mode === "technical" ? "font-mono" : ""}>
                  Disponible para nuevas oportunidades
                </span>
              </span>
            </div>
          </div>
        </footer>
    </div>
  );
}

// ============================================
// VISTA RRHH - ESTILO CV PROFESIONAL BLANCO
// ============================================

function HRView() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8"
    >
      {/* Header with Photo */}
      <header className="border-b border-border pb-6">
        <div className="flex items-start gap-6">
          {/* Profile Photo */}
          <div className="shrink-0">
            <div className="w-24 h-24 rounded-full bg-secondary border-2 border-border overflow-hidden">
              <img 
                src={personalInfo.photo} 
                alt={personalInfo.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center text-2xl font-bold text-muted-foreground">${personalInfo.name.split(' ').map(n => n[0]).join('')}</div>`;
                }}
              />
            </div>
          </div>
          
          {/* Info */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-foreground mb-1">
              {personalInfo.name}
            </h1>
            <p className="text-lg text-primary font-medium mb-1">
              {personalInfo.title}
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              {personalInfo.subtitle}
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                <Mail size={14} />
                {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                <Phone size={14} />
                {personalInfo.phone}
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin size={14} />
                {personalInfo.location}
              </span>
              <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                <Linkedin size={14} />
                LinkedIn
              </a>
              <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                <Github size={14} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Summary - Compact */}
      <section className="bg-secondary/50 p-4 rounded-lg border border-border">
        <p className="text-sm text-foreground leading-relaxed">
          {personalInfo.summary}
        </p>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
          <Briefcase size={16} />
          Experiencia
        </h2>
        <div className="space-y-5">
          {experience.map((job, index) => (
            <div key={index} className="border-l-2 border-primary pl-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                <div>
                  <h3 className="font-semibold text-foreground">{job.position}</h3>
                  <p className="text-sm text-primary">{job.company}</p>
                </div>
                <div className="text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {job.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} />
                    {job.location}
                  </span>
                </div>
              </div>
              {job.intro && (
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {job.intro}
                </p>
              )}
              <p className="text-xs font-medium text-foreground mb-2">Actividades realizadas:</p>
              <ul className="text-sm text-muted-foreground space-y-1 mb-3">
                {job.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              {job.formation && (
                <>
                  <p className="text-xs font-medium text-foreground mb-2">Programas formativos realizados:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-3">
                    {job.formation.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <div className="flex flex-wrap gap-1.5">
                {job.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 text-xs bg-secondary text-secondary-foreground rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Projects - HR View */}
      <section>
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
          <Server size={16} />
          Proyectos
        </h2>
        <div className="grid gap-4">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border bg-card transition-all duration-200 ${
                project.isLiveProject 
                  ? 'border-green-500/30 hover:border-green-500/50' 
                  : 'border-border hover:border-primary/30'
              }`}
            >
              <div className="flex items-start gap-4">
                {/* Icons */}
                <div className="shrink-0 flex flex-wrap gap-1 w-16">
                  {project.icons.map((Icon, i) => (
                    <Icon key={i} className="w-4 h-4 text-muted-foreground" />
                  ))}
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-foreground text-sm">{project.title}</h3>
                    <span className="px-1.5 py-0.5 text-[9px] font-medium bg-secondary text-muted-foreground rounded">
                      {project.category}
                    </span>
                    {project.isLiveProject && (
                      <span className="flex items-center gap-1 px-1.5 py-0.5 text-[9px] font-medium bg-green-500/10 text-green-600 rounded">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        LIVE
                      </span>
                    )}
                  </div>
                  
                  {/* Production Note for live project */}
                  {project.isLiveProject && (
                    <p className="text-[10px] text-green-600 mb-2 italic">
                      This portfolio is the live production deployment of this project.
                    </p>
                  )}
                  
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tech badges inline - show all */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-[10px] bg-secondary text-secondary-foreground rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex items-center gap-3">
                    {project.isLiveProject ? (
                      <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-1 text-xs text-green-600 hover:text-green-500"
                      >
                        <Globe size={12} />
                        You are here
                      </button>
                    ) : (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-primary hover:underline"
                      >
                        <Globe size={12} />
                        Ver Demo
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
                    >
                      <Github size={12} />
                      Repositorio
                    </a>
                    {project.videoUrl && (
                      <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-red-500 hover:text-red-400"
                      >
                        <Youtube size={12} />
                        Video
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
          <GraduationCap size={16} />
          Educacion
        </h2>
        <div className="space-y-3">
          {education.map((edu, index) => (
            <div key={index} className="border-l-2 border-border pl-4">
              <h3 className="font-semibold text-foreground">{edu.degree}</h3>
              {edu.specialization && (
                <p className="text-sm text-primary font-medium">{edu.specialization}</p>
              )}
              <p className="text-sm text-muted-foreground">{edu.institution}</p>
              <p className="text-xs text-muted-foreground">
                {edu.period} | {edu.location}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Insignias y Formacion Tecnica - Grouped HR View */}
      <section>
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
          <Award size={16} />
          Insignias y Formacion Tecnica
        </h2>
        
        {/* Red Hat Group */}
        <div className="mb-4">
          <h3 className="text-xs font-medium text-red-600 uppercase tracking-wider mb-2 flex items-center gap-2">
            <SiRedhat className="w-4 h-4" />
            Red Hat
          </h3>
          <div className="grid gap-2">
            {redHatBadges.map((cert, index) => (
              <div
                key={index}
                className="group flex items-center gap-3 p-2.5 rounded-lg border border-border bg-card/50 hover:border-red-500/30 transition-all duration-200"
              >
                <div className="shrink-0 w-8 h-8 rounded-md flex items-center justify-center" style={{ backgroundColor: `${cert.color}10` }}>
                  <cert.icon className="w-4 h-4" style={{ color: cert.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-medium text-foreground">{cert.name}</h3>
                    <CheckCircle size={12} className="shrink-0 text-green-500" />
                  </div>
                  <div className="text-xs text-muted-foreground">{cert.date}</div>
                </div>
                {cert.pdfUrl && (
                  <a href={cert.pdfUrl} target="_blank" rel="noopener noreferrer" className="shrink-0 p-1.5 text-muted-foreground hover:text-red-500 transition-colors">
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Palo Alto Group */}
        <div>
          <h3 className="text-xs font-medium text-orange-600 uppercase tracking-wider mb-2 flex items-center gap-2">
            <SiPaloaltonetworks className="w-4 h-4" />
            Palo Alto Networks
          </h3>
          <div className="grid gap-2">
            {paloAltoBadges.map((cert, index) => (
              <div
                key={index}
                className="group flex items-center gap-3 p-2.5 rounded-lg border border-border bg-card/50 hover:border-orange-500/30 transition-all duration-200"
              >
                <div className="shrink-0 w-8 h-8 rounded-md flex items-center justify-center" style={{ backgroundColor: `${cert.color}10` }}>
                  <cert.icon className="w-4 h-4" style={{ color: cert.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-medium text-foreground">{cert.name}</h3>
                    <CheckCircle size={12} className="shrink-0 text-green-500" />
                  </div>
                  <div className="text-xs text-muted-foreground">{cert.date}</div>
                </div>
                {cert.pdfUrl && (
                  <a href={cert.pdfUrl} target="_blank" rel="noopener noreferrer" className="shrink-0 p-1.5 text-muted-foreground hover:text-orange-500 transition-colors">
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills - Compact Badges */}
      <section>
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
          <Server size={16} />
          Habilidades Tecnicas
        </h2>
        <div className="space-y-2">
          {techStackCategories.map((category) => (
            <div key={category.category} className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-medium text-muted-foreground uppercase w-24 shrink-0">
                {category.category}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {category.items.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 text-xs bg-secondary text-secondary-foreground rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section>
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
          Idiomas
        </h2>
        <div className="flex flex-wrap gap-4">
          {languages.map((lang, index) => (
            <div key={index} className="text-sm">
              <span className="font-medium text-foreground">{lang.name}:</span>
              <span className="text-muted-foreground ml-1">{lang.level}</span>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

// ============================================
// VISTA TECHNICAL - ESTILO OSCURO VISUAL
// ============================================

function TechnicalView() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-10"
    >
      {/* Premium Terminal Header */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="terminal-window"
      >
        <div className="terminal-header">
          <div className="terminal-dots">
            <span className="dot-red" />
            <span className="dot-yellow" />
            <span className="dot-green" />
          </div>
          <span className="text-xs text-muted-foreground ml-2 font-mono opacity-60">
            ~ / portfolio
          </span>
          <span className="text-xs text-muted-foreground ml-auto font-mono">
            whoami.sh
          </span>
        </div>
        <div className="p-6 font-mono text-sm space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-green-400">$</span>
            <span className="text-foreground typing-effect">cat profile.json</span>
          </div>
          <pre className="text-muted-foreground pl-4 leading-loose text-xs sm:text-sm">
{`{
  "name": "${personalInfo.name}",
  "role": "${personalInfo.title}",
  "location": "${personalInfo.location}",
  "contact": {
    "email": "${personalInfo.email}",
    "github": "${personalInfo.github}",
    "linkedin": "${personalInfo.linkedin}"
  },
  "skills": ["RHEL", "Ansible", "Docker", "Terraform", "AWS"],
  "status": "open_to_work",
  "available": true
}`}
          </pre>
          <div className="flex items-center gap-2 pt-2 border-t border-border/30">
            <span className="text-green-400">$</span>
            <span className="w-2 h-5 bg-primary cursor-blink rounded-sm" />
          </div>
        </div>
      </motion.section>

      {/* Tech Stack - Compact Badges */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="section-header">
          <h2>tech-stack</h2>
        </div>
        <div className="space-y-2">
          {techStackCategories.map((category) => (
            <div key={category.category} className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-mono text-primary uppercase w-28 shrink-0">
                {category.category}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {category.items.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Insignias y Formacion Tecnica - Grouped */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="section-header">
          <h2>badges</h2>
        </div>
        
        {/* Red Hat Group */}
        <div className="mb-6">
          <h3 className="text-xs font-mono text-red-500 uppercase tracking-wider mb-3 flex items-center gap-2">
            <SiRedhat className="w-4 h-4" />
            Red Hat
          </h3>
          <div className="space-y-1.5">
            {redHatBadges.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index }}
                className="group flex items-center gap-3 px-3 py-2.5 rounded-md bg-[#0d1117]/80 border border-border/40 hover:border-red-500/40 hover:bg-[#0d1117] transition-all duration-200"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.5)]" />
                <cert.icon className="w-4 h-4 shrink-0" style={{ color: cert.color }} />
                <span className="font-mono text-xs text-foreground group-hover:text-red-400 transition-colors flex-1">
                  {cert.name}
                </span>
                <span className="text-[10px] text-muted-foreground font-mono">{cert.date}</span>
                {cert.pdfUrl && (
                  <a href={cert.pdfUrl} target="_blank" rel="noopener noreferrer" className="shrink-0 p-1 text-muted-foreground hover:text-red-400 transition-colors">
                    <ExternalLink size={12} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Palo Alto Group */}
        <div>
          <h3 className="text-xs font-mono text-orange-500 uppercase tracking-wider mb-3 flex items-center gap-2">
            <SiPaloaltonetworks className="w-4 h-4" />
            Palo Alto Networks
          </h3>
          <div className="space-y-1.5">
            {paloAltoBadges.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index }}
                className="group flex items-center gap-3 px-3 py-2.5 rounded-md bg-[#0d1117]/80 border border-border/40 hover:border-orange-500/40 hover:bg-[#0d1117] transition-all duration-200"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.5)]" />
                <cert.icon className="w-4 h-4 shrink-0" style={{ color: cert.color }} />
                <span className="font-mono text-xs text-foreground group-hover:text-orange-400 transition-colors flex-1">
                  {cert.name}
                </span>
                <span className="text-[10px] text-muted-foreground font-mono">{cert.date}</span>
                {cert.pdfUrl && (
                  <a href={cert.pdfUrl} target="_blank" rel="noopener noreferrer" className="shrink-0 p-1 text-muted-foreground hover:text-orange-400 transition-colors">
                    <ExternalLink size={12} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects - HORSEBIT Featured + Grid */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="section-header">
          <h2>projects</h2>
        </div>
        
        {/* DevOps Portfolio Platform - Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="terminal-window mb-6"
        >
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot-red" />
              <span className="dot-yellow" />
              <span className="dot-green" />
            </div>
            <span className="text-xs text-muted-foreground ml-2 font-mono opacity-60">~/projects</span>
            <span className="px-2.5 py-1 text-[10px] font-mono bg-primary/15 text-primary rounded-md border border-primary/20 ml-auto">
              FEATURED
            </span>
          </div>
          <div className="p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">{otherProjects[0].title}</h3>
                <span className="px-2 py-0.5 text-[10px] font-mono bg-primary/10 text-primary border border-primary/20 rounded">
                  {otherProjects[0].category}
                </span>
              </div>
            </div>
            
            {/* Production Status Note */}
            <div className="mb-5 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-mono text-green-400 font-semibold">Running in Production on AWS ECS Fargate</span>
              </div>
              <p className="text-xs text-muted-foreground pl-4">
                This portfolio is the live production environment deployed with Terraform, Docker and AWS.
              </p>
            </div>
            
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              {otherProjects[0].description}
            </p>
            
            {/* Lessons Learned */}
            {otherProjects[0].lessonsLearned && (
              <div className="mb-5">
                <h4 className="text-xs font-mono text-primary uppercase tracking-wider mb-2">Lessons Learned</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                  {otherProjects[0].lessonsLearned.map((lesson, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle size={12} className="text-green-500 mt-0.5 shrink-0" />
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="flex flex-wrap gap-3 mb-5">
              {otherProjects[0].icons.map((Icon, i) => (
                <Icon key={i} className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mb-5">
              {otherProjects[0].technologies.map((tech) => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border/30">
              {otherProjects[0].isLiveProject ? (
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-mono bg-green-600/90 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  <Globe size={16} />
                  You are here
                </button>
              ) : (
                <a
                  href={otherProjects[0].demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-mono bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Globe size={16} />
                  Ver Demo
                </a>
              )}
              <a
                href={otherProjects[0].githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-mono bg-secondary text-secondary-foreground border border-border rounded-lg hover:border-primary/40 transition-colors"
              >
                <Github size={16} />
                Repositorio
              </a>
              {otherProjects[0].videoUrl && (
                <a
                  href={otherProjects[0].videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-mono bg-red-600/90 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  <Youtube size={16} />
                  Video Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Other Projects - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {otherProjects.slice(1).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + 0.1 * index }}
              className="group card-premium p-5 flex flex-col h-full hover:border-primary/40"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="px-2 py-0.5 text-[10px] font-mono bg-primary/10 text-primary border border-primary/20 rounded">
                  {project.category}
                </span>
              </div>
              <h3 className="font-mono text-sm font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.icons.map((Icon, i) => (
                  <Icon key={i} className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 text-[9px] font-mono bg-secondary text-secondary-foreground border border-border/50 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 pt-3 border-t border-border/30 mt-auto">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-mono bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity"
                >
                  <Globe size={12} />
                  Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-mono bg-secondary text-secondary-foreground border border-border rounded hover:border-primary/40 transition-colors"
                >
                  <Github size={12} />
                  Repo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Experience Timeline - Premium */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="section-header">
          <h2>experience</h2>
        </div>
        <div className="space-y-4">
          {experience.map((job, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className="relative pl-8 pb-6 border-l-2 border-border hover:border-primary/50 transition-colors"
            >
              <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary border-4 border-background shadow-[0_0_10px_rgba(var(--primary),0.3)]" />
              <div className="card-premium p-5">
                <div className="mb-3">
                  <h3 className="font-mono text-sm font-semibold text-foreground">{job.position}</h3>
                  <p className="text-sm text-primary font-mono">{job.company}</p>
                  <p className="text-xs text-muted-foreground font-mono mt-1">
                    {job.period} | {job.location}
                  </p>
                </div>
                <ul className="space-y-2">
                  {job.description.map((item, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-0.5">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-border/30">
                  {job.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Links - Premium */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-wrap gap-4 pt-6 border-t border-border/50"
      >
        <a
          href={`mailto:${personalInfo.email}`}
          className="btn-premium glass-card flex items-center gap-2 px-5 py-3 text-sm font-mono"
        >
          <Mail size={16} className="text-primary" />
          {personalInfo.email}
        </a>
        <a
          href={`https://${personalInfo.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-premium glass-card flex items-center gap-2 px-5 py-3 text-sm font-mono"
        >
          <Github size={16} className="text-primary" />
          GitHub
          <ExternalLink size={12} className="opacity-50" />
        </a>
        <a
          href={`https://${personalInfo.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-premium glass-card flex items-center gap-2 px-5 py-3 text-sm font-mono"
        >
          <Linkedin size={16} className="text-primary" />
          LinkedIn
          <ExternalLink size={12} className="opacity-50" />
        </a>
      </motion.section>
    </motion.div>
  );
}
