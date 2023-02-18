const _ = require ('lodash')



const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require("../middlewares/requireCredits");
const Reading = mongoose.model('readings');
const UserData = mongoose.model("userdata");
const User = mongoose.model('users');

module.exports = (app) => {

  /*app.get("/api/readings", requireLogin, async(req, res) => {
    try {
      const readings = await Reading.find({ dateCompleted: null }).aggregate( [
        {
           $lookup:
              {
                 from: "users",
                 localField: "_user",
                 foreignField: "_id",
                 as: "user"
              }
        },
        {
          $unwind: "$user"
        },
        {
          $sort: {
            "name": 1
          }
        }
      ] ).exec((err, users) => {
        if (err) {
          console.log(err);
        } else {
          res.send(users);
        }
      });
    } catch (err) {
      console.log(err);
      res.status(500).send('Server error');
    }

  })*/

  app.get("/api/readings", requireLogin, async(req, res) => {
 
      const readings = await Reading.find(({_user : req.user.id}))
      res.send(readings);

  })


  app.get("/api/readings/pending", requireLogin, async(req, res) => {
    try{
    const readings = await Reading.find({ dateCompleted: null }).aggregate( [
    {
       $lookup:
          {
             from: "users",
             localField: "_user",
             foreignField: "_id",
             as: "user"
          }
    },
    {
      $unwind: "$user"
    },
    {
      $sort: {
        "name": 1
      }
    }
  ] ).exec((err, users) => {
    if (err) {
      console.log(err);
    } else {
      res.send(users);
    }
  });
} catch (err) {
  console.log(err);
  res.status(500).send('Server error');
}
    res.send(readings);

  })
  app.get("/api/readings/:id", requireLogin, async(req, res) => {
    const readings = await Reading.find({_user : req.params.id});
    res.send(readings);

  })


  app.post("/api/readings", requireLogin, requireCredits, async (req, res) => {
    const {  comments, expectations, leftEye, rightEye } = req.body;
    const reading = new Reading({
      comments,
      expectations, 
      eyes : [({side:"left", _user: req.user.id, dateSent: Date.now(),pic: leftEye},{side:"right", _user: req.user.id, dateSent: Date.now(),pic: rightEye})],
      _user: req.user.id,
      dateSent: Date.now()
    });
    reading.save().then((res) => {
      console.log('reading is saved')
      
    }).catch((err) => {console.error(err)});
    

    try {
      
      req.user.credits -= 80;
      const user = await req.user.save();
      res.send(user);
      
    } catch (error) {
      res.status(422).send(error);
    }
    
  });

  



};
