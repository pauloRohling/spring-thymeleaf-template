const path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, '../resources/dist'),
    filename: 'main.js',
  },
  optimization: {
    minimize: false,
  },
};