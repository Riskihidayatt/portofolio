import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, eyebrow, title, description, className, children }: SectionProps) {
  return (
    <section id={id} className={cn('py-20 sm:py-24', className)}>
      <Reveal className="mb-12 max-w-2xl">
        <span className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
          <span className="h-px w-6 bg-primary" />
          {eyebrow}
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
        {description && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>}
      </Reveal>
      {children}
    </section>
  );
}

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
