module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Montserrat"],
      serif: ["Playfair Display"],
    },
    extend: {
      backgroundImage: {
        hero: "url('/black-bricks.jpg')",
        quote: "url('/bgbricks.jpg')",
      },
      colors: {
        highlight1: "#138BC5",
      },
    },
  },
  plugins: [],
};

