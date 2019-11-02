const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("passport");
const User = require("../../models/user");

router.get("/", (req, res, next) => {
  console.log("====user!!====")
  console.log(req.user)
  if (req.user) {
    res.json({ user: req.user })
  } else {
    res.json({ user: null })
  }
});

router.post("/signup", function (req, res) {
  if (!req.body.username || !req.body.displayName || !req.body.password) {
    res.json({ success: false, msg: "Please fill out all required fields." });
  } else {
    let newUser = new User({
      username: req.body.username,
      email: req.body.email,
      displayName: req.body.displayName,
      password: req.body.password
    });

    newUser.save(function (err) {
      if (err) {
        console.log(err)
        return res.json({ success: false, msg: "Username already exists." });
      }
      res.json({ success: true, msg: "Successfully created new user." });
    });
  }
});

router.post("/login",
  passport.authenticate("local"),
  (req, res) => {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    let userInfo = {
      username: req.user.username
    };
    res.send(userInfo);
});

router.post("/logout", (req, res) => {
  if (req.user) {
    req.logout();
    res.send({ msg: "logging out "})
  } else {
    res.send({ msg: "no user to log out"})
  }
});

router
  .route("/:username")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;