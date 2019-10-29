const router = require("express").Router();
const userController = require("../../controllers/userController");
const config = require("../../config/database");
const passport = require("passport");
require("../../config/passport")(passport);
const jwt = require('jsonwebtoken');
const User = require("../../models/user");

router.route("/")
  .get(userController.findAll)
  .post(userController.create);

router.post("/signup", function (req, res) {
  if (!req.body.username || !req.body.displayName || !req.body.password) {
    res.json({ success: false, msg: "Please fill out all required fields." });
  } else {
    let newUser = new User({
      username: req.body.username,
      displayName: req.body.displayName,
      password: req.body.password
    });

    newUser.save(function (err) {
      if (err) {
        return res.json({ success: false, msg: "Username already exists." });
      }
      res.json({ success: true, msg: "Successfully created new user." });
    });
  }
});

router.post('/signin', function(req, res) {
  User.findOne({
    username: req.body.username
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = jwt.sign(user.toJSON(), config.secret);
          // return the information including token as JSON
          res.json({success: true, token: 'JWT ' + token});
        } else {
          res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
});

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/login');
});

router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;