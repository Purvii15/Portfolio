/**
 * Line-art botanical SVGs — gold/sage, vintage engraving style.
 * Inspired by the gold botanical elements in the reference image.
 * All single-color outlines, no fills except stroke.
 */

// Gold olive/leaf branch — matches the reference image top-center
export const GoldLeafBranch = ({ size = 120, color = '#C9A86A', opacity = 0.5, className = '', style = {} }) => (
  <svg width={size} height={size * 0.9} viewBox="0 0 120 108" fill="none"
    xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
    className={`pointer-events-none select-none ${className}`}
    style={{ opacity, ...style }}>
    {/* Main stem */}
    <path d="M60 100 C60 75 60 50 60 15" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
    {/* Left leaves */}
    <path d="M60 80 C50 72 38 70 28 65" stroke={color} strokeWidth="1" strokeLinecap="round"/>
    <path d="M28 65 C32 60 38 62 44 68" stroke={color} strokeWidth="0.7" strokeLinecap="round"/>
    <path d="M60 65 C48 56 36 53 24 48" stroke={color} strokeWidth="1" strokeLinecap="round"/>
    <path d="M24 48 C28 43 35 45 42 52" stroke={color} strokeWidth="0.7" strokeLinecap="round"/>
    <path d="M60 50 C50 42 40 38 30 33" stroke={color} strokeWidth="1" strokeLinecap="round"/>
    <path d="M30 33 C34 28 40 30 46 37" stroke={color} strokeWidth="0.7" strokeLinecap="round"/>
    <path d="M60 35 C52 28 44 24 36 19" stroke={color} strokeWidth="0.9" strokeLinecap="round"/>
    <path d="M36 19 C40 14 46 16 50 23" stroke={color} strokeWidth="0.7" strokeLinecap="round"/>
    {/* Right leaves */}
    <path d="M60 80 C70 72 82 70 92 65" stroke={color} strokeWidth="1" strokeLinecap="round"/>
    <path d="M92 65 C88 60 82 62 76 68" stroke={color} strokeWidth="0.7" strokeLinecap="round"/>
    <path d="M60 65 C72 56 84 53 96 48" stroke={color} strokeWidth="1" strokeLinecap="round"/>
    <path d="M96 48 C92 43 85 45 78 52" stroke={color} strokeWidth="0.7" strokeLinecap="round"/>
    <path d="M60 50 C70 42 80 38 90 33" stroke={color} strokeWidth="1" strokeLinecap="round"/>
    <path d="M90 33 C86 28 80 30 74 37" stroke={color} strokeWidth="0.7" strokeLinecap="round"/>
    <path d="M60 35 C68 28 76 24 84 19" stroke={color} strokeWidth="0.9" strokeLinecap="round"/>
    <path d="M84 19 C80 14 74 16 70 23" stroke={color} strokeWidth="0.7" strokeLinecap="round"/>
    {/* Tip */}
    <path d="M60 15 C58 10 60 6 62 4" stroke={color} strokeWidth="0.8" strokeLinecap="round"/>
  </svg>
)

// Single olive sprig — matches reference left sprig
export const FernSprig = ({ size = 120, color = '#C9A86A', opacity = 0.4, className = '', style = {} }) => (
  <svg width={size} height={size * 1.4} viewBox="0 0 80 112" fill="none"
    xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
    className={`pointer-events-none select-none ${className}`}
    style={{ opacity, ...style }}>
    <path d="M40 108 C40 80 40 50 40 10" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M40 85 C30 78 18 76 10 70" stroke={color} strokeWidth="0.9" strokeLinecap="round"/>
    <path d="M10 70 C14 65 20 67 26 73" stroke={color} strokeWidth="0.7" strokeLinecap="round"/>
    <path d="M40 70 C28 62 16 60 8 54" stroke={color} strokeWidth="0.9" strokeLinecap="round"/>
    <path d="M8 54 C12 49 18 51 24 57" stroke={color} strokeWidth="0.7" strokeLinecap="round"/>
    <path d="M40 55 C30 47 20 44 12 38" stroke={color} strokeWidth="0.9" strokeLinecap="round"/>
    <path d="M12 38 C16 33 22 35 28 41" stroke={color} strokeWidth="0.7" strokeLinecap="round"/>
    <path d="M40 40 C32 33 24 30 18 24" stroke={color} strokeWidth="0.9" strokeLinecap="round"/>
    <path d="M18 24 C22 19 28 21 32 27" stroke={color} strokeWidth="0.7" strokeLinecap="round"/>
    <path d="M40 25 C34 19 28 16 24 10" stroke={color} strokeWidth="0.8" strokeLinecap="round"/>
    <path d="M40 85 C50 78 62 76 70 70" stroke={color} strokeWidth="0.9" strokeLinecap="round"/>
    <path d="M70 70 C66 65 60 67 54 73" stroke={color} strokeWidth="0.7" strokeLinecap="round"/>
    <path d="M40 70 C52 62 64 60 72 54" stroke={color} strokeWidth="0.9" strokeLinecap="round"/>
    <path d="M72 54 C68 49 62 51 56 57" stroke={color} strokeWidth="0.7" strokeLinecap="round"/>
    <path d="M40 55 C50 47 60 44 68 38" stroke={color} strokeWidth="0.9" strokeLinecap="round"/>
    <path d="M68 38 C64 33 58 35 52 41" stroke={color} strokeWidth="0.7" strokeLinecap="round"/>
    <path d="M40 40 C48 33 56 30 62 24" stroke={color} strokeWidth="0.9" strokeLinecap="round"/>
    <path d="M40 25 C46 19 52 16 56 10" stroke={color} strokeWidth="0.8" strokeLinecap="round"/>
  </svg>
)

// Small wildflower sprig — matches reference small floral
export const FloralSprig = ({ size = 100, color = '#C9A86A', opacity = 0.4, className = '', style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none"
    xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
    className={`pointer-events-none select-none ${className}`}
    style={{ opacity, ...style }}>
    <path d="M50 95 C50 70 48 45 45 20" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M48 65 C38 58 25 55 15 50" stroke={color} strokeWidth="1" strokeLinecap="round"/>
    <path d="M47 50 C37 43 26 40 18 35" stroke={color} strokeWidth="1" strokeLinecap="round"/>
    <path d="M46 35 C38 28 30 25 24 18" stroke={color} strokeWidth="0.9" strokeLinecap="round"/>
    <path d="M49 65 C59 58 72 55 82 50" stroke={color} strokeWidth="1" strokeLinecap="round"/>
    <path d="M48 50 C58 43 70 40 78 35" stroke={color} strokeWidth="1" strokeLinecap="round"/>
    {[[15,49],[18,34],[82,49],[78,34],[24,17]].map(([cx,cy],i) => (
      <g key={i}>
        <circle cx={cx} cy={cy} r="3" stroke={color} strokeWidth="0.8" fill="none"/>
        <circle cx={cx} cy={cy} r="1" fill={color}/>
        {[0,72,144,216,288].map((deg,j) => (
          <ellipse key={j} cx={cx} cy={cy-4.5} rx="1.2" ry="2.5"
            stroke={color} strokeWidth="0.6" fill="none"
            transform={`rotate(${deg} ${cx} ${cy})`}/>
        ))}
      </g>
    ))}
  </svg>
)

// Gold butterfly — matches reference butterfly (detailed wings)
export const ButterflyOutline = ({ size = 60, color = '#C9A86A', opacity = 0.45, className = '', style = {} }) => (
  <svg width={size} height={size * 0.85} viewBox="0 0 60 51" fill="none"
    xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
    className={`pointer-events-none select-none ${className}`}
    style={{ opacity, ...style }}>
    {/* Upper wings */}
    <path d="M30 26 C26 16 10 4 2 14 C-2 22 12 32 30 26Z" stroke={color} strokeWidth="1.2" fill={`${color}18`}/>
    <path d="M30 26 C34 16 50 4 58 14 C62 22 48 32 30 26Z" stroke={color} strokeWidth="1.2" fill={`${color}18`}/>
    {/* Lower wings */}
    <path d="M30 26 C22 28 10 38 14 44 C18 49 28 42 30 26Z" stroke={color} strokeWidth="1.2" fill={`${color}18`}/>
    <path d="M30 26 C38 28 50 38 46 44 C42 49 32 42 30 26Z" stroke={color} strokeWidth="1.2" fill={`${color}18`}/>
    {/* Wing details */}
    <path d="M30 26 C24 20 14 14 8 16" stroke={color} strokeWidth="0.6" strokeLinecap="round"/>
    <path d="M30 26 C36 20 46 14 52 16" stroke={color} strokeWidth="0.6" strokeLinecap="round"/>
    {/* Body */}
    <ellipse cx="30" cy="26" rx="1.5" ry="7" fill={color}/>
    {/* Antennae */}
    <path d="M29 19 C27 14 24 11 21 8" stroke={color} strokeWidth="0.9" strokeLinecap="round"/>
    <path d="M31 19 C33 14 36 11 39 8" stroke={color} strokeWidth="0.9" strokeLinecap="round"/>
    <circle cx="21" cy="8" r="1.2" fill={color}/>
    <circle cx="39" cy="8" r="1.2" fill={color}/>
  </svg>
)

// Gold divider line with center ornament — matches reference horizontal dividers
export const GoldDivider = ({ width = 300, color = '#C9A86A', opacity = 0.45, className = '', style = {} }) => (
  <svg width={width} height="20" viewBox={`0 0 ${width} 20`} fill="none"
    xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
    className={`pointer-events-none select-none ${className}`}
    style={{ opacity, ...style }}>
    <line x1="0" y1="10" x2={width/2 - 18} y2="10" stroke={color} strokeWidth="0.8"/>
    <line x1={width/2 + 18} y1="10" x2={width} y2="10" stroke={color} strokeWidth="0.8"/>
    {/* Center ornament */}
    <path d={`M${width/2} 4 C${width/2-4} 7 ${width/2-8} 10 ${width/2-4} 13 C${width/2} 16 ${width/2+4} 13 ${width/2+8} 10 C${width/2+4} 7 ${width/2} 4Z`}
      stroke={color} strokeWidth="0.8" fill="none"/>
    <circle cx={width/2} cy="10" r="1.5" fill={color}/>
    <path d={`M${width/2-14} 10 C${width/2-10} 7 ${width/2-6} 8 ${width/2-4} 10`}
      stroke={color} strokeWidth="0.7" fill="none"/>
    <path d={`M${width/2+14} 10 C${width/2+10} 7 ${width/2+6} 8 ${width/2+4} 10`}
      stroke={color} strokeWidth="0.7" fill="none"/>
  </svg>
)

// Gold brush stroke — matches reference gold brush strokes
export const GoldBrush = ({ width = 180, color = '#C9A86A', opacity = 0.25, className = '', style = {} }) => (
  <svg width={width} height="22" viewBox={`0 0 ${width} 22`} fill="none"
    xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
    className={`pointer-events-none select-none ${className}`}
    style={{ opacity, ...style }}>
    <path d={`M8 14 C${width*0.15} 8 ${width*0.4} 6 ${width*0.6} 8 C${width*0.75} 10 ${width*0.9} 12 ${width-8} 10`}
      stroke={color} strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.4"/>
    <path d={`M4 16 C${width*0.2} 10 ${width*0.45} 8 ${width*0.65} 10 C${width*0.8} 12 ${width*0.92} 14 ${width-4} 12`}
      stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6"/>
  </svg>
)

// Ornate bottom divider — matches reference bottom ornament
export const OrnamentDivider = ({ width = 200, color = '#C9A86A', opacity = 0.45, className = '', style = {} }) => (
  <svg width={width} height="30" viewBox={`0 0 ${width} 30`} fill="none"
    xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
    className={`pointer-events-none select-none ${className}`}
    style={{ opacity, ...style }}>
    <line x1="0" y1="15" x2={width/2 - 25} y2="15" stroke={color} strokeWidth="0.8"/>
    <line x1={width/2 + 25} y1="15" x2={width} y2="15" stroke={color} strokeWidth="0.8"/>
    {/* Ornate center */}
    <path d={`M${width/2} 5 C${width/2-6} 10 ${width/2-12} 15 ${width/2-6} 20 C${width/2} 24 ${width/2+6} 20 ${width/2+12} 15 C${width/2+6} 10 ${width/2} 5Z`}
      stroke={color} strokeWidth="0.9" fill="none"/>
    <path d={`M${width/2-20} 15 C${width/2-16} 10 ${width/2-10} 11 ${width/2-6} 15`}
      stroke={color} strokeWidth="0.8" fill="none"/>
    <path d={`M${width/2+20} 15 C${width/2+16} 10 ${width/2+10} 11 ${width/2+6} 15`}
      stroke={color} strokeWidth="0.8" fill="none"/>
    <circle cx={width/2} cy="15" r="2" fill={color}/>
    <circle cx={width/2-22} cy="15" r="1" fill={color}/>
    <circle cx={width/2+22} cy="15" r="1" fill={color}/>
  </svg>
)

// Laurel wreaths for achievements
export const LaurelLeft = ({ size = 80, color = '#C9A86A', opacity = 0.5, className = '', style = {} }) => (
  <svg width={size} height={size * 1.5} viewBox="0 0 50 75" fill="none"
    xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
    className={`pointer-events-none select-none ${className}`}
    style={{ opacity, ...style }}>
    <path d="M40 70 C35 55 28 40 25 20" stroke={color} strokeWidth="1" strokeLinecap="round"/>
    {[65,55,45,35,25,15].map((y,i) => (
      <path key={i} d={`M${40-i*2} ${y} C${30-i*2} ${y-5} ${20-i*2} ${y-8} ${12-i} ${y-12}`}
        stroke={color} strokeWidth="0.9" strokeLinecap="round" fill="none"/>
    ))}
  </svg>
)

export const LaurelRight = ({ size = 80, color = '#C9A86A', opacity = 0.5, className = '', style = {} }) => (
  <svg width={size} height={size * 1.5} viewBox="0 0 50 75" fill="none"
    xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
    className={`pointer-events-none select-none ${className}`}
    style={{ opacity, ...style }}>
    <path d="M10 70 C15 55 22 40 25 20" stroke={color} strokeWidth="1" strokeLinecap="round"/>
    {[65,55,45,35,25,15].map((y,i) => (
      <path key={i} d={`M${10+i*2} ${y} C${20+i*2} ${y-5} ${30+i*2} ${y-8} ${38+i} ${y-12}`}
        stroke={color} strokeWidth="0.9" strokeLinecap="round" fill="none"/>
    ))}
  </svg>
)

export const LeafSVG = ({ size = 24, color = '#A8C49A', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
    <path d="M12 22 C8 18 4 12 6 6 C10 2 18 4 20 10 C22 16 16 20 12 22Z"
      stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <path d="M12 22 C12 16 10 10 8 6" stroke={color} strokeWidth="1" strokeLinecap="round" fill="none"/>
  </svg>
)
