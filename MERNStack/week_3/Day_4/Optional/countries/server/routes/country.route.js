const { findOneCountryById, createCountry, findAllCountry, Update, deleteCountry } = require("../controllers/country.controller")


module.exports=(app)=>{
    app.post('/api/country',createCountry),
    app.get('/api/country',findAllCountry),
    app.get('/api/country/:id',findOneCountryById),
    app.put('/api/country/:id',Update),
    app.delete('/api/country/:id',deleteCountry)
}