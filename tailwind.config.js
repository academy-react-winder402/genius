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
        headerBgBottom:
          "url('/src/assets/images/Landing/header-bg-bottom.png')",
        landingPageProgrammingLanguagesIcon: "url('/src/assets/images/Landing/Icons.png')"
      },
      colors: {
        text1: "#263238",
        text2: "#455A64",
        text3: "#607D8B",
      },
      fontFamily: {
        yekanBakh: "YekanBakh",
      },
    },
  },
  plugins: [],
};
