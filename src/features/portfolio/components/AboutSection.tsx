import { Server, MonitorSmartphone, Rocket } from 'lucide-react';
import { Profile, Stat, Focus } from '../../../types';
import { Section, Reveal } from '../../../components/ui/Section';
import { TechChip } from '../../../components/ui/TechChip';

const focusIcons = [Server, MonitorSmartphone, Rocket];

interface AboutSectionProps {
  profile: Profile;
  stats: Stat[];
  focus: Focus[];
}

export function AboutSection({ profile, stats, focus }: AboutSectionProps) {
  return (
    <Section id="about" eyebrow="About" title="Building dependable software, end to end">
      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <Reveal className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">{profile.summary}</p>
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.05} className="flex flex-col justify-between rounded-2xl border border-border bg-card p-5">
              <span className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{stat.value}</span>
              <span className="mt-2 text-sm text-muted-foreground">{stat.label}</span>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {focus.map((item, i) => {
          const Icon = focusIcons[i % focusIcons.length];
          return (
            <Reveal key={item.title} delay={i * 0.08} className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tools.map((tool) => (
                  <TechChip key={tool} name={tool} />
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
