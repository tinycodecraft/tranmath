/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: '#FEF5EC',
        black: '#111',
        purp: '#5f4bb6',
      },
      fontFamily: {
        serif: ['var(--font-lora)']
      },

      minHeight: {
        screenHeightWithoutHeader: 'calc(100vh - 3rem)',
        screenHeightNoheadFoot: 'calc(100vh - 110px)',
        
      },
      height: {
        screenHeightWithoutHeader: 'calc(100vh - 3rem)',
        screenHeightNoheadFoot: 'calc(100vh - 110px)',
        sideBarHeight: 'calc(100vh - 3rem)'
      }
    },
  },
  plugins: [],
}
