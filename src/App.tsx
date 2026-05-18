/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  ExternalLink, 
  Code2, 
  BrainCircuit, 
  Trophy, 
  Mail, 
  ChevronRight, 
  Terminal,
  Cpu,
  Layers,
  Globe,
  Download,
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
  Activity,
  AlertCircle
} from 'lucide-react';

// --- Types ---

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: 'web' | 'ai' | 'tool';
  link: string;
  github: string;
  image: string;
}

interface Achievement {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
  icon: React.ReactNode;
}

// --- Data ---

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'PneumoCheck AI',
    description: 'Final Year Project: An autonomous pneumonia detection system using CNN for chest X-ray classification and Gemini-powered OCR for prescription metadata extraction.',
    tags: ['React', 'Next.js', 'Node.js', 'CNN', 'Gemini AI'],
    category: 'ai',
    link: '#',
    github: 'https://github.com/ujjwalstann',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Student Management System',
    description: 'Enterprise-grade console application implemented in Java using OOP principles to manage student records, performance, and attendance.',
    tags: ['Java', 'OOP', 'Data Structure'],
    category: 'tool',
    link: '#',
    github: 'https://github.com/ujjwalstann',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Online Banking System',
    description: 'Secure Java-based banking engine supporting multi-account management, cryptographic transaction validation, and fund transfers.',
    tags: ['Java', 'Secure coding', 'Logic'],
    category: 'tool',
    link: '#',
    github: 'https://github.com/ujjwalstann',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive React-based analytics dashboard for an e-commerce platform, integrating real-time visualizations and sales tracking.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Recharts'],
    category: 'web',
    link: '#',
    github: 'https://github.com/ujjwalstann',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    title: 'TaskFlow Planner',
    description: 'A collaborative task management web application focusing on team productivity, featuring Kanban boards and real-time updates.',
    tags: ['Next.js', 'Firebase', 'Tailwind', 'Node.js'],
    category: 'web',
    link: '#',
    github: 'https://github.com/ujjwalstann',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '6',
    title: 'Neural Style Transfer engine',
    description: 'Exploratory machine learning project adapting artistic styles to arbitrary images using deep neural networks and PyTorch.',
    tags: ['Python', 'PyTorch', 'Computer Vision'],
    category: 'ai',
    link: '#',
    github: 'https://github.com/ujjwalstann',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800'
  }
];

const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'a1',
    year: '2025',
    title: '1st Position - Movie Making',
    organization: 'Academic Arts Competition',
    description: 'Demonstrated exceptional creative leadership and technical filmmaking skills in a competitive pool.',
    icon: <Trophy className="w-6 h-6 text-indigo-400" />
  },
  {
    id: 'a2',
    year: '2025',
    title: 'Java Developer Intern',
    organization: 'Elevate Labs (Skill India)',
    description: 'Built scalable inventory and banking systems, improving organizational data flow by 30%.',
    icon: <Code2 className="w-6 h-6 text-purple-400" />
  },
  {
    id: 'a3',
    year: '2024',
    title: 'Leetcode Score: 195+',
    organization: 'Global Rank',
    description: 'Consistently solving algorithmic challenges to maintain peak problem-solving performance.',
    icon: <Terminal className="w-6 h-6 text-pink-400" />
  }
];

const SKILLS = [
  { name: 'Core Languages', items: ['C / Python', 'Java (Advanced)', 'JavaScript (ES6+)'] },
  { name: 'Frontend Tech', items: ['React.js', 'Next.js', 'HTML5 / CSS3', 'Tailwind CSS'] },
  { name: 'Backend & DB', items: ['Node.js', 'Express.js', 'MongoDB', 'MySQL'] },
  { name: 'Professional Tools', items: ['Git / GitHub', 'VS Code', 'Linux (Basics)', 'REST APIs'] }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Spotlight', href: '#spotlight' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Reels', href: '#reels' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.a 
          href="#"
          onClick={(e) => handleNavClick(e, '#')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold tracking-tighter text-slate-900"
        >
          Ujjwal<span className="text-indigo-600">.code</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-2.5 text-sm font-semibold rounded-full bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-200 transition-all active:scale-95 cursor-pointer"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-lg font-medium text-slate-600 hover:text-indigo-600 block cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

interface ProjectShowcaseProps {
  project: Project;
  index: number;
  key?: React.Key;
}

const ProjectShowcase = ({ project, index }: ProjectShowcaseProps) => {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center`}
    >
      <div className="w-full lg:w-1/2 relative group">
        <div className="relative rounded-[2.5rem] overflow-hidden card-shadow aspect-[16/10] bg-slate-100 border border-slate-100">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-6 left-6 px-4 py-1.5 glass bg-white/90 rounded-full text-xs font-mono uppercase tracking-widest text-indigo-600">
            {project.category}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-5">{project.title}</h3>
        <p className="text-lg text-slate-500 font-light leading-relaxed mb-8">
          {project.description}
        </p>

        <div className="mb-10">
          <h4 className="text-xs font-mono tracking-widest text-slate-400 uppercase mb-4 font-bold">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="text-sm font-medium px-4 py-2 rounded-xl bg-slate-50 border border-slate-100 text-slate-600">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-8 py-3.5 bg-indigo-600 text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-indigo-700 shadow-md shadow-indigo-200 transition-all active:scale-95"
          >
            Live Demo <ExternalLink size={18} />
          </a>
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-8 py-3.5 bg-white text-slate-900 font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-slate-50 border border-slate-200 transition-all active:scale-95 shadow-sm"
          >
            Code <Github size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [filter, setFilter] = useState<string>('all');
  const filteredProjects = PROJECTS.filter(p => filter === 'all' || p.category === filter);

  return (
    <div className="min-h-screen selection:bg-indigo-500/30">
      <Navbar />

      {/* --- Hero Section --- */}
      <section className="relative min-h-screen flex items-center pt-28 overflow-hidden bg-slate-50/50">
        {/* Background Decorative Rings */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full border-[1.5px] border-indigo-100/50" />
        <div className="absolute top-[-15%] right-[-15%] w-[700px] h-[700px] rounded-full border-[1.5px] border-indigo-50/50" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 px-4 py-1.5 glass rounded-full text-xs font-semibold text-indigo-600 mb-8 border-indigo-100 shadow-sm shadow-indigo-100/20"
              >
                <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                <span>Open for 2026 Developer Internships</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-7xl md:text-[5.5rem] font-display font-bold tracking-tight leading-[1] mb-8 text-slate-900"
              >
                Building <span className="gradient-text">AI Systems</span> with Precision.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-slate-500 font-light max-w-2xl leading-relaxed mb-12"
              >
                I&apos;m <span className="text-slate-900 font-medium">Ujjwal Singh</span>, a Developer focused on
                merging Computer Vision with real-world healthcare solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-6 items-center"
              >
                <a 
                  href="#spotlight" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('spotlight')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group px-10 py-5 bg-indigo-600 text-white font-bold rounded-2xl flex items-center gap-3 hover:bg-indigo-700 shadow-xl shadow-indigo-200 transition-all active:scale-95"
                >
                  View Final Year Project <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
                <div className="flex gap-4">
                  {[
                    { icon: <Github size={22} />, href: 'https://github.com/ujjwalstann' },
                    { icon: <Linkedin size={22} />, href: 'https://linkedin.com/in/ujjwalsinghcse' },
                    { icon: <Mail size={22} />, href: 'mailto:ujjwalsingh.hal1@gmail.com' }
                  ].map((s, i) => (
                    <a 
                      key={i} 
                      href={s.href} 
                      target="_blank"
                      className="w-14 h-14 flex items-center justify-center glass rounded-2xl text-slate-400 hover:text-indigo-600 hover:border-indigo-400/50 transition-all active:scale-90 shadow-sm"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Featured Project Spotlight Card */}
            <motion.div
              id="featured-project"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="hidden lg:block relative"
            >
              <div className="glass p-4 rounded-[3rem] shadow-2xl shadow-indigo-100">
                <div className="relative h-[520px] rounded-[2.5rem] overflow-hidden group bg-slate-950 border border-slate-800">
                  <div className="absolute inset-0 flex flex-col items-center justify-start pt-12 p-8 bg-linear-to-br from-indigo-950 to-slate-900 pointer-events-none">
                     
                     <div className="w-full max-w-sm glass bg-white/5 rounded-2xl p-6 border border-white/10 mb-6 shadow-2xl transform group-hover:-translate-y-2 group-hover:scale-[1.02] transition-all duration-700">
                       <div className="flex items-center justify-between mb-4">
                         <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-400">
                             <Activity size={18} />
                           </div>
                           <div className="font-display font-semibold text-white">PneumoCheck</div>
                         </div>
                       </div>
                       <div className="space-y-4">
                         <div className="h-32 rounded-xl bg-slate-800/50 flex items-center justify-center p-2 relative overflow-hidden group-hover:border-indigo-500/50 border border-transparent transition-colors">
                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-400 via-slate-900 to-slate-900"></div>
                            <Sparkles className="text-indigo-400 relative z-10" size={32} />
                         </div>
                         <div>
                            <div className="flex justify-between items-center text-sm mb-2">
                              <span className="text-red-400 font-semibold flex items-center gap-1.5"><AlertCircle size={14}/> High Probability</span>
                              <span className="text-red-400 font-bold text-lg">95.0%</span>
                            </div>
                            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                              <div className="bg-red-500 h-full w-[95%] rounded-full relative">
                                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                              </div>
                            </div>
                         </div>
                       </div>
                     </div>

                  </div>
                  <div className="absolute inset-x-0 bottom-0 top-1/2 bg-linear-to-t from-slate-950 via-slate-900/90 to-transparent p-10 flex flex-col justify-end pointer-events-none">
                    <div className="flex items-center gap-2 text-indigo-300 mb-2 font-mono text-xs uppercase tracking-widest">
                       <BrainCircuit size={14} /> Final Year Capstone
                    </div>
                    <h3 className="text-3xl font-display font-bold text-white mb-3">Welcome to PneumoCheck</h3>
                    <p className="text-slate-300 mb-6 font-light leading-relaxed text-sm">
                      Leveraging advanced AI to provide fast, accurate, and accessible analysis of chest X-rays for pneumonia detection. Empowering healthcare professionals with cutting-edge diagnostic support. Includes multi-modal AI to automate prescription data entry in seconds.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-lg text-xs font-semibold">CNN Analysis</span>
                      <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-lg text-xs font-semibold">Gemini Multi-modal OCR</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating Decorative Badge */}
              <div className="absolute -bottom-6 -right-6 glass p-6 rounded-3xl shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white">
                  <Sparkles size={24} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-tighter">Recognition</div>
                  <div className="text-lg font-bold text-slate-900">Featured AI Solution</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- About & Skills --- */}
      <section id="about" className="py-32 relative bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-20 items-start">
            <div className="md:col-span-12 lg:col-span-5">
              <h2 className="text-sm font-mono tracking-widest text-indigo-600 uppercase mb-6 font-bold">01. Professional Summary</h2>
              <h3 className="text-5xl md:text-6xl font-display font-bold mb-10 tracking-tight text-slate-900 leading-tight">Motivated Developer &amp; AI Specialist.</h3>
              <div className="space-y-8 text-slate-500 leading-relaxed font-light text-xl">
                <p>
                  As an ambitious <span className="text-slate-900 font-medium">B.Tech Computer Science</span> graduate from <span className="text-indigo-600 font-bold underline decoration-indigo-200 underline-offset-4">Saroj Institute of Technology and Management, Lucknow</span>, 
                  I focalize on building production-ready software solutions where logic and design meet performance.
                </p>
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-8 text-lg font-mono">
                   <div className="p-6 glass rounded-2xl bg-slate-50/50">
                     <div className="text-slate-400 mb-2 text-xs uppercase tracking-widest">Education</div>
                     <div className="text-slate-900 font-bold leading-tight">Saroj Institute of Technology and Management</div>
                     <div className="text-indigo-600 text-sm mt-1">7.83 CGPA (AKTU)</div>
                   </div>
                   <div className="p-6 glass rounded-2xl bg-slate-50/50">
                     <div className="text-slate-400 mb-2 text-xs uppercase tracking-widest">Status</div>
                     <div className="text-emerald-600 font-bold flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                       Actively Interviewing
                     </div>
                     <div className="text-slate-500 text-sm mt-1">Uttar Pradesh, India</div>
                   </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-12 lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {SKILLS.map((set, i) => (
                  <motion.div 
                    key={set.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass p-10 rounded-[2.5rem] card-shadow"
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <div className={`p-3 rounded-2xl ${
                        i === 0 ? 'bg-indigo-50 text-indigo-600' :
                        i === 1 ? 'bg-purple-50 text-purple-600' :
                        i === 2 ? 'bg-pink-50 text-pink-600' :
                        'bg-emerald-50 text-emerald-600'
                      }`}>
                        {i === 0 && <Layers size={24} />}
                        {i === 1 && <Terminal size={24} />}
                        {i === 2 && <Cpu size={24} />}
                        {i === 3 && <Globe size={24} />}
                      </div>
                      <h4 className="font-display font-bold text-xl text-slate-900">{set.name}</h4>
                    </div>
                    <ul className="space-y-5">
                      {set.items.map(item => (
                        <li key={item} className="flex items-center gap-4 text-slate-500">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Project Spotlight: PneumoCheck AI --- */}
      <section id="spotlight" className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 -left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-[animation-delay:2000ms]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-sm font-mono tracking-widest text-indigo-400 uppercase mb-6 font-bold">02. Deep Dive</h2>
            <h3 className="text-5xl md:text-6xl font-display font-bold tracking-tight mb-8">PneumoCheck AI Showcase</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              Explore the interface and capabilities of my final year project. 
              PneumoCheck AI leverages advanced machine learning to aid in pneumonia detection and digitizes handwritten prescriptions using multimodal AI.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1">
              <h4 className="text-3xl font-display font-bold mb-4">Intuitive Dashboard &amp; Landing</h4>
              <p className="text-slate-400 mb-6 leading-relaxed">
                The platform is designed with a patient and doctor-first approach. High-contrast, clean UI ensures that accessing diagnostic tools is frictionless. The system clearly outlines the 3-step process: Upload Image, Provide Context, and Get Analysis.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-indigo-500/20 p-2 rounded-lg mr-4"><Globe className="w-5 h-5 text-indigo-400" /></div>
                  <span className="text-slate-300 pt-1">Modern, responsive landing page.</span>
                </li>
                 <li className="flex items-start">
                  <div className="bg-purple-500/20 p-2 rounded-lg mr-4"><Layers className="w-5 h-5 text-purple-400" /></div>
                  <span className="text-slate-300 pt-1">Clear 3-step actionable user journey.</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
               {/* Screenshots 1 and 2 */}
              <div className="flex flex-col gap-4 sm:space-y-6">
                <img src="/screenshot-landing.jpg" alt="Welcome to PneumoCheck" className="rounded-2xl border border-slate-700/50 shadow-2xl brightness-90 hover:brightness-100 transition-all object-cover object-top aspect-video sm:aspect-auto sm:h-64 w-full" />
                <img src="/screenshot-steps.jpg" alt="A Simple Path to Clarity" className="rounded-2xl border border-slate-700/50 shadow-2xl brightness-90 hover:brightness-100 transition-all object-cover object-top aspect-video sm:aspect-auto sm:h-48 w-full" />
              </div>
              <div className="flex flex-col gap-4 sm:space-y-6 sm:pt-12">
                 <img src="/screenshot-prescription.jpg" alt="Automate Prescription UI" className="rounded-2xl border border-slate-700/50 shadow-2xl brightness-90 hover:brightness-100 transition-all object-cover object-top aspect-video sm:aspect-auto sm:h-64 w-full" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
             <div className="flex flex-col relative w-full px-4 sm:px-0">
                 <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/10 to-transparent rounded-[3rem] blur-xl"></div>
                 {/* Screenshots 4 and 5 */}
                <img src="/screenshot-high.jpg" alt="High Probability Analysis" className="rounded-2xl border border-rose-500/30 shadow-[0_0_30px_rgba(244,63,94,0.1)] relative z-10 brightness-90 hover:brightness-100 transition-all w-[90%] sm:w-full object-cover object-top aspect-[4/3] sm:aspect-auto" />
                <img src="/screenshot-low.jpg" alt="Low Probability Analysis" className="rounded-2xl border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.1)] relative z-20 brightness-90 hover:brightness-100 transition-all w-[90%] sm:w-full self-end -mt-16 sm:-mt-24 sm:ml-8 object-cover object-top aspect-[4/3] sm:aspect-auto" />
             </div>
             
             <div className="lg:pl-12">
               <h4 className="text-3xl font-display font-bold mb-4">Precision Analysis &amp; Reports</h4>
              <p className="text-slate-400 mb-6 leading-relaxed">
                The core engine provides detailed diagnostic support. Uploaded X-rays are analyzed to determine the likelihood of pneumonia. The system pairs the visual imagery with confidence scores and AI-generated interpretations of the radiological findings.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-rose-500/20 p-2 rounded-lg mr-4"><Activity className="w-5 h-5 text-rose-400" /></div>
                  <span className="text-slate-300 pt-1">High confidence analysis flag for anomalies (e.g., 95.0% probability).</span>
                </li>
                 <li className="flex items-start">
                  <div className="bg-emerald-500/20 p-2 rounded-lg mr-4"><Sparkles className="w-5 h-5 text-emerald-400" /></div>
                  <span className="text-slate-300 pt-1">Clear distinction for healthy metrics (e.g., 5.0% probability).</span>
                </li>
                 <li className="flex items-start">
                  <div className="bg-indigo-500/20 p-2 rounded-lg mr-4"><BrainCircuit className="w-5 h-5 text-indigo-400" /></div>
                  <span className="text-slate-300 pt-1">Generative AI breakdown of physiological evidence.</span>
                </li>
              </ul>
             </div>
          </div>
          
          <div className="grid grid-cols-1 gap-12 items-center">
            <div className="text-center max-w-2xl mx-auto mb-4">
              <h4 className="text-3xl font-display font-bold mb-4">Architecture &amp; Flow</h4>
              <p className="text-slate-400 leading-relaxed">
                A seamless flow connecting the UI, AI inference engine, and the resulting diagnostic reports.
              </p>
            </div>
            <div className="relative mx-auto w-full max-w-4xl">
              <img src="/screenshot-arch.jpg" alt="Architecture Flow" className="rounded-2xl border border-slate-700/50 shadow-2xl brightness-90 hover:brightness-100 transition-all object-cover w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* --- Projects --- */}
      <section id="projects" className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-sm font-mono tracking-widest text-indigo-600 uppercase mb-6 font-bold">03. Selected Projects</h2>
              <h3 className="text-5xl md:text-6xl font-display font-bold tracking-tight text-slate-900 leading-tight">A Portfolio of Clinical &amp; System Tools.</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {['all', 'web', 'ai', 'tool'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-8 py-3 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all ${
                    filter === cat 
                    ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-200 scale-105' 
                    : 'glass text-slate-500 hover:bg-white hover:text-indigo-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="flex flex-col gap-32"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p, i) => (
                <ProjectShowcase key={p.id} project={p} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* --- Achievements --- */}
      <section id="achievements" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mb-20">
            <h2 className="text-sm font-mono tracking-widest text-indigo-600 uppercase mb-6 font-bold">04. Career Milestones</h2>
            <h3 className="text-5xl md:text-6xl font-display font-bold tracking-tight text-slate-900 leading-tight">Key Accomplishments.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {ACHIEVEMENTS.map((a, i) => (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative glass p-10 rounded-[3rem] card-shadow hover:bg-slate-50 transition-all duration-500"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-10">
                    <div className="p-5 rounded-3xl bg-white border border-slate-100 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all">
                      {a.icon}
                    </div>
                    <span className="font-mono text-slate-400 text-sm font-bold tracking-widest">{a.year}</span>
                  </div>
                  <h4 className="text-xs text-indigo-600 font-bold uppercase tracking-widest mb-3">{a.organization}</h4>
                  <h5 className="text-2xl font-display font-bold mb-6 flex-1 text-slate-900 leading-tight">{a.title}</h5>
                  <p className="text-slate-500 text-base leading-relaxed font-light">{a.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Reel & Moving --- */}
      <section id="reels" className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mb-20">
            <h2 className="text-sm font-mono tracking-widest text-indigo-600 uppercase mb-6 font-bold">05. Reel &amp; Moving</h2>
            <h3 className="text-5xl md:text-6xl font-display font-bold tracking-tight text-slate-900 leading-tight">Award-Winning Movie.</h3>
            <p className="mt-6 text-slate-500 font-light leading-relaxed text-lg">
              1st Position at the Academic Arts Competition for exceptional creative leadership and technical filmmaking.
            </p>
          </div>

          <div className="w-full max-w-5xl mx-auto glass p-4 md:p-8 rounded-[3rem] card-shadow hover:border-indigo-400/30 transition-colors">
            <div className="relative aspect-video w-full rounded-[2rem] overflow-hidden bg-slate-900 border border-slate-100 shadow-inner">
              <iframe 
                src="https://www.youtube.com/embed/-P5EyzjuPec?rel=0" 
                title="Award Winning Movie" 
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-8 flex items-center justify-between px-2 md:px-4">
               <div>
                 <h4 className="font-display font-bold text-xl md:text-2xl text-slate-900">1st Position - Movie Making</h4>
                 <p className="text-slate-500 text-xs md:text-sm mt-1 uppercase tracking-widest font-mono">Academic Arts Competition, 2025</p>
               </div>
               <div className="p-3 md:p-4 bg-indigo-50 text-indigo-600 rounded-2xl shrink-0">
                 <Trophy size={28} />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Contact --- */}
      <section id="contact" className="py-32 bg-indigo-600 relative overflow-hidden">
        {/* Background Decorative Rings */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full border-[1.5px] border-white/10" />
        <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full border-[1.5px] border-white/10" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-sm font-mono tracking-widest text-indigo-200 uppercase mb-8 font-bold">06. Connection</h2>
            <h3 className="text-6xl md:text-8xl font-display font-bold mb-10 tracking-tight leading-[0.9] text-white">
              Let&apos;s Build the Future.
            </h3>
            <p className="text-xl md:text-2xl text-indigo-100 mb-16 font-light leading-relaxed max-w-2xl mx-auto">
              I&apos;m looking for opportunities to contribute to innovative teams in 2026.
              Reach out if you&apos;re looking for a sharp, driven Developer.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a 
                href="mailto:ujjwalsingh.hal1@gmail.com" 
                className="w-full sm:w-auto px-12 py-6 bg-white text-indigo-600 font-bold rounded-[2rem] flex items-center justify-center gap-4 hover:bg-slate-100 shadow-2xl transition-all active:scale-95 text-lg"
              >
                <Mail size={24} /> Say Hello
              </a>
              <a 
                href="https://linkedin.com/in/ujjwalsinghcse" 
                target="_blank"
                className="w-full sm:w-auto px-12 py-6 bg-indigo-500/50 backdrop-blur-sm border border-white/20 text-white font-bold rounded-[2rem] flex items-center justify-center gap-4 hover:bg-indigo-500 transition-all text-lg"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex flex-col items-center md:items-start gap-4">
              <span className="text-2xl font-display font-bold text-slate-900">Ujjwal<span className="text-indigo-600">.code</span></span>
              <p className="text-slate-400 text-sm font-mono uppercase tracking-widest">© 2026 Ujjwal Singh. All Rights Reserved.</p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-10">
              {[
                { name: 'GitHub', url: 'https://github.com/ujjwalstann' },
                { name: 'LinkedIn', url: 'https://linkedin.com/in/ujjwalsinghcse' },
                { name: 'Email', url: 'mailto:ujjwalsingh.hal1@gmail.com' }
              ].map(social => (
                <a key={social.name} href={social.url} target="_blank" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors">
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
