import { motion } from 'motion/react';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Profile } from '../../../types';

const floatingTags = [
  { label: 'Go', className: '-left-4 top-10' },
  { label: 'Spring Boot', className: '-right-6 top-1/3' },
  { label: 'React + TS', className: '-left-6 bottom-16' },
];

export function Hero({ profile }: { profile: Profile }) {
  return (
    <section className="relative flex min-h-[92vh] items-center pt-28 pb-16" aria-label="Introduction">
      <div className="grid w-full items-center gap-14 md:grid-cols-[1.4fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {profile.availability}
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {profile.name}
            <span className="mt-2 block text-gradient">{profile.role}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{profile.headline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5"
            >
              View my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            )}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              {profile.location}
            </span>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <div className="flex items-center gap-2">
              {profile.github && (
                <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full p-2 transition-colors hover:bg-muted hover:text-foreground">
                  <Github className="h-5 w-5" />
                </a>
              )}
              {profile.linkedin && (
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full p-2 transition-colors hover:bg-muted hover:text-foreground">
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              <a href={'mailto:' + profile.email} aria-label="Email" className="rounded-full p-2 transition-colors hover:bg-muted hover:text-foreground">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {profile.photo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-xs sm:max-w-sm"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-primary/30 via-accent/20 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-2 shadow-xl">
              <img
                src={profile.photo}
                alt={'Portrait of ' + profile.name}
                width={800}
                height={800}
                className="aspect-square w-full rounded-[1.6rem] object-cover"
              />
            </div>
            {floatingTags.map((tag, i) => (
              <motion.span
                key={tag.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.12 }}
                className={
                  'absolute hidden rounded-full border border-border bg-card/90 px-3 py-1.5 font-mono text-xs font-medium text-foreground shadow-md backdrop-blur sm:block ' +
                  tag.className
                }
              >
                {tag.label}
              </motion.span>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
