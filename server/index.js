const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
process.env["NODE_CONFIG_DIR"] = __dirname + "/config";
const {
  db: { url, options },
} = require("config");

// Middlewares
app.use(require("cors")());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  Object.assign(res, require("./util/responseSender"));
  next();
});

// DB connection
const connectionUri =
  process.env.NODE_ENV === "production" ? url.production : url.local;
mongoose
  .connect(connectionUri, options)
  .then(() => console.log("Mongoose connection success"))
  .catch((e) => console.log("Mongoose connection error", e.message));

app.get("/", (req, res) => {
  console.log(path.join(__dirname, "../public/index.html"));
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

// Error handler
app.use(async (error, req, res, next) => {
  return res.error(error);
});

const port = process.env.PORT || 4040;
app.listen(port, () => console.log("Server up on port", port));
