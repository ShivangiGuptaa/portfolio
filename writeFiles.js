const fs = require('fs');

const layoutContent = import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Syne } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/layout/SmoothScroll';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/ui/CustomCursor';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });
const syne = Syne({ subsets: ['latin'], variable: '--font-syne' });

export const metadata: Metadata = {
  title: 'Shivangi Gupta | Portfolio',
  description: 'Full Stack Developer | React • Node.js • Java • Spring Boot',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark scroll-smooth'>
      <body className={[jakarta.className, syne.variable, 'bg-black text-white antialiased selection:bg-purple-500/30 cursor-none'].join(' ')}>
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          <main className='flex-grow'>
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
};

fs.writeFileSync('src/app/layout.tsx', layoutContent, 'utf8');

const heroContent = \"use client\";

import { motion } from \"framer-motion\";
import { ArrowRight, Download } from \"lucide-react\";
import { FaGithub, FaLinkedin } from \"react-icons/fa\";
import Link from \"next/link\";
import Magnetic from \"@/components/ui/Magnetic\";
import { useEffect, useState } from \"react\";

const textRevealVariants = {
  hidden: { opacity: 0, y: 50, filter: \"blur(10px)\" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: \"blur(0px)\",
    transition: {
      delay: i * 0.05,
      type: \"spring\" as const,
      damping: 12,
      stiffness: 100,
    },
  }),
};

function FloatingParticles() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  
  if (!mounted) return null;

  return (
    <div className=\"absolute inset-0 overflow-hidden pointer-events-none\">
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className=\"absolute w-1.5 h-1.5 rounded-full\"
          style={{
            backgroundColor: i % 2 === 0 ? \"rgba(168, 85, 247, 0.4)\" : \"rgba(34, 211, 238, 0.4)\",
          }}
          initial={{
            x: Math.random() * (typeof window !== \"undefined\" ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== \"undefined\" ? window.innerHeight : 1000),
            opacity: Math.random() * 0.5 + 0.3,
            scale: Math.random() * 1.5 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * -200 - 100],
            x: [null, (Math.random() - 0.5) * 200],
            opacity: [null, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            ease: \"linear\",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const firstName = \"Shivangi\".split(\"\");
  const lastName = \"Gupta\".split(\"\");

  return (
    <section id=\"hero\" className=\"relative min-h-screen flex items-center justify-center overflow-hidden bg-black pb-20 pt-32\">
      {/* Background gradients and particles */}
      <div className=\"absolute inset-0 w-full h-full bg-black z-0\" />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: \"easeInOut\" }}
        className=\"absolute top-1/4 -left-32 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[128px] mix-blend-screen pointer-events-none\" 
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: \"easeInOut\", delay: 2 }}
        className=\"absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[128px] mix-blend-screen pointer-events-none\" 
      />
      <FloatingParticles />

      <div className=\"container relative z-10 mx-auto px-6 max-w-5xl\">
        <div className=\"flex flex-col items-center text-center\">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: \"spring\", bounce: 0.5 }}
            className=\"inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-12\"
          >
            <span className=\"w-2 h-2 rounded-full bg-green-500 animate-pulse\" />
            <span className=\"text-sm text-gray-300 tracking-wide uppercase font-semibold\">Available for opportunities</span>
          </motion.div>

          <h1 className=\"text-6xl md:text-8xl lg:text-[10rem] font-bold font-[family-name:var(--font-syne)] text-white mb-6 flex flex-wrap justify-center gap-x-4 md:gap-x-8 overflow-hidden p-2 leading-none\">
            <span className=\"flex tracking-tighter\">
              {firstName.map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={textRevealVariants}
                  initial=\"hidden\"
                  animate=\"visible\"
                  className=\"inline-block hover:text-cyan-400 transition-colors duration-300\"
                >
                  {char}
                </motion.span>
              ))}
            </span>
            <span className=\"flex tracking-tighter\">
              {lastName.map((char, i) => (
                <motion.span
                  key={i + firstName.length}
                  custom={i + firstName.length}
                  variants={textRevealVariants}
                  initial=\"hidden\"
                  animate=\"visible\"
                  className=\"inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 pr-4\"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, filter: \"blur(10px)\", y: 20 }}
            animate={{ opacity: 1, filter: \"blur(0px)\", y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className=\"text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl font-light tracking-wide\"
          >
            Full Stack Developer <span className=\"mx-3 text-white/20\">|</span> React • Node.js • Java • Spring Boot
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className=\"flex flex-col sm:flex-row items-center gap-6 mb-16\"
          >
            <Magnetic>
              <Link
                href=\"#projects\"
                className=\"group relative inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-sm font-bold text-black transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)]\"
              >
                <span className=\"relative z-10 flex items-center tracking-wide uppercase\">
                  Explore Work
                  <ArrowRight className=\"ml-2 h-4 w-4 transition-transform group-hover:translate-x-1\" />
                </span>
              </Link>
            </Magnetic>
            <Magnetic>
              <a
                href=\"/resume.pdf\"
                target=\"_blank\"
                className=\"group relative inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-black/50 backdrop-blur-md px-8 text-sm font-bold text-white transition-all hover:bg-white/10 hover:scale-105 active:scale-95 tracking-wide uppercase\"
              >
                Download Resume
                <Download className=\"ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1\" />
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 1.2 }}
             className=\"flex items-center gap-6 z-20 relative\"
          >
            <a href=\"https://github.com\" target=\"_blank\" rel=\"noreferrer\" className=\"text-gray-400 hover:text-white transition-colors p-2 hover:scale-110\">
              <FaGithub className=\"w-6 h-6\" />
            </a>
            <a href=\"https://www.linkedin.com/in/shivangi-gupta-90a356340/\" target=\"_blank\" rel=\"noreferrer\" className=\"text-gray-400 hover:text-[#0077b5] transition-colors p-2 hover:scale-110\">
              <FaLinkedin className=\"w-6 h-6\" />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 1.5 }}
             className=\"absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2\"
          >
            <span className=\"text-[10px] uppercase tracking-[0.3em] text-gray-500\">Scroll</span>
            <div className=\"w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent\" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
;

fs.writeFileSync('src/components/sections/Hero.tsx', heroContent, 'utf8');
