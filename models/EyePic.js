const mongoose = require('mongoose')
const {Schema} = mongoose; // =const Schema = mongoose.Schema;  destructuring


const eyepicSchema = new Schema ({
    side: String,
    _user: {type:Schema.Types.ObjectId, ref: 'User' },
    dateSent: {type: Date, default:Date.now()},
    pic: {
        data: Buffer,
        contentType:String
    },
    picPath: String,
    type: String,
    imageUrl:String,
    rawUrl:String
    
})

mongoose.model('eyepics',eyepicSchema);