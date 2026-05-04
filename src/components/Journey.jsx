import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Award, Rocket, Star } from 'lucide-react'
import { journeyEntries } from '../data/journey'

const typeConfig = {
  education:    { Icon: GraduationCap, color: '#A8C49A', bg: 'rgba(168,196,154,0.15)', label: 'Education' },
  work:         { Icon: Briefcase,     color: '#C9A86A', bg: 'rgba(201,168,106,0.15)', label: 'Work' },
  certification:{ Icon: Award,         color: '#D4A5A0', bg: 'rgba(212,165,160,0.15)', label: 'Certification' },
  project:      { Icon: Rocket,        color: '#A8C49A', bg: 'rgba(168,196,154,0.15)', label: 'Project' },
  achievement:  { Icon: Star,          color: '#C9A86A', bg: 'rgba(201,168,106,0.15)', label: 'Achievement' },
}

const Journey = () => (
  <section id="journey" className="py-20 lg:py-28 relative overflow-hidden"
    style={{ background: '#16201A' }}>
    <div className="relative z-10 max-w-container mx-auto px-8 lg:px-16">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
        <p className="font-sans font-medium uppercase mb-3"
          style={{ fontSize: '11px', color: '#7A9B6E', letterSpacing: '0.2em' }}>
          The Journey
        </p>
        <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#F5EFE2' }}>
          The Journey So Far
        </h2>
        <p className="font-serif italic mt-2" style={{ color: '#7A9B6E', fontSize: '16px' }}>
          A timeline of growth, learning &amp; building.
        </p>
      </motion.div>

      <div className="relative">
        {/* Center line desktop */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
          style={{ background: 'rgba(168,196,154,0.2)' }} />
        {/* Left line mobile */}
        <div className="lg:hidden absolute left-5 top-0 bottom-0 w-px"
          style={{ background: 'rgba(168,196,154,0.2)' }} />

        <div className="flex flex-col gap-8 lg:gap-10">
          {journeyEntries.map((entry, i) => {
            const cfg = typeConfig[entry.type] || typeConfig.project
            const { Icon } = cfg
            const isRight = i % 2 === 1

            return (
              <motion.div key={entry.id}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.06 }}
                className={`relative flex items-start gap-4 lg:gap-0 ${isRight ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>

                {/* Mobile dot */}
                <div className="lg:hidden flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10"
                  style={{ background: cfg.bg, border: `1.5px solid ${cfg.color}` }}>
                  <Icon size={16} style={{ color: cfg.color }} />
                </div>

                {/* Card */}
                <div className={`flex-1 lg:w-[45%] lg:flex-none ${isRight ? 'lg:pl-10' : 'lg:pr-10'}`}>
                  <div className="rounded-2xl p-5 lg:p-6"
                    style={{ background: '#2A3A30', border: '1px solid rgba(74,93,63,0.4)', boxShadow: '0 4px 20px rgba(0,0,0,0.25)' }}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1.5 font-sans text-xs px-2.5 py-1 rounded-full"
                        style={{ background: cfg.bg, color: cfg.color, border: `1px solid ${cfg.color}30` }}>
                        <Icon size={11} /> {cfg.label}
                      </span>
                      <span className="font-serif text-sm" style={{ color: '#7A9B6E' }}>{entry.year}</span>
                    </div>
                    <h3 className="font-serif text-lg font-medium leading-snug mb-1" style={{ color: '#F5EFE2' }}>
                      {entry.title}
                    </h3>
                    <p className="font-sans text-xs font-medium mb-2" style={{ color: '#A8C49A' }}>{entry.org}</p>
                    <p className="font-sans text-sm leading-relaxed" style={{ color: '#B8B0A0', lineHeight: 1.7 }}>
                      {entry.description}
                    </p>
                  </div>
                </div>

                {/* Desktop center dot */}
                <div className="hidden lg:flex absolute left-1/2 top-6 -translate-x-1/2 w-10 h-10 rounded-full items-center justify-center z-10"
                  style={{ background: cfg.bg, border: `1.5px solid ${cfg.color}` }}>
                  <Icon size={16} style={{ color: cfg.color }} />
                </div>

                <div className="hidden lg:block lg:w-[45%] lg:flex-none" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  </section>
)

export default Journey
