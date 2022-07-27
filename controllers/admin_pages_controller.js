// Dashboard

// Users Page
exports.usersPage = async (req, res, next) => {
    res.render('pages/admin_pages/users')
}

// Add User Page
exports.addUser = async (req, res, next) => {
    res.render('pages/admin_pages/add_user')
}