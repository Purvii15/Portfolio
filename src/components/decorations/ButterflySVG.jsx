/**
 * Decorative butterfly outline SVG — section corners only
 */
const ButterflySVG = ({ className = '', size = 50, color = '#A8B89C', opacity = 0.12 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 50 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    style={{ opacity }}
  >
    {/* Left wings */}
    <path
      d="M25 20 C20 10, 5 5, 2 15 C0 22, 10 28, 25 20Z"
      stroke={color}
      strokeWidth="1.2"
      fill={color}
      fillOpacity="0.3"
    />
    <path
      d="M25 20 C18 22, 8 32, 12 38 C16 42, 24 35, 25 20Z"
      stroke={color}
      strokeWidth="1.2"
      fill={color}
      fillOpacity="0.3"
    />
    {/* Right wings */}
    <path
      d="M25 20 C30 10, 45 5, 48 15 C50 22, 40 28, 25 20Z"
      stroke={color}
      strokeWidth="1.2"
      fill={color}
      fillOpacity="0.3"
    />
    <path
      d="M25 20 C32 22, 42 32, 38 38 C34 42, 26 35, 25 20Z"
      stroke={color}
      strokeWidth="1.2"
      fill={color}
      fillOpacity="0.3"
    />
    {/* Body */}
    <ellipse cx="25" cy="20" rx="1.5" ry="6" fill={color} />
    {/* Antennae */}
    <path d="M24 14 C22 10, 20 8, 18 6" stroke={color} strokeWidth="0.8" strokeLinecap="round" />
    <path d="M26 14 C28 10, 30 8, 32 6" stroke={color} strokeWidth="0.8" strokeLinecap="round" />
    <circle cx="18" cy="6" r="1" fill={color} />
    <circle cx="32" cy="6" r="1" fill={color} />
  </svg>
)

export default ButterflySVG
