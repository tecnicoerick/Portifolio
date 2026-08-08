import React, { useState } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillItem } from '../types';
import {
  Code2,
  BrainCircuit,
  Sparkles,
  Workflow,
  TrendingUp,
  ShieldCheck,
  DatabaseZap,
  Terminal,
  Cloud,
  GitBranch,
  Box,
  Database,
  Layout
} from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Code2,
  BrainCircuit,
  Sparkles,
  Workflow,
  TrendingUp,
  ShieldCheck,
  DatabaseZap,
  Terminal,
  Cloud,
  GitBranch,
  Box,
  Database,
  Layout
};

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todas as Habilidades' },
    { id: 'dados_ia', label: 'Análise de Dados & IA' },
    { id: 'governanca', label: 'Governança & Processos' },
    { id: 'sistemas_automacao', label: 'Sistemas & Automação' },
    { id: 'ferramentas', label: 'Ferramentas & Dev' }
  ];

  const filteredSkills = activeCategory === 'todos'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((skill) => skill.category === activeCategory);

  return (
    <section id="habilidades" className="py-24 bg-[#090d16]/70 backdrop-blur-sm relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            Matriz Técnica
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Habilidades Técnicas & Governança
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Especialista na fusão de engenharia de dados, inteligência artificial generativa, automação de processos e governança de indicadores corporativos.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.iconName] || Code2;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[#0d1322] border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-500/20">
                      {skill.level}%
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  {/* Progress Bar */}
                  <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden mb-3">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-emerald-400 h-full rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {skill.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900 text-slate-400 border border-slate-800"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
