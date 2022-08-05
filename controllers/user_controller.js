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
      res.redirect("/user-settings");
  };

// Current User Info
exports.userInfo = async (req, res, next) => {

}

// Add User Page
exports.addUser = async (req, res, next) => {
  res.render('pages/admin_pages/add_user', { user: req.user })
}

// CRUD Operations //

// Get All Users
exports.getUsers = async (req, res, next) => {
  const users = await User.find().
    exec().then((users) => {
        res.render('pages/admin_pages/users', {users, user: req.user})
    })
}

// Get Single User
exports.getUser = async (req, res, next) => {
  const users = User.findById(req.params.id)
  .exec()
  .then(
    (users) => {
      res.render("pages/admin_pages/user_show", {
        users,
        user: req.user,
      });
    },
    (error) => {
      console.log(error);
    }
  );
}

// Update User Form
exports.editUserForm = async (req, res, next) => {
  User.findById(req.params.id)
    .exec()
    .then((users) => {
      res.render("pages/admin_pages/user_edit", { users, user: req.user });
    }, (error) => {
        console.log(error);
      });
}

// Update User
exports.updateUser = async (req, res, next) => {
const updated = {
  username: req.body.username,
  email: req.body.email,
  role: req.body.role,
}
  await User.findByIdAndUpdate(req.params.id, updated, { new: true })
  .exec()
  .then(() => {
    res.redirect(`/user-settings/${req.params.id}`);
  })
  .catch((err) => {
    console.log(err);
  });
}

// Delete User
exports.deleteUser = async (req, res, next) => {
  User.findByIdAndDelete(req.params.id)
  .exec()
  .then(
    () => { 
      res.redirect("/user-settings");
    },
    (error) => {
      console.log(error);
    }
  );
}