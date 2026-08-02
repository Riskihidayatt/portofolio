import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
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
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-blue-500 font-bold mb-4 block">02 / Projects</span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter">Featured Work</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group bg-[#0a0a0a] border border-white/10 rounded-none hover:border-blue-500/50 transition-colors flex flex-col h-full overflow-hidden cursor-pointer"
            >
              {project.image && (
                <div className="relative h-48 w-full overflow-hidden border-b border-white/10">
                  <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
              )}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      onClick={(e) => e.stopPropagation()}
                      className="text-white/30 hover:text-white ml-4 flex-shrink-0 z-20"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                
                <div className="space-y-3 mb-8 flex-grow">
                  {project.description.map((desc, i) => (
                    <p key={i} className="text-white/50 font-light text-sm leading-relaxed">
                      {desc}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.tech_stack.map((tech) => {
                    const iconUrl = getTechIconUrl(tech);
                    return (
                      <div 
                        key={tech} 
                        className="group/tech relative flex items-center justify-center w-8 h-8 rounded-md bg-white/5 border border-white/10"
                        title={tech}
                      >
                        {iconUrl ? (
                          <img src={iconUrl} alt={tech} className="w-5 h-5 opacity-50 group-hover/tech:opacity-100 transition-opacity grayscale group-hover/tech:grayscale-0" />
                        ) : (
                          <span className="text-[9px] font-mono text-white/50">{tech.slice(0, 3)}</span>
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
