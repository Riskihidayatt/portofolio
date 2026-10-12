'use client';

import React, { useEffect, useRef, useState } from 'react';

type RevealState = 'below' | 'above' | 'visible';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Fades content in whenever it enters the viewport: from below while scrolling down,
 * from above while scrolling up. It fades out again once it leaves.
 * The motion itself is pure CSS (see [data-reveal] in globals.css).
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<RevealState>('below');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState('visible');
        } else {
          // Park hidden content on the side it left from, so it re-enters from that edge.
          const viewportTop = entry.rootBounds?.top ?? 0;
          setState(entry.boundingClientRect.top < viewportTop ? 'above' : 'below');
        }
      },
      { rootMargin: '-60px 0px -60px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal={state}
      className={className}
      style={state === 'visible' && delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
