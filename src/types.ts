export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  category: 'dados_ia' | 'governanca' | 'sistemas_automacao' | 'ferramentas';
  iconName: string;
  description: string;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'python_ia' | 'ml' | 'cloud_seguranca' | 'automacao';
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  metrics: string[];
  impact: string;
  codeSnippet?: string;
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  architectureDiagram?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  duration: string;
  location: string;
  responsibilities: string[];
  highlights: string[];
  technologies: string[];
  badgeColor?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status: string;
  description?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  badge: string;
  credentialUrl?: string;
  status?: string;
  skillsLearned: string[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}

export interface TerminalCommand {
  command: string;
  description: string;
  action: (args?: string[]) => string;
}

export interface ExportFile {
  path: string;
  content: string;
  description: string;
}
