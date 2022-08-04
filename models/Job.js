const mongoose = require('mongoose')

// May add more fields, for now will be a contact form
const JobSchema = new mongoose.Schema({
    First: {
        type: String,
        required: true

    },
    Middle: {
        type: String,
    },
    Last: {
        type: String,
        required: true,
    },
    DOB: {
        type: Date,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        match: [
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          ],
          required: true
    },
    HomePhone: {
        type: String
    },
    MobilePhone: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Job', JobSchema)