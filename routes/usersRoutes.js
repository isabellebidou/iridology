const _ = require('lodash')



const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');
const requireAdminAccess = require("../middlewares/requireAdminAccess");
const User = mongoose.model('users');
const UserData = mongoose.model("userdata");

module.exports = (app) => {


  app.get("/api/users_all", requireLogin, requireAdminAccess, async (req, res) => {
  

    try {
      const users = await UserData.aggregate( [
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
  });
}
    

//
    /*try {
      const users = await UserData.aggregate([
        {
          $lookup:
          {
            from: "users",
            localField: "_user",
            foreignField: "_id",
            as: "user"
          }
        }
      ]).exec((err, users) => {
        if (err) {
          console.log(err);
        } else {
          res.send(users);
        }
      })
    } catch (err) {
      console.log(err);
      res.status(500).send('Server error');
    }*/
