import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, Linkedin, ExternalLink, Code2, BrainCircuit, Trophy, Mail, ChevronRight, Terminal, Cpu, Layers, Globe, Menu, X, ArrowUpRight, ArrowUp, Sparkles, Activity, Sun, Moon, FileText, CheckCircle2, Zap, Maximize2, Eye, Play
} from 'lucide-react';

interface Project {
  id: string; title: string; description: string; tags: string[]; category: 'web' | 'ai' | 'tool'; link: string; github: string; image: string;
}
interface Achievement {
  id: string; year: string; title: string; organization: string; description: string; icon: React.ReactNode;
}
interface SpotlightTab {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  badge: string;
  features: string[];
}

const PROJECTS: Project[] = [
  { id: '1', title: 'PneumoCheck AI', description: 'Final Year Project: An autonomous pneumonia detection system using CNN for chest X-ray classification and Gemini-powered OCR for prescription metadata extraction.', tags: ['React', 'Next.js', 'Node.js', 'CNN', 'Gemini AI'], category: 'ai', link: '#spotlight', github: 'https://github.com/Ujjwalstan', image: '/screenshot-landing.jpg' },
  { id: '2', title: 'Student Management System', description: 'Enterprise-grade console application implemented in Java using OOP principles to manage student records, performance, and attendance.', tags: ['Java', 'OOP', 'Data Structure'], category: 'tool', link: '#', github: 'https://github.com/Ujjwalstan', image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800' },
  { id: '3', title: 'Online Banking System', description: 'Secure Java-based banking engine supporting multi-account management, cryptographic transaction validation, and fund transfers.', tags: ['Java', 'Secure coding', 'Logic'], category: 'tool', link: '#', github: 'https://github.com/Ujjwalstan', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800' },
  { id: '4', title: 'E-Commerce Dashboard', description: 'A comprehensive React-based analytics dashboard for an e-commerce platform, integrating real-time visualizations and sales tracking.', tags: ['React', 'TypeScript', 'Tailwind', 'Recharts'], category: 'web', link: '#', github: 'https://github.com/Ujjwalstan', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' },
  { id: '5', title: 'TaskFlow Planner', description: 'A collaborative task management web application focusing on team productivity, featuring Kanban boards and real-time updates.', tags: ['Next.js', 'Firebase', 'Tailwind', 'Node.js'], category: 'web', link: '#', github: 'https://github.com/Ujjwalstan', image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800' },
  { id: '6', title: 'Neural Style Transfer engine', description: 'Exploratory machine learning project adapting artistic styles to arbitrary images using deep neural networks and PyTorch.', tags: ['Python', 'PyTorch', 'Computer Vision'], category: 'ai', link: '#', github: 'https://github.com/Ujjwalstan', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800' }
];

const ACHIEVEMENTS: Achievement[] = [
  { id: 'a1', year: '2025', title: '1st Position - Movie Making', organization: 'Academic Arts Competition', description: 'Demonstrated exceptional creative leadership and technical filmmaking skills in a competitive pool.', icon: <Trophy className="w-6 h-6 text-zinc-900 dark:text-white" /> },
  { id: 'a2', year: '2025', title: 'Java Developer Intern', organization: 'Elevate Labs (Skill India)', description: 'Built scalable inventory and banking systems, improving organizational data flow by 30%.', icon: <Code2 className="w-6 h-6 text-zinc-900 dark:text-white" /> },
  { id: 'a3', year: '2024', title: 'Leetcode Score: 195+', organization: 'Global Rank', description: 'Consistently solving algorithmic challenges to maintain peak problem-solving performance.', icon: <Terminal className="w-6 h-6 text-zinc-900 dark:text-white" /> }
];

const SKILLS = [
  { name: 'Core Languages', items: ['C / Python', 'Java (Advanced)', 'JavaScript (ES6+)'] },
  { name: 'Frontend Tech', items: ['React.js', 'Next.js', 'HTML5 / CSS3', 'Tailwind CSS'] },
  { name: 'Backend & DB', items: ['Node.js', 'Express.js', 'MongoDB', 'MySQL'] },
  { name: 'Professional Tools', items: ['Git / GitHub', 'VS Code', 'Linux (Basics)', 'REST APIs'] }
];

const SPOTLIGHT_TABS: SpotlightTab[] = [
  {
    id: 'landing',
    title: 'Portal & Upload UI',
    subtitle: 'Diagnostic Console',
    image: '/screenshot-landing.jpg',
    description: 'The primary user portal allows clinicians to drag & drop chest X-ray DICOM/PNG images and medical prescriptions for simultaneous multi-modal analysis.',
    badge: 'Upload Portal',
    features: ['Instant Drag & Drop DICOM Ingestion', 'Secure Patient Metadata Anonymization', 'Real-time Progress Indicator']
  },
  {
    id: 'high-prob',
    title: 'High Risk Analysis',
    subtitle: 'CNN Model Inference',
    image: '/screenshot-high.jpg',
    description: 'Deep Learning Convolutional Neural Network flags high pneumonia confidence (e.g. 95.0% probability) highlighting localized pulmonary consolidation regions.',
    badge: '95.0% High Probability',
    features: ['Grad-CAM Heatmap Localization', 'Confidence Level Thresholding', 'Critical Alert Triggering']
  },
  {
    id: 'low-prob',
    title: 'Normal / Low Risk',
    subtitle: 'Healthy Baseline Verification',
    image: '/screenshot-low.jpg',
    description: 'Verifies clear lung fields with low pneumonia probability (e.g. 5.0%), providing standard baseline clinical metrics for reference.',
    badge: '5.0% Low Probability',
    features: ['Clear Lung Density Verification', 'Baseline Comparison', 'Automated Diagnostic Clearance']
  },
  {
    id: 'prescription',
    title: 'Prescription OCR',
    subtitle: 'Gemini AI Vision Extraction',
    image: '/screenshot-prescription.jpg',
    description: 'Integrates Google Gemini AI Vision API to parse handwritten physician notes, extract medication lists, dosages, and cross-check against patient records.',
    badge: 'Gemini AI OCR',
    features: ['Handwriting Recognition', 'Dosage & Drug Name Extraction', 'Interaction Cross-Reference']
  },
  {
    id: 'process',
    title: 'Clinical Process',
    subtitle: '4-Step Workflow Pipeline',
    image: '/screenshot-steps.jpg',
    description: 'Structured end-to-end diagnostic sequence guiding medical staff from initial X-ray ingest to complete structured summary generation.',
    badge: 'Workflow Pipeline',
    features: ['Step 1: Patient Ingest', 'Step 2: Neural Classification', 'Step 3: OCR Extraction', 'Step 4: Final Summary']
  },
  {
    id: 'architecture',
    title: 'System Architecture',
    subtitle: 'Full-Stack Data Flow',
    image: '/screenshot-arch.jpg',
    description: 'Comprehensive system flow linking Next.js frontend, Node.js backend services, CNN inference server, and Gemini API endpoints.',
    badge: 'Technical Topology',
    features: ['Next.js / React Client', 'Node.js Express Gateway', 'PyTorch CNN Backend', 'Gemini Multi-Modal API']
  }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'PneumoCheck AI', href: '#spotlight' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-display font-bold tracking-tighter text-zinc-900 dark:text-white">Ujjwal</a>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">{link.name}</a>
          ))}
          <a href="#contact" className="px-6 py-2.5 text-sm font-semibold rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">Contact Me</a>
          <button onClick={() => setIsDark(!isDark)} className="p-2.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 transition-colors" aria-label="Toggle Theme">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400" aria-label="Toggle Theme">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="text-zinc-900 dark:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Navigation Menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden glass px-6 py-8 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-zinc-800 dark:text-zinc-200">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const ProjectShowcase = ({ project, index }: { project: Project; index: number; key?: React.Key }) => {
  const isEven = index % 2 === 0;
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center`}>
      <div className="w-full lg:w-1/2 relative group">
        <div className="relative rounded-3xl overflow-hidden card-shadow aspect-[16/10] bg-zinc-100 dark:bg-zinc-900">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out" />
          <div className="absolute top-6 left-6 px-4 py-1.5 glass rounded-full text-xs font-mono uppercase tracking-widest text-zinc-900 dark:text-white">
            {project.category}
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h3 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 dark:text-white mb-5">{project.title}</h3>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-8">{project.description}</p>
        <div className="mb-10">
          <h4 className="text-xs font-mono tracking-widest text-zinc-400 dark:text-zinc-500 uppercase mb-4 font-bold">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs font-medium px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
          <a href={project.link} className="px-8 py-3.5 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
            View Details <ExternalLink size={18} />
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-transparent text-zinc-900 dark:text-white font-bold rounded-2xl flex items-center justify-center gap-3 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
            Code <Github size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [filter, setFilter] = useState<string>('all');
  const [activeTabId, setActiveTabId] = useState<string>('landing');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const activeTab = SPOTLIGHT_TABS.find(t => t.id === activeTabId) || SPOTLIGHT_TABS[0];
  const filteredProjects = PROJECTS.filter(p => filter === 'all' || p.category === filter);

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#09090B] text-zinc-900 dark:text-zinc-300">
      <Navbar />

      <main>
        {/* --- Hero Section --- */}
        <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7 max-w-3xl">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-3 px-4 py-1.5 glass rounded-full text-xs font-semibold text-zinc-900 dark:text-white mb-8">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available for Software Engineering Roles</span>
                </motion.div>
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl sm:text-6xl md:text-[5rem] font-display font-bold tracking-tight leading-[1.08] mb-8 text-zinc-900 dark:text-white">
                  Building Scalable Software & AI Systems.
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-light max-w-2xl leading-relaxed mb-10">
                  I&apos;m <span className="text-zinc-900 dark:text-white font-semibold">Ujjwal Singh</span>, a Software Engineer specializing in robust backend development, Java, Spring Boot, and AI-powered multi-modal web applications.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-5 items-center">
                  <a href="#spotlight" className="px-8 py-4 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-bold rounded-2xl flex items-center gap-3 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-sm">
                    Explore PneumoCheck AI <ChevronRight size={18} />
                  </a>
                  <a href="#projects" className="px-8 py-4 border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 text-zinc-900 dark:text-white font-bold rounded-2xl flex items-center gap-3 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all">
                    View Portfolio
                  </a>
                  <div className="flex gap-3 pl-2">
                    {[
                      { name: 'GitHub', icon: <Github size={20} />, href: 'https://github.com/Ujjwalstan' },
                      { name: 'LinkedIn', icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/ujjwalsinghcse' },
                      { name: 'Email', icon: <Mail size={20} />, href: 'mailto:vujjwal708@gmail.com' }
                    ].map((s, i) => (
                      <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center glass rounded-2xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" aria-label={s.name}>
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Hero Banner Feature Card */}
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} className="lg:col-span-5 relative">
                <a href="#spotlight" className="block group">
                  <div className="glass p-3 rounded-3xl transition-all duration-500 group-hover:border-zinc-400 dark:group-hover:border-zinc-600">
                    <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-zinc-900 border border-zinc-800 shadow-md">
                      <img src="/screenshot-landing.jpg" alt="PneumoCheck AI Preview" className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700 opacity-90 group-hover:opacity-100" />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />
                      
                      <div className="absolute top-4 left-4 px-3 py-1 bg-zinc-900/80 backdrop-blur-md border border-zinc-700/80 rounded-full text-xs font-mono text-emerald-400 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Featured Capstone
                      </div>

                      <div className="absolute bottom-5 left-5 right-5 text-white">
                        <div className="flex items-center gap-2 text-zinc-300 text-xs font-mono mb-1">
                          <BrainCircuit size={14} className="text-zinc-300" /> Medical AI System
                        </div>
                        <h3 className="text-2xl font-display font-bold text-white mb-1">PneumoCheck AI</h3>
                        <p className="text-zinc-300 text-xs line-clamp-2">Autonomous pneumonia detection using CNN and Gemini OCR.</p>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- About & Skills --- */}
        <section id="about" className="py-24 bg-white dark:bg-[#09090B] border-t border-zinc-200/60 dark:border-zinc-800/60">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-16 items-start">
              <div className="md:col-span-12 lg:col-span-5">
                <h2 className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-4 font-bold">01. Profile &amp; Background</h2>
                <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 tracking-tight text-zinc-900 dark:text-white leading-tight">Software Engineer.</h3>
                <div className="space-y-6 text-zinc-600 dark:text-zinc-400 leading-relaxed font-light text-lg">
                  <p>
                    Graduate in <span className="text-zinc-900 dark:text-white font-semibold">B.Tech Computer Science &amp; Engineering</span> from <span className="text-zinc-900 dark:text-white font-semibold">Saroj Institute of Technology and Management, Lucknow</span> (AKTU, 8.0 CGPA).
                  </p>
                  <p>
                    Experienced in building high-throughput Java applications, Spring Boot architectures, and modern React/Next.js client applications integrated with deep learning models.
                  </p>
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-mono">
                     <div className="p-5 glass rounded-2xl">
                       <div className="text-zinc-500 mb-1 text-xs uppercase tracking-widest">Education</div>
                       <div className="text-zinc-900 dark:text-white font-bold">B.Tech CSE (2026)</div>
                       <div className="text-zinc-500 text-xs mt-1">8.0 CGPA Score</div>
                     </div>
                     <div className="p-5 glass rounded-2xl">
                       <div className="text-zinc-500 mb-1 text-xs uppercase tracking-widest">Status</div>
                       <div className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-2">
                         <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                         Open to Roles
                       </div>
                       <div className="text-zinc-500 text-xs mt-1">Java / Full-Stack</div>
                     </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-12 lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {SKILLS.map((set, i) => (
                    <motion.div key={set.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass p-8 rounded-3xl">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white">
                          {i === 0 && <Layers size={20} />}
                          {i === 1 && <Terminal size={20} />}
                          {i === 2 && <Cpu size={20} />}
                          {i === 3 && <Globe size={20} />}
                        </div>
                        <h4 className="font-display font-bold text-lg text-zinc-900 dark:text-white">{set.name}</h4>
                      </div>
                      <ul className="space-y-3">
                        {set.items.map(item => (
                          <li key={item} className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
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

        {/* --- MAIN SHOWCASE: PneumoCheck AI --- */}
        <section id="spotlight" className="py-28 bg-[#F4F4F5] dark:bg-[#0C0C0E] border-y border-zinc-200 dark:border-zinc-800">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 rounded-full text-xs font-mono uppercase tracking-widest mb-4 font-bold">
                  <BrainCircuit size={14} /> 02. Flagship Project Showcase
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
                  PneumoCheck AI
                </h2>
                <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl font-light leading-relaxed">
                  Autonomous Pneumonia Detection System &amp; AI Medical Report Summarizer using CNN Chest X-Ray Classification and Gemini OCR.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a href="https://github.com/Ujjwalstan" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-bold text-sm rounded-xl flex items-center gap-2 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
                  <Github size={16} /> Repository
                </a>
              </div>
            </div>

            {/* Tab Selector Buttons */}
            <div className="flex flex-wrap gap-2 p-1.5 glass rounded-2xl mb-10 overflow-x-auto">
              {SPOTLIGHT_TABS.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                    activeTabId === tab.id
                      ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-sm'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50'
                  }`}
                >
                  <span>{tab.title}</span>
                </button>
              ))}
            </div>

            {/* Active Screenshot Display Stage */}
            <div className="grid lg:grid-cols-12 gap-10 items-center bg-white dark:bg-[#141417] p-6 md:p-10 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <div className="lg:col-span-8 relative group">
                <div className="relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 aspect-[16/10]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeTab.id}
                      src={activeTab.image}
                      alt={activeTab.title}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full object-contain bg-zinc-950"
                    />
                  </AnimatePresence>

                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 bg-zinc-900/90 backdrop-blur-md text-white text-xs font-mono rounded-full border border-zinc-700/80 font-semibold shadow-md">
                      {activeTab.badge}
                    </span>
                  </div>

                  <button
                    onClick={() => setLightboxImage(activeTab.image)}
                    className="absolute bottom-4 right-4 p-3 bg-zinc-900/80 hover:bg-zinc-900 text-white rounded-xl backdrop-blur-md border border-zinc-700 transition-all flex items-center gap-2 text-xs font-semibold"
                    title="View Fullsize Image"
                  >
                    <Maximize2 size={16} /> Expand Preview
                  </button>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-bold mb-1">
                    {activeTab.subtitle}
                  </div>
                  <h3 className="text-3xl font-display font-bold text-zinc-900 dark:text-white mb-4">
                    {activeTab.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed text-base mb-6">
                    {activeTab.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-bold">
                      Key Highlights
                    </h4>
                    {activeTab.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
                  <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3 font-bold">
                    System Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['CNN PyTorch', 'Gemini AI Vision', 'Next.js', 'Node.js Express', 'Tailwind'].map(tech => (
                      <span key={tech} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium rounded-lg border border-zinc-200 dark:border-zinc-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Screenshot Grid Thumbnails */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {SPOTLIGHT_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`relative rounded-2xl overflow-hidden border transition-all duration-300 text-left aspect-[4/3] group ${
                    activeTabId === tab.id
                      ? 'border-zinc-900 dark:border-white ring-2 ring-zinc-900/20 dark:ring-white/20'
                      : 'border-zinc-200 dark:border-zinc-800 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={tab.image} alt={tab.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-zinc-950/40 group-hover:bg-zinc-950/20 transition-colors" />
                  <div className="absolute bottom-2 left-2 right-2 text-[10px] font-bold text-white tracking-wide truncate bg-zinc-900/80 px-2 py-1 rounded-md backdrop-blur-sm">
                    {tab.title}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* --- Selected Projects --- */}
        <section id="projects" className="py-28 bg-white dark:bg-[#09090B]">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div>
                <h2 className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-3 font-bold">03. Additional Work</h2>
                <h3 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">Selected Projects</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['all', 'web', 'ai', 'tool'].map(cat => (
                  <button key={cat} onClick={() => setFilter(cat)} className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${ filter === cat ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white' }`}>
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <motion.div layout className="flex flex-col gap-24">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((p, i) => (
                  <ProjectShowcase key={p.id} project={p} index={i} />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* --- Career Milestones --- */}
        <section id="achievements" className="py-28 bg-[#F4F4F5] dark:bg-[#0C0C0E] border-t border-zinc-200 dark:border-zinc-800">
          <div className="container mx-auto px-6">
            <div className="max-w-xl mb-16">
              <h2 className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-3 font-bold">04. Career Milestones</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">Key Accomplishments</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ACHIEVEMENTS.map((a, i) => (
                <motion.div key={a.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start justify-between mb-8">
                      <div className="p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                        {a.icon}
                      </div>
                      <span className="font-mono text-zinc-400 dark:text-zinc-500 text-sm font-bold tracking-widest">{a.year}</span>
                    </div>
                    <h4 className="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-2">{a.organization}</h4>
                    <h5 className="text-2xl font-display font-bold mb-4 flex-1 text-zinc-900 dark:text-white leading-tight">{a.title}</h5>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed font-light">{a.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Contact --- */}
        <section id="contact" className="py-28 bg-white dark:bg-[#09090B] relative overflow-hidden border-t border-zinc-200 dark:border-zinc-800">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-6 font-bold">// GET IN TOUCH</h2>
              <h3 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight text-zinc-900 dark:text-white leading-tight">
                Let&apos;s work together.
              </h3>
              <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-12 font-light leading-relaxed">
                Open to full-time Software Engineer positions, backend roles, and technical collaborations.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <a href="mailto:vujjwal708@gmail.com" className="w-full sm:w-auto px-10 py-5 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all text-base shadow-sm">
                  <Mail size={20} /> Send an Email <ArrowUpRight size={18} className="opacity-70" />
                </a>
                <a href="https://linkedin.com/in/ujjwalsinghcse" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-5 border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 text-zinc-900 dark:text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all text-base">
                  <Linkedin size={20} /> Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* --- Lightbox Modal --- */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-6 flex items-center justify-center cursor-zoom-out"
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 p-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full transition-colors"
              aria-label="Close Fullscreen Preview"
            >
              <X size={24} />
            </button>
            <img
              src={lightboxImage}
              alt="Expanded Preview"
              className="max-w-full max-h-[90vh] object-contain rounded-2xl border border-zinc-800 shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Expanded Professional Footer --- */}
      <footer className="bg-white dark:bg-[#060608] border-t border-zinc-200 dark:border-zinc-800/80 pt-20 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-zinc-200/80 dark:border-zinc-800/80">
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-display font-bold text-zinc-900 dark:text-white tracking-tight">Ujjwal Singh</span>
                <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-widest font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-full">
                  Available
                </span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed max-w-sm font-light">
                Software Engineer specializing in Java, Spring Boot, Next.js, and multi-modal AI applications like PneumoCheck AI. Dedicated to clean code, robust backend engineering, and user-centric systems.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="mailto:vujjwal708@gmail.com"
                  className="px-5 py-2.5 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-xs font-bold rounded-xl flex items-center gap-2 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm"
                >
                  <Mail size={14} /> Send Email
                </a>
                <a
                  href="https://github.com/Ujjwalstan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 glass rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={16} />
                </a>
                <a
                  href="https://linkedin.com/in/ujjwalsinghcse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 glass rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-900 dark:text-white font-bold mb-5">
                Navigation
              </h4>
              <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                <li><a href="#about" className="hover:text-zinc-900 dark:hover:text-white transition-colors">01. Profile Summary</a></li>
                <li><a href="#spotlight" className="hover:text-zinc-900 dark:hover:text-white transition-colors">02. PneumoCheck AI</a></li>
                <li><a href="#projects" className="hover:text-zinc-900 dark:hover:text-white transition-colors">03. Selected Projects</a></li>
                <li><a href="#achievements" className="hover:text-zinc-900 dark:hover:text-white transition-colors">04. Milestones</a></li>
                <li><a href="#contact" className="hover:text-zinc-900 dark:hover:text-white transition-colors">05. Get In Touch</a></li>
              </ul>
            </div>

            {/* Featured Projects */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-900 dark:text-white font-bold mb-5">
                Featured Work
              </h4>
              <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                <li><a href="#spotlight" className="hover:text-zinc-900 dark:hover:text-white transition-colors">PneumoCheck AI</a></li>
                <li><a href="#projects" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Student Management</a></li>
                <li><a href="#projects" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Online Banking System</a></li>
                <li><a href="#projects" className="hover:text-zinc-900 dark:hover:text-white transition-colors">E-Commerce Analytics</a></li>
                <li><a href="#projects" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Neural Style Transfer</a></li>
              </ul>
            </div>

            {/* Core Stack */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-900 dark:text-white font-bold mb-5">
                Core Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Spring Boot', 'Next.js', 'React', 'Python', 'PyTorch', 'Node.js', 'Express', 'MySQL', 'REST APIs', 'Git', 'Linux'].map(item => (
                  <span key={item} className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-500 font-mono">
            <div>
              © {new Date().getFullYear()} Ujjwal Singh. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href="https://github.com/Ujjwalstan" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors uppercase tracking-widest">
                GitHub
              </a>
              <a href="https://linkedin.com/in/ujjwalsinghcse" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors uppercase tracking-widest">
                LinkedIn
              </a>
              <a href="mailto:vujjwal708@gmail.com" className="hover:text-zinc-900 dark:hover:text-white transition-colors uppercase tracking-widest">
                Email
              </a>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors flex items-center gap-1.5 ml-2 font-sans font-bold"
                aria-label="Scroll back to top"
              >
                <ArrowUp size={14} /> Top
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
