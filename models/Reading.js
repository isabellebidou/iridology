const mongoose = require('mongoose')
const {Schema} = mongoose; // =const Schema = mongoose.Schema;  destructuring
const EyeSchema = require('./EyePic');


const readingSchema = new Schema ({
    body: String,
    _user: {type:Schema.Types.ObjectId, ref: 'User' },
    _offer: {type:Schema.Types.ObjectId, ref: 'Offer' },
    dateSent: Date,
    dateCompleted: {type: Date, default:null},
    comments:String,
    expectations:String
    
})

mongoose.model('readings',readingSchema);