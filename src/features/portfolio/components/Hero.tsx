import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Profile } from '../../../types';

export function Hero({ profile }: { profile: Profile }) {
  return (
    <section className="min-h-[85vh] flex flex-col md:flex-row items-center justify-between gap-12 py-20" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 max-w-2xl flex-1"
      >

        <h1 className="text-6xl sm:text-[110px] leading-[0.85] font-black tracking-tighter uppercase mb-4 mt-6">
          <span className="block text-white/50 text-xl font-mono tracking-widest mb-6">SOFTWARE ENGINEER</span>
          Hi, I'm <br />
          <span className="text-blue-500">{profile.name}</span>
        </h1>

        <p className="text-base sm:text-lg text-white/50 leading-relaxed font-light max-w-xl mt-8">
          {profile.summary}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 pt-8 font-mono text-[11px] uppercase tracking-widest opacity-60">
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-blue-500" />
            <span>{profile.location}</span>
          </div>
          {profile.linkedin && (
            <div className="flex items-center gap-3">
              <Linkedin className="w-4 h-4 text-blue-500" />
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                LinkedIn
              </a>
            </div>
          )}
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-blue-500" />
            <a href={`mailto:${profile.email}`} className="hover:text-blue-400 transition-colors lowercase">
              {profile.email}
            </a>
          </div>
        </div>

        <div className="flex gap-4 pt-6">
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-blue-500 hover:text-blue-500 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-blue-500 hover:text-blue-500 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
        </div>
      </motion.div>

      {profile.photo && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-1/3 max-w-sm md:max-w-md mt-12 md:mt-0 flex-shrink-0"
        >
          <div className="relative aspect-[3/4] md:aspect-[4/5] w-full group">
            <div className="absolute inset-0 bg-blue-500/20 translate-x-4 translate-y-4 border border-blue-500/30 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
            <img
              src={profile.photo}
              alt={profile.name}
              className="absolute inset-0 w-full h-full object-cover border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 z-10"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}
