const fs = require('fs');

const content = `"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, Calendar, MapPin, GraduationCap } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    id: 1,
    role: "Full Stack Development Intern",
    company: "Bling Square Events",
    type: "Internship",
    duration: "Jan 2025 - April 2026",
    location: "Mumbai, India",
    description: "Developed and deployed live web applications. Built and integrated RESTful APIs, managed AWS EC2 deployment, implemented secure auth, and automated business workflows reducing manual effort by 75%.",
    skills: ["React.js", "Django", "AWS EC2", "REST APIs", "Node.js"],
  }
];

const education = [
  {
    id: 1,
    school: "University of Mumbai",
    degree: "Bachelor of Science in Computer Science",
    duration: "2023 - 2026",
    grade: "8.48 CGPA",
    description: "Built strong foundations in Computer Science. Participated in multiple activities developing leadership, teamwork, and communication skills.",
    skills: ["Data Structures", "OOP", "Algorithm Design"]
  }
];

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-24 bg-background relative border-t border-border overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl" ref={containerRef}>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold mb-4">
            Journey
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-space)]">Experience & Education</h2>
        </motion.div>

        <div className="mb-20 relative">
          <div className="flex justify-center items-center gap-3 mb-10 text-foreground">
            <Briefcase className="text-primary w-6 h-6" />
            <h3 className="text-2xl font-bold font-[family-name:var(--font-space)]">Work Experience</h3>
          </div>
          
          <div className="relative space-y-12">
            <div className="absolute top-0 bottom-0 left-[20px] md:left-1/2 md:-ml-[1px] w-[2px] bg-border z-0">
              <motion.div 
                className="absolute top-0 w-full bg-primary origin-top z-10" 
                style={{ scaleY, height: "100%" }}
              />
            </div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-primary-foreground shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-20 transition-transform group-hover:scale-125 duration-300">
                  <Briefcase className="w-4 h-4" />
                </div>

                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-card border border-border hover:border-primary/50 shadow-sm transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-primary mb-2 font-mono md:group-even:justify-start md:group-odd:justify-end">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{exp.duration}</span>
                    <span className="text-muted-foreground">•</span>
                    <span>{exp.type}</span>
                  </div>
                  
                  <div className="md:group-even:text-left md:group-odd:text-right">
                    <h3 className="text-xl font-bold text-card-foreground font-[family-name:var(--font-space)]">{exp.role}</h3>
                    <h4 className="text-muted-foreground font-medium mb-1 flex items-center md:group-even:justify-start md:group-odd:justify-end"><MapPin className="w-3.5 h-3.5 mr-1"/>{exp.company}</h4>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mt-4 mb-4">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 md:group-even:justify-start md:group-odd:justify-end">
                      {exp.skills.map(skill => (
                        <span key={skill} className="px-2 py-1 rounded-full bg-muted text-muted-foreground text-xs font-mono border border-border">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative">
           <div className="flex justify-center items-center gap-3 mb-10 mt-20 text-foreground">
            <GraduationCap className="text-cyan-500 w-6 h-6" />
            <h3 className="text-2xl font-bold text-foreground font-[family-name:var(--font-space)]">Education</h3>
          </div>
          
          <div className="space-y-12 relative">
            <div className="absolute top-0 bottom-0 left-[20px] md:left-1/2 md:-ml-[1px] w-[2px] bg-border z-0">
              <motion.div 
                className="absolute top-0 w-full bg-cyan-500 origin-top z-10" 
                style={{ scaleY, height: "100%" }}
              />
            </div>

            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-cyan-500 text-white shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-20 transition-transform group-hover:scale-125 duration-300">
                  <GraduationCap className="w-4 h-4" />
                </div>

                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-card border border-border hover:border-cyan-500/50 shadow-sm transition-all duration-300 hover:shadow-cyan-500/20 hover:shadow-lg">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-cyan-500 mb-2 font-mono md:group-even:justify-start md:group-odd:justify-end">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{edu.duration}</span>
                  </div>
                  
                  <div className="md:group-even:text-left md:group-odd:text-right">
                    <h3 className="text-xl font-bold text-card-foreground font-[family-name:var(--font-space)]">{edu.degree}</h3>
                    <h4 className="text-muted-foreground font-medium mb-1"><span className="text-foreground">{edu.school}</span> • {edu.grade}</h4>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mt-4 mb-4">
                      {edu.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 md:group-even:justify-start md:group-odd:justify-end">
                      {edu.skills.map(skill => (
                        <span key={skill} className="px-2 py-1 rounded-full bg-muted text-muted-foreground text-xs font-mono border border-border">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
`;
fs.writeFileSync('src/components/sections/Experience.tsx', content);
`;