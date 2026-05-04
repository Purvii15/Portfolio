import { motion } from 'framer-motion'
import { ArrowUpRight, Award } from 'lucide-react'
import { certifications } from '../data/certifications'
import WaveBottom from './ui/WaveBottom'

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.07 } }),
}

const Certifications = () => (
  <section id="certifications"
    className="py-20 lg:py-28 relative overflow-hidden"
    style={{ background: '#F5EFE2', position: 'relative', paddingBottom: '110px' }}>

    <div className="relative z-10 max-w-container mx-auto px-8 lg:px-16">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
        <p className="font-sans font-medium uppercase mb-3"
          style={{ fontSize: '11px', color: '#5C7A52', letterSpacing: '0.2em' }}>
          Credentials
        </p>
        <h2 className="font-serif"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#1A3A2E' }}>
          Certifications &amp; Credentials
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert, i) => (
          <motion.div key={cert.id} custom={i} variants={cardVariants}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="group rounded-2xl p-5 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300"
            style={{
              background: '#fff',
              border: '1px solid rgba(74,93,63,0.12)',
              boxShadow: '0 4px 16px rgba(42,58,48,0.08)',
            }}>
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(92,122,82,0.12)' }}>
              <Award size={20} style={{ color: '#5C7A52' }} />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <p className="font-sans text-xs font-medium" style={{ color: '#5C7A52' }}>{cert.issuer}</p>
              <h3 className="font-serif text-base font-medium leading-snug" style={{ color: '#1A3A2E' }}>
                {cert.title}
              </h3>
              <p className="font-sans text-xs mt-1" style={{ color: '#7A9B6E' }}>{cert.date}</p>
            </div>
            {cert.link && (
              <a href={cert.link} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-sans text-xs font-medium transition-colors group/link w-fit"
                style={{ color: '#5C7A52' }}>
                View Credential
                <ArrowUpRight size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>

    <WaveBottom nextColor="#1A3A2E" variant="a" />
  </section>
)

export default Certifications
