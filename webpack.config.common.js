import path from "path";

const common = {

  // The DefinePlugin allows you to create global constants which
  // can be configured at compile time. This can be useful for
  // allowing different behavior between development builds and
  // release builds.
  //
  // Reference: https://webpack.js.org/plugins/define-plugin/

  definePlugin: {
    "process.env.NODE_ENV": JSON.stringify("development")
  },

  // These options determine how the different types of modules
  // within a project will be treated.
  //
  // Reference: https://webpack.js.org/configuration/module/#module-rules

  rules: [{
    test: /\.js$/,
    include: path.join(__dirname, "src"),
    loaders: [
      "babel-loader"
    ]
  }, {
    test: /\.css$/,
    loaders: [
      "style-loader",
      "css-loader"
    ]
  }, {
    test: /\.ya?ml$/,
    loaders: [
      "json-loader",
      "yaml-loader"
    ]
  }, {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    loaders: [
      "file-loader"
    ]
  }, {
    test: /\.(woff|woff2)$/,
    loaders: [
      "url-loader?prefix=font/&limit=5000"
    ]
  }, {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loaders: [
      "url-loader?limit=10000&mimetype=application/octet-stream"
    ]
  }, {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    loaders: [
      "url-loader?limit=10000&mimetype=image/svg+xml"
    ]
  }, {
    test: /\.(jpe?g|png|gif)$/i,
    loaders: (() => process.env.NODE_ENV === "production"
      ? ["file-loader", "img-loader"]
      : ["file-loader"])()
  }, {
    test: /(favicon).png/i,
    loaders: (() => process.env.NODE_ENV === "production"
      ? ["file-loader", "img-loader"]
      : ["file-loader"])()
  }]

};

export default common;
