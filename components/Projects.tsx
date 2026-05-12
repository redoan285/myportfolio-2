"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Globe } from "lucide-react";

const projects = [
  {
    title: "Friendship Platform",
    description: "A heartfelt platform to stay connected with loved ones, share memorable moments, and strengthen relationships through interactive features.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    tags: ["React.js", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://keep-your-friendships-alive-by-redoan.netlify.app/",
    githubLink: "https://github.com/redoan285/Assignment-7",
    color: "accent",
  },
  {
    title: "Digital Toolset",
    description: "A powerful platform providing essential digital utilities and resources. Features a clean interface and optimized performance for daily tasks.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "TypeScript", "Node.js"],
    liveLink: "https://digitools-platform-by-redoan.netlify.app/",
    githubLink: "https://github.com/redoan285/DigiTools-Platform-",
    color: "accent-purple",
  },
  {
    title: "SaaS Dashboard",
    description: "Comprehensive analytics dashboard for tracking business metrics. Includes real-time data visualization and customizable reporting tools.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Chart.js", "PostgreSQL"],
    liveLink: "https://your-third-project.netlify.app/",
    githubLink: "https://github.com/redoan285/your-third-project",
    color: "accent-warm",
  },
];

export default function Projects() {
  const headRef = useRef(null);
  const inView = useInView(headRef, { once: true });

  return (
    <section id="projects" className="py-24 md:py-32 bg-bg-secondary/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div 
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center md:text-left"
        >
          <span className="text-accent text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Portfolio</span>
          <h2 className="font-display text-4xl md:text-6xl font-black tracking-normal leading-tight text-white">
            Selected <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group relative flex flex-col glass-card rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 border-white/5 hover:border-white/20"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-bg-primary via-transparent to-transparent opacity-60" />
                
                {/* Floating Tags */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[9px] font-black text-white uppercase tracking-[0.2em]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors tracking-tight">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8 line-clamp-3 tracking-wide">
                  {project.description}
                </p>
                
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex gap-3">
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white/5 hover:bg-accent hover:text-black transition-all border border-white/10"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white/5 hover:bg-white/20 transition-all border border-white/10 text-white/60 hover:text-white"
                      aria-label="Source Code"
                    >
                      <Globe size={18} />
                    </a>
                  </div>
                  
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 group-hover:text-accent transition-colors">
                    Case Study →
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a 
            href="https://github.com/redoan285" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 font-black font-display text-white text-xs tracking-[0.4em] uppercase transition-all shadow-xl"
          >
            Explore More Work <Globe size={20} className="group-hover:rotate-12 transition-transform text-accent" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}