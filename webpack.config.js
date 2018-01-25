var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/movies/mainMovies.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: './movies/bundle.js'
  },
  module: {
    rules: [{
        test:/\.(s*)css$/,
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader?sourceMap']),
        }]
    },

    plugins: [
        new ExtractTextPlugin({ // define where to save the file
          filename: '/index.bundle.css'
        })
    ]
};
