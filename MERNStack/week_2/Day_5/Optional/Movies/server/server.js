const imagecontroller =require('./controllers/movie.controller')
const express = require('express');
require('dotenv').config()
const app = express();
const cors = require('cors')
const path = require('path');
const multer = require('multer')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
// connect with database
require('./config/mongoose.config')
// import all routes
require('./routes/movies.routes')(app)

app.listen(process.env.port, () => {
    console.log('SERVER IS RUNNIG ON PORT ', process.env.port);
})