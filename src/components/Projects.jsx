import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, LayoutDashboard, Users, CalendarDays, FileText, BarChart2, Activity, Settings, Stethoscope, Heart, ShieldPlus, Pill, User, ExternalLink } from 'lucide-react'
import { GitHubIcon } from './icons/BrandIcons'
import { GoldLeafBranch, ButterflyOutline, GoldDivider, OrnamentDivider, FloralSprig } from './ui/BotanicalSVG'
import WaveBottom from './ui/WaveBottom'

const projects = [
  {
    id: 'sahayak',
    title: 'Sahayak — Agentic AI for Disaster Response',
    description: 'LLM-based autonomous agent for disaster response coordination. Analyzes 1,000+ alerts and signals to optimize resource allocation, reducing manual decision effort by ~30%.',
    image: '/assets/projects/sahayak-dashboard.jpg',
    hoverImage: '/assets/projects/sahayak-map.jpg',
    tags: ['LLMs', 'AI Agents', 'NLP', 'Python'],
    github: 'https://github.com/Purvii15',
    accent: '#A8C49A',
  },
  {
    id: 'bloodbank',
    title: 'Blood Bank Management System',
    description: 'Python + MySQL backend managing 1,000+ donor records. Optimized SQL queries reduced lookup time by 60%, improving overall retrieval efficiency by ~30%.',
    image: '/assets/projects/bloodbank-records.jpg',
    hoverImage: null,
    tags: ['Python', 'MySQL', 'Backend'],
    github: 'https://github.com/Purvii15',
    accent: '#D4A5A0',
  },
  {
    id: 'bhasha',
    title: 'Bhasha AI — NLP Text Classification & Summarization',
    description: 'An advanced NLP platform for text classification and summarization across domains and Indian languages. Built with fine-tuned transformer models to deliver accurate insights from complex documents — covering Legal Docs, Healthcare Reports, News Articles, Research Papers, and Business Reports.',
    image: null,
    tags: ['Python', 'Transformers', 'PyTorch', 'HuggingFace', 'NLP'],
    github: 'https://github.com/Purvii15',
    accent: '#C9A86A',
    isBhasha: true,
  },
  {
    id: 'medicare',
    title: 'Medicare — Smart Health Management System',
    description: 'A full-stack health management platform streamlining patient records, appointment scheduling, and prescription tracking. Manages 1,248+ patients, 856 prescriptions, and 32 appointments with efficient SQL-backed retrieval and a clean dashboard interface.',
    image: null,
    tags: ['Python', 'Flask', 'MySQL', 'Healthcare'],
    github: 'https://github.com/Purvii15',
    accent: '#C9A86A',
    isMedicare: true,
  },
]

/* ─── BHASHA AI CARD ─────────────────────────────────────────────────────── */
function BhashaCard() {
  const features = [
    { label: 'Text Classification', sub: 'Accurately classify texts into multiple categories' },
    { label: 'Summarization',       sub: 'Generate coherent and concise summaries' },
    { label: 'Multi-language',      sub: 'Support for multiple Indian languages and more' },
    { label: 'Transformer Models',  sub: 'Fine-tuned models for domain-specific performance' },
    { label: 'Analytics Dashboard', sub: 'Visualize insights and improve decision making' },
  ]
  const domains = ['Legal Docs', 'Healthcare Reports', 'News Articles', 'Research Papers', 'Business Reports']

  return (
    <div className="relative overflow-hidden rounded-xl"
      style={{ background: 'linear-gradient(160deg, #FAF6EE 0%, #F5EFE2 100%)', minHeight: '340px' }}>

      {/* Gold leaf — top left */}
      <div className="absolute top-0 left-0 pointer-events-none" aria-hidden="true">
        <FloralSprig size={80} color="#C9A86A" opacity={0.35} />
      </div>
      {/* Butterfly — top right */}
      <div className="absolute top-3 right-3 pointer-events-none" aria-hidden="true">
        <ButterflyOutline size={52} color="#C9A86A" opacity={0.55} />
      </div>

      <div className="relative z-10 p-5">
        {/* Top: logo + feature cards */}
        <div className="flex gap-3 items-start">
          {/* Logo block */}
          <div className="flex flex-col items-start gap-1 flex-shrink-0 pt-1">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center font-serif text-xl font-bold shadow-sm"
              style={{ background: 'linear-gradient(135deg, #C9A86A, #E8C97A)', color: '#fff' }}>
              भा
            </div>
          </div>

          {/* Feature grid — 3+2 */}
          <div className="grid grid-cols-3 gap-1.5 flex-1">
            {features.slice(0, 3).map(f => (
              <div key={f.label} className="rounded-lg p-2 text-center"
                style={{ background: 'rgba(255,255,255,0.85)', border: '1px solid rgba(201,168,106,0.2)' }}>
                <p className="font-sans font-semibold" style={{ fontSize: '9px', color: '#C9A86A', lineHeight: 1.3 }}>{f.label}</p>
                <p className="font-sans mt-0.5" style={{ fontSize: '8px', color: '#9A8060', lineHeight: 1.3 }}>{f.sub}</p>
              </div>
            ))}
            {features.slice(3).map(f => (
              <div key={f.label} className="rounded-lg p-2 text-center"
                style={{ background: 'rgba(255,255,255,0.85)', border: '1px solid rgba(201,168,106,0.2)' }}>
                <p className="font-sans font-semibold" style={{ fontSize: '9px', color: '#C9A86A', lineHeight: 1.3 }}>{f.label}</p>
                <p className="font-sans mt-0.5" style={{ fontSize: '8px', color: '#9A8060', lineHeight: 1.3 }}>{f.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Title + tagline */}
        <div className="mt-3">
          <p className="font-serif text-xl font-semibold" style={{ color: '#2A1F0A' }}>Bhasha AI</p>
          <p className="font-sans font-medium uppercase tracking-widest"
            style={{ fontSize: '9px', color: '#C9A86A', letterSpacing: '0.18em' }}>
            Understand. Summarize. Empower.
          </p>
        </div>

        {/* Pipeline flow */}
        <div className="flex items-center gap-2 mt-3">
          {['Raw Text', 'NLP Processing', 'Structured Insight'].map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <div className="rounded-lg px-2.5 py-1.5 text-center"
                style={{ background: 'rgba(255,255,255,0.9)', border: '1px solid rgba(201,168,106,0.25)' }}>
                <p className="font-sans" style={{ fontSize: '9px', color: '#7A6040', fontWeight: 500 }}>{step}</p>
              </div>
              {i < 2 && <span style={{ color: '#C9A86A', fontSize: '12px' }}>→</span>}
            </div>
          ))}
        </div>

        {/* Domain icons row */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {domains.map(d => (
            <span key={d} className="font-sans px-2 py-0.5 rounded-full"
              style={{ background: 'rgba(201,168,106,0.12)', border: '1px solid rgba(201,168,106,0.25)', color: '#9A7040', fontSize: '9px' }}>
              {d}
            </span>
          ))}
        </div>

        {/* Bottom divider */}
        <div className="flex justify-center mt-3">
          <OrnamentDivider width={160} color="#C9A86A" opacity={0.40} />
        </div>
      </div>
    </div>
  )
}

/* ─── MEDICARE CARD ──────────────────────────────────────────────────────── */
function MedicareCard() {
  const modules = [
    { Icon: LayoutDashboard, label: 'Dashboard' },
    { Icon: Users,           label: 'Patients' },
    { Icon: CalendarDays,    label: 'Appointments' },
    { Icon: FileText,        label: 'Prescriptions' },
    { Icon: BarChart2,       label: 'Reports' },
    { Icon: Activity,        label: 'Analytics' },
    { Icon: FileText,        label: 'Medical Records' },
    { Icon: Settings,        label: 'Settings' },
  ]
  const quickIcons = [
    { Icon: User,       label: 'Patient' },
    { Icon: Stethoscope,label: 'Doctor' },
    { Icon: Heart,      label: 'Vitals' },
    { Icon: ShieldPlus, label: 'Insurance' },
    { Icon: Pill,       label: 'Medicine' },
  ]
  const stats = [
    { num: '1,248', label: 'Patients' },
    { num: '32',    label: 'Appointments' },
    { num: '856',   label: 'Prescriptions' },
    { num: '24',    label: 'Reports' },
  ]

  return (
    <div className="relative overflow-hidden rounded-xl"
      style={{ background: 'linear-gradient(160deg, #FAF6EE 0%, #F5EFE2 100%)', minHeight: '340px' }}>

      {/* Gold leaf — top right */}
      <div className="absolute top-0 right-0 pointer-events-none" aria-hidden="true">
        <FloralSprig size={90} color="#C9A86A" opacity={0.35} style={{ transform: 'scaleX(-1)' }} />
      </div>
      {/* Butterfly — top right corner */}
      <div className="absolute top-2 right-2 pointer-events-none" aria-hidden="true">
        <ButterflyOutline size={48} color="#C9A86A" opacity={0.50} />
      </div>

      <div className="relative z-10 p-5">
        <div className="flex gap-4 items-start">
          {/* Caduceus SVG — left */}
          <div className="flex-shrink-0">
            <svg width="52" height="64" viewBox="0 0 52 64" fill="none" aria-hidden="true">
              {/* Staff */}
              <line x1="26" y1="8" x2="26" y2="60" stroke="#C9A86A" strokeWidth="2.5" strokeLinecap="round"/>
              {/* Wings */}
              <path d="M26 12 C18 8 8 10 4 16 C8 18 18 16 26 20" stroke="#C9A86A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              <path d="M26 12 C34 8 44 10 48 16 C44 18 34 16 26 20" stroke="#C9A86A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              {/* Snakes */}
              <path d="M26 20 C20 24 32 30 26 36 C20 42 32 48 26 54" stroke="#C9A86A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              <path d="M26 20 C32 24 20 30 26 36 C32 42 20 48 26 54" stroke="#C9A86A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              {/* Top orb */}
              <circle cx="26" cy="8" r="3.5" fill="#C9A86A"/>
            </svg>
          </div>

          {/* Module grid — 4x2 */}
          <div className="grid grid-cols-4 gap-1.5 flex-1">
            {modules.map(({ Icon, label }) => (
              <div key={label} className="rounded-lg p-1.5 flex flex-col items-center gap-1"
                style={{ background: 'rgba(255,255,255,0.85)', border: '1px solid rgba(201,168,106,0.2)' }}>
                <Icon size={14} style={{ color: '#C9A86A' }} />
                <p className="font-sans text-center" style={{ fontSize: '8px', color: '#7A6040', lineHeight: 1.2 }}>{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick-access icon row */}
        <div className="flex gap-2 mt-3">
          {quickIcons.map(({ Icon, label }) => (
            <div key={label} className="w-9 h-9 rounded-full flex items-center justify-center shadow-sm"
              style={{ background: 'rgba(255,255,255,0.9)', border: '1px solid rgba(201,168,106,0.2)' }}>
              <Icon size={15} style={{ color: '#C9A86A' }} />
            </div>
          ))}
        </div>

        {/* ECG line */}
        <div className="mt-3 flex items-center gap-2">
          <svg width="160" height="24" viewBox="0 0 160 24" fill="none" aria-hidden="true">
            <path d="M0 12 L20 12 L28 4 L34 20 L40 8 L46 16 L52 12 L160 12"
              stroke="#C9A86A" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
          </svg>
          <div className="w-2 h-2 rounded-full" style={{ background: '#C9A86A', opacity: 0.7 }} />
        </div>

        {/* Stats row */}
        <div className="flex gap-2 mt-3">
          {stats.map(s => (
            <div key={s.label} className="flex-1 rounded-full py-2 flex flex-col items-center gap-0.5 shadow-sm"
              style={{ background: 'rgba(255,255,255,0.9)', border: '1px solid rgba(201,168,106,0.2)' }}>
              <span className="font-serif font-semibold" style={{ fontSize: '13px', color: '#C9A86A' }}>{s.num}</span>
              <span className="font-sans" style={{ fontSize: '8px', color: '#9A8060' }}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* Bottom divider */}
        <div className="flex justify-center mt-3">
          <OrnamentDivider width={160} color="#C9A86A" opacity={0.40} />
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, i }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1 }}
      className="rounded-2xl overflow-hidden flex flex-col group cursor-pointer hover:-translate-y-1 transition-transform duration-300"
      style={{ background: '#2A3A30', border: '1px solid rgba(74,93,63,0.5)' }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>

      {project.isBhasha ? (
        <BhashaCard />
      ) : project.isMedicare ? (
        <MedicareCard />
      ) : (
        <div className="relative overflow-hidden" style={{ height: '200px' }}>
          <img src={project.image} alt={project.title}
            className="w-full h-full object-cover absolute inset-0 transition-all duration-500"
            style={{ opacity: hovered && project.hoverImage ? 0 : 1, transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
            loading="lazy" />
          {project.hoverImage && (
            <img src={project.hoverImage} alt={project.title + ' alternate'}
              className="w-full h-full object-cover absolute inset-0 transition-opacity duration-300"
              style={{ opacity: hovered ? 1 : 0 }} loading="lazy" />
          )}
        </div>
      )}

      <div className="p-6 flex flex-col gap-3 flex-1">
        <h3 className="font-serif text-lg font-medium leading-snug" style={{ color: '#F5EFE2' }}>
          {project.title}
        </h3>
        <p className="font-sans text-sm leading-relaxed flex-1" style={{ color: '#B8B0A0', lineHeight: 1.7 }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-1">
          {project.tags.map(tag => <span key={tag} className="skill-pill">{tag}</span>)}
        </div>
        <a href={project.github} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-sans text-xs font-medium transition-colors group/link mt-1 w-fit"
          style={{ color: project.accent || '#A8C49A', fontSize: '13px' }}>
          <GitHubIcon size={13} />
          View Project
          <ArrowUpRight size={11} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </motion.div>
  )
}

const Projects = () => (
  <section className="pb-20 lg:pb-28 relative overflow-hidden" style={{ background: '#1A3A2E', position: 'relative', paddingBottom: '100px' }}>
    <div className="absolute top-0 right-0 hidden lg:block" aria-hidden="true">
      <GoldLeafBranch size={140} color="#C9A86A" opacity={0.18} style={{ transform: 'scaleX(-1)' }} />
    </div>
    <div className="absolute bottom-12 left-8 hidden lg:block" aria-hidden="true">
      <ButterflyOutline size={55} color="#C9A86A" opacity={0.25} />
    </div>
    <div className="max-w-container mx-auto px-8 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => <ProjectCard key={p.id} project={p} i={i} />)}
      </div>
    </div>
    {/* Wave */}
    <WaveBottom nextColor="#F5EFE2" variant="a" />
  </section>
)

export default Projects
