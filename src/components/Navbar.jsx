import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { LeafSVG } from './ui/BotanicalSVG'
import { GitHubIcon, LinkedInIcon } from './icons/BrandIcons'

const navLinks = [
  { label: 'About',        href: '#about' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact',      href: '#contact' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-forest/90 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.4)]' : 'bg-transparent'
    }`}>
      <nav className="max-w-container mx-auto px-8 lg:px-12 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <LeafSVG size={18} color="#A8C49A" />
          <span className="font-hand text-xl font-semibold transition-colors"
            style={{ color: '#F5EFE2' }}>
            Purvi
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.label}>
              <a href={link.href}
                className="font-sans text-sm transition-colors hover:text-sage-glow"
                style={{ color: '#B8B0A0', fontSize: '13px', letterSpacing: '0.02em' }}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu" style={{ color: '#F5EFE2' }}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}
            className="md:hidden backdrop-blur-md border-t px-8 py-5"
            style={{ background: 'rgba(31,45,36,0.97)', borderColor: 'rgba(74,93,63,0.3)' }}>
            <ul className="flex flex-col gap-5">
              {navLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} onClick={() => setMenuOpen(false)}
                    className="font-sans text-base transition-colors hover:text-sage-glow"
                    style={{ color: '#F5EFE2' }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
