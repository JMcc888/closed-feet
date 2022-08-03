// Dashboard
exports.dashboard = async (req, res, next) => {
    res.render('pages/admin_pages/dashboard', { user: req.user })
}

// Add User Page
exports.addUser = async (req, res, next) => {
    res.render('pages/admin_pages/add_user', { user: req.user })
}