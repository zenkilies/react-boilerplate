import fs from "fs";
import cheerio from "cheerio";
import colors from "colors";

/*eslint-disable no-console*/

fs.readFile("src/index.html", "utf8", function (error, markup) {

  if (error) throw error;

  const $ = cheerio.load(markup);

  // Production build will generate CSS file,
  // not in the development.

  const version = Date.now();

  $("head").prepend(`<link rel="stylesheet" href="styles.css?v=${version}">`);

  $("body").find('script[src="/bundle.js"]').each(function () {
    $(this).attr("src", $(this).attr("src") + "?v=" + version);
  });

  // Build two files, one for default (index.html)
  // and one for Surge (200.html).

  fs.writeFile("dist/index.html", $.html(), "utf8", function (error) {

    if (error) throw error;

    console.log("index.html is built into dist/index.html".green);

  });

  fs.writeFile("dist/200.html", $.html(), "utf8", function (error) {

    if (error) throw error;

    console.log("index.html is built into dist/200.html".green);

  });

});
