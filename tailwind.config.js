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
        black: 'var(--ash-black)',
        purp: 'var(--purple)',
        sky: 'var(--sky)',
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
