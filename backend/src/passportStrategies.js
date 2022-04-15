const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JWTStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
const bcrypt = require("bcrypt");
const { JWT_SECRET } = process.env;
const models = require("./models");

passport.use(
  new LocalStrategy(
    {
      usernameField: "mail",
      passwordField: "password",
    },
    async (formMail, formPassword, done) => {
      try {
        models.user.find(formMail).then(([[dbUser]]) => {
          if (!dbUser.id) return done(null, false, "Wrong username!");
          const { id, email, avatar, pseudo, password } = dbUser;
          const isPasswordOK = bcrypt.compareSync(formPassword, password);
          if (!isPasswordOK) return done(null, false, "Wrong password!");

          const user = { id, email, avatar, pseudo };
          return done(null, user);
        });
      } catch (e) {
        console.error(e);
        return done(e);
      }
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JWT_SECRET,
    },
    (jwtPayload, done) => {
      const user = jwtPayload;
      return done(null, user);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
