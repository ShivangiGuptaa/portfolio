const fs = require('fs');

const projectsContent = `"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { ExternalLink, Cpu, Users, CheckSquare } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useRef } from "react";

const projects = [
  {
    title: "LLM-Based Daily Task Management System",
    description: "An AI-powered system enabling workflow automation through natural language prompts. Built an LLM-based chatbot to automate tasks such as leave applications and routine operations.",
    icon: <Cpu className="w-16 h-16 text-purple-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" />,
    color: "from-purple-500/20 to-pink-500/20",
    tech: ["Java", "Spring Boot", "MySQL", "React.js", "LLM API"],
    github: "https://github.com/ShivangiGuptaa",
  },
  {
    title: "Hiring Portal",
    description: "A live hiring platform centralizing 80% of candidate data. Features candidate and recruiter dashboards with real-time tracking, multi-stage interview workflows, and automated email verification.",
    icon: <Users className="w-16 h-16 text-cyan-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />,
    color: "from-cyan-500/20 to-blue-500/20",
    tech: ["Python", "Django", "PHP", "MySQL", "AWS EC2"],
    live: "http://hire.blingsquare.in",
  }
];

function ProjectCard({ project, index }: { project: any, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useMotionTemplate\`\${smoothY}deg\`;
  const rotateY = useMotionTemplate\`\${smoothX}deg\`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 10;
    const y = -(e.clientY - top - height / 2) / 10;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const bgClasses = "absolute inset-0 bg-gradient-to-tr " + project.color + " opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl";
  const iconContainerClasses = "relative aspect-[16/10] rounded-2xl overflow-hidden bg-muted mb-6 flex flex-col items-center justify-center border border-border shadow-inner";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      className="group relative rounded-3xl border border-border bg-card p-3 transition-colors hover:border-primary/50 overflow-hidden"
    >
      <div 
        className={bgClasses}
        style={{ transform: "translateZ(-1px)" }} 
      />
      
      <div className={iconContainerClasses} style={{ transform: "translateZ(30px)" }}>
        <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.2]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        
        <motion.div 
          className="relative z-10 transition-transform duration-700 group-hover:scale-110"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
        >
          {project.icon}
        </motion.div>
        
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm z-20">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-4 bg-foreground text-background rounded-full hover:scale-110 active:scale-95 shadow-xl transition-all">
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-card text-foreground rounded-full border border-border hover:scale-110 active:scale-95 shadow-xl transition-all">
              <FaGithub className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-2" style={{ transform: "translateZ(20px)" }}>
        <h3 className="text-2xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors font-[family-name:var(--font-space)]">{project.title}</h3>
        <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="px-3 py-1.5 rounded-full text-xs font-mono bg-muted text-muted-foreground border border-border shadow-sm">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-background relative border-t border-border select-none perspective-[2000px]">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold mb-4">
              Featured Work
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight font-[family-name:var(--font-space)]">Selected Projects</h2>
          </div>
          <p className="text-muted-foreground max-w-md text-lg">
            A showcase of my technical expertise, focusing on AI integration, automated workflows, and scalable architectures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync('src/components/sections/Projects.tsx', projectsContent);

console.log('Done!');