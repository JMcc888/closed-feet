const ClientForm = require('../models/ClientForm')

// Upload Form
exports.newClient = async (req, res, next) => {
    const addClient = await ClientForm.create(req.body)
    res.redirect('/')
}

// Get Forms
exports.getClients = async (req, res, next) => {
    const clients = await ClientForm.find().
    exec().then((forms) => {
        res.render('pages/admin_pages/applications', {forms, user: req.user})
    })
    
}

// Get Single Form