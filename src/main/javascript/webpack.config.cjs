const path = require("path");
const webpack = require("webpack");

const DEV_PLUGINS = [];
const PROD_PLUGINS = [
  new webpack.NormalModuleReplacementPlugin(/app[\\/]environment[\\/]environment\.js/, "./environment.prod.js"),
];

module.exports = (mode) => ({
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, "../resources/static/dist"),
    filename: "main.js",
  },
  mode: mode,
  plugins: mode === "production" ? PROD_PLUGINS : DEV_PLUGINS,
  optimization: {
    minimize: false,
  },
});
