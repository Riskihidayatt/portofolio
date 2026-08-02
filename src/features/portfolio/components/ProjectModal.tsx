import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Project } from '../../../types';
import { getTechIconUrl } from '../../../lib/techIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  const images = project.images || (project.image ? [project.image] : []);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-[#0a0a0a] border border-white/10 flex flex-col md:flex-row overflow-hidden rounded-xl shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 p-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Carousel Area */}
            <div className="relative w-full md:w-3/5 bg-black h-64 md:h-auto min-h-[300px] flex-shrink-0 group">
              {images.length > 0 ? (
                <>
                  <AnimatePresence initial={false}>
                    <motion.img
                      key={currentImageIndex}
                      src={images[currentImageIndex]}
                      alt={`${project.title} - Image ${currentImageIndex + 1}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                  </AnimatePresence>
                  
                  {/* Navigation Buttons (only show if multiple images) */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={handlePrevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors opacity-0 group-hover:opacity-100 disabled:opacity-0"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={handleNextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors opacity-0 group-hover:opacity-100 disabled:opacity-0"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                      
                      {/* Image Counter */}
                      <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs font-mono px-3 py-1.5 rounded-full backdrop-blur-sm">
                        {currentImageIndex + 1} / {images.length}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-white/30">
                  No images available
                </div>
              )}
            </div>

            {/* Project Details Area */}
            <div className="flex-1 flex flex-col p-8 overflow-y-auto custom-scrollbar">
              <div className="flex gap-4 mb-6 text-[10px] uppercase tracking-widest font-mono text-blue-500">
                <span className="border border-blue-500/30 bg-blue-500/10 px-3 py-1 rounded-full">
                  Portfolio Project
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white mb-6">
                {project.title}
              </h2>

              <div className="space-y-4 mb-8 flex-grow">
                {project.description.map((desc, i) => (
                  <p key={i} className="text-white/60 font-light text-sm leading-relaxed">
                    {desc}
                  </p>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-white hover:text-blue-400 transition-colors mb-8 w-fit"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live Project
                </a>
              )}

              {/* Tech Stack Logos */}
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold mb-4">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-4">
                  {project.tech_stack.map((tech) => {
                    const iconUrl = getTechIconUrl(tech);
                    return (
                      <div
                        key={tech}
                        className="group relative flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                        title={tech}
                      >
                        {iconUrl ? (
                          <img src={iconUrl} alt={tech} className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity" />
                        ) : (
                          <span className="text-[10px] font-mono text-white/50">{tech.slice(0, 3)}</span>
                        )}
                        {/* Tooltip */}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-[10px] font-mono px-2 py-1 rounded whitespace-nowrap pointer-events-none z-10">
                          {tech}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
