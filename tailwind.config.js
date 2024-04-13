/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#2196F3",
      },
      backgroundImage: {
        headerBg: "url('/src/assets/images/Header/header-bg.png')",
      },
    },
  },
  plugins: [],
};
