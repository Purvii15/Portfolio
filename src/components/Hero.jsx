import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './icons/BrandIcons'
import { FernSprig, FloralSprig, ButterflyOutline, GoldLeafBranch, GoldDivider } from './ui/BotanicalSVG'
import WaveBottom from './ui/WaveBottom'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: 'easeOut', delay: i * 0.13 },
  }),
}

const DotGrid = ({ color = '#A8C49A', opacity = 0.18, cols = 6, rows = 5, gap = 14 }) => (
  <svg width={cols * gap} height={rows * gap} viewBox={`0 0 ${cols * gap} ${rows * gap}`}
    fill="none" aria-hidden="true" style={{ opacity }}>
    {Array.from({ length: rows }).map((_, r) =>
      Array.from({ length: cols }).map((_, c) => (
        <circle key={`${r}-${c}`} cx={c * gap + gap / 2} cy={r * gap + gap / 2} r="1.5" fill={color} />
      ))
    )}
  </svg>
)

// Rotating role text
const roles = ['AI/ML Engineer', 'Backend Developer', 'LLM Specialist', 'Data Scientist']

function RotatingRole() {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % roles.length), 2800)
    return () => clearInterval(t)
  }, [])
  return (
    <span className="inline-flex items-center gap-2">
      <span style={{ color: '#B8B0A0', fontSize: '15px' }}>I'm a </span>
      <span className="relative inline-block overflow-hidden" style={{ height: '1.4em', minWidth: '180px' }}>
        <AnimatePresence mode="wait">
          <motion.span key={roles[idx]}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="absolute left-0 font-semibold"
            style={{ color: '#A8C49A', fontSize: '15px', whiteSpace: 'nowrap' }}>
            {roles[idx]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  )
}

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    style={{ background: '#1A3A2E', position: 'relative', paddingBottom: '80px' }}>

    {/* Misty mountain background */}
    <div className="absolute inset-0 pointer-events-none">
      <img src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=1600&q=90"
        alt="" aria-hidden="true" className="w-full h-full object-cover"
        style={{ opacity: 0.75 }} />
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, rgba(22,32,26,0.72) 0%, rgba(31,45,36,0.55) 50%, rgba(22,32,26,0.65) 100%)' }} />
    </div>

    {/* Dot grids */}
    <div className="absolute top-20 left-8 hidden lg:block" aria-hidden="true">
      <DotGrid color="#A8C49A" opacity={0.20} cols={5} rows={4} gap={16} />
    </div>
    <div className="absolute bottom-24 right-8 hidden lg:block" aria-hidden="true">
      <DotGrid color="#C9A86A" opacity={0.18} cols={4} rows={3} gap={16} />
    </div>

    {/* Fern — far left */}
    <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden xl:block" aria-hidden="true">
      <FernSprig size={130} color="#7A9B6E" opacity={0.30} />
    </div>

    {/* Butterfly — top-right */}
    <div className="absolute top-20 right-16 hidden lg:block" aria-hidden="true">
      <ButterflyOutline size={55} color="#C9A86A" opacity={0.45} />
    </div>

    <div className="relative z-10 max-w-container mx-auto px-8 lg:px-16 py-16 lg:py-24 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* LEFT — Text */}
        <div className="flex flex-col gap-5">

          {/* Available badge */}
          <motion.div variants={fadeUp} custom={0} initial="hidden" animate="visible">
            <span className="inline-flex items-center gap-2 font-sans text-xs font-medium px-4 py-1.5 rounded-full"
              style={{ background: 'rgba(168,196,154,0.15)', color: '#A8C49A', border: '1px solid rgba(168,196,154,0.3)' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#A8C49A' }} />
              Available for opportunities
            </span>
          </motion.div>

          {/* Eyebrow */}
          <motion.div variants={fadeUp} custom={0.5} initial="hidden" animate="visible"
            className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 14 C6 11 3 8 4 5 C6 2 11 3 12 6 C13 9 10 12 8 14Z" stroke="#A8C49A" strokeWidth="1.2" fill="none"/>
              <path d="M8 14 C8 11 7 8 6 5" stroke="#A8C49A" strokeWidth="0.9" strokeLinecap="round" fill="none"/>
            </svg>
            <span className="font-sans font-medium uppercase"
              style={{ fontSize: '11px', color: '#C9A86A', letterSpacing: '0.2em' }}>
              Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 variants={fadeUp} custom={1} initial="hidden" animate="visible"
            className="font-serif leading-[0.9]"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 6rem)', fontWeight: 400 }}>
            <span style={{ color: '#F5EFE2' }}>Purvi</span>
            <br />
            <span style={{ color: '#A8C49A', fontStyle: 'italic' }}>Mohanty</span>
          </motion.h1>

          {/* Rotating role */}
          <motion.div variants={fadeUp} custom={2} initial="hidden" animate="visible"
            style={{ minHeight: '28px' }}>
            <RotatingRole />
          </motion.div>

          {/* Intro */}
          <motion.p variants={fadeUp} custom={3} initial="hidden" animate="visible"
            className="font-sans leading-relaxed max-w-lg"
            style={{ color: '#B8B0A0', fontSize: '15px', lineHeight: 1.85 }}>
            I'm someone who enjoys turning ideas into working systems that actually make a difference.
            Currently pursuing B.Tech in Information Technology, I'm deeply interested in AI, intelligent
            systems, and building solutions that go beyond just theory.
            <br /><br />
            I care about writing clean, thoughtful code, working in collaborative environments, and
            continuously improving both technically and creatively. Whether it's solving problems,
            designing systems, or communicating ideas — I try to bring clarity and purpose into
            everything I do.
            <br /><br />
            <em style={{ color: '#A8C49A' }}>Always curious, always building.</em>
          </motion.p>

          {/* Impact metrics row */}
          <motion.div variants={fadeUp} custom={3.5} initial="hidden" animate="visible"
            className="flex flex-wrap gap-4">
            {[
              { num: '9.56', label: 'CGPA' },
              { num: '7+',   label: 'Projects shipped' },
              { num: '15+',  label: 'Certifications' },
            ].map(m => (
              <div key={m.label} className="flex flex-col gap-0.5">
                <span className="font-serif font-semibold" style={{ color: '#A8C49A', fontSize: '22px', lineHeight: 1 }}>{m.num}</span>
                <span className="font-sans text-xs" style={{ color: '#7A9B6E', letterSpacing: '0.05em' }}>{m.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div variants={fadeUp} custom={4} initial="hidden" animate="visible"
            className="flex flex-wrap gap-3 mt-1">
            <a href="#projects"
              className="btn-glow inline-flex items-center gap-2 font-sans font-medium px-6 py-3 rounded-full transition-all"
              style={{ background: '#A8C49A', color: '#1F2D24', fontSize: '14px' }}>
              View Projects <ArrowRight size={15} />
            </a>
            <a href="#contact"
              className="inline-flex items-center gap-2 font-sans font-medium px-6 py-3 rounded-full transition-all hover:bg-white/10"
              style={{ border: '1.5px solid rgba(245,239,226,0.4)', color: '#F5EFE2', fontSize: '14px' }}>
              Say Hello <Mail size={15} />
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div variants={fadeUp} custom={5} initial="hidden" animate="visible"
            className="flex items-center gap-3">
            {[
              { href: 'https://github.com/Purvii15', label: 'GitHub', Icon: GitHubIcon },
              { href: 'https://www.linkedin.com/in/purvi-mohanty/', label: 'LinkedIn', Icon: LinkedInIcon },
              { href: 'mailto:purvimohanty2503@gmail.com', label: 'Email', Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <a key={label} href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer" aria-label={label}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
                style={{ color: '#B8B0A0', border: '1px solid rgba(168,196,154,0.2)' }}>
                <Icon size={16} />
              </a>
            ))}
          </motion.div>

          {/* Gold divider */}
          <motion.div variants={fadeUp} custom={6} initial="hidden" animate="visible">
            <GoldDivider width={220} color="#C9A86A" opacity={0.35} />
          </motion.div>
        </div>

        {/* RIGHT — Photo frame (modern shadow, no polaroid tape) */}
        <motion.div className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.4 }}>
          <div className="relative">

            {/* Fern — left */}
            <div className="absolute -left-14 top-6 hidden lg:block" aria-hidden="true">
              <FernSprig size={100} color="#C9A86A" opacity={0.50} />
            </div>
            {/* Floral sprig — right */}
            <div className="absolute -right-12 bottom-2 hidden lg:block" aria-hidden="true">
              <FloralSprig size={90} color="#A8C49A" opacity={0.45} />
            </div>
            {/* Butterfly — top-right */}
            <div className="absolute -top-8 -right-8 hidden lg:block" aria-hidden="true">
              <ButterflyOutline size={52} color="#C9A86A" opacity={0.45} />
            </div>
            {/* Dot grid — bottom-left */}
            <div className="absolute -bottom-6 -left-6 hidden lg:block" aria-hidden="true">
              <DotGrid color="#7A9B6E" opacity={0.25} cols={4} rows={3} gap={12} />
            </div>

            {/* Modern photo frame — rounded corners, subtle sage glow */}
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.35 }}
              className="relative z-10 rounded-2xl overflow-hidden"
              style={{
                width: '300px',
                height: '380px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(168,196,154,0.15), 0 0 40px rgba(168,196,154,0.08)',
              }}>
              <img src="/assets/profile/purvi.jpg" alt="Purvi Mohanty"
                className="w-full h-full object-cover object-top" loading="eager" />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-20"
                style={{ background: 'linear-gradient(to top, rgba(31,45,36,0.6) 0%, transparent 100%)' }} />
              {/* Name tag at bottom */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <span className="font-hand text-sm px-4 py-1 rounded-full"
                  style={{ background: 'rgba(31,45,36,0.7)', color: '#A8C49A', fontFamily: 'Caveat, cursive', fontSize: '15px', backdropFilter: 'blur(4px)' }}>
                  Purvi Mohanty 🌿
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
    {/* Wave → cream (About) */}
    <WaveBottom nextColor="#F5EFE2" variant="b" />
  </section>
)

export default Hero
