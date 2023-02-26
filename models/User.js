const mongoose = require('mongoose');
const {Schema} = mongoose; // =const Schema = mongoose.Schema;  es2015 destructuring


const userSchema = new Schema ({
    googleId : String,
    numberOfReadings: {type: Number, default: 0},
    type: {type: String, default: 'user'},
    email: String,
    hasReviews: {type: Boolean, default: false},
  


})

mongoose.model('users',userSchema);