import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './icons/BrandIcons'
import { FloralSprig, GoldLeafBranch, OrnamentDivider } from './ui/BotanicalSVG'
import WaveBottom from './ui/WaveBottom'

const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/purvimohanty2503@gmail.com'

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const validate = () => {
    const e = {}
    if (!form.name.trim())                          e.name    = 'Name is required'
    if (!form.email.trim())                         e.email   = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim())                       e.message = 'Message is required'
    return e
  }

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(er => ({ ...er, [e.target.name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('loading')
    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio contact from ${form.name}`,
          _captcha: 'false',
        }),
      })
      const data = await res.json()
      if (data.success === 'true' || data.success === true) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const inputStyle = (field) => ({
    background: '#1F2D24',
    border: `1px solid ${errors[field] ? '#C0392B' : 'rgba(74,93,63,0.25)'}`,
    color: '#2A3A30',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s',
  })

  return (
    <form onSubmit={handleSubmit} noValidate
      className="rounded-2xl p-7 flex flex-col gap-4"
      style={{ background: '#1F2D24', border: '1px solid rgba(74,93,63,0.15)', boxShadow: '0 4px 24px rgba(42,58,48,0.08)' }}>

      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <input
            name="name" type="text" placeholder="Your Name"
            value={form.name} onChange={handleChange}
            className="font-sans text-sm px-4 py-3 rounded-xl"
            style={inputStyle('name')} />
          {errors.name && (
            <span className="font-sans text-xs flex items-center gap-1" style={{ color: '#C0392B' }}>
              <AlertCircle size={11} /> {errors.name}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <input
            name="email" type="email" placeholder="Your Email"
            value={form.email} onChange={handleChange}
            className="font-sans text-sm px-4 py-3 rounded-xl"
            style={inputStyle('email')} />
          {errors.email && (
            <span className="font-sans text-xs flex items-center gap-1" style={{ color: '#C0392B' }}>
              <AlertCircle size={11} /> {errors.email}
            </span>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1">
        <textarea
          name="message" rows={5} placeholder="Your Message"
          value={form.message} onChange={handleChange}
          className="font-sans text-sm px-4 py-3 rounded-xl resize-none"
          style={inputStyle('message')} />
        {errors.message && (
          <span className="font-sans text-xs flex items-center gap-1" style={{ color: '#C0392B' }}>
            <AlertCircle size={11} /> {errors.message}
          </span>
        )}
      </div>

      {/* Submit button */}
      <button type="submit" disabled={status === 'loading'}
        className="btn-glow inline-flex items-center justify-center gap-2 font-sans font-semibold px-6 py-3 rounded-full transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ background: '#A8C49A', color: '#1F2D24', fontSize: '14px' }}>
        {status === 'loading' ? (
          <><Loader size={15} className="animate-spin" /> Sending…</>
        ) : (
          <><Send size={15} /> Send Message</>
        )}
      </button>

      {/* Success message */}
      {status === 'success' && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 px-4 py-3 rounded-xl font-sans text-sm"
          style={{ background: 'rgba(168,196,154,0.2)', border: '1px solid rgba(168,196,154,0.4)', color: '#4A5D3F' }}>
          <CheckCircle size={16} style={{ color: '#5C7A52' }} />
          Message sent successfully! I'll get back to you soon.
        </motion.div>
      )}

      {/* Error message */}
      {status === 'error' && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 px-4 py-3 rounded-xl font-sans text-sm"
          style={{ background: 'rgba(192,57,43,0.1)', border: '1px solid rgba(192,57,43,0.3)', color: '#C0392B' }}>
          <AlertCircle size={16} />
          Something went wrong. Please try again or email me directly.
        </motion.div>
      )}
    </form>
  )
}

const Contact = () => (
  <section id="contact" className="py-20 lg:py-28 relative overflow-hidden"
    style={{ background: '#1A3A2E', paddingBottom: '90px', position: 'relative' }}>

    {/* Botanical corners */}
    <div className="absolute bottom-0 left-0 hidden lg:block" aria-hidden="true">
      <FloralSprig size={100} color="#C9A86A" opacity={0.30} />
    </div>
    <div className="absolute bottom-0 right-0 hidden lg:block" aria-hidden="true"
      style={{ transform: 'scaleX(-1)' }}>
      <FloralSprig size={100} color="#C9A86A" opacity={0.30} />
    </div>
    <div className="absolute top-0 right-0 hidden lg:block" aria-hidden="true">
      <GoldLeafBranch size={110} color="#C9A86A" opacity={0.20} style={{ transform: 'scaleX(-1)' }} />
    </div>

    <div className="relative z-10 max-w-container mx-auto px-8 lg:px-16">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
        <p className="font-sans font-medium uppercase mb-3"
          style={{ fontSize: '11px', color: '#7A9B6E', letterSpacing: '0.2em' }}>
          Contact
        </p>
        <h2 className="font-serif leading-tight"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 400, color: '#F5EFE2' }}>
          Let's build something{' '}
          <em style={{ color: '#A8C49A', fontStyle: 'italic' }}>meaningful</em>{' '}together
        </h2>
        <div className="mt-4">
          <OrnamentDivider width={180} color="#C9A86A" opacity={0.35} />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

        {/* LEFT — contact details */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex flex-col gap-5">
          <p className="font-sans text-base leading-relaxed" style={{ color: '#B8B0A0', lineHeight: 1.8 }}>
            Whether it's an internship, collaboration, or just a conversation about AI, design, or coffee — I'd love to hear from you.
          </p>

          <div className="flex flex-col gap-4 mt-2">
            {[
              { Icon: Mail,         text: 'purvimohanty2503@gmail.com',   href: 'mailto:purvimohanty2503@gmail.com' },
              { Icon: MapPin,       text: 'Chennai, Tamil Nadu, India',    href: null },
              { Icon: LinkedInIcon, text: 'linkedin.com/in/purvi-mohanty', href: 'https://www.linkedin.com/in/purvi-mohanty/' },
              { Icon: GitHubIcon,   text: 'github.com/Purvii15',           href: 'https://github.com/Purvii15' },
            ].map(({ Icon, text, href }) => (
              <div key={text} className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(74,93,63,0.10)' }}>
                  <Icon size={16} style={{ color: '#7A9B6E' }} />
                </div>
                {href
                  ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="font-sans text-sm transition-colors"
                      style={{ color: '#B8B0A0' }}>{text}</a>
                  : <span className="font-sans text-sm" style={{ color: '#B8B0A0' }}>{text}</span>
                }
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — working contact form */}
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <ContactForm />
        </motion.div>
      </div>
    </div>
    {/* Wave */}
    <WaveBottom nextColor="#F5EFE2" variant="b" />
  </section>
)

export default Contact
