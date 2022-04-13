const express = require("express");

const { GameController, MiscController } = require("./controllers");

const router = express.Router();

router.get("/games", GameController.browse);
router.get("/games/:id", GameController.read);
router.put("/games/:id", GameController.edit);
router.post("/games", GameController.add);
router.delete("/games/:id", GameController.delete);

router.get("/search", MiscController.search);

module.exports = router;
