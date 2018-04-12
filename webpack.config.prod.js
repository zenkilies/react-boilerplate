import webpack from "webpack";
import ExtractTextPlugin from "extract-text-webpack-plugin";

import common from "./webpack.config.common";

const extractSass = new ExtractTextPlugin({
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
    extractSass
  ],
  module: {
    rules: common.rules.concat([{
      test: /\.(sass|scss)$/,
      use: extractSass.extract({
        use: [
          "css-loader?minimize",
          "resolve-url-loader",
          "sass-loader?sourceMap"
        ],
        fallback: "style-loader"
      })
    }])
  }
};
