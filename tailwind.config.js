/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    gridTemplateColumns: {
      "auto-fill": "repeat(auto-fill, minmax(200px, 1fr))",
    },
    extend: {
      height: {
        128: "40rem",
      },
      fontSize: {
        "3xs": "8px",
        xxs: "10px",
        xxs2: "11px",
        sm: "0.875rem",
        base: "1rem",
        xl: "1.25rem",
        "wa-icon": "1.5rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    minHeight: {
      128: "40rem",
    },
  },
  plugins: [],
};
