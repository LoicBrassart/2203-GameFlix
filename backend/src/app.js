const express = require("express");
const path = require("path");
const cors = require("cors");
const passport = require("passport");

// let's create express app

const app = express();

// use some application-level middlewares
const whitelist = [process.env.FRONTEND_URL || "", process.env.ADMIN_URL || ""];
app.use(
  cors({
    origin(origin, callback) {
      if (whitelist.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

app.use(passport.initialize());

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// load router

const router = require("./router");

app.use(router);

// ready to export
module.exports = app;
