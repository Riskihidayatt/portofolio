import { motion } from 'motion/react';
import { GraduationCap, BookOpen } from 'lucide-react';
import { Education } from '../../../types';

export function EducationSection({ education }: { education: Education[] }) {
  return (
    <section className="py-20" id="education">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-blue-500 font-bold mb-4 block">04 / Education</span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-[var(--foreground)]">Academic Background</h2>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[var(--card)] p-6 sm:p-8 rounded-xl border border-[var(--border)] hover:border-blue-500/30 transition-all group shadow-sm flex flex-col md:flex-row gap-6 justify-between items-start md:items-center"
            >
              <div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-[var(--foreground)] group-hover:text-blue-500 transition-colors mb-2">
                  {edu.degree}
                </h3>
                <div className="text-[var(--muted-foreground)] font-mono text-sm flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-blue-500" />
                  {edu.institution}
                </div>
              </div>
              
              <div className="flex flex-col md:items-end gap-2 text-sm font-mono text-[var(--muted-foreground)]">
                {edu.period && (
                  <div className="bg-[var(--muted)] px-3 py-1 rounded-md border border-[var(--border)]">
                    {edu.period}
                  </div>
                )}
                {edu.gpa && (
                  <div className="flex items-center gap-1.5 opacity-70">
                    <BookOpen className="w-3 h-3 text-blue-500" />
                    GPA: {edu.gpa}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
