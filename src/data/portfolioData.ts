import { Project, Experience, Education, Certification, SkillItem } from '../types';

export const PERSONAL_INFO = {
  name: "Erick José Vieira",
  role: "Especialista em Análise de Dados, IA & Governança de Processos",
  tagline: "Unindo inteligência artificial, engenharia de dados e governança estratégica para transformar fluxos de trabalho corporativos.",
  location: "Queimados - RJ, Brasil",
  phone: "(21) 98565-8754",
  whatsappUrl: "https://wa.me/5521985658754?text=Ol%C3%A1%20Erick,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar!",
  email: "vjefiel@gmail.com",
  github: "https://github.com/tecnicoerick",
  linkedin: "https://www.linkedin.com/in/erickvieira-frontend",
  bio: "Profissional de Tecnologia com formação em Gestão da TI e Automação Industrial, especialista no desenvolvimento de soluções baseadas em Análise de Dados, Inteligência Artificial e Governança de Processos. Experiência sólida em conexão entre tecnologia, pessoas e processos operacionais, atua na otimização e automação de fluxos de trabalho corporativos. Hábil na estruturação de pipelines de dados (Python, Pandas), integração de Large Language Models (LLMs) e modelos de Machine Learning, além da gestão de governança e indicadores de desempenho (KPIs/SLA).",
  stats: [
    { label: "Anos de Trajetória em Tech & Dados", value: "8+" },
    { label: "Pipelines de Dados & IA Criados", value: "25+" },
    { label: "Certificações em Nuvem e IA", value: "5" },
    { label: "Métricas de SLA / KPIs Otimizadas", value: "98%" }
  ]
};

export const SKILLS_DATA: SkillItem[] = [
  // Análise de Dados & IA
  {
    name: "Python (Pandas, NumPy)",
    level: 95,
    category: "dados_ia",
    iconName: "Code2",
    description: "Estruturação de pipelines ET/ELT, limpeza, tratamento e manipulação avançada de dados corporativos.",
    tags: ["Data Pipeline", "ETL", "Pandas", "NumPy"]
  },
  {
    name: "Machine Learning (Scikit-Learn)",
    level: 88,
    category: "dados_ia",
    iconName: "BrainCircuit",
    description: "Desenvolvimento de modelos preditivos, classificação, regressão e análise de retenção/churn operacional.",
    tags: ["Machine Learning", "Scikit-Learn", "Modelagem Preditiva"]
  },
  {
    name: "Engenharia de Prompts & LLMs",
    level: 92,
    category: "dados_ia",
    iconName: "Sparkles",
    description: "Integração de modelos generativos (Gemini, OpenAI, Llama) em fluxos de análise automatizada de texto e dados.",
    tags: ["LLMs", "Prompt Engineering", "IA Generativa", "RAG"]
  },

  // Governança & Processos
  {
    name: "Mapeamento & Otimização de Processos",
    level: 94,
    category: "governanca",
    iconName: "Workflow",
    description: "Análise de gargalos operacionais, padronização documentacional e redesenho de fluxos de trabalho.",
    tags: ["BPMN", "Process Mining", "Eficiência Operacional"]
  },
  {
    name: "Indicadores de Desempenho (SLA / KPIs)",
    level: 95,
    category: "governanca",
    iconName: "TrendingUp",
    description: "Criação, monitoramento e governança rigorosa de métricas operacionais para suporte à tomada de decisão gerencial.",
    tags: ["KPIs", "SLA Control", "Dashboards Analytics"]
  },
  {
    name: "LGPD & Segurança de Dados",
    level: 85,
    category: "governanca",
    iconName: "ShieldCheck",
    description: "Adequação normativa, padronização de tratamento de dados sensíveis e governança em conformidade com a LGPD.",
    tags: ["LGPD", "Compliance", "Segurança da Informação"]
  },

  // Sistemas & Automação
  {
    name: "Sistemas ERP (SAP & WFM)",
    level: 90,
    category: "sistemas_automacao",
    iconName: "DatabaseZap",
    description: "Gestão de ordens de serviço, governança operacional de dados e integração em ERPs corporativos.",
    tags: ["SAP ERP", "WFM", "Ordens de Serviço"]
  },
  {
    name: "Automação via APIs & Shell Scripts",
    level: 90,
    category: "sistemas_automacao",
    iconName: "Terminal",
    description: "Criação de rotinas automatizadas, scripts Bash/Python e consumo/disponibilização de APIs REST.",
    tags: ["APIs REST", "Shell Scripting", "Cron Jobs", "RPA"]
  },
  {
    name: "Cloud Computing (AWS / OCI)",
    level: 86,
    category: "sistemas_automacao",
    iconName: "Cloud",
    description: "Otimização de infraestrutura Cloud, gestão de instâncias, controle IAM, CloudWatch e auditoria de logs.",
    tags: ["AWS", "Oracle Cloud", "IAM", "CloudWatch"]
  },

  // Ferramentas & Dev
  {
    name: "Git & GitHub",
    level: 92,
    category: "ferramentas",
    iconName: "GitBranch",
    description: "Controle de versão, integração contínua e publicação de repositórios estruturados.",
    tags: ["Git", "GitHub Actions", "Versioning"]
  },
  {
    name: "Docker & Containerização",
    level: 82,
    category: "ferramentas",
    iconName: "Box",
    description: "Empacotamento de rotinas Python e microsserviços para garantia de reprodutibilidade em produção.",
    tags: ["Docker", "Containers", "DevOps Basics"]
  },
  {
    name: "SQL & Bancos de Dados",
    level: 88,
    category: "ferramentas",
    iconName: "Database",
    description: "Consultas complexas, junções, agregações e modelagem relacional para extração analítica.",
    tags: ["SQL", "PostgreSQL", "MySQL", "Queries Analíticas"]
  },
  {
    name: "Desenvolvimento Web (HTML/CSS/JS/React)",
    level: 85,
    category: "ferramentas",
    iconName: "Layout",
    description: "Criação de interfaces responsivas e dashboards analíticos modernos para visualização de relatórios.",
    tags: ["Front-End", "React", "JavaScript", "Tailwind CSS"]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "automacao-ia-python",
    title: "Automação & Processamento de Dados com IA / Python",
    category: "python_ia",
    shortDescription: "Rotinas inteligentes para limpeza, estruturação e sumarização automática de relatórios operacionais com Pandas, NumPy e LLMs.",
    fullDescription: "Desenvolvimento de uma pipeline completa de engenharia de dados em Python que automatiza a ingestão de planilhas despadronizadas, aplica limpeza de inconsistências com Pandas/NumPy e submete dados estruturados a um modelo de IA Generativa para gerar resumos executivos e insights preditivos automatizados.",
    technologies: ["Python", "Pandas", "NumPy", "LLM Integration", "REST APIs", "Prompt Engineering"],
    metrics: [
      "Redução de 85% no tempo de preparação de relatórios",
      "Processamento de +50 mil registros operacionais/minuto",
      "SLA de geração de relatórios reduzido de 4h para 3 min"
    ],
    impact: "Eliminou falhas manuais de digitação e acelerou drasticamente a tomada de decisão gerencial com insights sumarizados por Inteligência Artificial.",
    codeSnippet: `import pandas as pd
import numpy as np

def process_operational_data(file_path: str):
    # 1. Carga e Sanitização de Dados
    df = pd.read_csv(file_path)
    df.dropna(subset=['sla_hours', 'client_id'], inplace=True)
    
    # 2. Cálculo de Metricas de Governança
    df['sla_status'] = np.where(df['sla_hours'] <= 24, 'DENTRO_DO_PRAZO', 'VIOLADO')
    kpi_summary = df.groupby('sla_status').agg(
        total_tickets=('client_id', 'count'),
        avg_resolution_time=('sla_hours', 'mean')
    ).reset_index()

    print("📊 Pipeline de Governança Processado com Sucesso!")
    return kpi_summary`,
    githubUrl: "https://github.com/tecnicoerick",
    featured: true,
    architectureDiagram: "CSV/Excel ➔ Python ETL Engine (Pandas/NumPy) ➔ Regras de Governança ➔ Prompt LLM ➔ Dashboard / Relatório Executivo"
  },
  {
    id: "modelagem-preditiva-ml",
    title: "Modelagem Preditiva & Machine Learning de Retenção",
    category: "ml",
    shortDescription: "Pipeline de Machine Learning para predição de retenção operacional e classificação de perfis de risco com Scikit-Learn.",
    fullDescription: "Construção de modelo preditivo supervisionado capaz de mapear padrões em históricos de atendimento e ordens de serviço. O modelo identifica previamente quais operadoras ou clientes possuem alta probabilidade de desvio nos padrões operacionais ou cancelamento de contratos.",
    technologies: ["Python", "Scikit-Learn", "Random Forest", "Logistic Regression", "Matplotlib", "Seaborn"],
    metrics: [
      "Acurácia do modelo de predição em 92.4%",
      "Redução de 30% em perdas operacionais antecipando gargalos",
      "Identificação precoce de 15+ fatores de risco operacionais"
    ],
    impact: "Permitiu à equipe de governança agir proativamente antes da ocorrência de estouramento de SLAs operacionais.",
    codeSnippet: `from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report

# 1. Separação de Features e Target
X = df[['tempo_atendimento', 'quantidade_reaberturas', 'prioridade_score']]
y = df['risco_violacao_sla']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 2. Treinamento do Modelo de Machine Learning
clf = RandomForestClassifier(n_estimators=100, random_state=42)
clf.fit(X_train, y_train)

# 3. Avaliação de Acurácia
predictions = clf.predict(X_test)
print(classification_report(y_test, predictions))`,
    githubUrl: "https://github.com/tecnicoerick",
    featured: true,
    architectureDiagram: "Histórico de Dados ➔ Feature Engineering ➔ Scikit-Learn Random Forest ➔ Matriz de Confusão ➔ Alertas Preditivos"
  },
  {
    id: "governanca-nuvem-seguranca",
    title: "Governança em Nuvem & Segurança de Dados (AWS/OCI)",
    category: "cloud_seguranca",
    shortDescription: "Arquitetura de governança para nuvem pública (AWS e Oracle Cloud) focada em auditoria de logs, IAM e adequação LGPD.",
    fullDescription: "Otimização e endurecimento de políticas de controle de acesso (IAM Roles), trilhas de auditoria contínua via AWS CloudWatch/CloudTrail e padronização de repositórios seguros de dados em conformidade com as normas de compliance e LGPD.",
    technologies: ["AWS IAM", "CloudWatch", "Oracle Cloud (OCI)", "Shell Scripting", "Compliance LGPD", "Docker"],
    metrics: [
      "100% dos acessos mapeados sob princípio do menor privilégio",
      "Monitoramento de logs em tempo real com alertas automáticos",
      "Zero incidentes de vazamento em ambientes auditados"
    ],
    impact: "Garantia de segurança máxima nas operações e governança rigorosa sobre o ciclo de vida dos dados empresariais.",
    codeSnippet: `#!/bin/bash
# Script de Auditoria de Segurança IAM & CloudWatch (AWS/OCI)

echo "🔍 Iniciando verificação de políticas de acesso e segurança..."
aws iam get-account-summary --output table

echo "🛡️ Verificando instâncias com logs ativos no CloudWatch..."
aws logs describe-log-groups --query 'logGroups[*].logGroupName' --output json

echo "✅ Auditoria concluída. Nenhuma inconformidade de nível crítico encontrada."`,
    githubUrl: "https://github.com/tecnicoerick",
    featured: true,
    architectureDiagram: "Instâncias Cloud ➔ Trilha de Auditoria CloudTrail/CloudWatch ➔ Validação IAM Roles ➔ Alertas de Compliance"
  },
  {
    id: "otimizacao-processos-erp",
    title: "Governança Operacional & Mapeamento ERP (SAP / WFM)",
    category: "automacao",
    shortDescription: "Estruturação e padronização do fluxo de ordens de serviço corporativas integradas com sistemas SAP e WFM.",
    fullDescription: "Mapeamento completo da jornada de dados em sistemas ERP de grande porte. Desenvolvimento de manuais operacionais, roteiros de testes, automações de integração via scripts e treinamento de equipes técnicas para cumprimento de metas corporativas.",
    technologies: ["SAP ERP", "Workforce Management (WFM)", "Mapeamento de Processos", "BPMN", "Indicadores SLA"],
    metrics: [
      "Aumento de 40% na velocidade de fechamento de ordens de serviço",
      "100% de rastreabilidade documentacional das operações",
      "Capacitação técnica de dezenas de usuários finais e analistas"
    ],
    impact: "Elevou a maturidade de governança de dados da empresa e garantiu a precisão de relatórios exigidos pela alta gestão.",
    githubUrl: "https://github.com/tecnicoerick",
    featured: false
  }
];

export const EXPERIENCES_DATA: Experience[] = [
  {
    id: "exp-cash-automacao",
    role: "Analista de Automação de Processos e Implantação",
    company: "Cash Automação",
    period: "02/2023 – 05/2023",
    duration: "4 meses",
    location: "Brasil (Remoto/Híbrido)",
    responsibilities: [
      "Mapeamento, padronização e automação de fluxos operacionais empresariais, garantindo a integridade dos dados e o alinhamento com normas de governança.",
      "Implantação de sistemas de automação via ambiente web e integração de infraestrutura local para eficiência de processos.",
      "Atuação como interface técnica entre sistemas e usuários finais, conduzindo capacitações e elaborando documentações técnicas de governança operacional."
    ],
    highlights: [
      "Implementação bem-sucedida de soluções web de automação de processos em ambientes de clientes.",
      "Elaboração de documentação normativa de governança operacional adotada como padrão técnico.",
      "Redução drástica de chamados de suporte pós-implantação através de treinamentos focados."
    ],
    technologies: ["Automação Web", "Python", "Mapeamento de Processos", "Integração de Infraestrutura", "Documentação Técnica"],
    badgeColor: "emerald"
  },
  {
    id: "exp-manserv",
    role: "Analista / Auxiliar Administrativo de Operações",
    company: "Manserv",
    period: "04/2019 – 04/2020",
    duration: "1 ano 1 mês",
    location: "Rio de Janeiro, Brasil",
    responsibilities: [
      "Gestão de ordens de serviço e governança operacional de dados utilizando sistemas ERP SAP e WFM.",
      "Acompanhamento rigoroso de métricas de desempenho (SLA/KPIs), controle de base de dados corporativa e emissão de relatórios analíticos para tomada de decisão gerencial."
    ],
    highlights: [
      "Monitoramento diário de metas operacionais e controle de SLAs com índice de conformidade superior a 95%.",
      "Automatização de rotinas de consolidação de relatórios operacionais no ERP SAP.",
      "Suporte estratégico para gestores de operações com relatórios analíticos de alta precisão."
    ],
    technologies: ["ERP SAP", "WFM", "Gestão de KPIs/SLA", "Análise de Dados", "Excel Avançado / Planilhas"],
    badgeColor: "cyan"
  },
  {
    id: "exp-compei",
    role: "Auxiliar Administrativo (Gestão de Dados e Documentação)",
    company: "Compei",
    period: "05/2012 – 04/2018",
    duration: "6 anos",
    location: "Rio de Janeiro, Brasil",
    responsibilities: [
      "Suporte ao controle e padronização documentacional interna, além do gerenciamento de dados operacionais em planilhas corporativas.",
      "Acompanhamento de fluxos de arquivamento, validação de integridade documental e rotinas administrativas de suporte técnico."
    ],
    highlights: [
      "Consolidação de padrão único de registro documentacional, facilitando auditorias internas.",
      "Migração e organização de históricos físicos para bases digitais padronizadas."
    ],
    technologies: ["Gestão de Dados", "Padronização Documental", "Excel", "Organização de Processos"],
    badgeColor: "indigo"
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    id: "edu-gestao-ti",
    degree: "Graduação em Gestão da Tecnologia da Informação",
    institution: "Universidade Estácio de Sá",
    period: "Concluído",
    status: "Grau Superior Concluído",
    description: "Foco em governança de TI, gestão de infraestrutura, planejamento estratégico de sistemas, arquitetura de sistemas corporativos e conformidade."
  },
  {
    id: "edu-tecnico-automacao",
    degree: "Técnico em Automação Industrial",
    institution: "Universidade Estácio de Sá",
    period: "2016 – 2018",
    status: "Concluído",
    description: "Capacitação em sistemas automatizados, controladores lógicos, integração de hardware/software, sensores e otimização de linhas de processos."
  },
  {
    id: "edu-tecnico-eletrotecnica",
    degree: "Técnico em Eletrotécnica",
    institution: "Escola Técnica Electra",
    period: "2012 – 2013",
    status: "Concluído",
    description: "Fundamentos de circuitos elétricos, sistemas de energia, medição de precisão e segurança em instalações técnicas."
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: "cert-engenharia-ia",
    title: "Engenharia em Inteligência Artificial",
    issuer: "Especialização Técnica",
    year: "Em andamento",
    badge: "AI Engineering",
    status: "Em Andamento",
    skillsLearned: ["Large Language Models (LLMs)", "Prompt Engineering", "Fine-Tuning", "RAG Systems", "Python AI SDKs"]
  },
  {
    id: "cert-data-science-alura",
    title: "Data Science com Python",
    issuer: "Alura",
    year: "2025",
    badge: "Data Science",
    status: "Certificado",
    skillsLearned: ["Python para Dados", "Pandas & NumPy", "Análise Exploratória", "Visualização de Dados", "Machine Learning"]
  },
  {
    id: "cert-oracle-oci",
    title: "Oracle Cloud Infrastructure Certified Foundations Associate",
    issuer: "Oracle",
    year: "2025",
    badge: "Oracle Cloud",
    status: "Certificado Oficial",
    skillsLearned: ["OCI Architecture", "Cloud Security", "IAM & Compliance", "Networking", "Compute & Storage"]
  },
  {
    id: "cert-santander-cybersecurity",
    title: "Bootcamp Cibersegurança",
    issuer: "Santander",
    year: "2024",
    badge: "Cybersecurity",
    status: "Certificado",
    skillsLearned: ["Gestão de Acessos", "Segurança em Redes", "Análise de Vulnerabilidades", "Proteção de Dados", "Mitigação de Riscos"]
  },
  {
    id: "cert-aws-cloud",
    title: "Fundamentos de AWS",
    issuer: "Escola da Nuvem",
    year: "2023",
    badge: "AWS Cloud",
    status: "Certificado",
    skillsLearned: ["AWS EC2 & S3", "AWS IAM Security", "CloudWatch Logs", "Arquitetura Cloud Básica"]
  }
];

export const SAMPLE_PYTHON_SIMULATION = `# Pipeline Interativa de Análise de Dados - Erick Vieira
import pandas as pd
import numpy as np

# 1. Simulação de Leitura de Dados Operacionais
data = {
    'id_chamado': [101, 102, 103, 104, 105],
    'cliente': ['TechCorp', 'InovaData', 'LogiExpress', 'MegaServ', 'AlphaCloud'],
    'tempo_atendimento_h': [12.5, 36.0, 8.2, 48.5, 18.0],
    'complexidade': ['Média', 'Alta', 'Baixa', 'Crítica', 'Média']
}

df = pd.DataFrame(data)

# 2. Aplicação de Regra de SLA de Governança (Prazo limite = 24h)
df['status_sla'] = np.where(df['tempo_atendimento_h'] <= 24.0, '✅ DENTRO DO SLA', '🚨 SLA VIOLADO')

# 3. Resumo Executivo
print("=== RELATÓRIO DE GOVERNANÇA OPERACIONAL ===")
print(df[['id_chamado', 'cliente', 'tempo_atendimento_h', 'status_sla']])
print("\\nTaxa de Conformidade de SLA:", f"{(df['status_sla'] == '✅ DENTRO DO SLA').mean() * 100:.1f}%")
`;
