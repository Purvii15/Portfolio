import { motion } from 'framer-motion'
import { MapPin, Calendar } from 'lucide-react'
import { GoldLeafBranch, GoldDivider, ButterflyOutline } from './ui/BotanicalSVG'
import WaveBottom from './ui/WaveBottom'

const experiences = [
  {
    id: 1,
    side: 'left',
    role: 'AI/ML Intern',
    org: 'ORSAC — Odisha Space Applications Centre',
    type: 'Internship',
    duration: 'Jun 2025 – Jul 2025',
    location: 'Bhubaneswar, Odisha',
    image: '/assets/projects/dashboard-laptop.jpg',
    description: 'Worked on AI/ML models for geospatial data interpretation, applying machine learning to satellite imagery and large spatial datasets across multiple districts of Odisha.',
    bullets: [
      { metric: '10,000+', label: 'data samples from satellite imagery processed' },
      { metric: '30–40%',  label: 'reduction in manual processing time via automated pipelines' },
      { metric: '~20%',    label: 'improvement in model inference time through preprocessing optimization' },
    ],
    tags: ['Python', 'ML', 'Geospatial Analysis', 'Satellite Imagery'],
    accentColor: '#A8C49A',
  },
  {
    id: 2,
    side: 'right',
    role: 'AI Trainer / Freelancer',
    org: 'Outliers AI',
    type: 'Freelance',
    duration: '2026 – Present',
    location: 'Remote',
    image: null,
    description: 'Training and evaluating large language models as a freelance AI trainer. Generating high-quality prompts, rating model outputs, and providing structured feedback to improve model reasoning, instruction-following, and domain-specific accuracy.',
    bullets: [
      { metric: 'LLM Training', label: 'prompt engineering and model output evaluation' },
      { metric: 'RLHF',         label: 'reinforcement learning from human feedback workflows' },
      { metric: 'Domain QA',    label: 'quality assurance across code, math, and reasoning tasks' },
    ],
    tags: ['LLMs', 'Prompt Engineering', 'RLHF', 'AI Evaluation'],
    accentColor: '#C9A86A',
  },
]

function ExpCard({ exp }) {
  return (
    <div className="rounded-2xl overflow-hidden h-full"
      style={{
        background: '#2A3A30',
        border: `1px solid ${exp.accentColor}30`,
        boxShadow: '0 4px 32px rgba(0,0,0,0.25)',
      }}>

      {/* ORSAC — map image banner */}
      {exp.image && (
        <div className="relative overflow-hidden" style={{ height: '140px' }}>
          <img src={exp.image} alt={exp.org}
            className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(42,58,48,0.95) 0%, transparent 60%)' }} />
        </div>
      )}

      {/* Outliers AI — branded banner */}
      {!exp.image && (
        <div className="relative overflow-hidden flex items-center justify-between px-6"
          style={{ height: '110px', background: 'linear-gradient(135deg, #16201A 0%, #2A3A30 100%)' }}>
          <div className="flex flex-col gap-1">
            <span className="font-serif text-2xl font-medium" style={{ color: '#C9A86A' }}>Outliers AI</span>
            <span className="font-sans text-xs uppercase"
              style={{ color: '#7A9B6E', fontSize: '10px', letterSpacing: '0.2em' }}>
              AI Trainer · Freelance
            </span>
          </div>
          <div aria-hidden="true">
            <ButterflyOutline size={48} color="#C9A86A" opacity={0.40} />
          </div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2" aria-hidden="true">
            <GoldDivider width={180} color="#C9A86A" opacity={0.30} />
          </div>
        </div>
      )}

      <div className="p-6 lg:p-7">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div>
            <h3 className="font-serif text-xl font-medium" style={{ color: '#F5EFE2' }}>{exp.role}</h3>
            <p className="font-sans text-sm mt-0.5 font-semibold" style={{ color: exp.accentColor }}>
              {exp.org}
            </p>
          </div>
          <div className="flex flex-col gap-1 sm:items-end flex-shrink-0">
            <span className="inline-flex items-center gap-1.5 font-sans text-xs" style={{ color: '#B8B0A0' }}>
              <Calendar size={11} /> {exp.duration}
            </span>
            <span className="inline-flex items-center gap-1.5 font-sans text-xs" style={{ color: '#B8B0A0' }}>
              <MapPin size={11} /> {exp.location}
            </span>
          </div>
        </div>

        <p className="font-sans text-sm leading-relaxed mb-5" style={{ color: '#B8B0A0', lineHeight: 1.75 }}>
          {exp.description}
        </p>

        <ul className="flex flex-col gap-3 mb-5">
          {exp.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: exp.accentColor }} />
              <p className="font-sans text-sm leading-relaxed" style={{ color: '#B8B0A0', lineHeight: 1.7 }}>
                <span className="font-semibold" style={{ color: exp.accentColor }}>{b.metric}</span>{' '}
                {b.label}
              </p>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {exp.tags.map(t => <span key={t} className="skill-pill">{t}</span>)}
        </div>
      </div>
    </div>
  )
}

const Experience = () => (
  <section id="experience" className="py-20 lg:py-28 relative overflow-hidden"
    style={{ background: '#F5EFE2', position: 'relative', paddingBottom: '100px' }}>

    <div className="absolute top-0 left-0 hidden lg:block" aria-hidden="true">
      <GoldLeafBranch size={100} color="#C9A86A" opacity={0.15} />
    </div>

    <div className="relative z-10 max-w-container mx-auto px-8 lg:px-16">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
        <p className="font-sans font-medium uppercase mb-3"
          style={{ fontSize: '11px', color: '#5C7A52', letterSpacing: '0.2em' }}>
          Experience
        </p>
        <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#1A3A2E' }}>
          Where I've Worked
        </h2>
      </motion.div>

      {/* Desktop: side-by-side */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-8">
        {experiences.map((exp, idx) => (
          <motion.div key={exp.id}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.15 }}>
            <ExpCard exp={exp} />
          </motion.div>
        ))}
      </div>

      {/* Mobile: single column */}
      <div className="lg:hidden flex flex-col gap-8">
        {experiences.map((exp, idx) => (
          <motion.div key={exp.id}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.1 }}>
            <ExpCard exp={exp} />
          </motion.div>
        ))}
      </div>
    </div>

    {/* Wave → dark (JourneyCompact) */}
    <WaveBottom nextColor="#1A3A2E" variant="b" flip />
  </section>
)

export default Experience
