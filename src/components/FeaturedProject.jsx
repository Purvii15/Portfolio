import { motion } from 'framer-motion'
import { ArrowUpRight, TrendingUp, TrendingDown, Database, AlertCircle, Lightbulb, BarChart2 } from 'lucide-react'
import { GitHubIcon } from './icons/BrandIcons'
import { GoldLeafBranch, ButterflyOutline } from './ui/BotanicalSVG'
import WaveBottom from './ui/WaveBottom'

const caseStudy = {
  problem: 'Manual verification of Aadhaar cards across large datasets was slow, error-prone, and unable to scale — leaving fraudulent duplicates undetected.',
  solution: 'Built an ML pipeline using QR code-based verification + ensemble anomaly detection to automatically flag suspicious entries at scale.',
  impact: 'Processed 5,000+ records with 20% accuracy improvement and 15% reduction in false matches through optimized feature engineering.',
}

const FeaturedProject = () => (
  <section id="projects" className="py-20 lg:py-28 relative overflow-hidden"
    style={{ background: '#F5EFE2', position: 'relative', paddingBottom: '100px' }}>

    <div className="absolute top-0 left-0 hidden lg:block" aria-hidden="true">
      <GoldLeafBranch size={120} color="#C9A86A" opacity={0.14} />
    </div>
    <div className="absolute bottom-8 right-8 hidden lg:block" aria-hidden="true">
      <ButterflyOutline size={50} color="#C9A86A" opacity={0.25} />
    </div>

    <div className="max-w-container mx-auto px-8 lg:px-16">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="flex items-end justify-between mb-12">
        <div>
          <p className="font-sans font-medium uppercase mb-3"
            style={{ fontSize: '11px', color: '#5C7A52', letterSpacing: '0.2em' }}>
            Featured Work
          </p>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#1A3A2E' }}>
            Things I've Built
          </h2>
        </div>
        <a href="https://github.com/Purvii15" target="_blank" rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 font-sans text-sm px-5 py-2.5 rounded-full transition-all hover:bg-white/10"
          style={{ border: '1.5px solid rgba(26,58,46,0.3)', color: '#1A3A2E', fontSize: '13px' }}>
          View All on GitHub <ArrowUpRight size={14} />
        </a>
      </motion.div>

      {/* Featured card */}
      <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="rounded-2xl overflow-hidden"
        style={{ background: '#1A3A2E', border: '1px solid rgba(74,93,63,0.3)', boxShadow: '0 8px 40px rgba(0,0,0,0.15)' }}>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative overflow-hidden" style={{ minHeight: '360px' }}>
            <img src="/assets/projects/aadhaar-dashboard.jpg"
              alt="Aadhaar-Based Fraud Detection System"
              className="w-full h-full object-cover absolute inset-0" loading="lazy" />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(to right, transparent 40%, rgba(42,58,48,0.5) 100%)' }} />
            {/* Floating metric cards over image */}
            <div className="absolute bottom-6 left-6 flex flex-col gap-2">
              {[
                { Icon: TrendingUp,   val: '↑ 20%',  sub: 'Detection Accuracy' },
                { Icon: TrendingDown, val: '↓ 15%',  sub: 'False Matches' },
                { Icon: Database,     val: '5,000+', sub: 'Records Verified' },
              ].map(({ Icon, val, sub }) => (
                <div key={sub} className="flex items-center gap-2 px-3 py-2 rounded-xl backdrop-blur-sm"
                  style={{ background: 'rgba(31,45,36,0.75)', border: '1px solid rgba(168,196,154,0.2)' }}>
                  <Icon size={13} style={{ color: '#A8C49A' }} />
                  <span className="font-serif font-semibold text-sm" style={{ color: '#A8C49A' }}>{val}</span>
                  <span className="font-sans text-xs" style={{ color: '#4A5D3F' }}>{sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="p-8 lg:p-10 flex flex-col justify-center gap-6">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold px-3 py-1.5 rounded-full"
                style={{ background: '#A8C49A', color: '#1F2D24', fontSize: '11px' }}>
                ✦ Featured Project
              </span>
            </div>

            <h3 className="font-serif leading-snug"
              style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)', fontWeight: 400, color: '#1A3A2E' }}>
              Aadhaar-Based Fraud Detection System
            </h3>

            {/* Problem → Solution → Impact */}
            <div className="flex flex-col gap-4">
              {[
                { Icon: AlertCircle, label: 'Problem',  color: '#D4A5A0', text: caseStudy.problem },
                { Icon: Lightbulb,   label: 'Solution', color: '#C9A86A', text: caseStudy.solution },
                { Icon: BarChart2,   label: 'Impact',   color: '#A8C49A', text: caseStudy.impact },
              ].map(({ Icon, label, color, text }) => (
                <div key={label} className="flex gap-3">
                  <div className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center"
                    style={{ background: `${color}20` }}>
                    <Icon size={13} style={{ color }} />
                  </div>
                  <div>
                    <span className="font-sans text-xs font-bold uppercase tracking-wider"
                      style={{ color, letterSpacing: '0.12em' }}>{label}</span>
                    <p className="font-sans text-sm leading-relaxed mt-0.5"
                      style={{ color: '#4A5D3F', lineHeight: 1.7 }}>{text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {['Python', 'Machine Learning', 'Pandas', 'Scikit-learn', 'QR Validation'].map(t => (
                <span key={t} className="skill-pill">{t}</span>
              ))}
            </div>

            <a href="https://github.com/Purvii15" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm font-medium transition-colors group w-fit"
              style={{ color: '#A8C49A', fontSize: '13px' }}>
              <GitHubIcon size={14} />
              View on GitHub
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
    {/* Wave */}
    <WaveBottom nextColor="#1A3A2E" variant="b" flip />
  </section>
)

export default FeaturedProject
