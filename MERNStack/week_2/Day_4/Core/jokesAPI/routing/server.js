const express = require ('express');
require ('dotenv').config()
const app = express();

const cors= require ('cors')

app.use(express.json());
app.use(express.urlencoded({extended :true}));
app.use(cors())
// connect with database
require('./config/config')
// import all routes
require('./routes/routes')(app)


app.listen(process.env.port,()=>{
    console.log('SERVER IS RUNNIG ON PORT ',process.env.port);
})