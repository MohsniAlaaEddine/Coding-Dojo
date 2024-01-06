const { createProduct, findAllProduct, findOneProduct, update, deleteOneProduct } = require("../controllers/product.controller")


module.exports=(app)=>{
    app.post('/api/products',createProduct),
    app.get('/api/products',findAllProduct),
    app.get('/api/products/:id',findOneProduct),
    app.put('/api/products/:id',update),
    app.delete('/api/products/:id',deleteOneProduct)
}