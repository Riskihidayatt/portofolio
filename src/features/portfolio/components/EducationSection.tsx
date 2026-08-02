import { motion } from 'motion/react';
import { Education } from '../../../types';

export function EducationSection({ education }: { education: Education[] }) {
  return (
    <section className="py-20" id="education">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-blue-500 font-bold mb-4 block">04 / Background</span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter">Education</h2>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0a0a0a] border border-white/10 p-8 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">{edu.institution}</h3>
                <p className="text-white/50 font-light mt-2">{edu.degree}</p>
                {edu.gpa && (
                  <p className="font-serif italic text-blue-400 mt-2 text-lg">GPA: {edu.gpa}</p>
                )}
              </div>
              {edu.period && (
                <div className="font-mono text-[10px] uppercase tracking-widest text-white/50 border border-white/10 px-4 py-2 rounded-full w-fit">
                  {edu.period}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
