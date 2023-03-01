const _ = require ('lodash')



const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require("../middlewares/requireCredits");
const StarReview = mongoose.model('starreviews');
const UserData = mongoose.model("userdata");
const User = mongoose.model('users');

module.exports = (app) => {



app.get("/api/starreviews", async(req, res) => {
    const starreviews = await StarReview.find()
    res.send(starreviews);

})

app.post("/api/starreview", requireLogin, async (req, res) => {
    const { name, number, comment } = req.body;
    const starreview = new StarReview({
      name, 
      number,
     comment,
      dateSent: Date.now(),
      _user: req.user.id
    });
    starreview.save().then((res) => {
      console.log('starreview is saved')
      
    }).catch((err) => {console.error(err)});
    try {
      
      req.user.hasReviews = true;
      const user = await req.user.save();
      res.send(user);
      
    } catch (error) {
      res.status(422).send(error);
    }
    
  });
};