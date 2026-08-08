import React, { useState } from 'react';
import { AIProcessingBackground } from './components/AIProcessingBackground';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationCertifications } from './components/EducationCertifications';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AICopilotModal } from './components/AICopilotModal';

export default function App() {
  const [copilotOpen, setCopilotOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#070a12] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden">
      {/* AI Assistant Processing Interactive Background */}
      <AIProcessingBackground />

      {/* Sticky Header */}
      <Header
        onOpenCopilot={() => setCopilotOpen(true)}
      />

      {/* Hero Section */}
      <main>
        <Hero
          onOpenCopilot={() => setCopilotOpen(true)}
        />

        {/* Skills Section */}
        <SkillsSection />

        {/* Professional Experience Timeline */}
        <ExperienceTimeline />

        {/* Applied Projects Showcase & ML Playground */}
        <ProjectsSection />

        {/* Education & Certifications */}
        <EducationCertifications />

        {/* Contact Form & WhatsApp Direct Link */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* AI Copilot Drawer / Modal */}
      <AICopilotModal
        isOpen={copilotOpen}
        onClose={() => setCopilotOpen(false)}
      />
    </div>
  );
}
