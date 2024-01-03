const Jokes = require('../models/model')

module.exports.findAllJokes = (req, res) => {
    Jokes.find()
        .then(allJokes => {
            console.log("All Jokes From DB", allJokes);
            res.status(200).json({ data: allJokes, message: 'All Jokes List', ok: true })
        })
        .catch(error => {
            console.log(error);
            res.status(404).json({ error })
        })//[]
}

module.exports.findOneJokesById = (req, res) => {
    Jokes.findById({ _id: req.params.id })
        .then(oneJokes => {
            console.log("Movie Found", oneJokes);
            if(!oneJokes) {
                res.status(404).json({ error:"Joke Not Found", ok:false })
            }else{
                res.status(200).json({ data: oneJokes, message: 'Jokes Found', ok: true })
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error })
        })//[]
}

module.exports.createNewJokes = (req, res) => {
    Jokes.create(req.body)
        .then(newCreatedJokes => {
            console.log("New  Movie", newCreatedJokes);
            res.status(201).json({ data: newCreatedJokes, message: 'Jokes Created with success', ok: true })
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error })
        })
}

module.exports.updateOneJokes = (req, res) => {
    Jokes.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(updatedJokes => {
            console.log("Jokes To Update", updatedJokes);
            res.status(200).json({ data: updatedJokes, message: 'Jokes Updated with success', ok: true })

        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error })
        })
}

module.exports.deleteOneJokes = (req,res) => {
    Jokes.findByIdAndDelete({_id: req.params.id})
    .then(deletedJokes => {
        console.log("Deleted Movie", deletedJokes);
        res.status(200).json({ data: deletedJokes, message: 'Joke deleted with success', ok: true })
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ error })
    })
}