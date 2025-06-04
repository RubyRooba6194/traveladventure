/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        zoomIn: {
          "0%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        fadeInSlow: "fadeIn 3s ease-in-out forwards",
        zoomIn: "zoomIn 2s ease-in-out forwards",
      },
      fontFamily: {
        cursive: ['"Satisfy", cursive'],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
