const mongoose = require('mongoose')
const {Schema} = mongoose; // =const Schema = mongoose.Schema;  destructuring



const linkSchema = new Schema ({
    name: String,
    url:String,
    type:{type: String, default:'text'},
    comment: String
    
})

mongoose.model('links', linkSchema);