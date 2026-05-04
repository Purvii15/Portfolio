/**
 * SectionDivider — seamless wave SVG transition between sections.
 * Renders at the BOTTOM of a section, filling with the NEXT section's color.
 *
 * Props:
 *   from   — bg color of section above (used as wrapper bg to avoid gaps)
 *   to     — bg color of section below (wave fill)
 *   variant — 'smooth' | 'gentle' | 'deep' (wave shape)
 */
const waves = {
  smooth: (to) =>
    `<path d="M0,64 C360,120 1080,0 1440,64 L1440,120 L0,120 Z" fill="${to}"/>`,
  gentle: (to) =>
    `<path d="M0,40 C480,100 960,100 1440,40 L1440,120 L0,120 Z" fill="${to}"/>`,
  deep: (to) =>
    `<path d="M0,80 C240,20 480,100 720,60 C960,20 1200,100 1440,60 L1440,120 L0,120 Z" fill="${to}"/>`,
}

const SectionDivider = ({ from = '#1F2D24', to = '#FAF9F6', variant = 'smooth', flip = false }) => {
  const pathStr = (waves[variant] || waves.smooth)(to)

  return (
    <div
      aria-hidden="true"
      style={{
        background: from,
        lineHeight: 0,
        fontSize: 0,
        display: 'block',
        marginTop: '-1px',
        marginBottom: '-1px',
        transform: flip ? 'scaleY(-1)' : 'none',
      }}
    >
      <svg
        viewBox="0 0 1440 120"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: '80px' }}
        dangerouslySetInnerHTML={{ __html: pathStr }}
      />
    </div>
  )
}

export default SectionDivider
