"use client";

import { motion, useInView } from "framer-motion";
import { Code2, ArrowRight } from "lucide-react";
import { 
  FaReact, 
  FaJava, 
  FaPython, 
  FaNodeJs, 
  FaAws, 
  FaGithub 
} from "react-icons/fa";
import { 
  SiSpringboot, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiMongodb, 
  SiMysql,
  SiJavascript
} from "react-icons/si";
import { useRef, useState, useEffect } from "react";

/* ─── Animated counter ─── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = to / 40;
    const timer = setInterval(() => {
      start += step;
      if (start >= to) { clearInterval(timer); setCount(to); }
      else setCount(Math.floor(start));
    }, 30);
    return () => clearInterval(timer);
  }, [isInView, to]);
  
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Orbital Animation Components ─── */
function OrbitingNode({
  radius,
  duration,
  delay,
  reverse,
  children,
  iconLabel,
}: {
  radius: number;
  duration: number;
  delay: number;
  reverse: boolean;
  children: React.ReactNode;
  iconLabel?: string;
}) {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 pointer-events-none"
      style={{ width: radius * 2, height: radius * 2, x: "-50%", y: "-50%" }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear", delay }}
    >
      <motion.div
        className="group absolute top-0 left-1/2 flex items-center justify-center w-10 h-10 bg-card border border-border rounded-full shadow-sm pointer-events-auto hover:bg-muted transition-colors cursor-pointer"
        style={{ x: "-50%", y: "-50%" }}
        animate={{ rotate: reverse ? 360 : -360 }}
        transition={{ duration, repeat: Infinity, ease: "linear", delay }}
        title={iconLabel}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function TechGlobe() {
  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[400px] overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.03)_0%,transparent_100%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_0%,transparent_100%)]" />
      
      {/* Center node */}
      <div className="absolute w-14 h-14 bg-foreground rounded-full flex items-center justify-center z-10 shadow-lg shadow-foreground/10">
        <Code2 className="w-6 h-6 text-background" />
      </div>

      {/* Orbit Rings (Smaller to fit in right column) */}
      <div className="absolute w-[120px] h-[120px] border border-border rounded-full opacity-60" />
      <div className="absolute w-[200px] h-[200px] border border-border border-dashed rounded-full opacity-40" />
      <div className="absolute w-[280px] h-[280px] border border-border rounded-full opacity-20" />

      {/* Track 1 (Inner): Frontend Core (Radius 60) */}
      <OrbitingNode radius={60} duration={20} delay={0} reverse={false} iconLabel="React.js">
        <FaReact className="w-5 h-5 text-[#61DAFB]" />
      </OrbitingNode>
      <OrbitingNode radius={60} duration={20} delay={6.66} reverse={false} iconLabel="Next.js">
        <SiNextdotjs className="w-5 h-5 text-foreground" />
      </OrbitingNode>
      <OrbitingNode radius={60} duration={20} delay={13.33} reverse={false} iconLabel="Tailwind CSS">
        <SiTailwindcss className="w-5 h-5 text-[#06B6D4]" />
      </OrbitingNode>

      {/* Track 2 (Middle): Backend & Database (Radius 100) */}
      <OrbitingNode radius={100} duration={30} delay={0} reverse={true} iconLabel="Java">
        <FaJava className="w-5 h-5 text-[#ED8B00]" />
      </OrbitingNode>
      <OrbitingNode radius={100} duration={30} delay={7.5} reverse={true} iconLabel="Spring Boot">
        <SiSpringboot className="w-5 h-5 text-[#6DB33F]" />
      </OrbitingNode>
      <OrbitingNode radius={100} duration={30} delay={15} reverse={true} iconLabel="MongoDB">
        <SiMongodb className="w-5 h-5 text-[#47A248]" />
      </OrbitingNode>
      <OrbitingNode radius={100} duration={30} delay={22.5} reverse={true} iconLabel="MySQL">
        <SiMysql className="w-5 h-5 text-[#4479A1]" />
      </OrbitingNode>

      {/* Track 3 (Outer): Languages & Cloud (Radius 140) */}
      <OrbitingNode radius={140} duration={45} delay={0} reverse={false} iconLabel="Python">
        <FaPython className="w-5 h-5 text-[#3776AB]" />
      </OrbitingNode>
      <OrbitingNode radius={140} duration={45} delay={9} reverse={false} iconLabel="JavaScript">
        <SiJavascript className="w-5 h-5 text-[#F7DF1E]" />
      </OrbitingNode>
      <OrbitingNode radius={140} duration={45} delay={18} reverse={false} iconLabel="TypeScript">
        <SiTypescript className="w-4 h-4 text-[#3178C6]" />
      </OrbitingNode>
      <OrbitingNode radius={140} duration={45} delay={27} reverse={false} iconLabel="AWS">
        <FaAws className="w-5 h-5 text-[#FF9900]" />
      </OrbitingNode>
      <OrbitingNode radius={140} duration={45} delay={36} reverse={false} iconLabel="GitHub">
        <FaGithub className="w-5 h-5 text-foreground" />
      </OrbitingNode>
    </div>
  );
}

const stats = [
  { to: 1, suffix: ".5+", label: "Years Experience" },
  { to: 10, suffix: "+", label: "Projects Built" },
  { to: 3, suffix: "+", label: "Production Apps" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-background relative border-t border-border overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted text-muted-foreground text-xs font-semibold mb-4">
            Who am I?
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-[family-name:var(--font-space)] tracking-tight">
            About Me
          </h2>
          <p className="text-muted-foreground text-base max-w-xl">
            A passionate developer who builds production-grade applications with a love for clean code and seamless UX.
          </p>
        </motion.div>

        {/* ── Main layout ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Bio card – spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 relative flex flex-col justify-center pr-4"
          >
            <div className="relative z-10">
              {/* Header */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl border border-border bg-muted/50">
                  <Code2 className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground font-[family-name:var(--font-space)] leading-tight">
                    Full Stack Developer
                  </h3>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-muted border border-border text-foreground text-xs font-semibold">
                      <FaJava className="w-3.5 h-3.5 text-[#ED8B00]" /> Java Developer
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Open to Work
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                <p>
                  I&apos;m a <span className="text-foreground font-semibold">Full Stack &amp; Java Developer</span> with
                  hands-on experience building production-grade web applications—from designing responsive UIs to
                  deploying secure, scalable backend systems.
                </p>
                <p>
                  At <span className="text-foreground font-semibold">Bling Square Events</span>, I built and
                  shipped real platforms used in production including{" "}
                  <span className="text-foreground font-medium">Sarvagun ERP</span> and{" "}
                  <span className="text-foreground font-medium">BlingHire</span>. I implemented secure
                  authentication, resolved critical production issues, and improved system performance end-to-end.
                </p>
                <p>
                  I specialize in{" "}
                  <span className="text-foreground font-semibold">Java &amp; Spring Boot</span> on the backend and{" "}
                  <span className="text-foreground font-semibold">React.js</span> on the frontend, with growing
                  expertise in <span className="text-foreground font-semibold">LLMs &amp; RAG pipelines</span>.
                </p>
              </div>

              <motion.a
                href="#contact"
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                Let&apos;s connect <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right column: Animated Tech Globe replaces Code & Fun Fact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1 h-full"
          >
            <TechGlobe />
          </motion.div>

          {/* ── Stats row (spans full width below) ── */}
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -4 }}
              className="py-4 flex flex-col items-center justify-center text-center"
            >
              <span className="text-4xl font-bold text-foreground font-[family-name:var(--font-space)] tracking-tight">
                <Counter to={stat.to} suffix={stat.suffix} />
              </span>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.15em] mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
