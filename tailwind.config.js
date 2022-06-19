/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fill-100": "repeat(auto-fill, minmax(100px, 1fr))",
        "auto-fit-200": "repeat(auto-fit, minmax(300px, 1fr))",
        "auto-fit-400": "repeat(auto-fit, minmax(300px, 400px))",
      },
      boxShadow: {
        "3xl":
          "-2px 2px 3px 1px rgba(0, 0, 0, 0.05), -2px 2px 3px 1px rgba(0, 0, 0, 0.05)",
      },
      fontSize: {
        xxs: "10px",
      },
    },
  },
  plugins: [],
};
