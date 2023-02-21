const mongoose = require('mongoose')
const {Schema} = mongoose; // =const Schema = mongoose.Schema;  destructuring



const offerSchema = new Schema ({
    name: String,
    description:String,
    price: Number
    
})

mongoose.model('offers',offerSchema);