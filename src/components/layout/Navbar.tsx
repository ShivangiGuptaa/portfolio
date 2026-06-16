"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { Menu, X } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100, damping: 30, restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-cyan-500 transform origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />
      <header className="fixed top-6 left-0 right-0 z-40 flex justify-center px-4 pointer-events-none">
        <motion.div
           initial={{ y: -100, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ type: "spring" as const, stiffness: 100, damping: 20 }}
           className={"flex items-center justify-between w-full max-w-4xl px-6 py-3 rounded-full border transition-all duration-500 pointer-events-auto " + (isScrolled ? "bg-background/80 backdrop-blur-xl border-border shadow-lg" : "bg-background/40 backdrop-blur-md border-border")}
        >
          {/* Logo removed per request */}

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Magnetic key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </Link>
              </Magnetic>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Magnetic>
              <a
                href="/resume.pdf"
                target="_blank"
                className="flex items-center justify-center px-5 py-2 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-primary transition-colors"
              >
                Resume
              </a>
            </Magnetic>
          </div>

          <div className="md:hidden flex items-center gap-4 ml-auto">
            <ThemeToggle />
            <button
              className="text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-24 left-4 right-4 z-30 bg-background/95 backdrop-blur-xl border border-border rounded-3xl py-6 px-6 flex flex-col gap-6 md:hidden shadow-2xl"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-foreground/80 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-5 py-3 rounded-xl bg-foreground text-center font-bold text-background hover:bg-primary transition-colors"
          >
            Download Resume
          </a>
        </motion.div>
      )}
    </>
  );
}
