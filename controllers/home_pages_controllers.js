// Index Page
exports.Index = async (req, res, next) => {
  res.render("pages/homepages/index", { user: req.user });
};

// About Us Page
exports.aboutUs = async (req, res, next) => {
  res.render('pages/homepages/about_us', { user: req.user })
}

// Apply Page
exports.apply = async (req, res, next) => {
  res.render('pages/homepages/apply', { user: req.user })
}

// Apply Client
exports.applyClient = async (req, res, next) => {
  res.render('pages/homepages/apply_client', { user: req.user })
}

// Apply Employee
exports.applyEmployee = async (req, res, next) => {
  res.render('pages/homepages/apply_employee', { user: req.user })
}

// Contact Page
exports.contact = async (req, res, next) => {
  res.render('pages/homepages/contact', { user: req.user })
}

// Login Page
exports.login = async (req, res, next) => {
  res.render('pages/homepages/login', { user: req.user })
}

// Successful Application
exports.success = async (req, res, next) => {
  res.render('pages/homepages/success', { user: req.user})
}

// Dashboard
exports.dashboard = async (req, res, next) => {
  res.render('pages/admin_pages/dashboard', { user: req.user })
}

