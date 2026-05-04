/**
 * WaveBottom — absolutely positioned at the bottom of a section.
 * The SVG has NO background — only the wave path is filled with
 * the next section's color. This eliminates the dark band artifact.
 *
 * Usage: place inside a section that has `position: relative` and
 * enough paddingBottom to accommodate the wave height.
 *
 * Props:
 *   nextColor — fill color matching the NEXT section's background
 *   flip      — mirror horizontally for wave variety
 *   height    — wave height in px (default 72)
 *   variant   — 'a' | 'b' | 'c'
 */

const wavePaths = {
  // Gentle asymmetric wave
  a: (h) => `M0,${Math.round(h*0.55)} C320,${h} 720,${Math.round(h*0.1)} 1440,${Math.round(h*0.6)} L1440,${h} L0,${h} Z`,
  // Smooth centered curve
  b: (h) => `M0,${Math.round(h*0.3)} C480,${h} 960,${h} 1440,${Math.round(h*0.3)} L1440,${h} L0,${h} Z`,
  // Organic multi-peak
  c: (h) => `M0,${Math.round(h*0.6)} C200,${Math.round(h*0.1)} 500,${h} 800,${Math.round(h*0.35)} C1050,${Math.round(h*0.05)} 1280,${Math.round(h*0.75)} 1440,${Math.round(h*0.45)} L1440,${h} L0,${h} Z`,
}

const WaveBottom = ({ nextColor = '#F5EFE2', flip = false, height = 72, variant = 'a' }) => {
  const pathD = wavePaths[variant] ? wavePaths[variant](height) : wavePaths.a(height)

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: `${height}px`,
        overflow: 'hidden',
        lineHeight: 0,
        fontSize: 0,
        pointerEvents: 'none',
        // NO background property here — that's what caused the dark band
        transform: flip ? 'scaleX(-1)' : 'none',
      }}
    >
      <svg
        viewBox={`0 0 1440 ${height}`}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: '100%' }}
      >
        <path d={pathD} fill={nextColor} />
      </svg>
    </div>
  )
}

export default WaveBottom
