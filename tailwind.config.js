/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geomanist', 'sans-serif'],
        archia: ['Archia', 'sans-serif'],
      },
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        muted: 'var(--color-muted)',
        border: 'var(--color-border)',
      },
      keyframes: {
        'marquee-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'hero-star-fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'marquee-left': 'marquee-left 80s linear infinite',
        'marquee-right': 'marquee-right 80s linear infinite',
        'scroll-left': 'scroll-left 60s linear infinite',
        'scroll-right': 'scroll-right 60s linear infinite',
        'star-fade-in': 'hero-star-fade-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
    },
  },
  plugins: [],
};
