/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest:           '#1F2D24',
        'forest-deep':    '#16201A',
        'forest-mid':     '#2A3A30',
        moss:             '#4A5D3F',
        cream:            '#F5EFE2',
        paper:            '#EDE5D3',
        'sage-glow':      '#A8C49A',
        'sage-soft':      '#7A9B6E',
        gold:             '#C9A86A',
        'rose-soft':      '#D4A5A0',
        'on-dark':        '#F5EFE2',
        'on-dark-muted':  '#B8B0A0',
        'on-light':       '#2A3A30',
        background:       '#1F2D24',
        surface:          '#2A3A30',
        sage:             '#7A9B6E',
        'sage-dark':      '#4A5D3F',
        ink:              '#F5EFE2',
        muted:            '#B8B0A0',
      },
      fontFamily: {
        serif:   ['"Fraunces"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', '"Fraunces"', 'Georgia', 'serif'],
        sans:    ['"Inter"', 'system-ui', 'sans-serif'],
        hand:    ['"Caveat"', '"Dancing Script"', 'cursive'],
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        card:         '0 4px 32px rgba(0,0,0,0.35)',
        'card-hover': '0 12px 48px rgba(0,0,0,0.50)',
        polaroid:     '0 12px 48px rgba(0,0,0,0.50)',
        glow:         '0 0 24px rgba(168,196,154,0.25)',
      },
      letterSpacing: {
        widest2: '0.25em',
      },
    },
  },
  plugins: [],
}
