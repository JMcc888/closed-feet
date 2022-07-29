const mongoose = require('mongoose')

const ClientFormSchema = new mongoose.Schema({
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
    EmergencyContactName: {
        type: String,
        required: true
    },
    EmergencyContactRelationship: {
        type: String,
        required: true
    },
    EmergencyContactNumber: {
        type: String,
        required: true
    },
    PrimaryProvider: {
        type: String,
        required: true
    },
    SecondaryProvider: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model("ClientForm", ClientFormSchema);