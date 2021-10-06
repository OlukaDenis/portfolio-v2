module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#132238',
        den: {
          10: '#111f32',
          20: '#0d1827',
          30: '#0d1827',
          40: '#0b1422',
          50: '#0a111c',
          60: '#080e16',
          70: '#060a11',
          80: '#04070b',
          90: '#020306',
          100: '#000000'
        },
        olu: {
          0: '#ff4800',
          10: '#e64100',
          20: '#cc3a00',
          30: '#b33200',
          40: '#992b00',
          50: '#ff5a1a',
          60: '#ff6d33',
          70: '#ff7f4d',
          80: '#ff9166',
          90: '#ffa480',
          100: '#ffb699',
          110: '#ffc8b3',
          120: '#ffdacc',
          130: '#ffede6',
          140: '#fee9e6'
        },
        dev: {
          1: '#2b384c',
          2: '#424e60',
          3: '#5a6474',
          4: '#717a88',
          5: '#89919c',
          6: '#a1a7af',
          7: '#b8bdc3',
          8: '#d0d3d7',
          9: '#e7e9eb'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
