"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pb-20 pt-32">
      {/* Background gradients */}
      <div className="absolute inset-0 w-full h-full bg-black z-0" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[128px] mix-blend-screen" />

      <div className="container relative z-10 mx-auto px-6 max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-gray-300">Available for new opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6"
          >
            Shivangi <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Gupta</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl font-light"
          >
            Full Stack Developer | AI Enthusiast
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-14"
          >
            <Link
              href="#projects"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-black transition-colors hover:bg-gray-200"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-black/50 backdrop-blur-md px-8 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Download Resume
              <Download className="ml-2 h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-6"
          >
            <SocialLink href="https://github.com" icon={<Github className="w-5 h-5" />} />
            <SocialLink href="https://linkedin.com" icon={<Linkedin className="w-5 h-5" />} />
            <SocialLink href="mailto:contact@example.com" icon={<Mail className="w-5 h-5" />} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all hover:text-white hover:bg-white/10"
    >
      {icon}
    </a>
  );
}
