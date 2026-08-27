import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, ShieldCheck, Cpu, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../../../types';
import { getTechIconUrl } from '../../../lib/techIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (project) {
      setCurrentImageIndex(0);
    }
  }, [project]);

  if (!project) return null;

  const images = project.images && project.images.length > 0 ? project.images : (project.image ? [project.image] : []);
  
  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[var(--background)] border border-[var(--border)] rounded-xl overflow-hidden flex flex-col shadow-2xl z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[var(--border)] bg-[var(--background)] z-10">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-[var(--foreground)]">{project.title}</h2>
            <button
              onClick={onClose}
              className="p-2 text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="overflow-y-auto flex-grow bg-[var(--card)] custom-scrollbar">
            {images.length > 0 && (
              <div className="w-full h-64 sm:h-80 md:h-[450px] relative border-b border-[var(--border)] bg-black/5 flex items-center justify-center group overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    src={images[currentImageIndex]} 
                    alt={project.title + " - Image " + (currentImageIndex + 1)}
                    className="w-full h-full object-contain bg-[var(--card)]"
                  />
                </AnimatePresence>

                {images.length > 1 && (
                  <>
                    <button 
                      onClick={handlePrev}
                      className="absolute left-4 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 backdrop-blur-md"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={handleNext}
                      className="absolute right-4 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 backdrop-blur-md"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                    
                    {/* Dots indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {images.map((_, idx) => (
                        <div 
                          key={idx} 
                          className={
                            "w-2 h-2 rounded-full transition-all " + 
                            (idx === currentImageIndex ? "bg-blue-500 scale-125" : "bg-black/30 dark:bg-white/50")
                          } 
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
            
            <div className="p-6 md:p-8 space-y-8">
              {/* Meta Info */}
              {project.link && (
                <div className="flex">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-blue-500 hover:text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 p-3 rounded-lg border border-blue-500/20 transition-colors group"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Project</span>
                    </a>
                </div>
              )}

              {/* Description */}
              <div className="space-y-4">
                <h3 className="text-sm font-mono tracking-widest text-blue-500 uppercase flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> About the project
                </h3>
                <div className="space-y-4 text-[var(--muted-foreground)] leading-relaxed">
                  {project.description.map((desc, i) => (
                    <p key={i}>{desc}</p>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-4 pt-6 border-t border-[var(--border)]">
                <h3 className="text-sm font-mono tracking-widest text-blue-500 uppercase flex items-center gap-2">
                  <Cpu className="w-4 h-4" /> Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.tech_stack.map((tech) => {
                    const iconUrl = getTechIconUrl(tech);
                    return (
                      <div 
                        key={tech} 
                        className="flex items-center gap-2 px-3 py-2 bg-[var(--muted)] border border-[var(--border)] rounded-md text-sm text-[var(--foreground)]"
                      >
                        {iconUrl && (
                          <img src={iconUrl} alt={tech} className="w-4 h-4" />
                        )}
                        <span>{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
