const _ = require('lodash')



const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');
const requireAdminAccess = require("../middlewares/requireAdminAccess");


module.exports = (app) => {

  const User = mongoose.model('users');
  const UserData = mongoose.model("userdata");

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
    res.send(users);
  });
}

