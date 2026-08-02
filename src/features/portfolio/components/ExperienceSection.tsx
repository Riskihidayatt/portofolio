import { motion } from 'motion/react';
import { Experience } from '../../../types';

export function ExperienceSection({ experiences }: { experiences: Experience[] }) {
  return (
    <section className="py-20" id="experience">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-blue-500 font-bold mb-4 block">01 / Experience</span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter">Work History</h2>
        </div>

        <div className="space-y-12 border-l border-white/10 ml-2 pl-8 relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-[#050505] border border-white/20" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">{exp.role}</h3>
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 border border-white/10 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">
                  {exp.period}
                </span>
              </div>
              
              <h4 className="text-lg font-medium text-white/80 mb-6">{exp.company}</h4>
              
              <ul className="space-y-3">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-white/50 font-light text-sm sm:text-base leading-relaxed flex items-start">
                    <span className="text-blue-500 mr-3 mt-1.5 text-xs opacity-60">▹</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
