"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, Sparkles } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="w-6 h-6" />,
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6" />,
    items: ["Django", "Spring Boot", "Python", "REST APIs"],
  },
  {
    category: "Databases",
    icon: <Database className="w-6 h-6" />,
    items: ["MySQL", "MongoDB"],
  },
  {
    category: "Cloud & DevOps",
    icon: <Code2 className="w-6 h-6" />,
    items: ["AWS EC2", "GitHub"],
  },
  {
    category: "AI & Automation",
    icon: <Sparkles className="w-6 h-6" />,
    items: ["Generative AI", "Prompt Engineering"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-black relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Technical Arsenal</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A comprehensive overview of the languages, frameworks, and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6">
                {skillGroup.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
