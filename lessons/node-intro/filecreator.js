const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const port = 3000;

// parsing url
app.use(bodyParser.urlencoded({ extend: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/create", (req, res) => {
  let name = req.query.name;
  let type = req.query.type;
  let filename = name + "." + type;

  fs.appendFile(filename, "hi, this is what goes in the file", (err) => {
    if (err) res.send(err); // if error is thrown, send error... otherwise...
    res.send({
      message: "File created!",
      name: name,
      type: type,
    });
  });
});

// sets http://localhost... as default url
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
