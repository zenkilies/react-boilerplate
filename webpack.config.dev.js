import webpack from "webpack";

import common from "./webpack.config.common";

export default {
  mode: "development",
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(Object.assign({}, common.definePlugin, {
      "process.env.NODE_ENV": JSON.stringify("development")
    }))
  ],
  module: {
    rules: common.rules.concat([{
      test: /\.(sass|scss)$/,
      loaders: [
        "style-loader",
        "css-loader",
        "resolve-url-loader",
        "sass-loader?sourceMap"
      ]
    }])
  }
};
