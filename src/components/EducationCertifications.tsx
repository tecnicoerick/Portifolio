import React from 'react';
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';
import { GraduationCap, Award, CheckCircle2, Cloud, Brain, Shield, Clock } from 'lucide-react';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="formacao" className="py-24 bg-[#070a12]/70 backdrop-blur-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            Qualificação Acadêmica & Especializações
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Formação & Certificações Internacionais
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Base acadêmica em Gestão da TI e Automação Industrial aliada a certificações contínuas em Inteligência Artificial, Cloud Computing e Cibersegurança.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Academic Degrees Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-100">Formação Acadêmica</h3>
            </div>

            <div className="space-y-4">
              {EDUCATION_DATA.map((edu) => (
                <div
                  key={edu.id}
                  className="p-6 rounded-2xl bg-[#0d1322] border border-slate-800/90 hover:border-cyan-500/40 transition-all group"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-cyan-400 font-bold">
                      {edu.period}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                      {edu.status}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {edu.degree}
                  </h4>
                  <p className="text-xs font-semibold text-emerald-400 mt-0.5">
                    {edu.institution}
                  </p>
                  {edu.description && (
                    <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Grid Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-100">Certificações & Especializações</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS_DATA.map((cert) => {
                const isOngoing = cert.year.toLowerCase().includes('andamento');

                return (
                  <div
                    key={cert.id}
                    className="p-5 rounded-2xl bg-[#0d1322] border border-slate-800/90 hover:border-emerald-500/40 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                          {cert.issuer}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded flex items-center gap-1 ${
                            isOngoing
                              ? 'bg-amber-950/80 text-amber-400 border border-amber-500/30'
                              : 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30'
                          }`}
                        >
                          {isOngoing ? <Clock className="w-3 h-3" /> : <CheckCircle2 className="w-3 h-3" />}
                          {cert.year}
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
                        {cert.title}
                      </h4>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800/80">
                      <div className="flex flex-wrap gap-1">
                        {cert.skillsLearned.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
