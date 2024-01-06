const Country = require('../models/country.model')

module.exports = {
    createCountry: (req, res) => {
        Country.create(req.body)
            .then(newCreatedCountry => {
                console.log(`New note created with sucess`);
                res.status(201).json({ data: newCreatedCountry, message: 'New country created with success' })
            })
            .catch(error => {
                console.log(error)
                res.status(500).json(error.errors)
            })
    },
    findAllCountry: (req, res) => {
        Country.find()
            .then(country => {
                console.log('All countries found with success');
                res.status(200).json({ country, message: 'All coutries found with success' })
            })
            .catch(error => console.log(error))

    },
    findOneCountryById: (req, res) => {
        Country.findById({ _id: req.params.id })
            .then(oneCountry => {
                if (!oneCountry) {
                    res.status(404).json({ error: 'country not found' })
                } else {
                    res.status(200).json({ oneCountry, message: 'country found with success' })
                }
            })
            .catch(error => {
                res.status(500).json({ error })
                console.log(error)
            })
    },
    Update: (req, res) => {
        Country.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then(countryUpdated => {
                res.status(200).json({ countryUpdated, message: 'country updated with success' })
            })
            .catch(error => {
                console.log(error);
                res.status(500).json(error.errors)
            })
    },
    deleteCountry: (req, res) => {
        Country.findByIdAndDelete({ _id: req.params.id })
            .then(countryDeleted => {
                res.status(200).json({ countryDeleted, message: 'country deleted with success' })
            })
            .catch(error => console.log(error))
    }
}