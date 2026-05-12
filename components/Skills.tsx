"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React / Next.js", level: 95, category: "Frontend" },
  { name: "Tailwind CSS", level: 95, category: "Frontend" },
  { name: "JavaScript / TypeScript", level: 90, category: "Language" },
  { name: "Node.js & Express", level: 85, category: "Backend" },
  { name: "Git & GitHub", level: 92, category: "Tooling" },
  { name: "REST APIs", level: 90, category: "Backend" },
  { name: "Responsive Design", level: 98, category: "Design" },
  { name: "UI/UX implementation", level: 88, category: "Design" },
];

const techIcons = [
  { label: "React", emoji: "⚛️" },
  { label: "Next.js", emoji: "▲" },
  { label: "Node.js", emoji: "🟢" },
  { label: "Tailwind", emoji: "🎨" },
  { label: "Git", emoji: "🔀" },
  { label: "TypeScript", emoji: "📘" },
  { label: "MongoDB", emoji: "🍃" },
  { label: "PostgreSQL", emoji: "🐘" },
  { label: "REST API", emoji: "🔗" },
  { label: "Figma", emoji: "🖌️" },
];

function SkillBar({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="mb-8 last:mb-0"
    >
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-white font-display uppercase tracking-widest">{skill.name}</span>
          <span className="text-[9px] font-black px-2 py-0.5 rounded-md bg-accent/10 text-accent border border-accent/20 uppercase tracking-[0.2em]">
            {skill.category}
          </span>
        </div>
        <span className="text-xs font-black text-white/40 font-display tracking-widest">{skill.level}%</span>
      </div>
      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.5, delay: index * 0.1 + 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-linear-to-r from-accent via-accent to-accent-purple shadow-[0_0_15px_rgba(0,229,255,0.4)]"
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div 
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center lg:text-left"
        >
          <span className="text-accent text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Expertise</span>
          <h2 className="font-display text-4xl md:text-6xl font-black tracking-normal leading-tight text-white">
            Tools I <span className="gradient-text">Master</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Skill progress bars */}
          <div className="glass-card rounded-[2.5rem] p-8 md:p-12 order-2 lg:order-1">
            <h3 className="font-display text-xl font-bold mb-10 text-white flex items-center justify-center lg:justify-start gap-3 tracking-wide">
              <span className="w-8 h-[1px] bg-accent" /> Proficiency
            </h3>
            <div className="space-y-2">
              {skills.map((skill, i) => <SkillBar key={skill.name} skill={skill} index={i} />)}
            </div>
          </div>

          {/* Tech icon grid */}
          <div className="order-1 lg:order-2">
            <h3 className="font-display text-xl font-bold mb-10 text-white flex items-center justify-center lg:justify-start gap-3 tracking-wide">
              <span className="w-8 h-[1px] bg-accent" /> Tech Ecosystem
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {techIcons.map((tech, i) => (
                <motion.div
                  key={tech.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  whileHover={{ y: -5, borderColor: "rgba(0,229,255,0.4)", backgroundColor: "rgba(0,229,255,0.05)" }}
                  className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 border-white/5 cursor-default group"
                >
                  <span className="text-3xl group-hover:scale-125 transition-transform duration-300">{tech.emoji}</span>
                  <span className="text-[10px] font-black text-white/40 group-hover:text-white transition-colors uppercase tracking-[0.3em]">{tech.label}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-10 p-8 glass-card rounded-[2rem] border-dashed border-white/10 text-center lg:text-left">
              <p className="text-sm md:text-base text-white/50 leading-loose italic tracking-wide">
                &ldquo;Specializing in high-performance web applications with a focus on user experience and scalable architecture. Constantly learning and adapting to the latest industry standards.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-linear-to-t from-bg-secondary/50 to-transparent -z-10" />
    </section>
  );
}
