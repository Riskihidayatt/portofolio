import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
import { Experience } from "../../../types";

export function ExperienceSection({
  experiences,
}: {
  experiences: Experience[];
}) {
  return (
    <section className="py-20" id="experience">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-blue-500 font-bold mb-4 block">
            01 / Experience
          </span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-[var(--foreground)]">
            Experience
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-4 md:gap-8 items-baseline">
                {/* Timeline line - mobile only */}
                <div className="absolute left-0 top-2 bottom-0 w-px bg-[var(--border)] md:hidden"></div>
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-blue-500 md:hidden"></div>

                <div className="md:col-span-1 mb-4 md:mb-0 text-sm font-mono text-[var(--muted-foreground)] pt-1 flex items-center md:items-start gap-2">
                  <Briefcase className="w-4 h-4 hidden md:block text-blue-500" />
                  {exp.period}
                </div>

                <div className="md:col-span-3 bg-[var(--card)] p-6 sm:p-8 rounded-xl border border-[var(--border)] hover:border-blue-500/30 transition-colors shadow-sm">
                  <h3 className="text-xl font-bold uppercase tracking-tight text-[var(--foreground)] mb-1">
                    {exp.role}
                  </h3>
                  <div className="text-blue-500 font-mono text-sm mb-6">
                    {exp.company}
                  </div>

                  <ul className="space-y-4">
                    {exp.description.map((desc, i) => (
                      <li
                        key={i}
                        className="text-[var(--muted-foreground)] font-light text-sm flex gap-4 leading-relaxed"
                      >
                        <span className="text-blue-500 mt-1.5 opacity-50 text-[10px]">
                          ?
                        </span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
