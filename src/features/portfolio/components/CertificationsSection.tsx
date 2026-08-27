import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, X } from 'lucide-react';
import { Certification } from '../../../types';

export function CertificationsSection({ certifications }: { certifications: Certification[] }) {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section className="py-20" id="certifications">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-blue-500 font-bold mb-4 block">05 / Certifications</span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-[var(--foreground)]">Licenses & Certifications</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => cert.image && setSelectedCert(cert)}
              className={
                'bg-[var(--card)] p-6 sm:p-8 rounded-xl border border-[var(--border)] hover:border-blue-500/30 transition-all group shadow-sm flex flex-col justify-between ' + 
                (cert.image ? 'cursor-pointer' : '')
              }
            >
              <div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-[var(--foreground)] group-hover:text-blue-500 transition-colors mb-3">
                  {cert.title}
                </h3>
                <div className="text-[var(--muted-foreground)] font-mono text-sm flex items-center gap-2 mb-4">
                  <Award className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span className="line-clamp-1">{cert.issuer}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-[var(--border)]">
                <div className="bg-[var(--muted)] px-3 py-1 rounded-md border border-[var(--border)] text-sm font-mono text-[var(--muted-foreground)]">
                  {cert.year}
                </div>
                {cert.image && (
                  <span className="text-[10px] uppercase tracking-widest font-mono text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    View Credential ?
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Certification Image Modal */}
      <AnimatePresence>
        {selectedCert && selectedCert.image && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[90vh] bg-[var(--background)] border border-[var(--border)] rounded-xl overflow-hidden shadow-2xl z-10 flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-[var(--border)] bg-[var(--background)] z-10">
                <h3 className="text-lg font-bold uppercase tracking-tight text-[var(--foreground)] truncate pr-4">
                  {selectedCert.title}
                </h3>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] rounded-full transition-colors flex-shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-4 sm:p-6 bg-[var(--card)] overflow-y-auto custom-scrollbar flex items-center justify-center">
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title} 
                  className="max-w-full max-h-[70vh] object-contain rounded-lg border border-[var(--border)]"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
