const mongoose = require('mongoose')

const connectDB = async () => {
    const con = await mongoose.connect(process.env.DB_URI, {})
    console.log('Zhang would be very proud :)')
}

module.exports = connectDB