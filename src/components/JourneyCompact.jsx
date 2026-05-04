import { useState } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, ChevronDown, MapPin, Calendar } from 'lucide-react'
import { GoldLeafBranch, ButterflyOutline, GoldDivider } from './ui/BotanicalSVG'
import WaveBottom from './ui/WaveBottom'

// Compact timeline entries — only the key milestones
const timelineItems = [
  {
    id: 1,
    year: '2021',
    label: 'Class X — 94.8%',
    sub: 'KV Waltair, Visakhapatnam',
    type: 'edu',
    detail: 'Scored 94.8% in CBSE Class X boards. First real encounter with structured problem-solving.',
  },
  {
    id: 2,
    year: '2023',
    label: 'Class XII — CBSE (MBiPC)',
    sub: 'KV Waltair, Visakhapatnam',
    type: 'edu',
    detail: 'Completed higher secondary with Mathematics, Biology, Physics, and Chemistry.',
  },
  {
    id: 3,
    year: '2023',
    label: 'B.Tech IT — SRM IST',
    sub: 'Chennai · CGPA 9.56/10',
    type: 'edu',
    detail: 'Joined SRM IST-Ramapuram for B.Tech Information Technology. Currently maintaining CGPA 9.56/10. Fell in love with Python, ML, and building things that think.',
    current: true,
  },
  {
    id: 4,
    year: 'Jun–Jul 2025',
    label: 'AI/ML Intern — ORSAC',
    sub: 'Bhubaneswar, Odisha',
    type: 'work',
    detail: 'Developed AI/ML models for geospatial data interpretation. Processed 10,000+ satellite imagery samples. Automated thematic map pipelines, reducing processing time by 30–40%.',
    bullets: ['10,000+ data samples processed', '30–40% reduction in processing time', '~20% improvement in model efficiency'],
  },
  {
    id: 5,
    year: '2026',
    label: 'AI Trainer — Outliers AI',
    sub: 'Remote · Freelance',
    type: 'work',
    detail: 'Training and evaluating large language models. Generating high-quality prompts, rating outputs, and providing structured feedback to improve model reasoning and instruction-following.',
    bullets: ['LLM prompt engineering & evaluation', 'RLHF workflows', 'Domain QA across code, math & reasoning'],
  },
]

const typeColors = {
  edu:  { bg: 'rgba(168,196,154,0.15)', border: '#A8C49A', text: '#A8C49A', Icon: GraduationCap },
  work: { bg: 'rgba(201,168,106,0.15)', border: '#C9A86A', text: '#C9A86A', Icon: Briefcase },
}

function TimelineCard({ item, i }) {
  const [open, setOpen] = useState(item.current || false)
  const c = typeColors[item.type]
  const { Icon } = c

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
      className="relative flex gap-4 lg:gap-6">

      {/* Timeline dot + line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-10 h-10 rounded-full flex items-center justify-center z-10 flex-shrink-0"
          style={{ background: c.bg, border: `2px solid ${c.border}` }}>
          <Icon size={16} style={{ color: c.text }} />
        </div>
        {i < timelineItems.length - 1 && (
          <div className="w-px flex-1 mt-1" style={{ background: 'rgba(168,196,154,0.2)', minHeight: '24px' }} />
        )}
      </div>

      {/* Card */}
      <div className="flex-1 pb-6">
        <button
          onClick={() => setOpen(o => !o)}
          className="w-full text-left rounded-2xl p-5 transition-all duration-200 hover:brightness-110"
          style={{
            background: open ? '#2A3A30' : 'rgba(42,58,48,0.5)',
            border: `1px solid ${open ? c.border + '40' : 'rgba(74,93,63,0.3)'}`,
            boxShadow: open ? '0 4px 24px rgba(0,0,0,0.25)' : 'none',
          }}>
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="font-sans text-xs px-2 py-0.5 rounded-full"
                  style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}30`, fontSize: '10px' }}>
                  {item.year}
                </span>
                {item.current && (
                  <span className="inline-flex items-center gap-1 font-sans text-xs px-2 py-0.5 rounded-full"
                    style={{ background: 'rgba(168,196,154,0.2)', color: '#A8C49A', fontSize: '10px' }}>
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#A8C49A' }} />
                    Current
                  </span>
                )}
              </div>
              <h3 className="font-serif text-base font-medium" style={{ color: '#F5EFE2' }}>{item.label}</h3>
              <p className="font-sans text-xs mt-0.5" style={{ color: '#7A9B6E' }}>{item.sub}</p>
            </div>
            <ChevronDown size={16} style={{
              color: '#7A9B6E',
              transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s',
              flexShrink: 0,
              marginTop: '4px',
            }} />
          </div>

          {/* Expandable detail */}
          {open && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.25 }} className="mt-4 pt-4"
              style={{ borderTop: '1px solid rgba(168,196,154,0.15)' }}>
              <p className="font-sans text-sm leading-relaxed" style={{ color: '#B8B0A0', lineHeight: 1.75 }}>
                {item.detail}
              </p>
              {item.bullets && (
                <ul className="mt-3 flex flex-col gap-2">
                  {item.bullets.map(b => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: c.text }} />
                      <span className="font-sans text-xs" style={{ color: '#B8B0A0' }}>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          )}
        </button>
      </div>
    </motion.div>
  )
}

const JourneyCompact = () => (
  <section id="journey" className="py-20 lg:py-24 relative overflow-hidden"
    style={{ background: '#1A3A2E', position: 'relative', paddingBottom: '100px' }}>

    <div className="absolute top-0 left-0 hidden lg:block" aria-hidden="true">
      <GoldLeafBranch size={100} color="#C9A86A" opacity={0.14} />
    </div>
    <div className="absolute bottom-8 right-8 hidden lg:block" aria-hidden="true">
      <ButterflyOutline size={48} color="#C9A86A" opacity={0.22} />
    </div>

    <div className="relative z-10 max-w-container mx-auto px-8 lg:px-16">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
        <p className="font-sans font-medium uppercase mb-3"
          style={{ fontSize: '11px', color: '#7A9B6E', letterSpacing: '0.2em' }}>
          Experience &amp; Education
        </p>
        <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#F5EFE2' }}>
          The Journey So Far
        </h2>
        <p className="font-sans text-sm mt-2" style={{ color: '#7A9B6E' }}>
          Click any card to expand details.
        </p>
        <div className="mt-4">
          <GoldDivider width={200} color="#C9A86A" opacity={0.28} />
        </div>
      </motion.div>

      {/* Two-column on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
        <div>
          {timelineItems.slice(0, 3).map((item, i) => (
            <TimelineCard key={item.id} item={item} i={i} />
          ))}
        </div>
        <div>
          {timelineItems.slice(3).map((item, i) => (
            <TimelineCard key={item.id} item={item} i={i + 3} />
          ))}
        </div>
      </div>
    </div>
    {/* Wave */}
    <WaveBottom nextColor="#F5EFE2" variant="b" />
  </section>
)

export default JourneyCompact
