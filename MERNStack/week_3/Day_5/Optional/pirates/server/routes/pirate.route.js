const { createPirate, findAllPirates, findOnePirate, update, deleteOnePirate } = require("../controllers/pirate.controller")


module.exports=app=>{
    app.post('/api/pirates',createPirate),
    app.get('/api/pirates',findAllPirates),
    app.get('/api/pirates/:id',findOnePirate),
    app.put('/api/pirates/:id',update),
    app.delete('/api/pirates/:id',deleteOnePirate)
}