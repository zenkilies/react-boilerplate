import path from "path";

require("dotenv").config();

const Environments = {
  "process.env.SERVICE_BASE": JSON.stringify(process.env.SERVICE_BASE)
};

const Loaders = [

  /**
   * JavaScript & CSS
   */

  {
    test: /\.js$/,
    include: path.join(__dirname, 'src'),
    loaders: ['babel-loader']
  },

  {
    test: /\.css$/,
    loaders: [
      'style-loader',
      'css-loader'
    ]
  },

  /**
   * Web Fonts
   */

  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file-loader'
  },

  {
    test: /\.(woff|woff2)$/,
    loader: 'url-loader?prefix=font/&limit=5000'
  },

  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
  },

  /**
   * Images
   */

  {
    test: /\.(jpe?g|png|gif)$/i,
    loaders: (function () {

      return process.env.NODE_ENV === "production"
        ? ["file-loader", "img-loader"]
        : ["file-loader"];

    })()
  },

  /**
   * Icon Fonts
   */

  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
  },

  /**
   * Miscellaneous
   */

  {
    test: /(favicon|og-image).png/i,
    loaders: (function () {

      return process.env.NODE_ENV === "production"
        ? ["file-loader?name=[name].[ext]", "img-loader"]
        : ["file-loader?name=[name].[ext]"];

    })()
  }

];

export {Environments};
export {Loaders};
