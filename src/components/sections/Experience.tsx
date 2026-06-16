"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Full-stack Developer",
    company: "Bling Square Events",
    type: "Full-time",
    duration: "Mar 2026 - Present",
    location: "Mumbai, Maharashtra, India · Hybrid",
    description:
      "Spearheading development using React.js and Spring Boot. Building robust REST APIs and ensuring seamless frontend-backend integration for a production-grade platform.",
    skills: ["React.js", "Spring Boot", "REST API", "Java", "Next.js"],
  },
  {
    id: 2,
    role: "Full-stack Developer",
    company: "Bling Square Events",
    type: "Internship",
    duration: "Jul 2025 - Feb 2026",
    location: "Mumbai, Maharashtra, India · Hybrid",
    description:
      "Contributed extensively to feature development for a production-grade recruitment platform. Implemented secure authentication, resolved critical production & security issues, and improved overall application stability.",
    skills: ["React.js", "JavaScript (ES6+)", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
  },
  {
    id: 3,
    role: "Web Development Intern",
    company: "Bling Square Events",
    type: "Internship",
    duration: "Jan 2025 - Jun 2025",
    location: "Mumbai, Maharashtra, India",
    description:
      "Designed and built responsive, cross-browser compatible UI interfaces. Delivered clean, pixel-perfect components and built a solid foundation in modern frontend practices.",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Bootstrap", "Git"],
  },
  {
    id: 4,
    role: "Software Engineering Job Simulation",
    company: "JPMorgan Chase & Co.",
    type: "Simulation",
    duration: "Nov 2025 - Dec 2025",
    location: "Remote",
    description:
      "Gained hands-on experience in real-world backend engineering workflows. Successfully completed modules involving REST API Integration & Controllers, Kafka Integration, and H2 Database Integration.",
    skills: ["REST API", "Kafka", "H2 Database", "Backend Engineering", "Java"],
  },
];



export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-background relative border-t border-border overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-40 right-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute bottom-40 left-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-500 text-xs font-semibold mb-4">
            My Journey
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-space)] tracking-tight">
            Work Experience
          </h2>
        </motion.div>

        {/* ── Work Experience (Right-sided Timeline) ── */}
        <div className="mb-32">
          <div className="flex items-center gap-3 mb-12 ml-2 md:ml-4">
            <Briefcase className="text-purple-500 w-7 h-7" />
            <h3 className="text-3xl font-bold text-foreground font-[family-name:var(--font-space)] tracking-tight">
              Work Experience
            </h3>
          </div>

          <div className="relative">
            {/* The Timeline Line */}
            {/* Line is 2px wide. Dot is 48px (mobile) / 56px (desktop). Centers at 24px/28px. Left pos = center - 1px = 23px/27px */}
            <div className="absolute top-0 bottom-0 left-[23px] md:left-[27px] w-0.5 bg-gradient-to-b from-purple-500/50 via-border to-transparent" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
                  className="relative flex items-start gap-6 md:gap-10 group"
                >
                  {/* Timeline Dot */}
                  <div className="relative mt-1.5 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border-[4px] border-background bg-card shrink-0 z-10 transition-transform duration-300 group-hover:scale-110 shadow-sm">
                    <div className="w-3 h-3 rounded-full bg-purple-500 group-hover:shadow-[0_0_15px_4px_rgba(168,85,247,0.5)] transition-shadow duration-300" />
                  </div>

                  {/* Experience Card */}
                  <div className="flex-1 p-6 md:p-8 rounded-3xl border border-border bg-card/50 hover:bg-muted/40 transition-all duration-300 group-hover:border-purple-500/30 group-hover:shadow-[0_10px_40px_-15px_rgba(168,85,247,0.1)]">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground font-[family-name:var(--font-space)]">
                          {exp.role}
                        </h3>
                        <h4 className="text-muted-foreground font-medium mt-1 flex items-center gap-1.5 text-sm md:text-base">
                          <MapPin className="w-4 h-4 shrink-0" />
                          {exp.company}
                        </h4>
                      </div>
                      <div className="flex flex-col md:items-end gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 text-xs font-bold border border-purple-500/20 w-fit">
                          {exp.type}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-xl bg-background border border-border text-muted-foreground text-xs font-semibold group-hover:border-purple-500/20 group-hover:text-foreground transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
