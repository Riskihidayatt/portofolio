import { motion } from 'motion/react';
import { getTechIconUrl } from '../../../lib/techIcons';
import { SkillGroup } from '../../../types';

export function SkillsSection({ skills }: { skills: SkillGroup[] }) {
  return (
    <section className="py-20" id="skills">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-blue-500 font-bold mb-4 block">03 / Expertise</span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-[var(--foreground)]">Technical Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[var(--card)] p-8 rounded-xl border border-[var(--border)] hover:border-blue-500/30 transition-colors shadow-sm"
            >
              <h3 className="text-lg font-mono text-[var(--foreground)] uppercase tracking-widest mb-6 pb-4 border-b border-[var(--border)]">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => {
                  const iconUrl = getTechIconUrl(skill);
                  return (
                    <div 
                      key={skill} 
                      className="group/skill flex items-center gap-2 px-4 py-2.5 bg-[var(--muted)] border border-[var(--border)] rounded-md hover:border-blue-500/50 hover:bg-blue-500/5 transition-all cursor-default"
                    >
                      {iconUrl && (
                        <img 
                          src={iconUrl} 
                          alt={skill} 
                          className="w-4 h-4 opacity-50 grayscale group-hover/skill:opacity-100 group-hover/skill:grayscale-0 transition-all duration-300" 
                        />
                      )}
                      <span className="text-sm font-medium text-[var(--muted-foreground)] group-hover/skill:text-[var(--foreground)] transition-colors">{skill}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
