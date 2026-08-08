import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { Tilt3DCard } from './Tilt3DCard';
import {
  FolderGit2,
  Github,
  ExternalLink,
  Code2,
  CheckCircle2,
  Sparkles,
  Layers,
  Terminal,
  X
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos os Projetos' },
    { id: 'python_ia', label: 'Python & IA' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'cloud_seguranca', label: 'Cloud & Segurança' },
    { id: 'automacao', label: 'Automação ERP' }
  ];

  const filteredProjects = filter === 'todos'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === filter);

  return (
    <section id="projetos" className="py-24 bg-[#090d16]/70 backdrop-blur-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            Portfolio de Casos Práticos
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projetos Aplicados em Dados, IA & Governança
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Soluções reais e funcionais desenvolvidas com Python, Machine Learning, Cloud Computing e integração de Inteligência Artificial Generativa.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  filter === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Tilt3DCard key={project.id} maxTilt={10} scaleOnHover={1.02}>
              <div
                className="p-6 sm:p-8 rounded-3xl bg-[#0d1322]/90 border border-slate-800/90 hover:border-cyan-500/50 transition-all duration-300 shadow-xl group flex flex-col justify-between h-full"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/30">
                      {project.category.replace('_', ' ').toUpperCase()}
                    </span>
                    {project.featured && (
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Destaque
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Metrics Badges */}
                  <div className="mt-5 space-y-1.5">
                    <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      Métricas de Impacto:
                    </div>
                    {project.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="flex items-center gap-2 text-xs text-emerald-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies & Actions */}
                <div className="mt-8 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                    >
                      Ver Detalhes
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-lg border border-slate-800 hover:border-cyan-500/30 transition-colors"
                      title="Ver no GitHub do Erick"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt3DCard>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0d1322] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/30">
                  {selectedProject.category.toUpperCase()}
                </span>
                <h3 className="text-2xl font-bold text-white mt-3">{selectedProject.title}</h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* Architecture Diagram */}
              {selectedProject.architectureDiagram && (
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2 font-mono">
                    Fluxo Arquitetural do Sistema:
                  </span>
                  <div className="p-3 rounded-xl bg-[#070a11] font-mono text-xs text-cyan-300 border border-slate-800">
                    {selectedProject.architectureDiagram}
                  </div>
                </div>
              )}

              {/* Code Snippet */}
              {selectedProject.codeSnippet && (
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2 font-mono">
                    Trecho de Código Técnico (Python):
                  </span>
                  <pre className="p-4 rounded-2xl bg-[#070a11] border border-slate-800 font-mono text-xs text-emerald-300 overflow-x-auto">
                    {selectedProject.codeSnippet}
                  </pre>
                </div>
              )}

              {/* Metrics */}
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2 font-mono">
                  Resultados Obtidos & KPIs:
                </span>
                <div className="space-y-2">
                  {selectedProject.metrics.map((m, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-emerald-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-bold transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>Ver Repositório no GitHub</span>
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-slate-200"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
