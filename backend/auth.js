const argon2 = require("@node-rs/argon2");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const models = require("./src/models");

dotenv.config();

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

const isEmailAlreadyExists = (req, res, next) => {
  const { email } = req.body;

  models.user
    .findByEmail(email)
    .then(([response]) => {
      if (response.length) {
        res.user = response[0];

        return next();
      }
      return res.status(403).send("This email already exists in the database");
    })
    .catch((err) => {
      console.error("Internal server error", err.message);
    });
};

const isPasswordValid = (req, res) => {
  argon2
    .verify(res.user.password, req.body.password)
    .then((match) => {
      if (match) {
        delete res.user.password;
        const token = jwt.sign(res.user, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        res.status(201).send({
          ...res.user,
          token,
        });
      } else {
        res.status(403).send("An error occured while creating the token");
      }
    })
    .catch((err) => {
      console.error("Internal server error", err.message);
    });
};

module.exports = {
  hashedPassword,
  isEmailAlreadyExists,
  isPasswordValid,
};
