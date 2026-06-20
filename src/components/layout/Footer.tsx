import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8 relative overflow-hidden">
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
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
