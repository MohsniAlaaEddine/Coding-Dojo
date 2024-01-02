const mongoose = require('mongoose');
const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required:[true,'Title is required!'],
        minlength:[3,'{PATH} length must be at least 3 ']
    },
    image: {
        type: String
    },
    releaseYear: {
        type: Number,
        min:[1800,'Movie realese year must be valid']
    },
    sceen: {
        type: Boolean,
        default:false
    },
    // isDeleted:{
    //     type:Boolean,
    //     default:false
    // }
}, { timestamps: true });

const Movie = mongoose.model('Movie',MovieSchema)
module.exports=Movie
