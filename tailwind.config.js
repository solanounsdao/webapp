/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'nouns-red': '#d63638',
        'nouns-blue': '#4965f0',
        'nouns-yellow': '#fccf47',
        'nouns-green': '#18b894',
        'nouns-pink': '#e06d8a',
        'solana-purple': '#9945ff',
        'solana-green': '#14f195',
      },
      fontFamily: {
        'pixel': ['PT Root UI', 'monospace'],
      },
    },
  },
  plugins: [],
}
