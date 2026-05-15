/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        healify: {
          navy: "#1b3b5a",
          cyan: "#22bcd4",
          "cyan-light": "#22c9e0",
          "cyan-pale": "#aaf0f8",
          surface: "#f0fafd",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
}