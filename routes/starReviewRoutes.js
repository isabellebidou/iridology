const _ = require('lodash')
const logError = require("../services/utils");



const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require("../middlewares/requireCredits");


module.exports = (app) => {
  const StarReview = mongoose.model('starreviews');
  const UserData = mongoose.model("userdata");
  const User = mongoose.model('users');
  app.get("/api/starreviews", async (req, res) => {
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

    }).catch((err) => { //logError(err)
     });
    try {

      req.user.hasReviews = true;
      const user = await req.user.save();
      res.send(user);

    } catch (error) {
      res.status(422).send(error);
    }

  });
};