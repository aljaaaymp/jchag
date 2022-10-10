/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../src/images/hope.jpg')",
        youth: "url('../src/images/youth.jfif')"
      },
    },
  },
  plugins: [],
};
