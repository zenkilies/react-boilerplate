import webpack from "webpack";

import {Loaders} from "./webpack.config.common";

export default {
  devtool: "cheap-module-eval-source-map",
  entry: [
    "eventsource-polyfill",
    "webpack-hot-middleware/client?reload=true",
    "./src/index"
  ],
  target: "web",
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./src"
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
      noInfo: false
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // new webpack.ProvidePlugin({
    //   $: "jquery",
    //   jQuery: "jquery",
    //   jquery: "jquery"
    // })
  ],
  module: {
    loaders: Loaders.concat([{
      test: /\.(sass|scss)$/,
      loaders: [
        'style-loader',
        'css-loader',
        'resolve-url-loader',
        'sass-loader?sourceMap'
      ]
    }])
  }
};
