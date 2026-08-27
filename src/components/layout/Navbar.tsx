import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../ThemeProvider';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Certificates', href: '#certifications' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ' +
        (isScrolled ? 'py-4' : 'py-6')
      }
    >
      <div className={
        'max-w-6xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ' +
        (isScrolled 
          ? 'bg-[var(--background)]/80 backdrop-blur-xl border border-[var(--border)] shadow-lg rounded-2xl px-6 py-3' 
          : 'bg-transparent border-transparent')
      }>
        <a href="#" className="text-xl font-black tracking-tighter uppercase text-[var(--foreground)] flex items-center gap-1 group">
          RH<span className="text-blue-500 group-hover:scale-150 transition-transform duration-300">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 bg-[var(--background)]/50 backdrop-blur-md px-6 py-2.5 rounded-full border border-[var(--border)]/50">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="relative text-[10px] uppercase tracking-widest font-mono text-[var(--muted-foreground)] hover:text-blue-500 transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2.5 rounded-full bg-[var(--muted)] border border-[var(--border)] hover:border-blue-500/50 hover:bg-[var(--background)] transition-all text-[var(--foreground)]"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-blue-500" /> : <Moon className="w-4 h-4 text-blue-500" />}
          </button>
        </div>

        {/* Mobile Menu Toggle & Theme */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2.5 rounded-full bg-[var(--muted)] border border-[var(--border)] hover:border-blue-500/50 transition-all text-[var(--foreground)]"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-blue-500" /> : <Moon className="w-4 h-4 text-blue-500" />}
          </button>
          <button 
            className="text-[var(--foreground)] p-2.5 rounded-full bg-[var(--muted)] border border-[var(--border)] hover:border-blue-500/50 transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-[calc(100%+10px)] left-6 right-6 bg-[var(--background)] border border-[var(--border)] p-2 rounded-2xl shadow-xl flex flex-col overflow-hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xs font-mono tracking-widest uppercase text-[var(--muted-foreground)] hover:text-blue-500 hover:bg-[var(--muted)] p-4 rounded-xl transition-all"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
