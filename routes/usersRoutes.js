const _ = require('lodash')



//const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');
const requireAdminAccess = require("../middlewares/requireAdminAccess");


module.exports = (app, db) => {

  const User = db.model('users');
const UserData = db.model("userdata");

  app.get("/api/users_all", requireLogin, requireAdminAccess, async (req, res) => {


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
  
