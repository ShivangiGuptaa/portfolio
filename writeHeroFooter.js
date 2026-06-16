const fs = require('fs');

const heroContent = `"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-[20%] left-[20%] w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-6 relative z-10 font-[family-name:var(--font-space)]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, ease: "easeOut" }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm shadow-sm text-foreground text-sm font-medium mb-8"
          >
            <Terminal className="w-4 h-4 text-primary" />
            <span>Hello World!</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">Shivangi Gupta</span>
            <br />
            Full Stack Developer.
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-[family-name:var(--font-outfit)] leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Building robust applications and intelligent APIs. <br className="hidden md:block" /> Dedicated to writing clean code and creating impactful solutions.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Magnetic>
              <a 
                href="#projects"
                className="group flex items-center gap-2 px-8 py-4 rounded-full bg-foreground text-background font-semibold text-lg hover:bg-primary transition-all shadow-xl"
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Magnetic>
            <Magnetic>
              <a 
                href="#contact"
                className="px-8 py-4 rounded-full border border-border bg-card/50 backdrop-blur-sm text-foreground font-semibold text-lg hover:bg-muted transition-all shadow-sm"
              >
                Contact Me
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-sm font-medium tracking-widest uppercase text-xs">Scroll Down</span>
        <motion.div 
          className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent"
          animate={{ height: ["0px", "48px", "0px"], y: [0, 24, 48] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </section>
  );
}
`;

const footerContent = `import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8 relative overflow-hidden">
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold font-[family-name:var(--font-space)] text-foreground tracking-tight mb-2">Shivangi Gupta</h3>
            <p className="text-muted-foreground">Full Stack Developer.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/ShivangiGuptaa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-card hover:text-foreground hover:border-foreground transition-all"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/shivangi-gupta-90a356340/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-card hover:text-cyan-500 hover:border-cyan-500 transition-all"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:shivangi.gupta9324@gmail.com" 
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-card hover:text-primary hover:border-primary transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 border-t border-border pt-8">
          <div>
            <h4 className="text-foreground font-semibold mb-4 font-[family-name:var(--font-space)]">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-muted-foreground hover:text-cyan-500 transition-colors text-sm">About</Link></li>
              <li><Link href="#experience" className="text-muted-foreground hover:text-cyan-500 transition-colors text-sm">Experience</Link></li>
              <li><Link href="#projects" className="text-muted-foreground hover:text-cyan-500 transition-colors text-sm">Projects</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-cyan-500 transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {currentYear} Shivangi Gupta. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Built with Next.js, Tailwind CSS & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
`;

fs.writeFileSync('src/components/sections/Hero.tsx', heroContent);
fs.writeFileSync('src/components/layout/Footer.tsx', footerContent);
console.log('Hero and Footer replaced');