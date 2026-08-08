import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, MessageSquare, Linkedin, Github, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.message) return;

    // Build direct WhatsApp link with prefilled text
    const text = encodeURIComponent(
      `Olá Erick! Meu nome é ${form.name} (${form.email || 'Não informado'}).\nAssunto: ${form.subject || 'Contato via Portfólio'}\n\nMensagem: ${form.message}`
    );
    window.open(`https://wa.me/5521985658754?text=${text}`, '_blank');

    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contato" className="py-24 bg-[#070a12]/70 backdrop-blur-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-3">
            Canais de Comunicação
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Entre em Contato com Erick Vieira
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Aberto para oportunidades de contratação, projetos de consultoria em Análise de Dados, automação de processos ou integração de IA.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">

            {/* Direct WhatsApp Card */}
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl bg-gradient-to-r from-emerald-950/60 to-slate-900 border border-emerald-500/40 hover:border-emerald-400 transition-all block group shadow-lg shadow-emerald-950/30"
            >
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-emerald-500 text-slate-950 font-bold group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6 fill-slate-950" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold block">
                    Canal Rápido WhatsApp
                  </span>
                  <span className="text-lg font-bold text-slate-100 group-hover:text-emerald-300">
                    {PERSONAL_INFO.phone}
                  </span>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    Clique para iniciar uma conversa no WhatsApp
                  </span>
                </div>
              </div>
            </a>

            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-[#0d1322] border border-slate-800 flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                  E-mail Profissional
                </span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-base font-bold text-slate-100 hover:text-cyan-400 transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="p-6 rounded-3xl bg-[#0d1322] border border-slate-800 flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                  Localização
                </span>
                <span className="text-base font-bold text-slate-100">
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-3xl bg-[#0d1322] border border-slate-800 flex items-center justify-around">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-5 h-5 text-cyan-400" />
                <span>GitHub</span>
              </a>

              <div className="h-6 w-[1px] bg-slate-800" />

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-cyan-400" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-[#0d1322] border border-slate-800/90 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">Enviar Mensagem Direta</h3>
              <p className="text-xs text-slate-400 mb-6">
                Preencha o formulário para formatar e enviar uma proposta ou dúvida diretamente para o WhatsApp do Erick.
              </p>

              {sent && (
                <div className="p-4 mb-6 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2 animate-fadeIn">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Mensagem formatada e redirecionada para o WhatsApp do Erick!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Ex: Carlos Silva"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">
                      Seu E-mail
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="carlos@empresa.com"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    Assunto
                  </label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Ex: Oportunidade para Especialista de Dados / IA"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    Mensagem *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Descreva detalhes do seu projeto ou oportunidade..."
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-emerald-500/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar pelo WhatsApp</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
