const mongoose = require('mongoose')

const JokesSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    image:{
        type:String
}})

const Jokes = mongoose.model("Jokes",JokesSchema)
module.exports = Jokes;