"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import Image from "next/image";
import Magnetic from "@/components/ui/Magnetic";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-background pt-24 md:pt-20">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-[20%] left-[20%] w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-4 md:px-6 relative z-10 font-[family-name:var(--font-space)] -mt-16 md:mt-0"
      >
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Mobile Profile Image with Premium Animations */}
          <motion.div 
            className="md:hidden relative w-48 h-48 mb-10"
            initial={{ opacity: 0, scale: 0.5, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
          >
            {/* Pulsing glow ring instead of spinning */}
            <motion.div 
              className="absolute -inset-4 rounded-full bg-primary/20 blur-[20px]"
              animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Floating Image Container */}
            <motion.div 
              className="w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl relative z-10"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image 
                src="/profile.jpg" 
                alt="Shivangi Gupta" 
                fill 
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">Shivangi Gupta</span>
            <br />
            Full Stack Developer.
          </motion.h1>
          
          <motion.p 
            className="text-base md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-[family-name:var(--font-outfit)] leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Building robust applications and intelligent APIs. <br className="hidden md:block" /> Dedicated to writing clean code and creating impactful solutions.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Magnetic>
              <motion.a 
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center gap-2 w-[240px] px-8 py-4 rounded-full bg-foreground text-background font-semibold text-lg hover:bg-primary transition-all shadow-xl"
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </Magnetic>
            <Magnetic>
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-[240px] px-8 py-4 rounded-full border border-border bg-card/50 backdrop-blur-sm text-foreground font-semibold text-lg hover:bg-muted transition-all shadow-sm"
              >
                Contact Me
              </motion.a>
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
