import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Github,
  Linkedin,
  Terminal,
  Download,
  Bot,
  Menu,
  X,
  Sparkles,
  Code,
  User,
  Briefcase,
  FolderGit2,
  GraduationCap,
  Mail
} from 'lucide-react';

interface HeaderProps {
  onOpenCopilot: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCopilot }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre', icon: User },
    { name: 'Habilidades', href: '#habilidades', icon: Code },
    { name: 'Experiência', href: '#experiencia', icon: Briefcase },
    { name: 'Projetos', href: '#projetos', icon: FolderGit2 },
    { name: 'Formação', href: '#formacao', icon: GraduationCap },
    { name: 'Contato', href: '#contato', icon: Mail }
  ];

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090d16]/90 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-lg shadow-cyan-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 p-[2px] shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
            <div className="w-full h-full bg-[#0d1322] rounded-[10px] flex items-center justify-center font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 text-lg">
              EV
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-100 text-lg tracking-tight group-hover:text-cyan-400 transition-colors">
              Erick Vieira
            </span>
            <span className="text-[10px] font-mono text-cyan-400/80 tracking-widest uppercase">
              IA & Data Specialist
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0d1322]/80 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-full transition-all"
              >
                <Icon className="w-3.5 h-3.5 text-slate-400" />
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Actions & Social */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenCopilot}
            id="btn-ai-copilot-header"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-medium transition-all shadow-sm shadow-cyan-500/10 hover:shadow-cyan-500/20 active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>Copilot IA</span>
          </button>

          <div className="h-4 w-[1px] bg-slate-800 mx-1" />

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 rounded-full transition-colors"
            title="Ver GitHub do Erick"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 rounded-full transition-colors"
            title="Ver LinkedIn do Erick"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenCopilot}
            className="p-2 text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-lg"
            title="Copilot IA"
          >
            <Bot className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white bg-slate-800/60 rounded-lg border border-slate-700/50"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d1322] border-b border-cyan-500/20 px-4 pt-3 pb-6 mt-3 space-y-2 backdrop-blur-xl animate-fadeIn">
          <div className="mb-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCopilot();
              }}
              className="w-full flex items-center justify-center gap-2 p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-medium"
            >
              <Sparkles className="w-4 h-4" />
              <span>Copilot IA</span>
            </button>
          </div>

          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800/60 rounded-lg"
              >
                <Icon className="w-4 h-4 text-cyan-400" />
                {link.name}
              </a>
            );
          })}

          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-around">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-slate-300 hover:text-cyan-400"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-slate-300 hover:text-cyan-400"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
