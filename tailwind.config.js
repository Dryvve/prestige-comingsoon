module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'regular'],
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
