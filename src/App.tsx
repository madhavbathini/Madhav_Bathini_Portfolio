import React, { useState, useEffect } from 'react';
import { animate, motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, 
  Award, 
  Code2, 
  User, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  ExternalLink,
  ChevronDown,
  Trophy,
  Cpu,
  Database,
  Globe,
  Layout,
  Download,
  MapPin,
  Calendar,
  Layers,
  Sparkles,
  Search,
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import { cn } from './lib/utils';
import { AnimatedBackground } from './components/AnimatedBackground';
import { resumeData } from './data/resume';

// --- Components ---

const GlassCard: React.FC<{ children: React.ReactNode, className?: string, delay?: number }> = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className={cn(
      "relative group overflow-hidden rounded-lg border border-glass-border bg-glass-bg backdrop-blur-md transition-all hover:bg-white/[0.05]",
      className
    )}
  >
    <div className="absolute inset-y-0 left-0 w-1 bg-accent-blue opacity-0 group-hover:opacity-100 transition-opacity" />
    {children}
  </motion.div>
);

const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-12 space-y-2">
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-6xl font-black tracking-tighter text-text-primary"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-xs text-accent-blue font-bold uppercase tracking-[0.3em]"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const Splash: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#020617]"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        <div className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-600">
          {resumeData.basics.initials}
        </div>
        <motion.div 
          className="absolute -inset-4 rounded-full border border-blue-500/20"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: "200px" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-8"
      />
    </motion.div>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-40 px-6 py-4 flex items-center justify-between transition-all duration-300",
        isScrolled ? "bg-black/20 backdrop-blur-xl border-b border-white/5 py-3" : "py-6"
      )}
    >
      <div className="text-xl font-bold text-white flex items-center gap-2">
        <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xs">
          {resumeData.basics.initials}
        </div>
        <span className="hidden sm:inline">{resumeData.basics.name}</span>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
        {['hero', 'experience', 'projects', 'skills', 'contact'].map((item) => (
          <a key={item} href={`#${item}`} className="hover:text-white transition-colors capitalize">
            {item}
          </a>
        ))}
      </nav>
      <button 
        onClick={() => window.print()}
        className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium border border-white/10 transition-all flex items-center gap-2"
      >
        <Download size={14} />
        Resume
      </button>
    </motion.header>
  );
};

// --- Sections ---

const Hero = () => (
  <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
    <div className="max-w-4xl text-center space-y-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="inline-flex items-center gap-2 text-accent-blue text-xs font-bold uppercase tracking-[0.3em]"
      >
        <Sparkles size={12} />
        {resumeData.basics.role}
      </motion.div>
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-6xl md:text-[82px] font-bold text-text-primary tracking-[-0.05em] leading-[0.95]"
      >
        {resumeData.basics.name}<span className="text-accent-blue">.</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto"
      >
        {resumeData.basics.summary.split('.')[0]}. {resumeData.basics.summary.split('.')[1]}.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-wrap items-center justify-center gap-5 pt-4"
      >
        <a 
          href="#experience"
          className="px-10 py-5 rounded-sm bg-accent-blue hover:brightness-110 text-black font-bold transition-all shadow-[0_0_20px_rgba(0,210,255,0.15)] flex items-center gap-2 group"
        >
          View Experience
        </a>
        <button 
          onClick={() => window.print()}
          className="px-10 py-5 rounded-sm bg-glass-bg hover:bg-white/10 text-text-primary font-bold border border-glass-border backdrop-blur-md transition-all flex items-center gap-2"
        >
          Download CV
        </button>
      </motion.div>
    </div>
    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
    >
      <ChevronDown className="text-white/20" size={32} />
    </motion.div>
  </section>
);

const Experience = () => {
  const [expandedId, setExpandedId] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6 max-w-7xl mx-auto">
      <SectionTitle title="Experience" subtitle="Professional Journey" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-6">
          {resumeData.experience.map((exp, idx) => (
            <GlassCard key={idx} className="overflow-visible" delay={idx * 0.1}>
              <button 
                onClick={() => setExpandedId(expandedId === idx ? null : idx)}
                className="w-full text-left p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    <p className="text-blue-400 font-medium flex items-center gap-2">
                       <Briefcase size={16} /> {exp.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-sm font-mono leading-none">
                      {exp.dates}
                    </span>
                    <p className="text-white/30 text-xs mt-2 flex items-center justify-end gap-1">
                      <MapPin size={12} /> {exp.location}
                    </p>
                  </div>
                </div>
                
                <AnimatePresence>
                  {expandedId === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-8 border-t border-white/5 mt-6 space-y-6">
                        <p className="text-white/70 leading-relaxed italic">{exp.description}</p>
                        <ul className="grid grid-cols-1 gap-4">
                          {exp.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex gap-3 text-white/60 text-sm leading-relaxed">
                              <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 pt-4">
                          {exp.metrics.map((metric, mIdx) => (
                            <span key={mIdx} className="px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
                              {metric}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </GlassCard>
          ))}
        </div>

        <div className="lg:col-span-4 space-y-6">
          <GlassCard className="p-8 relative">
            <h4 className="text-sm font-bold text-accent-blue mb-8 uppercase tracking-[0.2em] flex items-center gap-2">
              Performance & Impact
            </h4>
            <div className="space-y-10">
              {resumeData.achievements.slice(0, 3).map((item, idx) => (
                <div key={idx} className="space-y-3 relative pl-6 border-l border-glass-border">
                   <div className="absolute top-0 left-0 w-1 h-full bg-accent-blue opacity-40" />
                  <p className="text-2xl font-bold text-text-primary tracking-tight">{item.title.match(/\d+%/ ) ? item.title.match(/\d+%/ ) : ""}</p>
                  <p className="text-sm font-bold text-text-primary uppercase tracking-wide leading-tight">{item.title}</p>
                  <p className="text-xs text-text-secondary leading-relaxed">{item.context}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

const Achievements = () => (
  <section className="py-24 px-6 bg-white/5 relative overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <SectionTitle title="Achievements" subtitle="Recognition & Awards" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resumeData.achievements.map((item, idx) => (
          <GlassCard key={idx} className="p-8 flex flex-col gap-4 text-center" delay={idx * 0.1}>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
              <Trophy className="text-blue-400" size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.context}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
    <SectionTitle title="Skills" subtitle="Tech Arsenal" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {resumeData.skills.map((skillGroup, idx) => (
        <div key={idx} className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
               {idx === 0 && <Code2 size={20} />}
               {idx === 1 && <Database size={20} />}
               {idx === 2 && <Layers size={20} />}
               {idx === 3 && <Cpu size={20} />}
               {idx === 4 && <Globe size={20} />}
            </div>
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">{skillGroup.category}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skillGroup.items.map((skill, sIdx) => (
              <motion.span 
                key={sIdx}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/70 text-sm font-medium transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-24 px-6 bg-black/40">
    <div className="max-w-7xl mx-auto">
      <SectionTitle title="Projects" subtitle="Built with Passion" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {resumeData.projects.map((project, idx) => (
          <GlassCard key={idx} className="flex flex-col" delay={idx * 0.1}>
            <div className="h-4 w-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-50" />
            <div className="p-8 space-y-6 flex-1 flex flex-col">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-blue-400 font-mono text-xs">{project.dates}</p>
                </div>
                <div className="flex gap-2">
                   {project.stack.map((s, si) => (
                     <span key={si} className="w-2 h-2 rounded-full bg-blue-500/50" />
                   ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, tIdx) => (
                  <span key={tIdx} className="text-[10px] font-bold text-white/40 uppercase tracking-widest px-2 py-1 rounded bg-white/5 border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="space-y-4 flex-1">
                {project.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="text-white/60 text-sm leading-relaxed flex gap-3">
                    <span className="w-1 h-1 rounded-full bg-blue-500 shrink-0 mt-2" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="pt-6">
                <button className="flex items-center gap-2 text-white text-sm font-bold group hover:text-blue-400 transition-colors">
                  View Reference Details <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  </section>
);

const Education = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <SectionTitle title="Education" subtitle="Learning Foundation" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      {resumeData.education.map((edu, idx) => (
        <GlassCard key={idx} className="p-8 flex gap-6" delay={idx * 0.1}>
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
            <BookOpen className="text-blue-400" size={32} />
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
              <p className="text-blue-400 font-medium">{edu.degree}</p>
            </div>
            <div className="flex items-center gap-4 text-xs text-white/40 font-mono">
              <span className="flex items-center gap-1"><Calendar size={12} /> {edu.dates}</span>
              <span className="flex items-center gap-1"><MapPin size={12} /> {edu.location}</span>
            </div>
            <div className="space-y-2">
              {edu.bullets.map((b, bi) => (
               <p key={bi} className="text-white/60 text-sm italic">"{b}"</p>
              ))}
            </div>
          </div>
        </GlassCard>
      ))}

      <GlassCard className="p-8">
        <h3 className="text-xl font-bold text-white mb-6">Certifications & Training</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {resumeData.certifications.map((cert, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
              <Award className="text-blue-400/50 group-hover:text-blue-400 transition-colors" size={16} />
              <div>
                <p className="text-white/80 text-xs font-medium line-clamp-1">{cert.title}</p>
                {cert.issuer && <p className="text-[10px] text-white/30 truncate">{cert.issuer}</p>}
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 px-6 relative">
    <div className="max-w-3xl mx-auto text-center space-y-12">
      <SectionTitle title="Connect" subtitle="Get in Touch" />
      <GlassCard className="p-12 space-y-8">
        <p className="text-xl text-white/70 leading-relaxed italic">
          "Passionate about clean code, scalable architecture, and continuous improvement, I thrive in collaborative teams that value innovation and precision."
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 pt-10">
          <a href={`mailto:${resumeData.basics.email}`} className="flex items-center gap-4 text-text-primary hover:text-accent-blue transition-colors group">
            <div className="w-14 h-14 rounded-lg bg-glass-bg border border-glass-border flex items-center justify-center group-hover:border-accent-blue/50 transition-all">
              <Mail size={22} className="text-accent-blue" />
            </div>
            <div className="text-left">
              <p className="text-[10px] items-center uppercase tracking-[0.2em] text-text-secondary">Direct Channel</p>
              <p className="font-bold text-lg">{resumeData.basics.email}</p>
            </div>
          </a>
          <a href={`tel:${resumeData.basics.phone}`} className="flex items-center gap-4 text-text-primary hover:text-accent-blue transition-colors group">
            <div className="w-14 h-14 rounded-lg bg-glass-bg border border-glass-border flex items-center justify-center group-hover:border-accent-blue/50 transition-all">
              <Phone size={22} className="text-accent-blue" />
            </div>
            <div className="text-left">
              <p className="text-[10px] items-center uppercase tracking-[0.2em] text-text-secondary">Encrypted Link</p>
              <p className="font-bold text-lg">{resumeData.basics.phone}</p>
            </div>
          </a>
        </div>
        <div className="flex items-center justify-center gap-6 pt-12 border-t border-glass-border">
          {resumeData.basics.links.map((link, idx) => (
            <a 
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-lg bg-glass-bg hover:bg-accent-blue/10 border border-glass-border text-text-secondary hover:text-accent-blue transition-all"
            >
              {link.icon === 'linkedin' ? <Linkedin size={28} /> : <Github size={28} />}
            </a>
          ))}
        </div>
      </GlassCard>
      
      <div className="pt-20 flex flex-col items-center gap-4">
        <div className="flex items-center gap-3 text-xs text-text-secondary font-bold tracking-[0.2em] uppercase">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
          Deployment Active — Portfolio v4.0
        </div>
        <p className="text-text-secondary/30 text-[10px] font-mono uppercase tracking-[0.4em]">
          &copy; {new Date().getFullYear()} {resumeData.basics.name} // 17.3850° N, 78.4867° E
        </p>
      </div>
    </div>
  </section>
);

const DesktopNav = () => (
  <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-6">
    {['hero', 'experience', 'projects', 'skills', 'contact'].map((item) => (
       <a 
         key={item} 
         href={`#${item}`}
         className="w-1.5 h-1.5 rounded-full bg-white/20 hover:bg-blue-400 transition-all hover:scale-150 relative group"
       >
         <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[10px] font-bold uppercase tracking-widest text-white/0 group-hover:text-white/60 transition-all whitespace-nowrap">
           {item}
         </span>
       </a>
    ))}
  </nav>
);

// --- Main App ---

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-500/30">
      <AnimatePresence mode="wait">
        {loading ? (
          <Splash key="splash" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <AnimatedBackground />
            <Header />
            <DesktopNav />
            
            <main className="relative z-10">
              <Hero />
              <Experience />
              <Achievements />
              <Projects />
              <Skills />
              <Education />
              <Contact />
            </main>

            {/* Print Layout Override */}
            <div className="hidden print:block print:bg-white print:text-black absolute inset-0 z-[100] bg-white text-black p-10">
               <h1 className="text-4xl font-bold">{resumeData.basics.name}</h1>
               <p className="text-xl">{resumeData.basics.title}</p>
               <div className="mt-4 flex gap-4 text-sm">
                 <span>{resumeData.basics.email}</span>
                 <span>{resumeData.basics.phone}</span>
                 <span>{resumeData.basics.location}</span>
               </div>
               <div className="mt-8">
                 <h2 className="text-2xl font-bold border-b-2 border-black pb-2">Experience</h2>
                 {resumeData.experience.map((exp, i) => (
                   <div key={i} className="mt-4">
                     <p className="font-bold">{exp.role} @ {exp.company} ({exp.dates})</p>
                     <p className="mt-2 text-sm">{exp.description}</p>
                     <ul className="list-disc ml-5 mt-2 text-sm">
                       {exp.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
                     </ul>
                   </div>
                 ))}
               </div>
               <div className="mt-8">
                 <h2 className="text-2xl font-bold border-b-2 border-black pb-2">Skills</h2>
                 <p className="mt-4 text-sm">{resumeData.skills.map(s => s.items.join(", ")).join("; ")}</p>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
