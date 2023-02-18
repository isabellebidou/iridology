const mongoose = require('mongoose');
const {Schema} = mongoose; // =const Schema = mongoose.Schema;  es2015 destructuring


const userSchema = new Schema ({
    googleId : String,
    credits: {type: Number, default: 0},
    type: {type: String, default: 'user'},
  


})

mongoose.model('users',userSchema);