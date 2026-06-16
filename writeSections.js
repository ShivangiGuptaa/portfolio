const fs = require('fs');

const aboutContent = `"use client";

import { motion } from "framer-motion";
import { Terminal, Database, Server, Code2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-background relative border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-500 text-xs font-semibold mb-4">
            About Me
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-space)]">Who am I?</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main big card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 p-8 md:p-10 rounded-3xl border border-border bg-card backdrop-blur-sm hover:border-primary/50 transition-colors relative overflow-hidden group shadow-sm"
          >
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] dark:opacity-10 group-hover:opacity-20 transition-opacity">
              <Code2 className="w-48 h-48 text-cyan-500" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-6 relative z-10 font-[family-name:var(--font-space)] tracking-tight">Full Stack Developer</h3>
            <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed relative z-10 w-full md:w-5/6">
              <p>
                I am a Full Stack Developer with hands-on experience in building end-to-end web applications, covering frontend development, backend APIs, testing, and production deployment. I enjoy taking complete ownership of projects—from designing responsive user interfaces to developing secure and scalable backend systems and ensuring smooth deployments.
              </p>
              <p>
                During my internship at Bling Square Events, I worked on production-grade recruitment and management platforms. I contributed extensively to feature development, implemented secure authentication systems, managed AWS deployments, and automated business workflows to reduce manual effort.
              </p>
              <p>
                I specialize in React.js, Node.js, Python, Java, and Spring Boot, and I am actively integrating AI-driven solutions such as LLMs. I am passionate about writing clean, maintainable code, continuously learning new technologies, and building impactful real-world products.
              </p>
            </div>
          </motion.div>

          {/* Side stacking small cards */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 rounded-3xl border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm hover:bg-cyan-500/10 transition-colors flex flex-col justify-center items-center text-center flex-grow shadow-sm"
            >
              <Database className="w-10 h-10 text-cyan-500 mb-4" />
              <h4 className="text-4xl font-extrabold text-foreground mb-2 font-[family-name:var(--font-space)]">1.5+</h4>
              <p className="text-cyan-500 text-xs font-bold uppercase tracking-[0.2em]">Years Experience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-8 rounded-3xl border border-primary/20 bg-primary/5 backdrop-blur-sm hover:bg-primary/10 transition-colors flex flex-col justify-center items-center text-center flex-grow shadow-sm"
            >
              <Server className="w-10 h-10 text-primary mb-4" />
              <h4 className="text-4xl font-extrabold text-foreground mb-2 font-[family-name:var(--font-space)]">10+</h4>
              <p className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Projects Built</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
`;

const contactContent = `"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-background relative border-t border-border">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-cyan-600/10 blur-[120px] rounded-full point-events-none" />
      
      <div className="container relative z-10 mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Let's Connect</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl border border-border bg-card flex items-center justify-center shrink-0 shadow-sm">
                <Mail className="w-5 h-5 text-cyan-500" />
              </div>
              <div>
                <h3 className="text-foreground font-semibold mb-1">Email</h3>
                <a href="mailto:shivangi.gupta9324@gmail.com" className="text-muted-foreground hover:text-cyan-500 transition-colors">
                  shivangi.gupta9324@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl border border-border bg-card flex items-center justify-center shrink-0 shadow-sm">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-foreground font-semibold mb-1">Phone</h3>
                <a href="tel:9324339387" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 9324339387
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl border border-border bg-card flex items-center justify-center shrink-0 shadow-sm">
                <MapPin className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h3 className="text-foreground font-semibold mb-1">Location</h3>
                <p className="text-muted-foreground">Mumbai, India / Remote</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="p-8 rounded-3xl border border-border bg-card shadow-lg"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="shivangi.gupta9324@gmail.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-foreground text-background font-semibold hover:bg-primary transition-colors disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send className="w-4 h-4" />}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync('src/components/sections/About.tsx', aboutContent);
fs.writeFileSync('src/components/sections/Contact.tsx', contactContent);
console.log('Done writing sections');
