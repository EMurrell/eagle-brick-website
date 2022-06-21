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
        hero: "url('/black-bricks2.jpg')",
        quote: "url('/bgbricks-blue.jpg')",
      },
      colors: {
        highlight1: "#138BC5",
      },
    },
  },
  plugins: [],
};

