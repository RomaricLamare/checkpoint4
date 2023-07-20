const argon2 = require("@node-rs/argon2");
// const jwt = require("jsonwebtoken");
require("dotenv").config();

const hashedPassword = async (req, res, next) => {
  try {
    const hash = await argon2.hash(req.body.password, {
      type: argon2.argon2id,
      memoryCost: 2 ** 16,
      timeCost: 50,
    });

    req.body.password = hash;

    next();
  } catch (err) {
    console.error("Impossible to hash the password", err);
  }
};

module.exports = {
  hashedPassword,
};
