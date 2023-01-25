const mongoose = require('mongoose')

let categorySchema = new mongoose.Schema({
    categoryId: {
        type: String,
        required: true
    },
    categoryName: {
        type: String,
        unique: true,
        required: true
    }
})

module.exports = mongoose.model('category', categorySchema)
