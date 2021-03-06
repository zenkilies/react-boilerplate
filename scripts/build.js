// More info on Webpack's Node API here: https://webpack.js.org/api/node/
// Allowing console calls below since this is a build file.

/* eslint-disable no-console */

import webpack from "webpack";
import config from "../webpack.config.prod";

// this assures React is built in prod mode and that the Babel dev config doesn't apply.
process.env.NODE_ENV = "production";

console.log("Generating minified bundle. This will take a moment...");

webpack(config).run((error, stats) => {

  if (error) { // so a fatal error occurred. Stop here.
    console.error(error);
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.error(error));
  }

  if (jsonStats.hasWarnings) {
    console.log("Webpack generated the following warnings: ");
    jsonStats.warnings.map(warning => console.log(warning));
  }

  // if we got this far, the build succeeded.
  console.log("Your app is compiled in production mode in /dist. It's ready to roll!");

  return 0;

});
