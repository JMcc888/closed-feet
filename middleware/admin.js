// Auth middleware
function authorized(req, res, next) {
    // First check if user is logged in
    if (req.user) {
        // Check if user is authorized
        if (req.user.role !== process.env.AUTHORIZED) {
            res.redirect('/')
        } else {
            return next()
        }
    } else {
        res.redirect('/')
    }

}

module.exports = authorized;