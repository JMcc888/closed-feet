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
exports.getClient = async (req, res, next) => {
   const client = ClientForm.findById(req.params.id)
    .exec()
    .then(
      (form) => {
        res.render("pages/admin_pages/application_show", {
          form,
          user: req.user,
        });
      },
      (error) => {
        console.log(error);
      }
    );
}

// Get client edit form
exports.editClientForm = async (req, res, next) => {
    ClientForm.findById(req.params.id)
    .exec()
    .then((form) => {
      res.render("pages/admin_pages/application_edit", { form, user: req.user });
    }, (error) => {
        console.log(error);
      });
}