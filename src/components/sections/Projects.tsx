"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { useRef, useState } from "react";

const projects = [
  {
    title: "Sarvagun ERP",
    description:
      "A comprehensive ERP system for Bling Square Events. Features employee management, attendance tracking, personal calendar, payroll, and real-time HR analytics.",
    image: "/sarvagun.png",
    glowColor: "rgba(139,92,246,0.35)",
    borderColor: "hover:border-violet-500/50",
    live: "https://sarvagun.blingsquare.in",
    github: "https://github.com",
    tech: ["React.js", "Spring Boot", "Java", "MySQL", "REST API"],
  },
  {
    title: "Attendance Module",
    description:
      "Real-time attendance system inside Sarvagun ERP. Punch in/out, track active sessions, session history, and monitor total work hours with live clock & location capture.",
    image: "/attendance.png",
    glowColor: "rgba(16,185,129,0.35)",
    borderColor: "hover:border-emerald-500/50",
    live: "https://sarvagun.blingsquare.in",
    github: "https://github.com",
    tech: ["Java", "Spring Boot", "React.js", "MySQL", "REST API"],
  },
  {
    title: "BlingHire Portal",
    description:
      "Recruitment portal for the jewelry industry. Smart job listings, candidate filtering, application tracking, and automated interview scheduling.",
    image: "/blinghire.png",
    glowColor: "rgba(168,85,247,0.35)",
    borderColor: "hover:border-purple-500/50",
    live: "https://hire.blingsquare.in",
    github: "https://github.com",
    tech: ["React.js", "Node.js", "MongoDB", "JWT Auth", "Express.js"],
  },
  {
    title: "OmniAI Platform",
    description:
      "AI-powered content generation platform integrating multiple LLMs. Generate text, images, and code through a unified conversational interface with model switching.",
    image: "/omni_ai.png",
    glowColor: "rgba(34,211,238,0.35)",
    borderColor: "hover:border-cyan-500/50",
    github: "https://github.com",
    tech: ["React", "Python", "FastAPI", "OpenAI API", "MongoDB"],
  },
];

// Duplicate for seamless infinite loop
const loopedProjects = [...projects, ...projects];

/* ── Single card ── */
function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative flex-shrink-0 w-[320px] rounded-2xl border border-border bg-card overflow-hidden shadow-sm ${project.borderColor} transition-all duration-300 cursor-pointer`}
      style={{
        boxShadow: hovered ? `0 20px 60px -10px ${project.glowColor}` : undefined,
      }}
    >
      {/* Glow overlay */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 z-0 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(300px circle at 50% 0%, ${project.glowColor}, transparent 70%)`,
        }}
      />

      {/* IMAGE */}
      <div className="relative w-full h-44 overflow-hidden border-b border-border bg-muted">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="320px"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
          style={{ transform: hovered ? "scale(1.07)" : "scale(1)" }}
        />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-card to-transparent z-10" />

        {/* Hover overlay */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0 bg-background/55 dark:bg-black/55 backdrop-blur-[2px] flex items-center justify-center gap-3 z-20"
        >
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 8, opacity: 0 }}
              animate={hovered ? { y: 0, opacity: 1 } : { y: 8, opacity: 0 }}
              transition={{ delay: 0.05 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-4 py-2 bg-foreground text-background rounded-full text-xs font-semibold shadow-lg hover:bg-primary transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" /> Live
            </motion.a>
          )}
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 8, opacity: 0 }}
              animate={hovered ? { y: 0, opacity: 1 } : { y: 8, opacity: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-4 py-2 bg-card/90 text-foreground rounded-full text-xs font-semibold border border-border shadow-lg hover:border-primary/50 transition-colors"
            >
              <FaGithub className="w-3.5 h-3.5" /> Code
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-sm font-bold text-foreground font-[family-name:var(--font-space)]">
            {project.title}
          </h3>
          <div className="flex gap-1 shrink-0">
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </motion.a>
            )}
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -10 }}
                className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
              >
                <FaGithub className="w-3.5 h-3.5" />
              </motion.a>
            )}
          </div>
        </div>

        <p className="text-muted-foreground text-xs leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded-full text-xs font-mono bg-muted text-muted-foreground border border-border"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Infinite marquee ── */
function Marquee({ speed = 0.5 }: { speed?: number }) {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const CARD_WIDTH = 320 + 24; // card + gap
  const TOTAL = CARD_WIDTH * projects.length;

  useAnimationFrame((_, delta) => {
    if (paused) return;
    const current = x.get();
    const next = current - speed * (delta / 16);
    x.set(next <= -TOTAL ? 0 : next);
  });

  return (
    <div
      ref={containerRef}
      className="overflow-hidden w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10" />
      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div
        style={{ x }}
        className="flex gap-6 w-max py-4 px-2"
      >
        {loopedProjects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </motion.div>
    </div>
  );
}

/* ── Section ── */
export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-background relative border-t border-border overflow-hidden"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-primary/5 blur-[100px] rounded-full" />

      <div className="relative z-10">
        {/* Header */}
        <div className="container mx-auto px-6 max-w-5xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-500 text-xs font-semibold mb-4">
              Featured Work
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight font-[family-name:var(--font-space)]">
                Selected Projects
              </h2>
              <p className="text-muted-foreground text-sm max-w-xs md:text-right">
                Hover to pause · Click to visit
              </p>
            </div>
          </motion.div>
        </div>

        {/* Scrolling marquee – full width */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Marquee speed={0.6} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
