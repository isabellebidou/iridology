const _ = require("lodash");

const fs = require("fs");

const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
//const requireCredits = require("../middlewares/requireCredits");
const UserData = mongoose.model("userdata");

module.exports = (app) => {
  app.get("/api/user_data", requireLogin, async (req, res) => {
    console.log("get  /api/user_data");
    const userData = await UserData.find({ _user: req.user.id });
   // console.log('userData')
   // console.log(userData)
    res.send(userData);
  });
  app.post("/api/userdata", requireLogin, async (req, res) => {
    const {  gender, dob ,weight,height,history,genetics,gluten,dairy,dentalHistory,bloodType,digestion, medication, comments} = req.body;
    const userdata = new UserData({
      gender,
      dob, 
      weight,
      height,
      history,
      genetics,
      gluten,
      dairy,
      dentalHistory,
      bloodType,
      digestion,
      medication,
      comments,
      _user: req.user.id
    });
    
  
    try {
      
      userdata.save().then((res) => {console.log('user data is saved')}).catch((err) => {console.error(err)});
      //res.send(user);
      
    } catch (error) {
      res.status(422).send(error);
    }
    
  });
  // _user: req.user.id
  app.post("/api/userdata/edit", requireLogin, async (req, res) => {
    console.log('api/userdata/edit')
    console.log(req.body)
    const {  gender ,weight,height,history,genetics,gluten,dairy,dentalHistory,bloodType,digestion, medication, comments} = req.body;
    const userId = req.user.id;
    UserData.updateOne({_user:userId},
    {$set:{
      gender, 
      weight,
      height,
      history,
      genetics,
      gluten,
      dairy,
      dentalHistory,
      bloodType,
      digestion,
      medication,
      comments
    }}, (err,doc) => {
      if(err) return console.error(err)
      res.json(doc)
    })
    
  });

  

  
};


