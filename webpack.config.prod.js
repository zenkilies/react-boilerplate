import webpack from "webpack";
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import {Environments, Loaders} from "./webpack.config.common";

const GLOBALS = Object.assign({}, Environments, {
  "process.env.NODE_ENV": JSON.stringify("production")
});

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
    new webpack.LoaderOptionsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    extractSass,
  ],
  module: {
    loaders: Loaders.concat([{
      test: /\.(sass|scss)$/,
      use: extractSass.extract({
        use: [
          "css-loader?minimize",
          "resolve-url-loader",
          "sass-loader?sourceMap",],
        fallback: "style-loader"
      })
    }])
  }
};
