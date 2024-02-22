/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bg': '#020916',
        'accent': '#887EFF',
        lightGray: '#1F2937'
      },
      fontFamily:{
        'dm-sans': ['DM Sans', 'sans-serif']
      },
      maxWidth:{
        'wtf': '82rem',
      }
    },
  },
  plugins: [],
}

