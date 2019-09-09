const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    publicPath: '/cs-mf/',
    filename: 'assets/js/[name].js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new Dotenv({
      path: './.env.local'
    }),
    new HtmlWebpackPlugin({
      title: 'index.html',
      filename: 'index.html',
      template: 'public/index.html'
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'disabled',
      generateStatsFile: true
    }),
    new CompressionPlugin({ algorithm: 'gzip' })
  ]
});
