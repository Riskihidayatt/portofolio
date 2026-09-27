import { MapPin } from 'lucide-react';
import { Experience } from '../../../types';
import { Section, Reveal } from '../../../components/ui/Section';
import { TechChip } from '../../../components/ui/TechChip';

export function ExperienceSection({ experiences }: { experiences: Experience[] }) {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've worked"
      description="From freelance production systems to an agile product team — backend first, comfortable across the stack."
    >
      <ol className="relative space-y-6 border-l border-border pl-6 sm:pl-8">
        {experiences.map((exp, index) => (
          <li key={exp.id} className="relative">
            <span
              className={
                'absolute top-7 -left-[31px] h-3.5 w-3.5 rounded-full border-2 border-background sm:-left-[39px] ' +
                (exp.current ? 'bg-primary ring-4 ring-primary/20' : 'bg-muted-foreground/40')
              }
              aria-hidden="true"
            />
            <Reveal delay={index * 0.05} className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40 sm:p-7">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                  <p className="font-medium text-primary">{exp.company}</p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  {exp.current && (
                    <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                      Current
                    </span>
                  )}
                  <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                </div>
              </div>

              <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                <span>{exp.employmentType}</span>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {exp.location}
                </span>
              </p>

              <ul className="mt-5 space-y-2.5">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              {exp.tech && exp.tech.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-5">
                  {exp.tech.map((tech) => (
                    <TechChip key={tech} name={tech} />
                  ))}
                </div>
              )}
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
