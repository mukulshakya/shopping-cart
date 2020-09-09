const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  console.log(path.join(__dirname, "../public/index.html"));
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(4040, () => console.log("Up on 4040"));
