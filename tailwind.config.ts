import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#613af7',
        secondary: '#ff7b32',
      },
      fontFamily: {
        aeonik: ['Aeonik', 'sans-serif'],
        polysans: ['PolySans', 'sans-serif'],
      },
      transitionDelay: {
        '2500': '2500ms',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'infinite-scroll-inverse': 'infinite-scroll-inverse 25s linear infinite',
        'move-along-path': 'move-along-path 2s ease-in-out forwards',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'infinite-scroll-inverse': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
        'move-along-path': {
          from: {
            opacity: '1',
            transform: 'translate(251px, 20px)',
          },
          to: {
            opacity: '1',
            transform: 'translate(7px, 20px)',
          },
        },
      },
      backgroundImage: {
        'hero-section': "url('/hero-bg.svg')",
        'pattern-section': "url('/pattern-bg.svg')",
        'information-card': "url('/information-bg.svg')",
        'questions-card': "url('/questions-bg.svg')",
      },
    },
  },
  plugins: [],
}
export default config
