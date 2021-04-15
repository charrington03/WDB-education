// Kind of like importing express (ES6 thing...)
const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000; // convention is 3000

// req = request | res = response
// the "/" is the route
app.get("/", (req, res) => {
  res.send("hello world");
});

// "/nasa" means go to localhost:3000/nasa
app.get("/nasa", (req, res) => {
  axios
    .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then((response) => {
      const date = response.data.date;
      const desc = response.data.explanation;
      const url = response.data.url;

      res.send(
        `<h1>${date}</h1>` +
          `<br>` +
          `<p>${desc}</p>` +
          `<a href=${url}>Click here for a cool picture.</a>`
      );
    })
    .catch((error) => {
      res.send(error);
    });
});

// sets http://localhost... as default url
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
