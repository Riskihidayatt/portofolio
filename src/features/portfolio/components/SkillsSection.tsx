import { motion } from 'motion/react';
import { SkillGroup } from '../../../types';
import { getTechIconUrl } from '../../../lib/techIcons';

export function SkillsSection({ skills }: { skills: SkillGroup[] }) {
  return (
    <section className="py-20" id="skills">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-blue-500 font-bold mb-4 block">03 / Capabilities</span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter">Technical Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="bg-[#0a0a0a] border border-white/10 p-8 hover:border-blue-500/30 transition-colors duration-300"
            >
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-blue-500 font-bold mb-6 pb-4 border-b border-white/10">
                {group.category}
              </h3>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {group.items.map((skill, skillIndex) => {
                  const iconUrl = getTechIconUrl(skill);
                  return (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: groupIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="group flex flex-col items-center gap-2.5 p-3 rounded-none bg-white/[0.03] border border-white/[0.06] hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300 cursor-default"
                    >
                      {iconUrl ? (
                        <div className="relative w-10 h-10 flex items-center justify-center">
                          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <img
                            src={iconUrl}
                            alt={skill}
                            className="w-9 h-9 object-contain relative z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]"
                          />
                        </div>
                      ) : (
                        <div className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-blue-500/50 transition-colors">
                          <span className="text-[10px] font-mono font-bold text-white/50 group-hover:text-blue-400 transition-colors uppercase">
                            {skill.slice(0, 3)}
                          </span>
                        </div>
                      )}
                      <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 group-hover:text-blue-400 transition-colors duration-300 text-center leading-tight">
                        {skill}
                      </span>
                    </motion.div>
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

