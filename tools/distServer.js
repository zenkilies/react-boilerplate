import compression from "compression";
import express from "express";
import open from "open";
import path from "path";

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static("dist"));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(port, function (error) {

  if (error)

    throw error;

  open("http://localhost:" + port);

});
