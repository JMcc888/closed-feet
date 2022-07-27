const mongoose = require('mongoose')
const plm = require('passport-local-mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, "Please enter an email address"],
        match: [
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        ],
        unique: true,
      },
      role: {
        type: String,
        enum: ["Client", "Doctor"],
      },
      password: {
        type: String,
        select: false,
      },

})

// Passport Local Mongoose Plugin
UserSchema.plugin(plm)

module.exports = mongoose.model("User", UserSchema);