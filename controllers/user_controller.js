const passport = require("passport");
const User = require("../models/User");

// User Login
exports.login = passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  });

// User Logout
exports.logout = async (req, res) => {
  // Has been updated in 0.6.0
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
};

// User Registration
exports.register = async (req, res, next) => {
    const newUser = await User.register(
    new User({
      username: req.body.username,
      email: req.body.email,
      role: req.body.role
    }),
    req.body.password,
  )
  // Removed passport authenticate so it doesn't log the user out
      res.redirect("/dashboard/users");
  };

// Current User Info
exports.userInfo = async (req, res, next) => {

}

// CRUD Operations //

// Get All Users

// Get Single User

// Update User

// Delete User