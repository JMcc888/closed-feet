const passport = require("passport");
const User = require("../models/User");

// User Login
exports.login = passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  });

// User Logout
exports.logout = async (req, res) => {
    req.logout();
    res.redirect("/");
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
    passport.authenticate("local")(req, res, () => {
      res.redirect("/dashboard/users");
    });
  
  };

// Current User Info
exports.userInfo = async (req, res, next) => {

}

// CRUD Operations //

// Get All Users

// Get Single User

// Update User

// Delete User