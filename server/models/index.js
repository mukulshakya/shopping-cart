const mongoose = require("mongoose");

module.exports = async ({ db: { url, options } }) => {
  try {
    const connectionUri =
      process.env.NODE_ENV === "production" ? url.production : url.local;
    await mongoose.connect(connectionUri, options);
    console.log("Mongoose connection success");
  } catch (e) {
    console.log("Mongoose connection error", e.message);
  }
};


const fs = require("fs");

const dir = fs.readdirSync(__dirname);
const Models = {};
dir
  .filter((file) => file !== "index.js" && file.endsWith(".js"))
  .map((file) => file.replace(".js", ""))
  .forEach((file) => {
    const fileName = file[0].toUpperCase() + file.substr(1);
    Models[fileName] = require(`./${file}`);
  });

module.exports = Models;