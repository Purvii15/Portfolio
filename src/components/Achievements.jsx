import { motion } from 'framer-motion'
import { achievements } from '../data/achievements'
import { LaurelLeft, LaurelRight, FernSprig, GoldLeafBranch, OrnamentDivider, ButterflyOutline } from './ui/BotanicalSVG'
import WaveBottom from './ui/WaveBottom'

/* Dot grid */
const DotGrid = ({ color = '#C9A86A', opacity = 0.18, cols = 5, rows = 4, gap = 14 }) => (
  <svg width={cols * gap} height={rows * gap} viewBox={`0 0 ${cols * gap} ${rows * gap}`}
    fill="none" aria-hidden="true" style={{ opacity }}>
    {Array.from({ length: rows }).map((_, r) =>
      Array.from({ length: cols }).map((_, c) => (
        <circle key={`${r}-${c}`} cx={c * gap + gap / 2} cy={r * gap + gap / 2} r="1.5" fill={color} />
      ))
    )}
  </svg>
)

const Achievements = () => (
  <section id="achievements" className="py-20 lg:py-28 relative overflow-hidden"
    style={{ background: '#1A3A2E', position: 'relative', paddingBottom: '100px' }}>

    {/* Gold leaf branch — top left */}
    <div className="absolute top-0 left-0 hidden lg:block" aria-hidden="true">
      <GoldLeafBranch size={120} color="#C9A86A" opacity={0.25} />
    </div>
    {/* Gold leaf branch — top right mirrored */}
    <div className="absolute top-0 right-0 hidden lg:block" aria-hidden="true">
      <GoldLeafBranch size={120} color="#C9A86A" opacity={0.25} style={{ transform: 'scaleX(-1)' }} />
    </div>
    {/* Butterfly — bottom right */}
    <div className="absolute bottom-8 right-8 hidden lg:block" aria-hidden="true">
      <ButterflyOutline size={55} color="#C9A86A" opacity={0.30} />
    </div>

    {/* Fern — left edge */}
    <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block" aria-hidden="true">
      <FernSprig size={100} color="#7A9B6E" opacity={0.20} />
    </div>

    {/* Dot grid — top-right */}
    <div className="absolute top-16 right-10 hidden lg:block" aria-hidden="true">
      <DotGrid color="#C9A86A" opacity={0.20} cols={6} rows={4} gap={14} />
    </div>

    {/* Dot grid — bottom-left */}
    <div className="absolute bottom-10 left-10 hidden lg:block" aria-hidden="true">
      <DotGrid color="#7A9B6E" opacity={0.18} cols={5} rows={3} gap={14} />
    </div>

    <div className="relative z-10 max-w-container mx-auto px-8 lg:px-16">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
        <div className="flex items-center gap-2 mb-3">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M7 13 C5 10 2 7 3 4 C5 1 10 2 11 5 C12 8 9 11 7 13Z" stroke="#7A9B6E" strokeWidth="1" fill="none"/>
          </svg>
          <p className="font-sans font-medium uppercase"
            style={{ fontSize: '11px', color: '#7A9B6E', letterSpacing: '0.2em' }}>
            Achievements
          </p>
        </div>
        <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#F5EFE2' }}>
          Little Wins
        </h2>
        <p className="font-serif italic mt-2" style={{ color: '#7A9B6E', fontSize: '16px' }}>
          Moments I'm proud of.
        </p>
        <div className="mt-4">
          <OrnamentDivider width={180} color="#C9A86A" opacity={0.40} />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((item, i) => (
          <motion.div key={item.id}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative flex flex-col items-center text-center py-8 px-6 rounded-2xl"
            style={{ background: '#EDE5D3', border: '1px solid rgba(74,93,63,0.15)', boxShadow: '0 4px 20px rgba(42,58,48,0.08)' }}>

            {/* Laurel wreaths */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <LaurelLeft size={32} color="#C9A86A" opacity={0.60} />
              <div className="flex flex-col items-center gap-1">
                <span className="text-2xl">{item.medal}</span>
                <span className="font-serif text-sm font-medium" style={{ color: '#7A9B6E' }}>
                  {item.prize}
                </span>
              </div>
              <LaurelRight size={32} color="#C9A86A" opacity={0.60} />
            </div>

            <h3 className="font-serif text-base font-medium leading-snug mb-1" style={{ color: '#2A3A30' }}>
              {item.event}
            </h3>
            {item.context && (
              <p className="font-sans text-xs mb-1" style={{ color: '#7A9B6E' }}>{item.context}</p>
            )}
            <p className="font-sans text-xs font-semibold mb-3" style={{ color: '#4A5D3F' }}>{item.org}</p>
            <p className="font-sans text-xs leading-relaxed" style={{ color: '#6B7A5E' }}>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
    {/* Wave */}
    <WaveBottom nextColor="#F5EFE2" variant="c" />
  </section>
)

export default Achievements
