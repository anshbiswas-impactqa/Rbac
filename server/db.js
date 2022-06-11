const Mongoose = require('mongoose')
const config = require('./config/database')

const connectDB = async () => {
    Mongoose.connect(config.db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log('MongoDB Connected')
}

module.exports = connectDB