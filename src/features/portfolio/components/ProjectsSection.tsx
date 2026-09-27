import { useState } from 'react';
import { ArrowUpRight, ExternalLink, ImageIcon } from 'lucide-react';
import { Project } from '../../../types';
import { ProjectModal } from './ProjectModal';
import { Section, Reveal } from '../../../components/ui/Section';
import { TechChip } from '../../../components/ui/TechChip';

export function ProjectsSection({ projects }: { projects: Project[] }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      description="Real systems used by students, universities and competition participants — plus a few builds that sharpened my craft."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={(index % 2) * 0.08} className="h-full">
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="relative block aspect-[16/10] w-full overflow-hidden border-b border-border bg-muted text-left"
                aria-label={'Open details for ' + project.title}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title + ' screenshot'}
                    loading="lazy"
                    className={
                      'h-full w-full transition-transform duration-500 group-hover:scale-[1.03] ' +
                      (project.imageFit === 'contain' ? 'object-contain py-4' : 'object-cover object-top')
                    }
                  />
                ) : (
                  <span className="grid h-full w-full place-items-center">
                    <ImageIcon className="h-10 w-10 text-muted-foreground/40" />
                  </span>
                )}
                <span className="absolute top-3 left-3 rounded-full bg-background/85 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur">
                  {project.role}
                </span>
              </button>

              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-primary">{project.category}</p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech_stack.map((tech) => (
                    <TechChip key={tech} name={tech} />
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4 border-t border-border pt-5 text-sm font-medium">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 text-foreground transition-colors hover:text-primary"
                  >
                    Case study
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-primary"
                    >
                      Live site
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </Section>
  );
}
