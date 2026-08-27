import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Image } from 'lucide-react';
import { Project } from '../../../types';
import { ProjectModal } from './ProjectModal';
import { getTechIconUrl } from '../../../lib/techIcons';

export function ProjectsSection({ projects }: { projects: Project[] }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-20" id="projects">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-blue-500 font-bold mb-4 block">02 / Projects</span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-[var(--foreground)]">Featured Work</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedProject(project)}
              className="group bg-[var(--card)] border border-[var(--border)] rounded-xl hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 flex flex-col h-full overflow-hidden cursor-pointer"
            >
              {project.image ? (
                <div className="relative h-56 w-full overflow-hidden border-b border-[var(--border)]">
                  <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                </div>
              ) : (
                <div className="relative h-56 w-full overflow-hidden border-b border-[var(--border)] bg-[var(--muted)] flex items-center justify-center">
                    <Image className="w-12 h-12 text-[var(--muted-foreground)] opacity-20" />
                </div>
              )}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[var(--foreground)] group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      onClick={(e) => e.stopPropagation()}
                      className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] ml-4 flex-shrink-0 z-20 transition-colors bg-[var(--muted)] p-2 rounded-full"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                
                <div className="space-y-3 mb-8 flex-grow">
                  {project.description.map((desc, i) => (
                    <p key={i} className="text-[var(--muted-foreground)] font-light text-sm leading-relaxed line-clamp-3">
                      {desc}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[var(--border)]">
                  {project.tech_stack.map((tech) => {
                    const iconUrl = getTechIconUrl(tech);
                    return (
                      <div 
                        key={tech} 
                        className="group/tech relative flex items-center justify-center w-8 h-8 rounded-md bg-[var(--muted)] border border-[var(--border)]"
                        title={tech}
                      >
                        {iconUrl ? (
                          <img src={iconUrl} alt={tech} className="w-4 h-4 opacity-50 grayscale group-hover/tech:grayscale-0 group-hover/tech:opacity-100 transition-all duration-300" />
                        ) : (
                          <span className="text-[9px] font-mono text-[var(--muted-foreground)]">{tech.slice(0, 3)}</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
