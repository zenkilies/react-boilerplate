import express from "express";
import open from "open";
import path from "path";
import webpack from "webpack";

import config from "../webpack.config.dev";

const compiler = webpack(config);
const instance = express();

instance.use(require("webpack-dev-middleware")(compiler, {
  logLevel: "error",
  publicPath: config.output.publicPath,
  stats: "errors-only"
}));

instance.use(require("webpack-hot-middleware")(compiler));

instance.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

instance.listen(process.env.PORT || 3000, function (error) {

  if (error)

    throw error;

  open("http://localhost:" + (process.env.PORT || 3000));

});
