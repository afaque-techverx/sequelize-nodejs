const express = require("express");
const app = express();
const PORT = 5000;
const path = require("path");
const bodyParser = require("body-parser");

app.set("view engine", "pug");
app.set("views", path.resolve("./src/view"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const router = express.Router();
app.use(router);

const rootPath = path.resolve("./dist");
app.use(express.static(rootPath));

//DB connection
require('./src/database/conection')
require("./src/bootstrap")

router.use((err, req, res, next) => {
  if (err) {
    return res.send(err.message);
  }
});

app.listen(PORT, (err) => {
  if (err) {
    return console.log("cannot listen on ") + PORT;
  }
  console.log(`Server is runing on port :${PORT}`);

});
