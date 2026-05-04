/**
 * Base Card component with consistent styling
 */
const Card = ({ children, className = '', hover = false, ...props }) => {
  const hoverClasses = hover
    ? 'hover:-translate-y-1 hover:shadow-card-hover hover:border-sage/40 transition-all duration-300'
    : ''

  return (
    <div
      className={`bg-surface rounded-2xl shadow-card border border-transparent ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
