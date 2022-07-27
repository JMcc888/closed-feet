// Dashboard
exports.dashboard = async (req, res, next) => {
    res.render('pages/admin_pages/dashboard', { user: req.user })
}

// Users Page
exports.usersPage = async (req, res, next) => {
    res.render('pages/admin_pages/users', { user: req.user })
}

// Add User Page
exports.addUser = async (req, res, next) => {
    res.render('pages/admin_pages/add_user', { user: req.user })
}