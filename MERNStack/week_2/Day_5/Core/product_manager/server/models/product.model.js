const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter your note title'],
        minlength: [3, 'content must be at least 3 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please enter the price'],
        minlength: [10, 'content must be at least 10 characters']
    },
    description: {
        type: String,
        required: [true, 'Please enter the description'],
        minlength: [10, 'content must be at least 10 characters']
    },

}, { timestamps: true })

const Product = mongoose.model("Product", ProductSchema)
module.exports = Product;