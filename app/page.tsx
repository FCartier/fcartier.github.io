import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home | Florian Cartier - Senior Engineering Manager",
  // The global description from layout.tsx is often sufficient for the home page of a portfolio.
  // If a more specific one is needed, it can be added here:
  // description: "Welcome to the portfolio of Florian Cartier...", 
};

export default function HomePage() {
  return (
    <div>
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
