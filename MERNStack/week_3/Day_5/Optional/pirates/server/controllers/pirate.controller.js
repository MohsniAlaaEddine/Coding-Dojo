const Pirate = require('../models/pirate.model')


module.exports = {
    createPirate: (req, res) => {
        Pirate.create(req.body)
            .then(newCreatedPirate => {
                console.log(`New Pirate created with sucess`);
                res.status(201).json({ data: newCreatedPirate, message: 'New Pirate created with success' })
            })
            .catch(error => {
                console.log(error)
                res.status(500).json(error.errors)
            })
    },
    findAllPirates: (req, res) => {
        Pirate.find().sort({name:1})
            .then(pirates => {
                console.log('All Pirates found with success');
                res.status(200).json({ pirates, message: 'All Pirates found with success' })
            })
            .catch(error => console.log(error))

    },

    findOnePirate: (req, res) => {
        Pirate.findById({ _id: req.params.id })
            .then(onePirate => {
                if (!onePirate) {
                    res.status(404).json({ error: 'Pirate not found' })
                } else {
                    res.status(200).json({ onePirate, message: 'Pirate found with success' })
                }
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({ error })
            })
    },
    update: (req, res) => {
        Pirate.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then(pirateUpdated => {
                res.status(200).json({ pirateUpdated, message: 'Pirate updated with success' })
            })
            .catch(error => {
                console.log(error);
                res.status(500).json(error.errors)
            })
    },
    deleteOnePirate: (req, res) => {
        Pirate.findByIdAndDelete({ _id: req.params.id })
            .then(pirateDeleted => {
                if (!pirateDeleted) {
                    res.status(404).json({ error: 'Pirate not found' })
                } else {
                    res.status(200).json({ pirateDeleted, message: 'Pirate deleted with success' })
                }
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({ error })
            })
    }
}