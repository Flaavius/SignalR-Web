const express = require('express');
const path = require("path");
const app = express();

const PORT = 8080;

app.use("/",express.static(path.join(__dirname, 'dist')));

app.listen(PORT,(er) => {
  if(er) {
    console.error(er);
  }
  console.log("Server started on http://localhost:"+PORT+" !!!");
});