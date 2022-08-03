const Message = require('../models/Message')

// Get Messages
exports.getMessages = async (req, res, next) => {
    const message = await Message.find().
    exec().then((messages) => {
        res.render('pages/admin_pages/messages', {messages, user: req.user})
    })
}

// Get Single Message
exports.getMessage = async (req, res, next) => {
    const message = Message.findById(req.params.id)
    .exec()
    .then(
      (message) => {
        res.render("pages/admin_pages/message_show", {
          message,
          user: req.user,
        });
      },
      (error) => {
        console.log(error);
      }
    );
}

// Create Message
exports.createMessage = async (req, res, next) => {
    const message = await Message.create(req.body)
    res.redirect('/')
}

// Delete Message
exports.deleteMessage = async (req, res, next) => {
    Message.findByIdAndDelete(req.params.id)
    .exec()
    .then(
      () => { 
        res.redirect("/messages");
      },
      (error) => {
        console.log(error);
      }
    );
}