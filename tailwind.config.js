/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      borderRadius:{
        'wtf': '0.625rem',
        'wtf-xl':'1.25rem'
      },
      colors:{
        bg: '#020916',
        accent: {DEFAULT: '#887EFF', 500: '#5f3ced'},
        lightGray: '#1F2937'
      },
      fontFamily:{
        'dm-sans': ['DM Sans', 'sans-serif']
      },
      maxWidth:{
        'wtf': '82rem',
      },
      boxShadow:{
        'innerlight': 'inset 0 2px 0 0 rgba(255, 255, 255, 0.15)',
        'innerlightmini': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.15)'
      },
      margin: {
        'big': '7.5rem'
      },
    },
  },
  plugins: [],
}

