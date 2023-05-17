const mongoose = require('mongoose')
const {Schema} = mongoose; // =const Schema = mongoose.Schema;  destructuring



const readingSchema = new Schema ({
    _user: {type:Schema.Types.ObjectId, ref: 'User' },
    _offer: {type:Schema.Types.ObjectId, ref: 'Offer' },
    dateSent: Date,
    dateCompleted: {type: Date, default:null},
    expectations:String,
    pdfPath : String,
    pdfUrl: String
    
})

mongoose.model('readings',readingSchema);