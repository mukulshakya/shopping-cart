const jwt = require("jsonwebtoken");
const db = require("../models");
const config = require("../config");

module.exports = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, config.JWTSECRET);
    const user = await db.User.findById(decoded.id);
    if (!user) return res.error();

    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    return res.unAuth(e);
  }
};