/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        synthara: {
          black: '#000000',
          red: '#ED1C24',
          darker: '#1A1A1A',
          dark: '#262626',
          gray: '#404040',
          light: '#737373',
        }
      },
      keyframes: {
        shine: {
          '0%': { transform: 'translateX(-100%) rotate(-45deg)' },
          '100%': { transform: 'translateX(100%) rotate(-45deg)' }
        },
        'flame-dance': {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20%) scale(1.1)' },
        },
        'flame-dance-slow': {
          '0%, 100%': { transform: 'translateY(-10%) scale(1.1)' },
          '50%': { transform: 'translateY(10%) scale(0.9)' },
        },
        'ember': {
          '0%': { transform: 'translateY(0) translateX(0) opacity(1)' },
          '100%': { transform: 'translateY(-100%) translateX(20px) opacity(0)' },
        }
      },
      animation: {
        shine: 'shine 2s linear infinite',
        'flame-dance': 'flame-dance 3s ease-in-out infinite',
        'flame-dance-slow': 'flame-dance-slow 4s ease-in-out infinite',
        'ember': 'ember 2s ease-out infinite',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
