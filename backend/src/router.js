const express = require("express");
const passport = require("passport");
require("./passportStrategies");

const {
  GameController,
  MiscController,
  AuthController,
} = require("./controllers");

const router = express.Router();

router.post("/auth/signup", AuthController.signup);
router.post(
  "/auth/login",
  passport.authenticate("local"),
  AuthController.login
);

router.get("/search", MiscController.search);

router.get("/boardGames", GameController.browse);
router.get("/boardGames/:id", GameController.read);

router.use(passport.authenticate("jwt")); // Auth Wall
router.put("/boardGames/:id", GameController.edit);
router.post("/boardGames", GameController.add);
router.delete("/boardGames/:id", GameController.delete);

module.exports = router;
