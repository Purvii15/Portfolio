import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { feedPosts } from '../data/feed'
import WaveBottom from './ui/WaveBottom'

const categoryConfig = {
  Internship:   { bg: 'rgba(168,196,154,0.2)', color: '#A8C49A', border: 'rgba(168,196,154,0.3)' },
  Certification:{ bg: 'rgba(201,168,106,0.2)', color: '#C9A86A', border: 'rgba(201,168,106,0.3)' },
  Milestone:    { bg: 'rgba(212,165,160,0.2)', color: '#D4A5A0', border: 'rgba(212,165,160,0.3)' },
  Learning:     { bg: 'rgba(122,155,110,0.2)', color: '#7A9B6E', border: 'rgba(122,155,110,0.3)' },
  Project:      { bg: 'rgba(168,196,154,0.2)', color: '#A8C49A', border: 'rgba(168,196,154,0.3)' },
  Achievement:  { bg: 'rgba(201,168,106,0.2)', color: '#C9A86A', border: 'rgba(201,168,106,0.3)' },
}

const filters = ['All', 'Internship', 'Certification', 'Milestone', 'Learning', 'Project', 'Achievement']

const Feed = () => {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? feedPosts : feedPosts.filter(p => p.category === active)

  return (
    <section id="feed" className="py-20 lg:py-28 relative overflow-hidden"
      style={{ background: '#1A3A2E', position: 'relative', paddingBottom: '100px' }}>
      <div className="relative z-10 max-w-container mx-auto px-8 lg:px-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
          <p className="font-sans font-medium uppercase mb-3"
            style={{ fontSize: '11px', color: '#7A9B6E', letterSpacing: '0.2em' }}>
            My Garden
          </p>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#F5EFE2' }}>
            From My Garden
          </h2>
          <p className="font-serif italic mt-2" style={{ color: '#7A9B6E', fontSize: '16px' }}>
            Notes, milestones &amp; things I'm learning along the way.
          </p>
        </motion.div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map(f => (
            <button key={f} onClick={() => setActive(f)}
              className="font-sans text-xs px-4 py-1.5 rounded-full transition-all duration-200"
              style={active === f
                ? { background: '#A8C49A', color: '#1F2D24', border: '1.5px solid #A8C49A', fontSize: '12px' }
                : { background: 'transparent', color: '#B8B0A0', border: '1.5px solid rgba(168,196,154,0.25)', fontSize: '12px' }
              }>
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((post, i) => {
              const cfg = categoryConfig[post.category] || categoryConfig.Learning
              return (
                <motion.div key={post.id} layout
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="rounded-2xl p-6 flex flex-col gap-4"
                  style={{ background: '#2A3A30', border: '1px solid rgba(74,93,63,0.4)', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-xs px-3 py-1 rounded-full"
                      style={{ background: cfg.bg, color: cfg.color, border: `1px solid ${cfg.border}`, fontSize: '11px' }}>
                      {post.category}
                    </span>
                    <span className="font-sans text-xs" style={{ color: '#7A9B6E' }}>{post.date}</span>
                  </div>
                  <h3 className="font-serif text-lg font-medium leading-snug" style={{ color: '#F5EFE2' }}>
                    {post.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: '#B8B0A0', lineHeight: 1.75 }}>
                    {post.body}
                  </p>
                  {post.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map(tag => (
                        <span key={tag} className="font-sans text-xs px-2.5 py-1 rounded-full"
                          style={{ background: 'rgba(168,196,154,0.1)', color: '#7A9B6E', border: '1px solid rgba(168,196,154,0.2)', fontSize: '11px' }}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                  {post.link && (
                    <a href={post.link} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-sans text-xs font-medium transition-colors group/link w-fit mt-auto"
                      style={{ color: '#A8C49A', fontSize: '12px' }}>
                      View Certificate
                      <ArrowUpRight size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
      {/* Wave */}
    <WaveBottom nextColor="#F5EFE2" variant="a" />
  </section>
  )
}

export default Feed
