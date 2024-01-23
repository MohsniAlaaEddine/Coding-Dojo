const {findAllMovies, createNewMovie, findOneMovieById, updateOneMovie, deleteOneMovie}=require('../controllers/movie.controller')
const upload= require('../config/image.config')

module.exports  =(app)=>{
    app.get('/api/movies',findAllMovies)
    app.post('/api/movies/new',upload.array("files",5),createNewMovie)
    app.get('/api/movies/:id',findOneMovieById)
    app.put('/api/movies/:id',updateOneMovie)
    app.delete('/api/movies/:id',deleteOneMovie)
}