/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        'greenColor': '#14a800',
        'greyIsh': '#f1f4f8',
        'cardShadow': '#f7f8f9',
        'textColor': '#252b36',
        'hoverColor': 'rgb(20 168 0 / 46%)'
        
      }
    },
  },
  plugins: [],
}

