const mongoose = require('mongoose')
const {Schema} = mongoose; // =const Schema = mongoose.Schema;  destructuring



const starReviewSchema = new Schema ({
    name: {type: String, default:'anonymous'},
    number:{type: Number, default:0},
    comment: String,
    dateSent: Date,
    _user: {type:Schema.Types.ObjectId, ref: 'User' },
    
})

mongoose.model('starreviews', starReviewSchema);