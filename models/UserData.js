const mongoose = require('mongoose');
const {Schema} = mongoose; // =const Schema = mongoose.Schema;  es2015 destructuring


const userDataSchema = new Schema ({
    fname: String,
    lname: String,
    gender:String,
    dob: Date,
    weight: Number,
    height: Number,
    history: String,
    genetics: String,
    gluten: String,
    dairy: String,
    eatingHabits:String,
    dentalHistory: String,
    bloodType: String,
    digestion: String,
    comments:String,
    medication: String,
    _user: {type:Schema.Types.ObjectId, ref: 'User' }

 

})

mongoose.model('userdata',userDataSchema);

/*

*/