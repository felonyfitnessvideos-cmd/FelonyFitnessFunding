/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#2E3832",   // Deep gray/green background
          light: "#1F2622",  // Secondary dark
          accent: "#FF6B35", // Bright orange highlight
        },
      },
      fontFamily: {
        sans: ["Oswald", "sans-serif"],
      },
      spacing: {
        logo: "20rem", // ~w-80, for consistent logo sizing
      },
    },
  },
  plugins: [],
};
