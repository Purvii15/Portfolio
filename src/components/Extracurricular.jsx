import { motion } from 'framer-motion'
import { extracurricular } from '../data/extracurricular'
import WaveBottom from './ui/WaveBottom'

const cardBgs = [
  { bg: 'rgba(168,196,154,0.12)', border: 'rgba(168,196,154,0.25)', accent: '#A8C49A' },
  { bg: 'rgba(201,168,106,0.12)', border: 'rgba(201,168,106,0.25)', accent: '#C9A86A' },
  { bg: 'rgba(212,165,160,0.12)', border: 'rgba(212,165,160,0.25)', accent: '#D4A5A0' },
  { bg: 'rgba(168,196,154,0.12)', border: 'rgba(168,196,154,0.25)', accent: '#A8C49A' },
]

const Extracurricular = () => (
  <section id="extracurricular" className="py-20 lg:py-24 relative overflow-hidden"
    style={{ background: '#F5EFE2', position: 'relative', paddingBottom: '100px' }}>
    <div className="relative z-10 max-w-container mx-auto px-8 lg:px-16">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
        <p className="font-sans font-medium uppercase mb-3"
          style={{ fontSize: '11px', color: '#5C7A52', letterSpacing: '0.2em' }}>
          Beyond the Code
        </p>
        <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#1A3A2E' }}>
          Beyond the Code
        </h2>
        <p className="font-serif italic mt-2" style={{ color: '#7A9B6E', fontSize: '16px' }}>
          Communities, clubs, and the things that keep me curious.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {extracurricular.map((item, i) => {
          const c = cardBgs[i % cardBgs.length]
          return (
            <motion.div key={item.id}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-6 flex flex-col gap-3"
              style={{ background: c.bg, border: `1px solid ${c.border}` }}>
              <h3 className="font-serif text-base font-medium" style={{ color: '#1A3A2E' }}>
                {item.role}
              </h3>
              <p className="font-sans text-xs font-semibold" style={{ color: c.accent }}>{item.org}</p>
              <p className="font-sans text-sm leading-relaxed" style={{ color: '#4A5D3F', lineHeight: 1.7 }}>
                {item.desc}
              </p>
            </motion.div>
          )
        })}
      </div>
    </div>
    {/* Wave */}
    <WaveBottom nextColor="#1A3A2E" variant="b" flip />
  </section>
)

export default Extracurricular
