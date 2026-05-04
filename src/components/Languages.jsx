import { motion } from 'framer-motion'

const languages = [
  { lang: 'English',  level: 'Professional Working',  color: '#A8C49A' },
  { lang: 'Hindi',    level: 'Native',                 color: '#C9A86A' },
  { lang: 'Odia',     level: 'Native',                 color: '#D4A5A0' },
  { lang: 'Sanskrit', level: 'Fundamental',            color: '#7A9B6E' },
]

const Languages = () => (
  <section className="py-10 relative overflow-hidden" style={{ background: '#F5EFE2', paddingBottom: '100px' }}>
    <div className="max-w-container mx-auto px-8 lg:px-16">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
        <p className="font-sans font-medium uppercase flex-shrink-0"
          style={{ fontSize: '11px', color: '#7A9B6E', letterSpacing: '0.2em' }}>
          Languages I speak
        </p>
        <div className="flex flex-wrap gap-3">
          {languages.map((l, i) => (
            <motion.div key={l.lang}
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex flex-col gap-0.5 px-4 py-2.5 rounded-2xl"
              style={{ background: 'rgba(42,58,48,0.8)', border: `1px solid ${l.color}30` }}>
              <span className="font-serif text-sm font-medium" style={{ color: '#F5EFE2' }}>{l.lang}</span>
              <span className="font-sans text-xs" style={{ color: l.color }}>{l.level}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
)

export default Languages
