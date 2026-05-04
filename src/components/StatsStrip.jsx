import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import WaveBottom from './ui/WaveBottom'

const stats = [
  { value: 9.56, suffix: '/10', label: 'CGPA at SRM IST',     isFloat: true },
  { value: 7,    suffix: '+',   label: 'Projects Shipped' },
  { value: 15,   suffix: '+',   label: 'Certifications Earned' },
  { value: 3000, suffix: '+',   label: 'Teams Competed Against' },
]

function Counter({ target, suffix, isFloat }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  useEffect(() => {
    if (!inView) return
    if (isFloat) {
      let s = 0; const steps = 60; const inc = target / steps; let step = 0
      const t = setInterval(() => { step++; s = Math.min(s + inc, target); setCount(parseFloat(s.toFixed(2))); if (step >= steps) clearInterval(t) }, 1600 / steps)
      return () => clearInterval(t)
    }
    let s = 0; const step = Math.ceil(target / (1600 / 16))
    const t = setInterval(() => { s += step; if (s >= target) { setCount(target); clearInterval(t) } else setCount(s) }, 16)
    return () => clearInterval(t)
  }, [inView, target, isFloat])
  return <span ref={ref}>{isFloat ? count.toFixed(2) : count.toLocaleString()}{suffix}</span>
}

const StatsStrip = () => (
  <section className="py-12 relative overflow-hidden" style={{ background: '#F5EFE2', position: 'relative', paddingBottom: '100px' }}>
    <div className="max-w-container mx-auto px-8 lg:px-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:divide-x"
        style={{ '--tw-divide-color': 'rgba(74,93,63,0.3)' }}>
        {stats.map((s, i) => (
          <motion.div key={s.label}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex flex-col items-center gap-1 px-4 text-center">
            <p className="metric-num">
              <Counter target={s.value} suffix={s.suffix} isFloat={s.isFloat} />
            </p>
            <p className="font-sans text-xs uppercase mt-1"
              style={{ color: '#5C7A52', letterSpacing: '0.16em' }}>
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
    {/* Wave */}
    <WaveBottom nextColor="#1A3A2E" variant="c" flip />
  </section>
)

export default StatsStrip
