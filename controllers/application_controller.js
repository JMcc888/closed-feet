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

// Edit client information
exports.editClient = async (req, res, next) => {
    const updated = {
        First: req.body.First,
        Middle: req.body.Middle,
        Last: req.body.Last,
        DOB: req.body.DOB,
        Address: req.body.Address,
        Email: req.body.Email,
        HomePhone: req.body.HomePhone,
        MobilePhone: req.body.MobilePhone,
        EmergencyContactName: req.body.EmergencyContactName,
        EmergencyContactRelationship: req.body.EmergencyContactRelationship,
        EmergencyContactNumber: req.body.EmergencyContactNumber,
        PrimaryProvider: req.body.PrimaryProvider,
        SecondaryProvider: req.body.SecondaryProvider,
      };
      await ClientForm.findByIdAndUpdate(req.params.id, updated, { new: true })
        .exec()
        .then(() => {
          res.redirect(`/applications/${req.params.id}`);
        })
        .catch((err) => {
          console.log(err);
        });
}

// Delete Application
exports.deleteClient = async (req, res, next) => {
    ClientForm.findByIdAndDelete(req.params.id)
    .exec()
    .then(
      (deletedclient) => {
        console.log(("Deleted:", deletedclient));
        res.redirect("/applications");
      },
      (error) => {
        console.log(error);
      }
    );
}