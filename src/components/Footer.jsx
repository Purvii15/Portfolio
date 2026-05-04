import { Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './icons/BrandIcons'

const Footer = () => (
  <footer className="py-8 relative" style={{ background: '#16201A', borderTop: '1px solid rgba(74,93,63,0.3)' }}>
    <div className="max-w-container mx-auto px-8 lg:px-16">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Logo */}
        <p className="font-serif text-lg font-medium" style={{ color: '#F5EFE2', fontStyle: 'italic' }}>
          Purvi Mohanty
        </p>

        {/* Copyright */}
        <p className="font-sans text-xs text-center" style={{ color: '#7A9B6E' }}>
          © 2025 Purvi Mohanty · Designed &amp; Built with 💚 and lots of ☕
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          <a href="https://github.com/Purvii15" target="_blank" rel="noopener noreferrer"
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
            style={{ color: '#B8B0A0', border: '1px solid rgba(168,196,154,0.2)' }}
            aria-label="GitHub">
            <GitHubIcon size={14} />
          </a>
          <a href="https://www.linkedin.com/in/purvi-mohanty/" target="_blank" rel="noopener noreferrer"
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
            style={{ color: '#B8B0A0', border: '1px solid rgba(168,196,154,0.2)' }}
            aria-label="LinkedIn">
            <LinkedInIcon size={14} />
          </a>
          <a href="mailto:purvimohanty2503@gmail.com"
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
            style={{ color: '#B8B0A0', border: '1px solid rgba(168,196,154,0.2)' }}
            aria-label="Email">
            <Mail size={14} />
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
