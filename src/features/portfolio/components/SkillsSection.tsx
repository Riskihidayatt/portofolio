import { SkillGroup } from '../../../types';
import { Section, Reveal } from '../../../components/ui/Section';
import { getTechIconUrl } from '../../../lib/techIcons';
import { TechMarquee } from './TechMarquee';

export function SkillsSection({ skills, techStack }: { skills: SkillGroup[]; techStack: string[] }) {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I work with">
      <Reveal>
        <TechMarquee items={techStack} />
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, index) => (
          <Reveal
            key={group.category}
            delay={(index % 3) * 0.06}
            className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">{group.category}</h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((skill) => {
                const iconUrl = getTechIconUrl(skill);
                return (
                  <li
                    key={skill}
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted px-3 py-2 text-sm font-medium text-foreground"
                  >
                    {iconUrl && <img src={iconUrl} alt="" aria-hidden="true" loading="lazy" className="h-4 w-4" />}
                    {skill}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
