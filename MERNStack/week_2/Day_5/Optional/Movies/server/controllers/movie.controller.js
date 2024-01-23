const Movie = require('../models/movie.model')
const multer = require('multer');
const { v4: uuidv4 } = require('uuid')
const path = require('path');

// read all movie
module.exports.findAllMovies = (req, res) => {
    Movie.find()
        .then(allMovies => {
            // console.log('All movies from db', allMovies);
            res.status(200).json({ data: allMovies, message: 'All movies list', ok: true })
        })
        .catch(error => {
            console.log(error);
            res.status(404).json({ error })
        })
}

module.exports.createNewMovie = (req, res) => {

    const pictureFiles = req.files;
    const filepaths = pictureFiles.map(file => "/images/" + file.filename);

    Movie.create({ ...req.body, image: filepaths }).then(response => {
        res.json(response)
    })
        .catch(err => res.status(400).json(err))

}
module.exports.findOneMovieById = (req, res) => {

    Movie.findById({ _id: req.params.id })
        .then(oneMovie => {
            console.log('Movie found', oneMovie);
            if (!oneMovie) {
                res.status(404).json({ error: 'Movie Not found!', ok: false })
            } else {
                res.status(200).json({ data: oneMovie, message: 'Movie Found', ok: true })
            }
        })
        .catch(error => {
            console.log(error);
            res.status(404).json({ error })
        })
}

module.exports.updateOneMovie = (req, res) => {
    Movie.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedMovie => {
            console.log('updated movie', updatedMovie);
            res.status(201).json({ data: updatedMovie, message: 'updated with success', ok: true })
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error })
        })
}

module.exports.deleteOneMovie = (req, res) => {
    Movie.findByIdAndDelete({ _id: req.params.id })
        .then(deletedMovie => {
            console.log('deleted movie', deletedMovie);
            res.status(200).json({ data: deletedMovie, message: 'movie deleted with success', ok: true })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error })
        })
}
// module.exports.uploadImage = (req, res) => {
//     Movie.create({ path: req.file.path })
//         .then(uploadedImage => {
//             console.log('🎗️🎗️🎗️🎗️🎗️🎗️🎗️🎗️🎗️🎗️🎗️🎗️🎗️', path);
//             console.log('image uploaded', uploadedImage);
//             res.status(201).json(uploadedImage)
//         })
//         .catch(error=>console.log(error))
// }