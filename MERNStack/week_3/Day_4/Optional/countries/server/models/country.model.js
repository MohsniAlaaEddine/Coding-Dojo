const mongoose=require('mongoose')
const CountrySchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"{PATH} is required"],
        minlength:[3,'name must be at least 3 characters']
    },
    flag:{
        type:String,
        required:[true,"{PATH} is required"],
        minlength:[10,'{PATH} must be at least 10 characters']
    },
    independent:{
        type:Boolean,
        default:false
    }
},{timestamps:true});

const Country = mongoose.model("Country", CountrySchema)
module.exports = Country;
