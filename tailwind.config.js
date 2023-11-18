/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{svelte,ts}'],
  theme: {
    extend: {
      padding: {
        22: '5.5rem',
      },
      height: {
        'full-12': 'calc(100% - 3rem)',
        'full-20': 'calc(100% - 5rem)',
      },
      fontFamily: {
        standard: ['IBM Plex Sans', 'sans-serif'],
        condensed: ['IBM Plex Sans Condensed', 'sans-serif'],
      },
      colors: {
        zinc: {
          450: '#94949e',
        },
      },
    },
  },
  plugins: [],
};
