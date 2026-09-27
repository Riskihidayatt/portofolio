import { useState } from 'react';
import { Check, Copy, Github, Linkedin, Mail } from 'lucide-react';
import { Profile } from '../../../types';
import { Reveal } from '../../../components/ui/Section';

export function ContactSection({ profile }: { profile: Profile }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = 'mailto:' + profile.email;
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24">
      <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 text-center sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

        <div className="relative">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">Contact</span>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Let's build something <span className="text-gradient">reliable</span> together.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            I'm open to full-time Fullstack or Backend Developer roles — remote or on-site, and happy to relocate.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={'mailto:' + profile.email}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              Say hello
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 font-mono text-sm text-foreground transition-colors hover:border-primary/50"
            >
              {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
              {copied ? 'Copied!' : profile.email}
            </button>
          </div>

          <div className="mt-8 flex justify-center gap-3">
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            )}
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
