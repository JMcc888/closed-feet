const Job = require('../models/Job')

exports.newJob = async (req, res, next) => {
    const addJob = await Job.create(req.body)
    res.redirect('/success')
}

// Get Forms
exports.getJobs = async (req, res, next) => {
    const Jobs = await Job.find().
    exec().then((forms) => {
        res.render('pages/admin_pages/jobs', {forms, user: req.user})
    })
    
}

// Get Single Form
exports.getJob = async (req, res, next) => {
   const job = Job.findById(req.params.id)
    .exec()
    .then(
      (form) => {
        res.render("pages/admin_pages/job_show", {
          form,
          user: req.user,
        });
      },
      (error) => {
        console.log(error);
      }
    );
}

// Get Job edit form
exports.editJobForm = async (req, res, next) => {
    Job.findById(req.params.id)
    .exec()
    .then((form) => {
      res.render("pages/admin_pages/job_edit", { form, user: req.user });
    }, (error) => {
        console.log(error);
      });
}

// Edit Job information
exports.editJob = async (req, res, next) => {
    const updated = {
        First: req.body.First,
        Middle: req.body.Middle,
        Last: req.body.Last,
        DOB: req.body.DOB,
        Address: req.body.Address,
        Email: req.body.Email,
        HomePhone: req.body.HomePhone,
        MobilePhone: req.body.MobilePhone,
      };
      await Job.findByIdAndUpdate(req.params.id, updated, { new: true })
        .exec()
        .then(() => {
          res.redirect(`/job-applications/${req.params.id}`);
        })
        .catch((err) => {
          console.log(err);
        });
}

// Delete Application
exports.deleteJob = async (req, res, next) => {
    Job.findByIdAndDelete(req.params.id)
    .exec()
    .then(
      (deletedjob) => {
        console.log(("Deleted:", deletedjob));
        res.redirect("/job-applications");
      },
      (error) => {
        console.log(error);
      }
    );
}