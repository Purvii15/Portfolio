/**
 * Decorative leaf SVG — place only at section corners/edges
 * Opacity 10–20%, never near readable text
 */
const LeafSVG = ({ className = '', size = 80, color = '#A8B89C', opacity = 0.15 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    style={{ opacity }}
  >
    {/* Main leaf shape */}
    <path
      d="M40 70 C20 60, 5 40, 10 15 C25 5, 55 10, 65 30 C72 45, 60 65, 40 70Z"
      fill={color}
    />
    {/* Center vein */}
    <path
      d="M40 70 C38 50, 30 30, 18 18"
      stroke="#FAF6F0"
      strokeWidth="1.2"
      strokeLinecap="round"
      fill="none"
    />
    {/* Side veins */}
    <path d="M35 55 C28 48, 22 42, 20 35" stroke="#FAF6F0" strokeWidth="0.8" strokeLinecap="round" fill="none" />
    <path d="M38 45 C44 40, 50 36, 52 28" stroke="#FAF6F0" strokeWidth="0.8" strokeLinecap="round" fill="none" />
    {/* Small stem */}
    <path d="M40 70 C40 74, 39 77, 38 78" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
)

export default LeafSVG
