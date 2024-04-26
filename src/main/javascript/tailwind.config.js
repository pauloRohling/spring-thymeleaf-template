/** @type {import("tailwindcss").Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
      "./app/**/*.{html,js}",
      "../resources/templates/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "base",
    }),
  ],
}

