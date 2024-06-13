console.log("SBA-Express-Aerver-Application!!!");
const express = require("express");
const bodyParser = require("body-parser");
const vegeRoute = require("./src/routes/vegeRoute.js");

const app = express();

// Middleware for parsing requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route for handling "/vege" requests
app.use("/vege", vegeRoute);

// Route for handling "/home" requests
app.get("/home", (req, res) => {
  res.send("am home hollo there");
});

// Default route for handling "/"
app.get("/", (req, res) => {
  res.send("hello there");
});

module.exports = app;
