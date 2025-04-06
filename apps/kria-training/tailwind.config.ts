import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3345a6', // Indigo-Blau
        secondary: {
          lime: '#c7e977',
          teal: '#76d7c4',
          sky: '#85e0ff',
          sunset: '#ffc373',
          coral: '#ff9f9a',
          golden: '#ffe066',
          fern: '#a6d785',
        },
        background: '#fdfcfb',
      },
      fontFamily: {
        grueber: ['Grueber', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      spacing: {
        'section': '4rem', // 4-6rem Abstand zwischen Abschnitten
        'section-lg': '6rem',
      },
      borderRadius: {
        '2xl': '1rem',
      },
      maxWidth: {
        'text': '70ch', // max. 70 Zeichen Breite für Fließtext
      },
    },
  },
  plugins: [],
};

export default config; 