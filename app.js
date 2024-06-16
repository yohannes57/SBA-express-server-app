console.log("SBA-Express-Aerver-Application!!!");
//----------------------------------------------
const express = require("express");
const bodyParser = require("body-parser");
const vegeRoute = require("./src/routes/vegeRoute.js");
const path = require("path");
const methodOverride = require("method-override"); //used to delete
//----------------------------------------------
// const exphbs=require('express-layoutHandler')

const app = express();
// Middleware for parsing requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));
// Set up EJS
app.set("view engine", "ejs");
app.set("views", "src/views");

// Middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));

//route api
app.use("/vege", vegeRoute);

// default layout or page for all
app.get("/home", (req, res) => {
  res.render("index");
});
//
// home route for handling "/"
app.get("/", (req, res) => {
  res.render("index");
});
//error medleware
app.use((req, res) => {
  res.status(404);
  res.json({ error: "oops ...Some thing went wrong" });
});
module.exports = app;
