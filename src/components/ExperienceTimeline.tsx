import React, { useState } from 'react';
import { EXPERIENCES_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronDown, ChevronUp, Layers, Award } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>(EXPERIENCES_DATA[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section id="experiencia" className="py-24 bg-[#070a12]/70 backdrop-blur-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-3">
            Trajetória Profissional
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experiência Profissional & Governança
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Atuação consistente na otimização de fluxos operacionais, implantação de sistemas de automação, gestão de ERPs e governança rigorosa de KPIs.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-emerald-500 to-slate-800 -translate-x-1/2" />

          <div className="space-y-12">
            {EXPERIENCES_DATA.map((exp, index) => {
              const isEven = index % 2 === 0;
              const isExpanded = expandedId === exp.id;

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Point */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0d1322] border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/30 z-20">
                    <Briefcase className="w-4 h-4 text-cyan-300" />
                  </div>

                  {/* Experience Card */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0">
                    <div className="p-6 rounded-2xl bg-[#0d1322] border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 shadow-xl group">

                      {/* Header info */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-500/20">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400">
                          {exp.duration}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mt-1">
                        <Layers className="w-3.5 h-3.5" />
                        <span>{exp.company}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-400 font-normal flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {exp.location}
                        </span>
                      </div>

                      {/* Responsibilities list */}
                      <ul className="mt-4 space-y-2 text-xs text-slate-300 leading-relaxed">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2">
                            <span className="text-cyan-400 font-bold mt-0.5">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Expandable Highlights */}
                      {isExpanded && (
                        <div className="mt-4 pt-4 border-t border-slate-800 space-y-3 animate-fadeIn">
                          <div className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                            <Award className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Destaques & Conquistas:</span>
                          </div>
                          <ul className="space-y-1.5 text-xs text-emerald-300/90 bg-emerald-950/20 p-3 rounded-xl border border-emerald-500/20">
                            {exp.highlights.map((h, hIdx) => (
                              <li key={hIdx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Card Footer: Tech tags + Toggle button */}
                      <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between flex-wrap gap-2">
                        <div className="flex flex-wrap gap-1">
                          {exp.technologies.slice(0, 3).map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <button
                          onClick={() => toggleExpand(exp.id)}
                          className="text-xs text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1"
                        >
                          <span>{isExpanded ? 'Ocultar Destaques' : 'Ver Conquistas'}</span>
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
