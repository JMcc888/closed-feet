const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
    Name: {
        type: String
    },
    Email: {
        type: String
    },
    Number: {
        type: String
    },
    Message: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model("Message", MessageSchema);