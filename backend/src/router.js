const express = require("express");

const { ItemController, GameController } = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/games", GameController.browse);
router.get("/games/:id", GameController.read);
router.put("/games/:id", GameController.edit);
router.post("/games", GameController.add);
router.delete("/games/:id", GameController.delete);

module.exports = router;
