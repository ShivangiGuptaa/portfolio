"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Software Engineering Job Simulation",
    issuer: "JPMorgan Chase & Co.",
    date: "Dec 2025",
    link: "/jpmorgan-certificate.pdf",
  },
  {
    title: "Gemini for Google Workspace",
    issuer: "Google & Simplilearn",
    date: "July 2025",
    link: "/gemini-certificate.pdf",
  },
  {
    title: "Introduction to Generative AI Studio",
    issuer: "Google & Simplilearn",
    date: "July 2025",
    link: "/genai-certificate.pdf",
  },
  {
    title: "Mastering the Basics of Git: A Step-by-Step Guide",
    issuer: "Udemy",
    date: "June 2025",
    link: "/git-certificate.jpg",
  },
  {
    title: "Computer Programming PLSQL with Grade A+",
    issuer: "Anubhav Computer Institute",
    date: "March 2025",
    link: "/plsql-certificate.pdf",
  },
  {
    title: "IBM Artificial Intelligence Certification",
    issuer: "IBM",
    date: "2024",
    link: "#",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-12 md:py-24 bg-background relative border-t border-border overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-500 text-xs font-semibold mb-4">
            Achievements
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-space)]">
            Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="p-6 rounded-2xl border border-border bg-card/80 backdrop-blur-sm hover:bg-card hover:border-yellow-500/50 hover:shadow-[0_8px_30px_rgba(234,179,8,0.15)] transition-all duration-300 group shadow-sm flex flex-col h-full cursor-pointer relative overflow-hidden"
              onClick={() => cert.link !== "#" && window.open(cert.link, "_blank")}
            >
              {/* Subtle hover shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/0 via-yellow-500/5 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {cert.link !== "#" && (
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-0 translate-x-2">
                  <ExternalLink className="w-5 h-5 text-yellow-500/70" />
                </div>
              )}
              <Award className="w-8 h-8 text-yellow-500 mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
              <h3 className="text-lg font-bold text-foreground mb-2 leading-tight flex-grow group-hover:text-yellow-500/90 transition-colors duration-300 z-10">{cert.title}</h3>
              <div className="flex justify-between items-center text-sm text-muted-foreground mt-auto z-10">
                <span className="font-medium">{cert.issuer}</span>
                <span className="bg-muted px-2 py-1 rounded-md text-xs">{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
