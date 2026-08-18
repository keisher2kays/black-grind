import React from 'react'

/**
 * PixelDust
 * A small scatter of squares echoing the pixel trail in The Black Grind's
 * logo mark — used as the site's recurring signature motif instead of a
 * generic divider or icon.
 */
function PixelDust({ variant = 'default', className = '' }) {
  const layouts = {
    default: [
      [0, 0], [18, 6], [4, 20], [24, 26], [12, 34], [30, 10],
    ],
    tight: [
      [0, 4], [10, 0], [6, 14], [16, 18],
    ],
    trail: [
      [0, 0], [14, 4], [10, 16], [24, 12], [20, 26], [34, 22], [30, 34],
    ],
  }

  const dots = layouts[variant] || layouts.default

  return (
    <svg
      className={`pixel-dust ${className}`}
      viewBox="0 0 40 40"
      aria-hidden="true"
      focusable="false"
    >
      {dots.map(([x, y], i) => (
        <rect
          key={i}
          x={x}
          y={y}
          width="6"
          height="6"
          className={i % 2 === 0 ? 'pd-cyan' : 'pd-gold'}
        />
      ))}
    </svg>
  )
}

export default PixelDust