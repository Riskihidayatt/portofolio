import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../../../types';
import { Modal } from '../../../components/ui/Modal';
import { TechChip } from '../../../components/ui/TechChip';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  const images = project?.images?.length ? project.images : project?.image ? [project.image] : [];

  const showNext = useCallback(() => setCurrentImageIndex((prev) => (prev + 1) % images.length), [images.length]);
  const showPrev = useCallback(
    () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length),
    [images.length],
  );

  useEffect(() => {
    if (!project || images.length < 2) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [project, images.length, showNext, showPrev]);

  const stop = (fn: () => void) => (e: React.MouseEvent) => {
    e.stopPropagation();
    fn();
  };

  return (
    <Modal open={project !== null} title={project?.title ?? ''} onClose={onClose} className="max-w-4xl">
      {project && (
        <>
          {images.length > 0 && (
            <div className="group relative flex h-64 items-center justify-center overflow-hidden border-b border-border bg-muted sm:h-80 md:h-[440px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  src={images[currentImageIndex]}
                  alt={project.title + ' — image ' + (currentImageIndex + 1) + ' of ' + images.length}
                  className="h-full w-full object-contain"
                />
              </AnimatePresence>

              {images.length > 1 && (
                <>
                  <button
                    onClick={stop(showPrev)}
                    aria-label="Previous image"
                    className="absolute left-3 rounded-full bg-black/50 p-2 text-white backdrop-blur transition-opacity hover:bg-black/70 sm:opacity-0 sm:group-hover:opacity-100"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={stop(showNext)}
                    aria-label="Next image"
                    className="absolute right-3 rounded-full bg-black/50 p-2 text-white backdrop-blur transition-opacity hover:bg-black/70 sm:opacity-0 sm:group-hover:opacity-100"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/40 px-2 py-1.5 backdrop-blur">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={stop(() => setCurrentImageIndex(idx))}
                        aria-label={'Show image ' + (idx + 1)}
                        className={
                          'h-1.5 rounded-full transition-all ' + (idx === currentImageIndex ? 'w-5 bg-white' : 'w-1.5 bg-white/50')
                        }
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          <div className="space-y-6 p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-wider text-primary">{project.category}</span>
              <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">{project.role}</span>
            </div>

            <ul className="space-y-3">
              {project.description.map((desc, i) => (
                <li key={i} className="flex gap-3 leading-relaxed text-muted-foreground">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span>{desc}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 border-t border-border pt-6">
              {project.tech_stack.map((tech) => (
                <TechChip key={tech} name={tech} className="px-3 py-1.5 text-sm" />
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Visit live site
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </>
      )}
    </Modal>
  );
}
