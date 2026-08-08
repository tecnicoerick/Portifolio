import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const PORT = 3000;

async function startServer() {
  const app = express();
  app.use(express.json());

  // Initialize Gemini AI lazily for server-side chat assistant
  const getAi = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is missing in environment variables.");
    }
    return new GoogleGenAI({ apiKey });
  };

  // API Healthcheck
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", service: "Erick Vieira Portfolio API" });
  });

  // AI Copilot Endpoint for Recruiter & Visitor Q&A
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Mensagem é obrigatória." });
      }

      const systemInstruction = `
Você é o assistente virtual com Inteligência Artificial do portfólio profissional de ERICK JOSÉ VIEIRA.
Sua missão é responder perguntas de recrutadores, gestores de tecnologia e visitantes interessados no trabalho do Erick de forma profissional, cordial, articulada e técnica em Português do Brasil.

INFORMAÇÕES OFICIAIS DE ERICK JOSÉ VIEIRA:
- Nome Completo: Erick José Vieira
- Cargo/Título: Especialista em Análise de Dados, Inteligência Artificial & Governança de Processos
- Localização: Queimados - RJ, Brasil
- Telefone/WhatsApp: (21) 98565-8754
- E-mail: vjefiel@gmail.com
- GitHub: https://github.com/tecnicoerick
- LinkedIn: https://www.linkedin.com/in/erickvieira-frontend

RESUMO PROFISSIONAL:
Profissional de Tecnologia com formação em Gestão da TI e Automação Industrial, especialista no desenvolvimento de soluções baseadas em Análise de Dados, Inteligência Artificial e Governança de Processos. Experiência sólida na conexão entre tecnologia, pessoas e processos operacionais, atua na otimização e automação de fluxos de trabalho corporativos. Hábil na estruturação de pipelines de dados (Python, Pandas), integração de Large Language Models (LLMs) e modelos de Machine Learning (Scikit-Learn), além da gestão de governança e indicadores de desempenho (KPIs/SLA).

HABILIDADES TÉCNICAS:
- Análise de Dados & IA: Python (Pandas, NumPy), Machine Learning (Scikit-Learn), Engenharia de Prompts, Integração com LLMs.
- Governança & Processos: Mapeamento e Otimização de Processos, Padronização de Dados, Indicadores de Desempenho (SLA/KPIs), LGPD e Segurança.
- Sistemas & Automação: Sistemas ERP (SAP, WFM), Automação via APIs/Scripts, Cloud Computing (AWS/OCI), Pipelines de Processamento.
- Desenvolvimento & Ferramentas: Git, GitHub, Docker, Cibersegurança Básica, SQL, Shell Scripting, Front-End (HTML/CSS/JS).

EXPERIÊNCIA PROFISSIONAL:
1. Analista de Automação de Processos e Implantação | Cash Automação (02/2023 – 05/2023)
   - Mapeamento, padronização e automação de fluxos operacionais empresariais.
   - Implantação de sistemas de automação via ambiente web e integração de infraestrutura local.
   - Interface técnica entre sistemas e usuários finais, capacitação e documentação operacional.
2. Analista / Auxiliar Administrativo de Operações | Manserv (04/2019 – 04/2020)
   - Gestão de ordens de serviço e governança operacional de dados com ERP SAP e WFM.
   - Acompanhamento de métricas de desempenho (SLA/KPIs), controle de base de dados e relatórios analíticos.
3. Auxiliar Administrativo (Gestão de Dados e Documentação) | Compei (05/2012 – 04/2018)
   - Suporte ao controle e padronização documentacional interna e gerenciamento de dados operacionais.

PROJETOS DESTACADOS:
1. Automação & Processamento de Dados com IA/Python: Rotinas para limpeza e manipulação com Pandas/NumPy integradas a LLMs para inteligência automatizada.
2. Modelagem Preditiva & Machine Learning: Pipeline preditivo para retenção e análise de perfil operacional utilizando Scikit-Learn.
3. Governança em Nuvem & Segurança de Dados: Otimização de infraestrutura Cloud (AWS/OCI), IAM, auditoria de logs (CloudWatch) e conformidade de segurança.

FORMAÇÃO & CERTIFICAÇÕES:
- Graduação em Gestão da TI (Universidade Estácio de Sá - Concluído)
- Técnico em Automação Industrial (Estácio de Sá) & Técnico em Eletrotécnica (Escola Técnica Electra)
- Certificações: Engenharia em IA (Em andamento), Data Science com Python (Alura 2025), Oracle Cloud Infrastructure Certified Foundations Associate (Oracle 2025), Bootcamp Cibersegurança (Santander 2024), Fundamentos de AWS (Escola da Nuvem 2023).

REGRAS DE RESPOSTA:
1. Seja claro, objetivo, entusiasmado e extremamente profissional.
2. Destaque pontos fortes relevantes da trajetória do Erick de acordo com a pergunta.
3. Forneça os contatos do Erick (WhatsApp, E-mail, LinkedIn ou GitHub) quando o usuário demonstrar interesse em contratar ou agendar uma reunião.
4. Mantenha as respostas formatadas em tópicos amigáveis e curtos.
`;

      const ai = getAi();
      const model = "gemini-2.5-flash";

      const promptText = `${systemInstruction}\n\nHistórico prévio de conversa: ${JSON.stringify(history || [])}\n\nPergunta do Visitante: ${message}`;

      const response = await ai.models.generateContent({
        model,
        contents: promptText,
      });

      const replyText = response.text || "Desculpe, não consegui processar a resposta no momento. Entre em contato diretamente pelo WhatsApp do Erick: (21) 98565-8754.";

      res.json({ reply: replyText });
    } catch (err: any) {
      console.error("Erro no chat da API:", err);
      // Fallback offline responses if API key is not yet set or encounters rate limits
      res.json({
        reply: `Olá! Sou o assistente virtual do Erick Vieira. O Erick é especialista em Análise de Dados, Inteligência Artificial e Governança de Processos. Ele possui sólidas habilidades em Python, Pandas, Scikit-Learn, Cloud (AWS e Oracle Cloud) e automação de processos. Você pode entrar em contato direto pelo WhatsApp: (21) 98565-8754 ou por e-mail: vjefiel@gmail.com!`
      });
    }
  });

  // Serve static assets or Vite middleware
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
