const express = require("express");
const passport = require("passport");
require("./passportStrategies");

const {
  GameController,
  MiscController,
  AuthController,
} = require("./controllers");

const router = express.Router();

router.get("/games", GameController.browse);
router.get("/games/:id", GameController.read);
router.put("/games/:id", GameController.edit);
router.post("/games", GameController.add);
router.delete("/games/:id", GameController.delete);

router.get("/search", MiscController.search);

router.post("/auth/signup", AuthController.signup);
router.post(
  "/auth/login",
  passport.authenticate("local"),
  AuthController.login
);

router.use(passport.authenticate("jwt")); // Auth Wall

module.exports = router;
