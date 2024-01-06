const { createNote, findAllNotes, findOneNote, update, deleteOneNote } = require("../controllers/note.controller")


module.exports=app=>{
    app.post('/api/notes',createNote),
    app.get('/api/notes',findAllNotes),
    app.get('/api/notes/:id',findOneNote),
    app.put('/api/notes/:id',update),
    app.delete('/api/notes/:id',deleteOneNote)
}