const _ = require('lodash')



const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');
const requireAdminAccess = require("../middlewares/requireAdminAccess");
const User = mongoose.model('users');
const UserData = mongoose.model("userdata");

module.exports = (app) => {


  app.get("/api/users_all", requireLogin, requireAdminAccess, async (req, res) => {
  

   /* try {
      const users = await User.aggregate( [
        {
           $lookup:
              {
                 from: "userdatas",
                 localField: "_id",
                 foreignField: "_user",
                 as: "data"
              }
        },
        {
          $unwind: "$data"
        },
        {
          $sort: {
            "data.name": 1
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
    }*/

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

    const users = await User.aggregate([
      {
        $lookup: {
          from: "userdatas",
          let: { userId: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: { $eq: ["$_user", "$$userId"] }
              }
            }
          ],
          as: "data"
        }
      },
      {
        $sort: {
          "data.name": 1
        }
        
      }
      
    ]);
   // console.log(users)
    res.send(users);
  });
}
  
