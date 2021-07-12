module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Abel', 'regular'],
      display: ['Zen dots', 'regular'],
    },
    extend: {
      spacing: {
        screen: '100vh'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
