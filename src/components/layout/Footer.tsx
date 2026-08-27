import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--card)] py-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[10px] uppercase tracking-widest font-mono text-[var(--muted-foreground)]">
          &copy; {new Date().getFullYear()} Riski. All rights reserved.
        </div>
        
        <button 
          onClick={scrollToTop}
          className="group flex items-center gap-3 text-[10px] uppercase tracking-widest font-mono text-[var(--muted-foreground)] hover:text-blue-500 transition-colors"
        >
          <span>Back to top</span>
          <div className="p-2 rounded-full bg-[var(--muted)] border border-[var(--border)] group-hover:border-blue-500/50 transition-colors">
            <ArrowUp className="w-3 h-3" />
          </div>
        </button>
      </div>
    </footer>
  );
}
