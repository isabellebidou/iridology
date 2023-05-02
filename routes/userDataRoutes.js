const _ = require("lodash");

const fs = require("fs");
const mongoose = require('mongoose');
const requireLogin = require("../middlewares/requireLogin");
const logError = require("../services/utils");


module.exports = (app) => {

  const UserData = mongoose.model("userdata");
  app.get("/api/user_data", requireLogin, async (req, res) => {
    const userData = await UserData.find({ _user: req.user.id });
    res.send(userData);
  });
  app.get("/api/user_data/:id", requireLogin, async (req, res) => {

    const userData = await UserData.find({ _user: req.params.id });


    res.send(JSON.stringify(userData));
  });
  app.get("/api/user_data/name/:id", requireLogin, async (req, res) => {

    const userDataName = await UserData.findOne({ _user: req.params.id },'name' );

    res.send(userDataName);
  });
  app.post("/api/userdata", requireLogin, async (req, res) => {
    const {  fname,lname,gender, dob ,weight,height,history,genetics,gluten,dairy,eatingHabits,dentalHistory,bloodType,digestion, medication, comments} = req.body;
    const userdata = new UserData({
      fname,
      lname,
      gender,
      dob, 
      weight,
      height,
      history,
      genetics,
      gluten,
      dairy,
      eatingHabits,
      dentalHistory,
      bloodType,
      digestion,
      comments,
      medication,
      _user: req.user.id
    });
    
  
    try {
      
      userdata.save().then((res) => {}).catch((err) => {//logError(err)
      });
      res.send(userdata);
      
    } catch (error) {
      res.status(422).send(error);
    }
    
  });
  // _user: req.user.id
  app.post("/api/userdata/edit", requireLogin, async (req, res) => {
    let responseSent = false;
    const {  fname,lname, gender ,weight,height,history,genetics,gluten,dairy,eatingHabits,dentalHistory,bloodType,digestion,comments,medication, dob} = req.body;
    const userId = req.user.id;
  
    UserData.updateOne({_user:userId},
    {$set:{
      fname,
      lname,
      gender, 
      weight,
      height,
      history,
      genetics,
      gluten,
      dairy,
      eatingHabits,
      dentalHistory,
      bloodType,
      digestion,
      comments,
      medication,
      dob
    }}, (err,doc) => {
      if(err) {
        if (!responseSent) {
          responseSent = true;
          res.status(422).send(err);
        }
      } else {
        if (!responseSent) {
          responseSent = true;
          res.json(doc);
        }
      }
    });
  });
  

  

  
};


