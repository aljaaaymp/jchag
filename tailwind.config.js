/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fill: {
          "0%": { opacity: "0", transform: "translateX(-500px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "fill": "fill 2s ease 0s 1 normal forwards",
      },
      backgroundImage: {
        hero: "url('../src/images/hope.jpg')",
        youth: "url('../src/images/youth.jfif')",
        history: "url('../src/images/history.webp')",
      },
    },
  },
  plugins: [],
};
