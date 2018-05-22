import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import common from "./webpack.config.common";

const extractCss = new MiniCssExtractPlugin({
  filename: "styles.css",
});

export default {
  devtool: "source-map",
  entry: "./src/index",
  target: "web",
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.DefinePlugin(Object.assign({}, common.definePlugin, {
      "process.env.NODE_ENV": JSON.stringify("production")
    })),
    extractCss
  ],
  module: {
    rules: common.rules.concat([{
      test: /\.(sass|scss)$/,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader?minimize",
        "resolve-url-loader",
        "sass-loader?sourceMap"
      ]
    }])
  }
};
