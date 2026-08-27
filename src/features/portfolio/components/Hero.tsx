import { motion } from 'motion/react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Profile } from '../../../types';

export function Hero({ profile }: { profile: Profile }) {
  return (
    <section className="min-h-[85vh] flex flex-col md:flex-row items-center justify-between gap-12 py-20" id="about">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-6 max-w-2xl flex-1 mt-10 md:mt-0"
      >
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl sm:text-7xl lg:text-[110px] leading-[1] lg:leading-[0.85] font-black tracking-tighter uppercase mb-4"
        >
          <span className="block text-[var(--muted-foreground)] text-sm sm:text-xl font-mono tracking-widest mb-4 lg:mb-6">SOFTWARE ENGINEER</span>
          Hi, I'm <br />
          <span className="text-blue-500">{profile.name}</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg text-[var(--muted-foreground)] leading-relaxed font-light max-w-xl mt-8"
        >
          {profile.summary}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 pt-8 font-mono text-[11px] uppercase tracking-widest text-[var(--muted-foreground)]"
        >
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-blue-500" />
            <span>{profile.location}</span>
          </div>
          {profile.linkedin && (
            <div className="flex items-center gap-3 group cursor-pointer">
              <Linkedin className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform" />
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="group-hover:text-blue-500 transition-colors">
                LinkedIn
              </a>
            </div>
          )}
          <div className="flex items-center gap-3 group cursor-pointer">
            <Mail className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform" />
            <a href={'mailto:' + profile.email} className="group-hover:text-blue-500 transition-colors lowercase">
              {profile.email}
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex gap-4 pt-6"
        >
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[var(--muted)] border border-[var(--border)] hover:border-blue-500 hover:text-blue-500 hover:-translate-y-1 transition-all duration-300 text-[var(--foreground)]"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[var(--muted)] border border-[var(--border)] hover:border-blue-500 hover:text-blue-500 hover:-translate-y-1 transition-all duration-300 text-[var(--foreground)]"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
        </motion.div>
      </motion.div>

      {profile.photo && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
          className="w-full md:w-1/3 max-w-[280px] sm:max-w-sm md:max-w-md mt-12 md:mt-0 flex-shrink-0 mx-auto"
        >
          <div className="relative aspect-[3/4] md:aspect-[4/5] w-full group">
            <div className="absolute inset-0 bg-blue-500/10 translate-x-4 translate-y-4 border border-blue-500/20 transition-all duration-500 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:bg-blue-500/20 rounded-2xl"></div>
            <img
              src={profile.photo}
              alt={profile.name}
              className="absolute inset-0 w-full h-full object-cover border border-[var(--border)] grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:-translate-y-2 z-10 rounded-2xl shadow-xl bg-[var(--card)]"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}
