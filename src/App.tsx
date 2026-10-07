import { MotionConfig } from 'motion/react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './features/portfolio/components/Hero';
import { AboutSection } from './features/portfolio/components/AboutSection';
import { ExperienceSection } from './features/portfolio/components/ExperienceSection';
import { ProjectsSection } from './features/portfolio/components/ProjectsSection';
import { SkillsSection } from './features/portfolio/components/SkillsSection';
import { CredentialsSection } from './features/portfolio/components/CredentialsSection';
import { ContactSection } from './features/portfolio/components/ContactSection';
import { portfolioData as data } from './data/portfolio';
import { ThemeProvider } from './components/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <div className="relative min-h-screen overflow-x-clip bg-background font-sans text-foreground">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-[720px] bg-grid [mask-image:linear-gradient(to_bottom,black,transparent)]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
            aria-hidden="true"
          />

          <Navbar resumeUrl={data.profile.resumeUrl} />

          <main className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <Hero profile={data.profile} />
            <AboutSection profile={data.profile} stats={data.stats} focus={data.focus} />
            <ExperienceSection experiences={data.experiences} />
            <ProjectsSection projects={data.projects} />
            <SkillsSection skills={data.skills} techStack={data.techStack} />
            <CredentialsSection
              education={data.education}
              certifications={data.certifications}
              organizations={data.organizations}
            />
            <ContactSection profile={data.profile} />
          </main>

          <Footer name={data.profile.name} />
        </div>
      </MotionConfig>
    </ThemeProvider>
  );
}
