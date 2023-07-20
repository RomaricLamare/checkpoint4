const express = require("express");

const router = express.Router();

const BandControllers = require("./controllers/BandControllers");

router.get("/", BandControllers.browse);
router.get("/:id", BandControllers.read);
router.put("/:id", BandControllers.edit);
router.post("/", BandControllers.add);
router.delete("/:id", BandControllers.destroy);

module.exports = router;
