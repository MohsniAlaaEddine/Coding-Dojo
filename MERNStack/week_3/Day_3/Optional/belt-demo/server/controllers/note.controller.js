const Note = require('../models/note.model')


module.exports = {
    createNote: (req, res) => {
        Note.create(req.body)
            .then(newCreatedNote => {
                console.log(`New note created with sucess`);
                res.status(201).json({ data: newCreatedNote, message: 'New note created with success' })
            })
            .catch(error => {
                console.log(error)
                res.status(500).json(error.errors)
            })
    },
    findAllNotes: (req, res) => {
        Note.find()
            .then(notes => {
                console.log('All notes found with success');
                res.status(200).json({ notes, message: 'All notes found with success' })
            })
            .catch(error => console.log(error))

    },

    findOneNote: (req, res) => {
        Note.findById({ _id: req.params.id })
            .then(oneNote => {
                if (!oneNote) {
                    res.status(404).json({ error: 'Note not found' })
                } else {
                    res.status(200).json({ oneNote, message: 'Note found with success' })
                }
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({ error })
            })
    },
    update: (req, res) => {
        Note.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then(noteUpdated => {
                res.status(200).json({ noteUpdated, message: 'Note updated with success' })
            })
            .catch(error => {
                console.log(error);
                res.status(500).json(error.errors)
            })
    },
    deleteOneNote: (req, res) => {
        Note.findByIdAndDelete({ _id: req.params.id })
            .then(noteDeleted => {
                if (!noteDeleted) {
                    res.status(404).json({ error: 'Note not found' })
                } else {
                    res.status(200).json({ noteDeleted, message: 'Note deleted with success' })
                }
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({ error })
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({ error })
            })
    }
}