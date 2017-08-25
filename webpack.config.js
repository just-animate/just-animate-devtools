var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var basePath = __dirname;

module.exports = {
  context: path.join(basePath, 'src'),
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  entry: {
    'panel/panel': './panel/panel.tsx',
    'background_scripts/background': './background_scripts/background.ts',
    'main': './main.ts'
  },
  output: {
    path: path.join(basePath, 'plugin'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'awesome-typescript-loader',
          options: {
            useBabel: true,
          },
        },
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      }
    ]
  },
  devtool: 'inline-source-map',
  plugins: [ 
    new CopyWebpackPlugin([ 
      { from: 'manifest.json', to: 'manifest.json' },
      { from: 'icons/**/**', to: './' },
      { from: 'main.html', to: 'main.html' },
      { from: 'panel/panel.html', to: 'panel/panel.html' },
    ])
  ],
}