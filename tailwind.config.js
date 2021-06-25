const defaultColors = require("tailwindcss/colors");
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        old: defaultColors.green,
        bg: "#bdf2db",
        new: "#273d35",
      },
      Secondary: {
        gray: defaultColors.gray,
        black: "#050505"
      },
      Accent: {
        gold1: "#fcbe03",
        reddish: "#f5e9e9",
        lightred: "#f5f5f5"
      },
      New: {
        lightblue: "#cfe8fa",
      }
    },
    extend: {
      width: {
        "18": "4.5rem"
      },
      borderWidth: {
        "6": "6px"
      },
      padding: {
        "1/10": "10%",
        "1/5": "20%",
        "1/3": "33.333333333%",
        "2/4": "50%",
        "2/3": "66.6666666666%",
        "3/4": "72.5%",
        "4/5": "80%",
        "1/6": "16.6666666666%",
      },
      backgroundSize: {
        'y-100': '100%',
        'x-auto': 'auto'
      },
      backgroundPosition: {
        '50': "50%"
      },
      screens: {
        'mobile': '400px',
        'mmd': '850px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
