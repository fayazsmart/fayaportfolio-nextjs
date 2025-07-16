import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        ovo: ['var(--font-ovo)', ...defaultTheme.fontFamily.serif],
        outfit: ['var(--font-outfit)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  darkMode:'selector',
  plugins: [],
}
