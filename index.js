// console.log("SBA-express-server-application!!!");
//------------------------imports
const express = require("express");
const bodyParser = require("bodyParser");
const app = express();

//----------------------midleware bodyPareser

//----------------------homePage url
app.get("/", (req, res) => {
  res.send("hello there");
});

//---------------Listening server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server Running at http://127.0.0.1:${PORT}`);
});
