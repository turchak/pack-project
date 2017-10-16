const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: 'source-map',
  entry: {
    app: './app.js'
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: path.join(__dirname, 'src')
    }],
    rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        //resolve-url-loader may be chained before sass-loader if necessary
        use: ['css-loader', 'sass-loader']
      })
    }],
  },
  plugins: [
    new ExtractTextPlugin('assets/css/main.css')
  ]
  // devServer: {
  //   contentBase: path.join(__dirname, "public"),
  //   compress: true,
  //   inline: true,
  //   port: 8080
  // }
};
