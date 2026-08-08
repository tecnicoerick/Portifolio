import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050810] border-t border-slate-800/80 py-12 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">

          {/* Left Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-lg font-bold text-slate-100 tracking-tight">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-xs text-cyan-400 mt-0.5">
              Especialista em Análise de Dados, IA & Governança de Processos
            </span>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-cyan-400 bg-slate-900 rounded-lg border border-slate-800"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-cyan-400 bg-slate-900 rounded-lg border border-slate-800"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-lg border border-slate-800"
              title="Voltar ao Topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px] text-center sm:text-left">
          <span>
            © {new Date().getFullYear()} Erick José Vieira. Todos os direitos reservados.
          </span>
          <span className="flex items-center gap-1">
            Desenvolvido com React, TypeScript, Tailwind CSS e Inteligência Artificial.
          </span>
        </div>
      </div>
    </footer>
  );
};
