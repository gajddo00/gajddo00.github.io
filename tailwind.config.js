module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        '50': '50%'
      },
      height: {
        'screen-50': '50vh',
        '90pr': '90%'
      },
      scale: {
        'flip': '-1'
      }
    },
  },
  plugins: [],
}
