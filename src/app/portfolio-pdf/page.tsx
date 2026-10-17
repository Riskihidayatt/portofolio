import type { Metadata } from 'next';
// Static (non-variable) font files embed as real TrueType fonts in the PDF instead of Type 3 glyphs.
import '@fontsource/plus-jakarta-sans/latin-400.css';
import '@fontsource/plus-jakarta-sans/latin-500.css';
import '@fontsource/plus-jakarta-sans/latin-600.css';
import '@fontsource/plus-jakarta-sans/latin-700.css';
import '@fontsource/plus-jakarta-sans/latin-800.css';
import Image from 'next/image';
import {
  Award,
  Briefcase,
  ExternalLink,
  Github,
  Globe,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  MonitorSmartphone,
  Rocket,
  Server,
  Users,
} from 'lucide-react';
import { portfolioData as data } from '../../data/portfolio';
import { TechChip } from '../../components/ui/TechChip';
import { getTechIconUrl, isDarkTechIcon } from '../../lib/techIcons';
import { cn } from '../../lib/utils';

// Print-only A4 layout of the whole portfolio. `npm run pdf` renders it to public/Riski-Hidayat_Portfolio.pdf.
export const metadata: Metadata = {
  title: 'Riski Hidayat — Portfolio (PDF)',
  robots: { index: false, follow: false },
};

const SITE_URL = 'portofolio.rtech.studio';
const focusIcons = [Server, MonitorSmartphone, Rocket];
const { profile } = data;

// Projects are laid out three per page.
const projectPages = [data.projects.slice(0, 3), data.projects.slice(3, 6)];
const TOTAL_PAGES = 4 + projectPages.length;

function PdfPage({ number, children, className }: { number: number; children: React.ReactNode; className?: string }) {
  return (
    <section className={cn('pdf-page flex flex-col bg-background text-foreground', className)}>
      <div className="flex-1">{children}</div>
      <footer className="mt-4 flex items-center justify-between border-t border-border pt-3 font-mono text-[8px] uppercase tracking-[0.15em] text-muted-foreground">
        <span>{profile.name} — Portfolio</span>
        <span>{SITE_URL}</span>
        <span>
          {number} / {TOTAL_PAGES}
        </span>
      </footer>
    </section>
  );
}

function Heading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-5">
      <span className="inline-flex items-center gap-2 font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-primary">
        <span className="h-px w-5 bg-primary" />
        {eyebrow}
      </span>
      <h2 className="mt-1.5 text-[22px] font-bold tracking-tight">{title}</h2>
    </div>
  );
}

function Bullets({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn('space-y-1.5', className)}>
      {items.map((item, i) => (
        <li key={i} className="flex gap-2 text-[10px] leading-[1.55] text-muted-foreground">
          <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('pdf-avoid rounded-xl border border-border bg-card p-4', className)}>{children}</div>;
}

export default function PortfolioPdfPage() {
  return (
    <div className="pdf-document">
      {/* 1 — Profile */}
      <PdfPage number={1}>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6">
          <div className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative flex items-center gap-6">
            {profile.photo && (
              <Image
                loading="eager"
                src={profile.photo}
                alt={'Portrait of ' + profile.name}
                className="h-36 w-36 shrink-0 rounded-2xl border border-border object-cover"
              />
            )}
            <div className="min-w-0">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-0.5 text-[9px] font-medium text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {profile.availability}
              </span>
              <h1 className="mt-2.5 text-[34px] leading-[1.05] font-extrabold tracking-tight">
                {profile.name}
                <span className="block text-primary">{profile.role}</span>
              </h1>
              <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">{profile.headline}</p>
            </div>
          </div>

          <div className="relative mt-5 grid grid-cols-2 gap-x-6 gap-y-1.5 border-t border-border pt-4 text-[10px]">
            <a href={'mailto:' + profile.email} className="inline-flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-primary" />
              {profile.email}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              {profile.location}
            </span>
            {profile.linkedin && (
              <a href={profile.linkedin} className="inline-flex items-center gap-2">
                <Linkedin className="h-3.5 w-3.5 text-primary" />
                {profile.linkedin.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
              </a>
            )}
            {profile.github && (
              <a href={profile.github} className="inline-flex items-center gap-2">
                <Github className="h-3.5 w-3.5 text-primary" />
                {profile.github.replace(/^https?:\/\//, '')}
              </a>
            )}
            <a href={'https://' + SITE_URL} className="inline-flex items-center gap-2">
              <Globe className="h-3.5 w-3.5 text-primary" />
              {SITE_URL}
            </a>
          </div>
        </div>

        <div className="mt-6">
          <Heading eyebrow="About" title="Building dependable software, end to end" />
          <Card>
            <p className="text-[10.5px] leading-[1.65] text-muted-foreground">{profile.summary}</p>
          </Card>
          <div className="mt-3 grid grid-cols-4 gap-3">
            {data.stats.map((stat) => (
              <Card key={stat.label} className="p-3.5">
                <div className="text-[24px] font-bold tracking-tight">{stat.value}</div>
                <div className="mt-1 text-[9px] leading-snug text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {data.focus.map((item, i) => {
              const Icon = focusIcons[i % focusIcons.length];
              return (
                <Card key={item.title}>
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-3 text-[12px] font-semibold">{item.title}</h3>
                  <p className="mt-1 text-[9.5px] leading-[1.55] text-muted-foreground">{item.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {item.tools.map((tool) => (
                      <TechChip key={tool} name={tool} className="px-2 py-0.5 text-[8.5px]" />
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </PdfPage>

      {/* 2 — Experience */}
      <PdfPage number={2}>
        <Heading eyebrow="Experience" title="Where I've worked" />
        <ol className="relative space-y-3 border-l border-border pl-5">
          {data.experiences.map((exp) => (
            <li key={exp.id} className="pdf-avoid relative">
              <span
                className={cn(
                  'absolute top-4 -left-[25px] h-2.5 w-2.5 rounded-full border-2 border-background',
                  exp.current ? 'bg-primary' : 'bg-muted-foreground/50',
                )}
                aria-hidden="true"
              />
              <Card>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[12.5px] font-semibold">{exp.role}</h3>
                    <p className="text-[10.5px] font-medium text-primary">{exp.company}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    {exp.current && (
                      <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[8.5px] font-medium text-emerald-600 dark:text-emerald-400">
                        Current
                      </span>
                    )}
                    <span className="font-mono text-[9px] text-muted-foreground">{exp.period}</span>
                  </div>
                </div>
                <p className="mt-1 flex items-center gap-2 text-[9px] text-muted-foreground">
                  <Briefcase className="h-3 w-3" />
                  {exp.employmentType}
                  <span aria-hidden="true">·</span>
                  <MapPin className="h-3 w-3" />
                  {exp.location}
                </p>
                <Bullets items={exp.description} className="mt-2.5" />
                {exp.tech && exp.tech.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1 border-t border-border pt-2.5">
                    {exp.tech.map((tech) => (
                      <TechChip key={tech} name={tech} className="px-2 py-0.5 text-[8.5px]" />
                    ))}
                  </div>
                )}
              </Card>
            </li>
          ))}
        </ol>
      </PdfPage>

      {/* 3–4 — Projects */}
      {projectPages.map((projects, pageIndex) => (
        <PdfPage key={pageIndex} number={3 + pageIndex}>
          <Heading
            eyebrow={pageIndex === 0 ? 'Projects' : 'Projects (continued)'}
            title={pageIndex === 0 ? 'Selected work' : 'More projects'}
          />
          <div className="space-y-4">
            {projects.map((project) => {
              const gallery = (project.images ?? []).slice(1, 4);
              const contain = project.imageFit === 'contain';
              return (
                <Card key={project.id} className="grid grid-cols-[230px_1fr] gap-4 p-3.5">
                  <div className="space-y-1.5">
                    {project.image && (
                      <div className="overflow-hidden rounded-lg border border-border bg-muted">
                        <Image
                loading="eager"
                          src={project.image}
                          alt={project.title + ' screenshot'}
                          className={cn(
                            'aspect-[16/10] w-full',
                            contain ? 'object-contain py-1' : 'object-cover object-top',
                          )}
                        />
                      </div>
                    )}
                    {gallery.length > 0 && (
                      <div className="grid grid-cols-3 gap-1.5">
                        {gallery.map((img, i) => (
                          <div key={i} className="overflow-hidden rounded-md border border-border bg-muted">
                            <Image
                loading="eager"
                              src={img}
                              alt={project.title + ' screenshot ' + (i + 2)}
                              className={cn('aspect-[16/10] w-full', contain ? 'object-contain' : 'object-cover object-top')}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[8.5px] uppercase tracking-wider text-primary">{project.category}</span>
                      <span className="rounded-full bg-muted px-2 py-0.5 text-[8.5px] font-medium text-muted-foreground">
                        {project.role}
                      </span>
                    </div>
                    <h3 className="mt-1 text-[14px] font-semibold">{project.title}</h3>
                    <p className="mt-0.5 text-[10px] leading-snug text-foreground/80">{project.summary}</p>
                    <Bullets items={project.description} className="mt-2" />
                    <div className="mt-2.5 flex flex-wrap items-center gap-1">
                      {project.tech_stack.map((tech) => (
                        <TechChip key={tech} name={tech} className="px-2 py-0.5 text-[8.5px]" />
                      ))}
                      {project.link && (
                        <a
                          href={project.link}
                          className="ml-1 inline-flex items-center gap-1 text-[9px] font-medium text-primary"
                        >
                          <ExternalLink className="h-3 w-3" />
                          {project.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </PdfPage>
      ))}

      {/* 5 — Skills, education & organization */}
      <PdfPage number={3 + projectPages.length}>
        <Heading eyebrow="Skills" title="Tools I work with" />
        <Card className="p-3.5">
          <div className="flex flex-wrap justify-center gap-1.5">
            {data.techStack
              .filter((tech) => getTechIconUrl(tech))
              .map((tech) => (
                <span
                  key={tech}
                  title={tech}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-background"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element -- tiny local SVG */}
                  <img
                    src={getTechIconUrl(tech)!}
                    loading="eager"
                    alt={tech}
                    width={20}
                    height={20}
                    className={cn('h-5 w-5', isDarkTechIcon(tech) && 'dark:invert')}
                  />
                </span>
              ))}
          </div>
        </Card>
        <div className="mt-3 grid grid-cols-3 gap-3">
          {data.skills.map((group) => (
            <Card key={group.category} className="p-3.5">
              <h3 className="font-mono text-[8.5px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                {group.category}
              </h3>
              <div className="mt-2.5 flex flex-wrap gap-1">
                {group.items.map((skill) => (
                  <TechChip key={skill} name={skill} className="px-2 py-0.5 text-[8.5px] text-foreground" />
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-7">
          <Heading eyebrow="Credentials" title="Education & leadership" />
          <div className="grid grid-cols-2 gap-3">
            <Card>
              <h3 className="flex items-center gap-2 text-[11px] font-semibold">
                <GraduationCap className="h-3.5 w-3.5 text-primary" />
                Education
              </h3>
              <ul className="mt-3 space-y-3">
                {data.education.map((edu) => (
                  <li key={edu.id} className="border-l-2 border-border pl-3">
                    <p className="text-[10.5px] font-semibold">{edu.degree}</p>
                    <p className="text-[9.5px] text-muted-foreground">{edu.institution}</p>
                    <p className="mt-0.5 flex gap-3 font-mono text-[8.5px] text-muted-foreground">
                      {edu.period && <span>{edu.period}</span>}
                      {edu.gpa && <span className="text-primary">GPA {edu.gpa}</span>}
                    </p>
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <h3 className="flex items-center gap-2 text-[11px] font-semibold">
                <Users className="h-3.5 w-3.5 text-primary" />
                Organization
              </h3>
              <ul className="mt-3 space-y-3">
                {data.organizations.map((org) => (
                  <li key={org.id} className="border-l-2 border-border pl-3">
                    <p className="text-[10.5px] font-semibold">{org.role}</p>
                    <p className="text-[9.5px] text-muted-foreground">{org.name}</p>
                    <p className="mt-1 text-[9.5px] leading-[1.55] text-muted-foreground">{org.description}</p>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </PdfPage>

      {/* 6 — Certifications & contact */}
      <PdfPage number={4 + projectPages.length}>
        <Heading eyebrow="Credentials" title="Licenses & certifications" />
        <div className="grid grid-cols-3 gap-3">
          {data.certifications.map((cert) => (
            <Card key={cert.id} className="p-2.5">
              <div className="grid aspect-[4/3] place-items-center overflow-hidden rounded-lg border border-border bg-muted">
                {cert.image ? (
                  <Image loading="eager" src={cert.image} alt={cert.title + ' certificate'} className="h-full w-full object-contain" />
                ) : (
                  <Award className="h-8 w-8 text-muted-foreground/50" />
                )}
              </div>
              <div className="mt-2 flex items-start justify-between gap-2 px-0.5">
                <div className="min-w-0">
                  <p className="text-[10px] leading-snug font-semibold">{cert.title}</p>
                  <p className="text-[9px] text-muted-foreground">{cert.issuer}</p>
                </div>
                <span className="shrink-0 rounded-full bg-muted px-2 py-0.5 font-mono text-[8.5px] text-muted-foreground">
                  {cert.year}
                </span>
              </div>
            </Card>
          ))}
        </div>

        <div className="pdf-avoid relative mt-8 overflow-hidden rounded-2xl border border-border bg-card px-8 py-9 text-center">
          <div className="pointer-events-none absolute -top-20 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative">
            <span className="font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-primary">Contact</span>
            <h2 className="mx-auto mt-2 max-w-md text-[24px] leading-tight font-bold tracking-tight">
              Let&apos;s build something <span className="text-primary">reliable</span> together.
            </h2>
            <p className="mx-auto mt-2 max-w-md text-[10.5px] text-muted-foreground">
              Open to full-time Fullstack or Backend Developer roles — remote or on-site, and happy to relocate.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2 text-[10px]">
              <a
                href={'mailto:' + profile.email}
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 font-semibold text-primary-foreground"
              >
                <Mail className="h-3.5 w-3.5" />
                {profile.email}
              </a>
              {profile.linkedin && (
                <a href={profile.linkedin} className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2">
                  <Linkedin className="h-3.5 w-3.5" />
                  LinkedIn
                </a>
              )}
              {profile.github && (
                <a href={profile.github} className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2">
                  <Github className="h-3.5 w-3.5" />
                  GitHub
                </a>
              )}
              <a href={'https://' + SITE_URL} className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2">
                <Layers className="h-3.5 w-3.5" />
                {SITE_URL}
              </a>
            </div>
          </div>
        </div>
      </PdfPage>
    </div>
  );
}
