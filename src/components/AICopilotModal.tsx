import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Bot, Send, X, Sparkles, User, RefreshCw, MessageSquare } from 'lucide-react';

interface AICopilotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AICopilotModal: React.FC<AICopilotModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'bot',
      text: `Olá! Sou o Assistente Virtual de IA do Erick Vieira.\n\nPosso ajudar você a tirar dúvidas sobre as experiências dele com Análise de Dados, Python, Governança, Cloud (AWS/OCI) e projetos de Inteligência Artificial. Como posso ajudar?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const handleSend = async (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: messages.map((m) => ({ role: m.sender, parts: [{ text: m.text }] }))
        })
      });

      const data = await res.json();
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: data.reply || 'Desculpe, ocorreu um erro na resposta.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      const fallbackMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: `O Erick é formado em Gestão da TI e especialista em Análise de Dados, Python, IA e Governança de Processos. Para falar com ele diretamente, acesse o WhatsApp: ${PERSONAL_INFO.phone} ou e-mail: ${PERSONAL_INFO.email}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setLoading(false);
    }
  };

  const quickPrompts = [
    "Quais são as principais competências em Python e IA do Erick?",
    "Qual a experiência do Erick com Cloud (AWS e Oracle OCI)?",
    "Como ele atua em Governança de Processos e SLA?",
    "Como posso entrar em contato direto para contratá-lo?"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl h-[620px] max-h-[90vh] bg-[#0d1322] border border-cyan-500/40 rounded-3xl shadow-2xl flex flex-col overflow-hidden">

        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#0a0e1a] border-b border-cyan-500/20 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="relative p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Bot className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-100 flex items-center gap-1.5">
                Copilot IA - Erick Vieira
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </h3>
              <p className="text-[11px] text-slate-400 font-mono">
                Powered by Gemini 2.5 Flash
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Prompts Bar */}
        <div className="p-3 bg-slate-900/60 border-b border-slate-800 flex gap-2 overflow-x-auto shrink-0 scrollbar-none">
          {quickPrompts.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="text-[10px] font-medium px-3 py-1.5 rounded-full bg-slate-800/80 hover:bg-cyan-950/60 text-slate-300 hover:text-cyan-300 border border-slate-700/60 shrink-0 transition-colors whitespace-nowrap"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Chat Messages Body */}
        <div className="p-6 flex-1 overflow-y-auto space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${
                msg.sender === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              <div
                className={`p-2 rounded-xl shrink-0 ${
                  msg.sender === 'user'
                    ? 'bg-emerald-500 text-slate-950'
                    : 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-400'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-[80%] p-4 rounded-2xl text-xs leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-emerald-600/20 text-slate-100 border border-emerald-500/30 rounded-tr-none'
                    : 'bg-slate-900/90 text-slate-200 border border-slate-800 rounded-tl-none whitespace-pre-wrap'
                }`}
              >
                {msg.text}
                <span className="block text-[9px] font-mono text-slate-500 mt-2 text-right">
                  {msg.timestamp}
                </span>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono p-3 bg-slate-900/60 rounded-xl border border-slate-800 w-fit">
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              <span>Analisando perfil do Erick e gerando resposta...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <div className="p-4 bg-[#0a0e1a] border-t border-slate-800 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Pergunte sobre qualificações, projetos ou contatos..."
              className="flex-1 bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold transition-all disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
