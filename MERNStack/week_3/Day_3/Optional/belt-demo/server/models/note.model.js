const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter your note title'],
        minlength: [3, 'content must be at least 3 characters']
    },
    content: {
        type: String,
        required: [true, 'Please enter your note content'],
        minlength: [10, 'content must be at least 10 characters']
    },
    isImportant: {
        type: Boolean,
        default: false
    },
    
}, { timestamps: true })

const Note = mongoose.model("Note", NoteSchema)
module.exports = Note;