var webpack = require('webpack');

const ASSET_PATH = process.env.ASSET_PATH || 'http://localhost:3030/';

module.exports = {
  webpack: {
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      }),
      new webpack.DefinePlugin({
        'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
      })
    ],
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.optimization.runtimeChunk = false;
      webpackConfig.output.filename = 'static/js/[name].js';
      webpackConfig.output.publicPath = ASSET_PATH;
      return webpackConfig;
    }
  },
  devServer: (devServerConfig, { env, paths, proxy, allowedHost }) => {
    devServerConfig = {
      disableHostCheck: true,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    };
    return devServerConfig;
  }
};