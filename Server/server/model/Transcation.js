const mongoose = require('mongoose')

const transcationSchema = new mongoose.Schema({
    amount: Number,
    vendor: String,
    category: String,
    date: Date
})

const Transcation = mongoose.model("Transcation", transcationSchema)
module.exports = Transcation
