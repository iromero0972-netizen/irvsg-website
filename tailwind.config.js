/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0a0e1a',
          light: '#111827',
          mid: '#1a2235',
          card: '#0f1f34',
        },
        gold: {
          DEFAULT: '#f0b429',
          dim: '#d4a017',
        },
        cyan: {
          DEFAULT: '#22d3ee',
        },
        wa: '#25D366',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
