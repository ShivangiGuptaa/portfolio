const fs = require('fs');

const skillsContent = `"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaGithub, FaDatabase, FaJava, FaPhp } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript, SiDjango, SiSpringboot, SiMysql, SiMongodb, SiOpenai } from "react-icons/si";
import { GitBrand } from "lucide-react"; 

const allSkills = [
  { name: "React", bg: "hover:shadow-[0_0_20px_rgba(97,218,251,0.3)]", icon: <FaReact className="text-[#61DAFB] w-8 h-8 group-hover:scale-110 transition-transform" /> },
  { name: "Next.js", bg: "hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]", icon: <SiNextdotjs className="text-black dark:text-white w-8 h-8 group-hover:scale-110 transition-transform" /> },
  { name: "TypeScript", bg: "hover:shadow-[0_0_20px_rgba(49,120,198,0.3)]", icon: <SiTypescript className="text-[#3178C6] w-8 h-8 group-hover:scale-110 transition-transform" /> },
  { name: "Tailwind CSS", bg: "hover:shadow-[0_0_20px_rgba(56,178,172,0.3)]", icon: <SiTailwindcss className="text-[#38B2AC] w-8 h-8 group-hover:scale-110 transition-transform" /> },
  { name: "JavaScript", bg: "hover:shadow-[0_0_20px_rgba(247,223,30,0.3)]", icon: <SiJavascript className="text-[#F7DF1E] w-8 h-8 group-hover:scale-110 transition-transform" /> },
  { name: "Python", bg: "hover:shadow-[0_0_20px_rgba(55,118,171,0.3)]", icon: <FaPython className="text-[#3776AB] w-8 h-8 group-hover:scale-110 transition-transform" /> },
  { name: "Java", bg: "hover:shadow-[0_0_20px_rgba(237,139,0,0.3)]", icon: <FaJava className="text-[#ED8B00] w-8 h-8 group-hover:scale-110 transition-transform" /> },
  { name: "Django", bg: "hover:shadow-[0_0_20px_rgba(9,46,32,0.3)]", icon: <SiDjango className="text-[#092E20] w-8 h-8 group-hover:scale-110 transition-transform" /> },
  { name: "Spring Boot", bg: "hover:shadow-[0_0_20px_rgba(109,179,63,0.3)]", icon: <SiSpringboot className="text-[#6DB33F] w-8 h-8 group-hover:scale-110 transition-transform" /> },
  { name: "PHP", bg: "hover:shadow-[0_0_20px_rgba(119,123,179,0.3)]", icon: <FaPhp className="text-[#777BB3] w-8 h-8 group-hover:scale-110 transition-transform" /> },
  { name: "MongoDB", bg: "hover:shadow-[0_0_20px_rgba(71,162,72,0.3)]", icon: <SiMongodb className="text-[#47A248] w-8 h-8 group-hover:scale-110 transition-transform" /> },
  { name: "MySQL", bg: "hover:shadow-[0_0_20px_rgba(68,121,161,0.3)]", icon: <SiMysql className="text-[#4479A1] w-8 h-8 group-hover:scale-110 transition-transform" /> },
  { name: "AWS EC2", bg: "hover:shadow-[0_0_20px_rgba(255,153,0,0.3)]", icon: <FaAws className="text-[#FF9900] w-8 h-8 group-hover:scale-110 transition-transform" /> },
  { name: "GitHub", bg: "hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]", icon: <FaGithub className="text-black dark:text-white w-8 h-8 group-hover:scale-110 transition-transform" /> },
  { name: "Generative AI", bg: "hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]", icon: <SiOpenai className="text-black dark:text-white w-8 h-8 group-hover:scale-110 transition-transform" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-background relative border-t border-border overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/5 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold mb-4">
            Technical Superpowers
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-space)]">Technologies I Forge With</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A dynamic collection of languages, frameworks, and architectures I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-12">
          {allSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
                delay: index * 0.05
              }}
              whileHover={{ y: -10, scale: 1.05 }}
              className={\`group flex flex-col items-center justify-center p-6 bg-card border border-border rounded-3xl hover:border-primary/50 transition-all cursor-pointer \${skill.bg} backdrop-blur-sm w-[120px] md:w-[150px] h-[120px] md:h-[150px]\`}
            >
              <div className="mb-4">
                {skill.icon}
              </div>
              <span className="text-xs md:text-sm font-medium text-muted-foreground group-hover:text-foreground text-center transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync('src/components/sections/Skills.tsx', skillsContent);
console.log('Skills replaced');
