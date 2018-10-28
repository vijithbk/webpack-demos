var path = require('path');

module.exports = {
  entry: './assets/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // JSHint loader
  module: {
    rules: [{
      test: /\.js$/, // Run the loader for the all .js files
      exclude: /node_modules/, // ignore files inside node_modules folder
      use: 'eslint-loader'
    }]
  }
};