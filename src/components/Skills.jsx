import { motion } from 'framer-motion'
import WaveBottom from './ui/WaveBottom'
import { FernSprig, ButterflyOutline, GoldLeafBranch, GoldDivider } from './ui/BotanicalSVG'

const DotGrid = ({ color = '#A8C49A', opacity = 0.18, cols = 5, rows = 4, gap = 14 }) => (
  <svg width={cols * gap} height={rows * gap} viewBox={`0 0 ${cols * gap} ${rows * gap}`}
    fill="none" aria-hidden="true" style={{ opacity }}>
    {Array.from({ length: rows }).map((_, r) =>
      Array.from({ length: cols }).map((_, c) => (
        <circle key={`${r}-${c}`} cx={c * gap + gap / 2} cy={r * gap + gap / 2} r="1.5" fill={color} />
      ))
    )}
  </svg>
)

// Strength bar component
const StrengthBar = ({ level, color }) => (
  <div className="flex gap-1 items-center">
    {[1,2,3,4,5].map(i => (
      <div key={i} className="rounded-full transition-all"
        style={{
          width: '6px', height: '6px',
          background: i <= level ? color : 'rgba(168,196,154,0.15)',
        }} />
    ))}
  </div>
)

const skillGroups = [
  {
    id: 'aiml',
    icon: '🧠',
    title: 'AI / ML & Data Science',
    accent: '#A8C49A',
    skills: [
      { name: 'Machine Learning',  level: 5 },
      { name: 'Deep Learning',     level: 4 },
      { name: 'NLP',               level: 5 },
      { name: 'LLMs & Agents',     level: 4 },
      { name: 'Data Science',      level: 5 },
      { name: 'Computer Vision',   level: 3 },
      { name: 'Data Analysis',     level: 5 },
      { name: 'Statistics',        level: 4 },
    ],
  },
  {
    id: 'programming',
    icon: '⌨️',
    title: 'Programming & DSA',
    accent: '#C9A86A',
    skills: [
      { name: 'Python',            level: 5 },
      { name: 'C++',               level: 4 },
      { name: 'SQL',               level: 5 },
      { name: 'JavaScript',        level: 3 },
      { name: 'Data Structures',   level: 4 },
      { name: 'Algorithms',        level: 4 },
      { name: 'HTML / CSS',        level: 4 },
    ],
  },
  {
    id: 'tools',
    icon: '🛠',
    title: 'Tools & Frameworks',
    accent: '#D4A5A0',
    skills: [
      { name: 'PyTorch',           level: 4 },
      { name: 'Scikit-learn',      level: 5 },
      { name: 'Pandas / NumPy',    level: 5 },
      { name: 'Flask',             level: 4 },
      { name: 'React',             level: 3 },
      { name: 'MySQL',             level: 5 },
      { name: 'Git & GitHub',      level: 5 },
      { name: 'Microsoft Fabric',  level: 3 },
    ],
  },
]

const Skills = () => (
  <section id="skills" className="py-20 lg:py-28 relative overflow-hidden"
    style={{ background: '#1A3A2E', paddingBottom: '90px', position: 'relative' }}>

    <div className="absolute top-0 right-0 hidden lg:block" aria-hidden="true">
      <GoldLeafBranch size={110} color="#C9A86A" opacity={0.18} style={{ transform: 'scaleX(-1)' }} />
    </div>
    <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block" aria-hidden="true">
      <FernSprig size={110} color="#7A9B6E" opacity={0.22} />
    </div>
    <div className="absolute top-12 right-12 hidden lg:block" aria-hidden="true">
      <ButterflyOutline size={50} color="#A8C49A" opacity={0.30} />
    </div>
    <div className="absolute bottom-10 right-10 hidden lg:block" aria-hidden="true">
      <DotGrid color="#7A9B6E" opacity={0.20} cols={5} rows={4} gap={14} />
    </div>

    <div className="relative z-10 max-w-container mx-auto px-8 lg:px-16">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
        <p className="font-sans font-medium uppercase mb-3"
          style={{ fontSize: '11px', color: '#7A9B6E', letterSpacing: '0.2em' }}>
          Skills
        </p>
        <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#F5EFE2' }}>
          What I Work With
        </h2>
        <div className="mt-4">
          <GoldDivider width={200} color="#C9A86A" opacity={0.30} />
        </div>
        {/* Legend */}
        <div className="flex items-center gap-3 mt-4">
          <span className="font-sans text-xs" style={{ color: '#7A9B6E' }}>Proficiency:</span>
          {[['Familiar','2'],['Proficient','3'],['Advanced','4'],['Expert','5']].map(([l,n]) => (
            <div key={l} className="flex items-center gap-1.5">
              <StrengthBar level={parseInt(n)} color="#A8C49A" />
              <span className="font-sans text-xs" style={{ color: '#7A9B6E' }}>{l}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {skillGroups.map((group, i) => (
          <motion.div key={group.id}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1 }}
            className="rounded-2xl p-6 flex flex-col gap-5"
            style={{ background: '#2A3A30', border: `1px solid ${group.accent}25` }}>
            <div className="flex items-center gap-3">
              <span className="text-xl">{group.icon}</span>
              <h3 className="font-serif text-lg font-medium" style={{ color: '#F5EFE2' }}>
                {group.title}
              </h3>
            </div>
            <div className="h-px" style={{ background: `${group.accent}30` }} />
            <div className="flex flex-col gap-3">
              {group.skills.map(skill => (
                <div key={skill.name} className="flex items-center justify-between gap-3">
                  <span className="font-sans text-sm" style={{ color: '#B8B0A0' }}>{skill.name}</span>
                  <StrengthBar level={skill.level} color={group.accent} />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    {/* Wave */}
    <WaveBottom nextColor="#F5EFE2" variant="c" />
  </section>
)

export default Skills
