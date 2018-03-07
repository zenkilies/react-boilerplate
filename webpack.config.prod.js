import webpack from "webpack";
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import {Loaders} from "./webpack.config.common";

const GLOBALS = {
  "process.env.NODE_ENV": JSON.stringify("production")
};

const extractLess = new ExtractTextPlugin({
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
    new webpack.LoaderOptionsPlugin({
      debug: true,
      noInfo: false
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new webpack.optimize.UglifyJsPlugin(),
    // new webpack.ProvidePlugin({
    //   $: "jquery",
    //   jQuery: "jquery",
    //   jquery: "jquery"
    // }),
    extractLess,
  ],
  module: {
    loaders: Loaders.concat([{
      test: /\.less$/,
      use: extractLess.extract({
        use: [{
          loader: "css-loader",
          options: {
            minimize: true
          }
        }, {
          loader: "less-loader"
        }],
        fallback: "style-loader"
      })
    }])
  }
};