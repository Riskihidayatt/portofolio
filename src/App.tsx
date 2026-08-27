import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './features/portfolio/components/Hero';
import { ExperienceSection } from './features/portfolio/components/ExperienceSection';
import { ProjectsSection } from './features/portfolio/components/ProjectsSection';
import { SkillsSection } from './features/portfolio/components/SkillsSection';
import { EducationSection } from './features/portfolio/components/EducationSection';
import { CertificationsSection } from './features/portfolio/components/CertificationsSection';
import { fallbackData as data } from './data/mockData';
import { ThemeProvider } from './components/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-blue-500/30 font-sans transition-colors duration-300">
        <Navbar />
        
        <main className="max-w-5xl mx-auto px-6 pt-20 pb-32 space-y-24">
          <Hero profile={data.profile} />
          <ExperienceSection experiences={data.experiences} />
          <ProjectsSection projects={data.projects} />
          <SkillsSection skills={data.skills} />
          <EducationSection education={data.education} />
          <CertificationsSection certifications={data.certifications} />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
