'use client';

import { Moon, Sun } from 'lucide-react';
import { THEME_STORAGE_KEY } from '../../lib/theme';

/**
 * The initial theme is applied by an inline script in the root layout before first paint
 * (dark by default). Both icons are rendered and CSS picks one, so server and client markup match.
 */
export function ThemeToggle() {
  const toggleTheme = () => {
    const root = document.documentElement;
    const next = root.classList.contains('dark') ? 'light' : 'dark';
    root.classList.remove('light', 'dark');
    root.classList.add(next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode, blocked cookies); the theme still applies for this visit.
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full border border-border bg-card p-2 text-foreground transition-colors hover:border-primary/50 hover:text-primary"
      aria-label="Toggle light/dark mode"
    >
      <Sun className="hidden h-4 w-4 dark:block" />
      <Moon className="h-4 w-4 dark:hidden" />
    </button>
  );
}
