import webpack from "webpack";

import {Environments, Loaders} from "./webpack.config.common";

const GLOBALS = Object.assign({}, Environments, {
  "process.env.NODE_ENV": JSON.stringify("development")
});

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
    new webpack.LoaderOptionsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin(GLOBALS)
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
