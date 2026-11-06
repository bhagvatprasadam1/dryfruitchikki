/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3A2116',
          hover: '#2C170E',
          dark: '#1F0F09',
          light: '#4F2E20',
          gold: '#C28434',
        },
        'deep-brown': {
          DEFAULT: '#2C170E',
          dark: '#1B0D07',
          light: '#44261A',
        },
        cream: {
          DEFAULT: '#FAF6F0',
          card: '#F3ECE2',
        },
        'light-beige': {
          DEFAULT: '#EADECF',
          hover: '#DFD0BF',
        },
        'muted-green': {
          DEFAULT: '#547734',
          dark: '#3B5523',
          light: '#6E9946',
        },
        gold: {
          DEFAULT: '#C28434',
          light: '#E09F45',
          dark: '#9E6720',
        },
        'dark-text': '#24140D',
        'muted-text': '#6E5A4E',
      },
      fontFamily: {
        serif: ['"Tenor Sans"', 'Georgia', 'serif'],
        sans: ['"Nunito"', 'system-ui', '-apple-system', 'sans-serif'],
        tenor: ['"Tenor Sans"', 'serif'],
        nunito: ['"Nunito"', 'system-ui', '-apple-system', 'sans-serif'],
        jost: ['"Jost"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        DEFAULT: 'none',
        sm: 'none',
        md: 'none',
        lg: 'none',
        xl: 'none',
        '2xl': 'none',
        inner: 'none',
        none: 'none',
        subtle: 'none',
        warm: 'none',
        luxury: 'none',
      },
      dropShadow: {
        DEFAULT: 'none',
        sm: 'none',
        md: 'none',
        lg: 'none',
        xl: 'none',
        '2xl': 'none',
        none: 'none',
      },
    },
  },
  plugins: [],
}
