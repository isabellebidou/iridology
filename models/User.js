const mongoose = require('mongoose');
const {Schema} = mongoose; // =const Schema = mongoose.Schema;  es2015 destructuring


const userSchema = new Schema ({
    googleId : String,
    credits: {type: Number, default: 0},
    //gender, age, birth date, weight, height
 

})

mongoose.model('users',userSchema);