import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TickerSection } from './components/TickerSection';
import { AboutSection } from './components/AboutSection';
import { EducationCertsSection } from './components/EducationCertsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactCtaSection } from './components/ContactCtaSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleOpenContact = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white relative">
      {/* Top Navigation */}
      <Navbar onContactClick={handleOpenContact} />

      {/* Main Flow */}
      <main>
        {/* Radiant Blue Hero with Interactive Studio Mockup */}
        <Hero onContactClick={handleOpenContact} />

        {/* Ticker for Technologies & Certifications */}
        <TickerSection />

        {/* About Section with 4-Card Features */}
        <AboutSection />

        {/* Education & Certifications Featured Comparison Cards */}
        <EducationCertsSection onContactClick={handleOpenContact} />

        {/* Projects Section with Level Filters & Interactive Modal */}
        <ProjectsSection onContactClick={handleOpenContact} />

        {/* Skills Section with Glowing Integration Style */}
        <SkillsSection onContactClick={handleOpenContact} />

        {/* Learning Insights & Engineering Reflections */}
        <TestimonialsSection />

        {/* FAQ Accordion Section */}
        <FaqSection />

        {/* Bottom CTA Dark Banner with One-Click GitHub & Vercel Guide */}
        <ContactCtaSection />
      </main>

      {/* Modern Footer */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={handleCloseContact} />
    </div>
  );
}
