module.exports = {
  content: ["*.njk", "**/*.njk"],
  theme: {
    extend: {
      colors: {
        techfest: "#c0ff6a",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
