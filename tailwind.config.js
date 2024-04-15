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
        landingPageProgrammingLanguagesIcon:
          "url('/src/assets/images/Landing/Icons.png')",
      },
      colors: {
        primaryColor: "#2196F3",
        text1: "#263238",
        text2: "#455A64",
        text3: "#607D8B",
        red: "#F44336",
      },
      fontFamily: {
        yekanBakh: "YekanBakh",
      },
      boxShadow: {
        primaryShadow: "0px 0px 50px 0px #0000000D",
      },
    },
  },
  plugins: [],
};
