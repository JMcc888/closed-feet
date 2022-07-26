// Index Page
exports.Index = async (req, res, next) => {
  res.render("pages/homepages/index");
};

// About Us Page
exports.aboutUs = async (req, res, next) => {
  res.render('pages/homepages/about_us')
}

// Apply Page
exports.apply = async (req, res, next) => {
  res.render('pages/homepages/apply')
}

// Apply Client
exports.applyClient = async (req, res, next) => {
  res.render('pages/homepages/apply_client')
}

// Apply Employee
exports.applyEmployee = async (req, res, next) => {
  res.render('pages/homepages/apply_employee')
}

// Contact Page
exports.contact = async (req, res, next) => {
  res.render('pages/homepages/contact')
}

// Login Page
exports.login = async (req, res, next) => {
  res.render('pages/homepages/login')
}