import { motion } from 'framer-motion'
import { testimonials } from '../data/testimonials'
import Decoration from './ui/Decoration'

const Testimonials = () => (
  <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: '#F5F0E8' }}>

    {/* animal-grid — bottom-right corner, very faint */}
    <Decoration src="/assets/decorations/animal-grid.jpg"
      size={200} opacity={0.15} rotate={0}
      position={{ bottom: '0px', right: '0px' }} />

    {/* floral-sprig — top-left */}
    <Decoration src="/assets/decorations/floral-sprig.png"
      size={140} opacity={0.35} rotate={-10}
      position={{ top: '-10px', left: '-10px' }} />

    <div className="relative z-10 max-w-container mx-auto px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="font-sans uppercase mb-2"
          style={{ fontSize: '10px', color: 'rgba(107,101,88,0.5)', letterSpacing: '0.22em' }}>
          Kind Words
        </p>
        <h2 className="font-serif text-ink"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500 }}>
          What People Say
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            className="rounded-2xl p-6 flex flex-col gap-5"
            style={{ background: '#EDE6D8', border: '1px solid rgba(143,168,130,0.15)', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
          >
            <span className="font-serif text-5xl leading-none select-none"
              style={{ color: 'rgba(143,168,130,0.35)', lineHeight: 1 }}>"</span>

            <p className="font-serif italic text-base leading-relaxed flex-1"
              style={{ color: '#1E1C18', marginTop: '-16px' }}>
              {t.quote}
            </p>

            <div className="flex items-center gap-3 pt-2"
              style={{ borderTop: '1px solid rgba(143,168,130,0.2)' }}>
              <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-sans text-xs font-semibold"
                style={{ background: '#C8D9C0', color: '#5C7A52' }}>
                {t.initials}
              </div>
              <div>
                <p className="font-sans text-sm font-medium" style={{ color: '#1E1C18' }}>{t.name}</p>
                <p className="font-sans text-xs" style={{ color: '#6B6558' }}>{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default Testimonials
