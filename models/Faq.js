const mongoose = require('mongoose')
const {Schema} = mongoose; // =const Schema = mongoose.Schema;  destructuring



const faqSchema = new Schema ({
    question: String,
    answer:String
    
})

mongoose.model('faqs',faqSchema);