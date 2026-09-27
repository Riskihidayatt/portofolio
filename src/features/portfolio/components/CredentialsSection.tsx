import { useState } from 'react';
import { Award, GraduationCap, Users, ArrowUpRight } from 'lucide-react';
import { Certification, Education, Organization } from '../../../types';
import { Section, Reveal } from '../../../components/ui/Section';
import { Modal } from '../../../components/ui/Modal';

interface CredentialsSectionProps {
  education: Education[];
  certifications: Certification[];
  organizations: Organization[];
}

export function CredentialsSection({ education, certifications, organizations }: CredentialsSectionProps) {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <Section id="credentials" eyebrow="Credentials" title="Education, certifications & leadership">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-6">
          <Reveal className="rounded-2xl border border-border bg-card p-6">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <GraduationCap className="h-4 w-4 text-primary" />
              Education
            </h3>
            <ul className="mt-5 space-y-5">
              {education.map((edu) => (
                <li key={edu.id} className="border-l-2 border-border pl-4">
                  <p className="font-semibold text-foreground">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  <p className="mt-1 flex flex-wrap gap-x-3 font-mono text-xs text-muted-foreground">
                    {edu.period && <span>{edu.period}</span>}
                    {edu.gpa && <span className="text-primary">GPA {edu.gpa}</span>}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          {organizations.length > 0 && (
            <Reveal delay={0.05} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Users className="h-4 w-4 text-primary" />
                Organization
              </h3>
              <ul className="mt-5 space-y-5">
                {organizations.map((org) => (
                  <li key={org.id} className="border-l-2 border-border pl-4">
                    <p className="font-semibold text-foreground">{org.role}</p>
                    <p className="text-sm text-muted-foreground">{org.name}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{org.description}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>

        <Reveal delay={0.08} className="rounded-2xl border border-border bg-card p-6">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Award className="h-4 w-4 text-primary" />
            Certifications
          </h3>
          <ul className="mt-5 divide-y divide-border">
            {certifications.map((cert) => {
              const content = (
                <>
                  <span className="min-w-0">
                    <span className="block font-semibold text-foreground transition-colors group-hover:text-primary">{cert.title}</span>
                    <span className="block text-sm text-muted-foreground">{cert.issuer}</span>
                  </span>
                  <span className="flex shrink-0 items-center gap-2">
                    <span className="rounded-full bg-muted px-2.5 py-0.5 font-mono text-xs text-muted-foreground">{cert.year}</span>
                    {cert.image && <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />}
                  </span>
                </>
              );
              return (
                <li key={cert.id}>
                  {cert.image ? (
                    <button
                      type="button"
                      onClick={() => setSelectedCert(cert)}
                      className="group flex w-full items-center justify-between gap-4 py-4 text-left"
                      aria-label={'View ' + cert.title + ' certificate'}
                    >
                      {content}
                    </button>
                  ) : (
                    <div className="flex items-center justify-between gap-4 py-4">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>

      <Modal open={selectedCert !== null} title={selectedCert?.title ?? ''} onClose={() => setSelectedCert(null)} className="max-w-3xl">
        {selectedCert?.image && (
          <div className="flex justify-center bg-muted p-4 sm:p-6">
            <img
              src={selectedCert.image}
              alt={selectedCert.title + ' certificate'}
              className="max-h-[70vh] max-w-full rounded-lg border border-border object-contain"
            />
          </div>
        )}
      </Modal>
    </Section>
  );
}
