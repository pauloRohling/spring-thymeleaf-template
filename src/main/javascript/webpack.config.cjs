const path = require("path");

module.exports = {
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, "../resources/static/dist"),
    filename: "main.js",
  },
  mode: "production",
  optimization: {
    minimize: false,
  },
};
