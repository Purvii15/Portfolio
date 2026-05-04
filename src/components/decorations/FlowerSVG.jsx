/**
 * Decorative flower SVG — place only at section corners/edges
 * Opacity 10–20%, never near readable text
 */
const FlowerSVG = ({ className = '', size = 60, color = '#E8C5C0', opacity = 0.18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    style={{ opacity }}
  >
    {/* Petals */}
    <ellipse cx="30" cy="12" rx="5" ry="10" fill={color} />
    <ellipse cx="30" cy="12" rx="5" ry="10" fill={color} transform="rotate(45 30 30)" />
    <ellipse cx="30" cy="12" rx="5" ry="10" fill={color} transform="rotate(90 30 30)" />
    <ellipse cx="30" cy="12" rx="5" ry="10" fill={color} transform="rotate(135 30 30)" />
    <ellipse cx="30" cy="12" rx="5" ry="10" fill={color} transform="rotate(180 30 30)" />
    <ellipse cx="30" cy="12" rx="5" ry="10" fill={color} transform="rotate(225 30 30)" />
    <ellipse cx="30" cy="12" rx="5" ry="10" fill={color} transform="rotate(270 30 30)" />
    <ellipse cx="30" cy="12" rx="5" ry="10" fill={color} transform="rotate(315 30 30)" />
    {/* Center */}
    <circle cx="30" cy="30" r="7" fill="#A8B89C" />
    <circle cx="30" cy="30" r="4" fill="#FAF6F0" />
  </svg>
)

export default FlowerSVG
