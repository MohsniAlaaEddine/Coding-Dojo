
const {findAllJokes, createNewJokes, findOneJokesById, updateOneJokes, deleteOneJokes}  = require('../controllers/controller')

module.exports = (app) => {
    app.get('/api/Jokes', findAllJokes)
    app.post('/api/Jokes', createNewJokes)
    app.get('/api/Jokes/:id', findOneJokesById)
    app.put('/api/Jokes/:id', updateOneJokes)
    app.delete('/api/Jokes/:id', deleteOneJokes)
}