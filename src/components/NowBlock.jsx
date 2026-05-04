import { motion } from 'framer-motion'
import { Sprout, Wrench, BookOpen, Coffee, Star, Heart } from 'lucide-react'
import { nowItems } from '../data/now'
import WaveBottom from './ui/WaveBottom'

const iconMap = { Sprout, Wrench, BookOpen, Coffee, Star, Heart }
const iconColors = {
  Sprout:   '#A8C49A',
  Wrench:   '#C9A86A',
  BookOpen: '#D4A5A0',
  Coffee:   '#A8C49A',
  Star:     '#C9A86A',
  Heart:    '#D4A5A0',
}

const NowBlock = () => (
  <section className="py-16 lg:py-20 relative overflow-hidden" style={{ background: '#F5EFE2', position: 'relative', paddingBottom: '100px' }}>
    <div className="relative z-10 max-w-container mx-auto px-8 lg:px-16">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="rounded-2xl p-8 lg:p-10"
          style={{ background: '#2A3A30', border: '1px solid rgba(74,93,63,0.5)', boxShadow: '0 4px 32px rgba(0,0,0,0.3)' }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#A8C49A' }} />
            <p className="font-sans font-medium uppercase"
              style={{ fontSize: '11px', color: '#5C7A52', letterSpacing: '0.2em' }}>
              Right Now
            </p>
          </div>
          <h2 className="font-serif mb-6"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 400, color: '#F5EFE2' }}>
            Currently
          </h2>
          <ul className="flex flex-col gap-4">
            {nowItems.map((item, i) => {
              const Icon = iconMap[item.icon] || Sprout
              const color = iconColors[item.icon] || '#A8C49A'
              return (
                <motion.li key={item.id}
                  initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${color}20` }}>
                    <Icon size={15} style={{ color }} />
                  </div>
                  <div>
                    <span className="font-sans text-xs font-semibold uppercase tracking-wide"
                      style={{ color, letterSpacing: '0.14em' }}>
                      {item.label}
                    </span>
                    <p className="font-sans text-sm leading-relaxed mt-0.5"
                      style={{ color: '#B8B0A0', lineHeight: 1.7 }}>
                      {item.text}
                    </p>
                  </div>
                </motion.li>
              )
            })}
          </ul>
        </motion.div>
      </div>
    </div>
    {/* Wave */}
    <WaveBottom nextColor="#1A3A2E" variant="c" flip />
  </section>
)

export default NowBlock
