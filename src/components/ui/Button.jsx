/**
 * Reusable Button component with filled and outlined variants
 */
const Button = ({ children, variant = 'filled', href, onClick, className = '', ...props }) => {
  const base =
    'inline-flex items-center gap-2 px-6 py-3 rounded-full font-sans font-medium text-sm transition-all duration-200 cursor-pointer select-none'

  const variants = {
    filled:
      'bg-sage text-white hover:bg-sage-dark shadow-sm hover:shadow-md active:scale-95',
    outlined:
      'border-2 border-sage text-sage-dark hover:bg-sage hover:text-white active:scale-95',
    ghost:
      'text-sage-dark hover:text-ink underline-offset-4 hover:underline',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
