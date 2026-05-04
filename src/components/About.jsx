import { motion } from 'framer-motion'
import { FernSprig, ButterflyOutline, GoldLeafBranch, OrnamentDivider } from './ui/BotanicalSVG'
import WaveBottom from './ui/WaveBottom'

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

const highlights = [
  { num: '9.56/10', label: 'CGPA at SRM IST',              color: '#7A9B6E' },
  { num: '7+',      label: 'Projects shipped',              color: '#7A9B6E' },
  { num: '15+',     label: 'Certifications earned',         color: '#7A9B6E' },
  { num: '∞',       label: 'Cups of coffee while coding',  color: '#C9A86A' },
]

const About = () => (
  <section id="about" className="relative py-20 lg:py-28 overflow-hidden"
    style={{ background: '#F5EFE2', position: 'relative', paddingBottom: '100px' }}>

    <div className="absolute top-16 left-0 hidden lg:block" aria-hidden="true">
      <FernSprig size={110} color="#7A9B6E" opacity={0.22} />
    </div>
    <div className="absolute top-20 right-12 hidden lg:block" aria-hidden="true">
      <ButterflyOutline size={48} color="#C9A86A" opacity={0.30} />
    </div>
    <div className="absolute bottom-12 right-8 hidden lg:block" aria-hidden="true">
      <DotGrid color="#7A9B6E" opacity={0.18} cols={6} rows={5} gap={14} />
    </div>

    <div className="relative z-10 max-w-container mx-auto px-8 lg:px-16">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
        <p className="font-sans font-medium uppercase mb-3"
          style={{ fontSize: '11px', color: '#7A9B6E', letterSpacing: '0.2em' }}>
          About Me
        </p>
        <h2 className="font-serif leading-tight"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 400, color: '#1A3A2E' }}>
          Crafting Ideas into{' '}
          <em style={{ color: '#7A9B6E', fontStyle: 'italic' }}>Meaningful</em>{' '}Solutions
        </h2>
        <div className="mt-4">
          <OrnamentDivider width={180} color="#C9A86A" opacity={0.40} />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

        {/* LEFT — narrative (60%) */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="lg:col-span-3 flex flex-col gap-6">

          <p className="font-sans leading-relaxed"
            style={{ color: '#2C3E2E', fontSize: '16px', lineHeight: 1.85 }}>
            I'm <strong style={{ color: '#1A3A2E' }}>Purvi Mohanty</strong> — a B.Tech IT student at SRM IST,
            with a strong interest in building intelligent systems that solve real-world problems.
          </p>

          <p className="font-sans leading-relaxed"
            style={{ color: '#4A5D3F', fontSize: '16px', lineHeight: 1.85 }}>
            My work explores areas like <em style={{ color: '#5C7A52' }}>geospatial machine learning</em>,{' '}
            <em style={{ color: '#5C7A52' }}>agentic AI</em>, and{' '}
            <em style={{ color: '#5C7A52' }}>NLP</em> — where I focus on creating solutions that move beyond
            theory into practical, usable systems. Whether it's working with satellite imagery or designing
            systems that support decision-making in critical situations.
          </p>

          <p className="font-sans leading-relaxed"
            style={{ color: '#4A5D3F', fontSize: '16px', lineHeight: 1.85 }}>
            What sets me apart is how I approach problems <em style={{ color: '#5C7A52' }}>end-to-end</em>.
            I enjoy thinking through the entire journey — from idea to implementation — building systems
            that are structured, reliable, and meaningful in real-world contexts.
          </p>

          <p className="font-sans leading-relaxed"
            style={{ color: '#4A5D3F', fontSize: '16px', lineHeight: 1.85 }}>
            Beyond tech, I value creativity and communication just as much. I'm a Bharatanatyam performer
            at national events, and I also explore Odissi and painting as creative outlets. I contribute
            to content and design at Reflections and have participated in public speaking at the national
            level — because building impactful systems isn't just about how they work, it's also about
            how well they connect with people.
          </p>

          {/* Philosophy quote */}
          <blockquote className="border-l-2 pl-5 py-1"
            style={{ borderColor: '#A8C49A' }}>
            <p className="font-serif italic text-lg" style={{ color: '#5C7A52' }}>
              "I enjoy building thoughtful systems — shaped by logic, guided by purpose, and made to create real impact."
            </p>
          </blockquote>
        </motion.div>

        {/* RIGHT — stats card (40%) */}
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-2 relative">
          <div className="rounded-2xl p-8 relative overflow-visible"
            style={{ background: '#EDE5D3', boxShadow: '0 8px 40px rgba(42,58,48,0.12)', border: '1px solid rgba(74,93,63,0.15)' }}>

            <p className="font-sans font-medium uppercase mb-6"
              style={{ fontSize: '10px', color: '#7A9B6E', letterSpacing: '0.2em' }}>
              By the numbers
            </p>

            <div className="flex flex-col gap-5">
              {highlights.map(h => (
                <div key={h.label} className="flex items-start gap-4">
                  <span className="font-serif font-semibold flex-shrink-0"
                    style={{ fontSize: '28px', color: h.color, lineHeight: 1 }}>
                    {h.num}
                  </span>
                  <span className="font-sans text-sm pt-1" style={{ color: '#4A5D3F', lineHeight: 1.4 }}>
                    {h.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Botanical sprig */}
            <div className="absolute -bottom-10 -right-10 hidden lg:block" aria-hidden="true">
              <GoldLeafBranch size={90} color="#C9A86A" opacity={0.40} style={{ transform: 'scaleX(-1)' }} />
            </div>
            <div className="mt-6 flex justify-center">
              <OrnamentDivider width={140} color="#C9A86A" opacity={0.35} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    {/* Wave → dark (Skills) */}
    <WaveBottom nextColor="#1A3A2E" variant="a" flip />
  </section>
)

export default About
