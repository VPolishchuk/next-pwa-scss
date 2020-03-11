const withPlugins = require("next-compose-plugins");
const withSass = require('@zeit/next-sass');
const withCSS = require("@zeit/next-css");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
////////////////////////////////////////////////////////
const devMode = process.env.NODE_ENV !== 'production';

const nextConfig = {
  // webpack(config, options) {
  //   config.module.rules.push({
  //     test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
  //     use: {
  //         loader: 'url-loader',
  //         options: {
  //             limit: 100000
  //         }
  //     }
  //   });

  // return config;
  // }
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // only enable hot in development
              hmr: process.env.NODE_ENV === 'development',
              // if hmr does not work, this is a forceful method.
              reloadAll: true,
 
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
}

module.exports = withPlugins(
   [
    withCSS,
    withSass
   ],
   nextConfig
);