const mongoose = require('mongoose')

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter the name'],
        minlength: [2, 'content must be at least 2 characters']
    },
    position: {
        type: String,
        required: [true, 'Please enter the position']
    },
    image: {
        type: String,
        required: [true, 'Please enter the image url']
    },
    phrase: {
        type: String,
        required: [true, 'Please enter the catch phrase'],
        minlength: [5, 'content must be at least 5 characters']
    },
    chest:{
        type:Number,
        required: [true, 'Please enter number of chests']
    },
    leg:{
        type:Boolean,
        default:true
    },
    eye:{
        type:Boolean,
        default:true
    },
    hand:{
        type:Boolean,
        default:true
    },
    
}, { timestamps: true })

const Pirate = mongoose.model("Pirate", PirateSchema)
module.exports = Pirate;