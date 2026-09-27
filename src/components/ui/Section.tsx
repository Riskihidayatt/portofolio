import React, { useRef, useSyncExternalStore } from 'react';
import { motion, useInView } from 'motion/react';
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

type ScrollDirection = 'down' | 'up';

// Shared scroll-direction store so every Reveal knows which edge content enters from.
let scrollDirection: ScrollDirection = 'down';
const listeners = new Set<() => void>();
let lastScrollY = typeof window !== 'undefined' ? window.scrollY : 0;

function handleScroll() {
  const y = window.scrollY;
  if (Math.abs(y - lastScrollY) < 4) return;
  const next: ScrollDirection = y > lastScrollY ? 'down' : 'up';
  lastScrollY = y;
  if (next !== scrollDirection) {
    scrollDirection = next;
    listeners.forEach((listener) => listener());
  }
}

function subscribe(listener: () => void) {
  if (listeners.size === 0) window.addEventListener('scroll', handleScroll, { passive: true });
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) window.removeEventListener('scroll', handleScroll);
  };
}

function useScrollDirection() {
  return useSyncExternalStore(subscribe, () => scrollDirection, () => 'down' as ScrollDirection);
}

const OFFSET = 32;

/**
 * Fades content in whenever it enters the viewport: from below while scrolling down,
 * from above while scrolling up. It fades out again once it leaves.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-60px 0px -60px 0px' });
  const direction = useScrollDirection();
  const hiddenY = direction === 'down' ? OFFSET : -OFFSET;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: OFFSET }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: hiddenY }}
      transition={inView ? { duration: 0.5, delay, ease: 'easeOut' } : { duration: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
