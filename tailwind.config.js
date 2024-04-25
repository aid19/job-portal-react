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
        'hoverColor': 'rgb(20 168 0 / 46%)',
        'greenFooter':'#748c58'
        
      }
    },

    theme: {
      screens: {
        'sm': '576px',
        // => @media (min-width: 576px) { ... }
  
        'md': '960px',
        // => @media (min-width: 960px) { ... }
  
        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
    }
  },
  plugins: [],
}

