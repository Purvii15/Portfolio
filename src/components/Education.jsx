import { motion } from 'framer-motion'
import { GraduationCap, MapPin } from 'lucide-react'
import { educationEntries } from '../data/education'

const Education = () => (
  <section id="education" className="py-20 lg:py-24 relative overflow-hidden"
    style={{ background: '#1F2D24' }}>
    <div className="relative z-10 max-w-container mx-auto px-8 lg:px-16">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
        <p className="font-sans font-medium uppercase mb-3"
          style={{ fontSize: '11px', color: '#7A9B6E', letterSpacing: '0.2em' }}>
          Education
        </p>
        <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#F5EFE2' }}>
          Where I've Been Learning
        </h2>
      </motion.div>

      <div className="flex flex-col gap-4 max-w-3xl">
        {educationEntries.map((entry, i) => (
          <motion.div key={entry.id}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-5"
            style={{
              background: entry.current ? '#2A3A30' : 'rgba(42,58,48,0.5)',
              border: entry.current ? '1px solid rgba(168,196,154,0.35)' : '1px solid rgba(74,93,63,0.3)',
            }}>
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: entry.current ? 'rgba(168,196,154,0.2)' : 'rgba(74,93,63,0.3)' }}>
              <GraduationCap size={20} style={{ color: '#A8C49A' }} />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                <div>
                  <h3 className="font-serif text-lg font-medium" style={{ color: '#F5EFE2' }}>
                    {entry.institution}
                  </h3>
                  <p className="font-sans text-sm mt-0.5" style={{ color: '#B8B0A0' }}>{entry.degree}</p>
                </div>
                <div className="flex flex-col gap-1 sm:items-end flex-shrink-0">
                  {entry.highlight && (
                    <span className="font-sans text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ background: 'rgba(168,196,154,0.2)', color: '#A8C49A', border: '1px solid rgba(168,196,154,0.25)' }}>
                      {entry.highlight}
                    </span>
                  )}
                  <span className="font-sans text-xs" style={{ color: '#7A9B6E' }}>{entry.duration}</span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 font-sans text-xs mt-2" style={{ color: '#7A9B6E' }}>
                <MapPin size={10} /> {entry.location}
              </span>
            </div>
            {entry.current && (
              <span className="inline-flex items-center gap-1.5 font-sans text-xs px-3 py-1 rounded-full flex-shrink-0"
                style={{ background: 'rgba(168,196,154,0.15)', color: '#A8C49A', border: '1px solid rgba(168,196,154,0.3)' }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#A8C49A' }} />
                Current
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default Education
