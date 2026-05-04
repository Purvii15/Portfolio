/**
 * <Decoration /> — reusable decorative image wrapper
 *
 * Props:
 *   src          string   — image path (use /assets/... for public folder)
 *   size         number   — width in px (height auto)
 *   opacity      number   — 0–1
 *   rotate       number   — degrees (default 0)
 *   position     object   — CSS position values e.g. { top: '-20px', right: '-10px' }
 *   hideOnMobile bool     — hides on screens < 768px (default true)
 *   flip         bool     — mirror horizontally (default false)
 *   className    string   — extra tailwind classes
 *   style        object   — extra inline styles
 */
const Decoration = ({
  src,
  size = 100,
  opacity = 0.3,
  rotate = 0,
  position = {},
  hideOnMobile = true,
  flip = false,
  className = '',
  style = {},
}) => {
  const transform = [
    rotate !== 0 ? `rotate(${rotate}deg)` : '',
    flip ? 'scaleX(-1)' : '',
  ].filter(Boolean).join(' ')

  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={`absolute pointer-events-none select-none ${hideOnMobile ? 'hidden md:block' : ''} ${className}`}
      style={{
        width: `${size}px`,
        opacity,
        mixBlendMode: 'multiply',
        transform: transform || undefined,
        zIndex: 0,
        ...position,
        ...style,
      }}
      loading="lazy"
    />
  )
}

export default Decoration
