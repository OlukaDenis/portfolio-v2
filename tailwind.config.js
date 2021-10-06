module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // false or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        screens: {
          sm: '480px',
          md: '768px',
          lg: '976px',
          xl: '1440px',
        },
        primary: '#132238',
        pri: {
          50: "#e6ebfd",
          100: "#c2cfe5",
          200: "#a1afc8",
          300: "#8090ad",
          400: "#677998",
          500: "#4f6385",
          600: "#425674",
          700: "#32445e",
          800: "#233249",
          900: "#111f32"
        },
        sec: {
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
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}