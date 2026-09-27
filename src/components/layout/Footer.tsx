import { ArrowUp } from 'lucide-react';

export function Footer({ name }: { name: string }) {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <p>
          &copy; {new Date().getFullYear()} {name}. Built with React, TypeScript & Tailwind CSS.
        </p>
        <a href="#" className="group inline-flex items-center gap-2 transition-colors hover:text-foreground">
          Back to top
          <span className="rounded-full border border-border p-1.5 transition-colors group-hover:border-primary/50">
            <ArrowUp className="h-3 w-3" />
          </span>
        </a>
      </div>
    </footer>
  );
}
