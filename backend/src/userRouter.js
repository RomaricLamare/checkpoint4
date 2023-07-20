const express = require("express");

const router = express.Router();

const { isEmailExists } = require("./controllers/UserControllers");
const UserControllers = require("./controllers/UserControllers");
const { hashedPassword } = require("../auth");

router.get("/", UserControllers.browse);
router.get("/:id", UserControllers.read);
router.put("/:id", UserControllers.edit);
router.post("/", isEmailExists, hashedPassword, UserControllers.add);
router.delete("/:id", UserControllers.destroy);

module.exports = router;
