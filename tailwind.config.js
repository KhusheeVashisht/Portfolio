/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          300: '#93c5fd',
          500: '#3b82f6',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
        neon: {
          blue: '#0ea5e9',
          cyan: '#06b6d4',
          purple: '#9333ea',
          pink: '#ec4899',
        },
        dark: {
          bg: 'rgb(var(--color-bg-rgb) / <alpha-value>)',
          card: 'rgb(var(--color-card-rgb) / <alpha-value>)',
          border: 'rgb(var(--color-border-rgb) / <alpha-value>)',
        }
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
      },
      keyframes: {
        'glow': {
          '0%, 100%': { 'box-shadow': '0 0 20px rgba(6, 182, 212, 0.3)' },
          '50%': { 'box-shadow': '0 0 40px rgba(6, 182, 212, 0.6)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            opacity: '0.5',
            'box-shadow': '0 0 10px rgba(14, 165, 233, 0.3)'
          },
          '50%': { 
            opacity: '1',
            'box-shadow': '0 0 20px rgba(14, 165, 233, 0.6)'
          },
        },
        'typing': {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { 'border-r-color': 'transparent' },
          '50%': { 'border-r-color': '#06b6d4' },
        },
      },
      backdropBlur: {
        'md': '12px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
