import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Tilt3DCard } from './Tilt3DCard';
import {
  MessageSquare,
  ArrowRight,
  Sparkles,
  Download,
  Github,
  Linkedin,
  MapPin,
  CheckCircle2,
  ShieldAlert,
  Cpu,
  Brain,
  Database,
  Cloud,
  FileCode2
} from 'lucide-react';

interface HeroProps {
  onOpenCopilot: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCopilot }) => {
  const roles = [
    "Especialista em Análise de Dados",
    "Engenheiro de IA & Integração LLMs",
    "Gestor de Governança & SLAs",
    "Arquiteto Cloud (AWS & Oracle OCI)",
    "Especialista em Automação & ERPs"
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="sobre" className="relative pt-32 pb-20 overflow-hidden bg-[#070a12]">
      {/* Background Ambient Glows & Grid */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-cyan-600/15 via-purple-600/10 to-emerald-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column - Main Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Disponível para novos projetos & liderança técnica</span>
            </div>

            {/* Name Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none">
                {PERSONAL_INFO.name}
              </h1>
              <div className="h-10 mt-2 flex items-center">
                <span className="text-xl sm:text-2xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-300 to-indigo-400 font-semibold">
                  {displayText}
                </span>
                <span className="w-0.5 h-6 bg-cyan-400 ml-1 animate-pulse" />
              </div>
            </div>

            {/* Subtitle / Bio summary */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal max-w-2xl">
              {PERSONAL_INFO.tagline}
            </p>

            {/* Location & Quick Credentials */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-400" />
                {PERSONAL_INFO.location}
              </span>
              <span className="text-slate-700">•</span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Graduação em Gestão da TI
              </span>
              <span className="text-slate-700">•</span>
              <span className="flex items-center gap-1.5 text-cyan-400">
                <Cloud className="w-4 h-4 text-cyan-400" />
                OCI Certified & AWS
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-whatsapp-hero"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02] active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950" />
                <span>Conversar no WhatsApp</span>
              </a>

              <a
                href="#projetos"
                id="btn-view-projects-hero"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-200 text-sm font-semibold transition-all hover:border-cyan-500/50"
              >
                <span>Ver Projetos</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </a>

              <button
                onClick={onOpenCopilot}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-sm font-semibold transition-all"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Perguntar para IA</span>
              </button>
            </div>

            {/* Direct Links */}
            <div className="flex items-center gap-4 pt-2 text-xs text-slate-400">
              <span className="font-mono text-slate-500">Links Diretos:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>github.com/tecnicoerick</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Column - Portrait & Cyber Tech Showcase with 3D Tilt & Floating Badges */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-6">
            <div className="relative w-full max-w-md">

              {/* Glowing Ambient Halo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-500 blur-xl opacity-40 animate-pulseGlow" />

              {/* Floating 3D Levitation Badges (Vibe 3D style) */}
              <div className="hidden sm:flex absolute -top-5 -left-6 z-30 px-3.5 py-2 rounded-2xl bg-slate-900/90 border border-cyan-400/40 shadow-xl backdrop-blur-md items-center gap-2 animate-float3D">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-[11px] font-mono font-bold text-slate-100">Card 3D Interativo</span>
              </div>

              <div className="hidden sm:flex absolute -bottom-4 -right-4 z-30 px-3.5 py-2 rounded-2xl bg-slate-900/90 border border-emerald-400/40 shadow-xl backdrop-blur-md items-center gap-2 animate-floatReverse">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[11px] font-mono font-bold text-emerald-300">WebGL Shader Engine</span>
              </div>

              {/* Interactive 3D Tilt Card */}
              <Tilt3DCard maxTilt={14} scaleOnHover={1.02}>
                <div className="relative bg-[#0d1322]/90 border border-cyan-500/30 rounded-3xl p-6 shadow-2xl backdrop-blur-xl">

                  {/* Profile Photo Header */}
                  <div className="relative flex flex-col items-center text-center pb-6 border-b border-slate-800">
                    <div className="relative w-36 h-36 rounded-full p-1.5 bg-gradient-to-tr from-cyan-400 via-emerald-400 to-indigo-500 shadow-xl shadow-cyan-500/20 mb-4">
                      <img
                        src="https://github.com/tecnicoerick.png"
                        onError={(e) => {
                          (e.target as HTMLElement).setAttribute(
                            "src",
                            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80"
                          );
                        }}
                        alt={PERSONAL_INFO.name}
                        className="w-full h-full object-cover rounded-full bg-slate-900"
                      />
                      <div className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-[#0d1322] flex items-center justify-center shadow" title="Online & Ativo">
                        <div className="w-2 h-2 rounded-full bg-white animate-ping" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-100">{PERSONAL_INFO.name}</h3>
                    <p className="text-xs font-mono text-cyan-400 mt-1">
                      Especialista em Análise de Dados, IA & Governança
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">Queimados - RJ | Brasil</p>
                  </div>

                  {/* Tech Highlights Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-6">
                    <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3 hover:border-cyan-500/40 transition-colors">
                      <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                        <Brain className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Stack IA</span>
                        <span className="text-xs font-bold text-slate-200">LLMs & Python</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3 hover:border-emerald-500/40 transition-colors">
                      <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                        <Database className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Engenharia</span>
                        <span className="text-xs font-bold text-slate-200">Pandas & SQL</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3 hover:border-indigo-500/40 transition-colors">
                      <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
                        <Cloud className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Nuvem</span>
                        <span className="text-xs font-bold text-slate-200">AWS & Oracle OCI</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3 hover:border-purple-500/40 transition-colors">
                      <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Sistemas</span>
                        <span className="text-xs font-bold text-slate-200">SAP & WFM ERP</span>
                      </div>
                    </div>
                  </div>

                </div>
              </Tilt3DCard>
            </div>
          </div>

        </div>

        {/* Stats Row with 3D Tilt Cards */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <Tilt3DCard key={idx} maxTilt={8} scaleOnHover={1.03}>
              <div
                className="p-5 rounded-2xl bg-[#0d1322]/80 border border-slate-800/80 hover:border-cyan-500/40 transition-all text-center group h-full flex flex-col justify-center"
              >
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-indigo-400 group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            </Tilt3DCard>
          ))}
        </div>

      </div>
    </section>
  );
};
