/**
 * Badge / pill component for tech tags and labels
 */
const Badge = ({ children, variant = 'tech', className = '' }) => {
  const variants = {
    tech: 'bg-surface text-ink border border-sage/30 text-xs',
    metric: 'bg-pink-soft text-sage-dark border border-pink/40 text-xs font-medium',
    label: 'bg-sage/15 text-sage-dark text-xs font-medium',
    available: 'bg-sage/20 text-sage-dark text-sm font-medium',
  }

  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full font-sans ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

export default Badge
