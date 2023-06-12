/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#555A88",
        secondary: "#D85D5D",
        border: "#E5E5E5",
        editbuttom: "#BDBDBD",
        titletext: "#D3D3D3"
      }
    },
  },
  plugins: [],
}

