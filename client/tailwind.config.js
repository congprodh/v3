/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark:{
          DEFAULT: "#030303",
          brighter: "#1a1a1a",
          brightest: "#272728"
        },
        darkBorder:{
          DEFAULT:"#343536"
        },
        darkText:{
          DEFAULT: 'rgb(215, 218, 220)',
          darker: '#818384',
        }
      }
    },
  },
  plugins: [],
}

