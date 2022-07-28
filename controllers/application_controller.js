const ClientForm = require('../models/ClientForm')

// Upload Form
exports.newClient = async (req, res, next) => {
    const addClient = await ClientForm.create(req.body)
    res.redirect('/')
}

// Get Forms

// Get Single Form