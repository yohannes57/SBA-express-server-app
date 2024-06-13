const app = require("./app.js");
//-Listening server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server Running at http://127.0.0.1:${PORT}`);
});
