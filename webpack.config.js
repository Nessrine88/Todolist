const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',

  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      template: 'src/index.html',
    }),
  ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};