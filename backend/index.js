const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.BACKEND_PORT;

const bandsRouter = require("./src/bandsRouter");
const userRouter = require("./src/userRouter");

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bonjour les amis !");
});

app.use("/bands", bandsRouter);
app.use("/user", userRouter);

app.listen(port, () => {
  return console.warn(`Server is actually running on port ${port}`);
});
