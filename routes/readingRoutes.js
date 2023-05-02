const _ = require('lodash')



const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const keys = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');


const { response } = require('express');
const logError = require("../services/utils");

module.exports = (app) => {
  const Reading = mongoose.model('readings');

const sendTestEmail = () => {
  return new Promise((resolve, reject) => {

    var transporter = nodemailer.createTransport({
      service:'gmail',
      auth:{
        type: 'OAuth2',
        user:'isa.bidou@gmail.com',
        pass: keys.nodemailer,
        clientId: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        refreshToken: keys.refreshToken
      },
      from: 'isa.bidou@gmail.com',
    })

    const mail_option = {
      from:'isa.bidou@gmai.com',
      to: 'isa.bidou@gmai.com',
      subject: 'new reading booked !',
      text: 'a reading was booked'

    }
    transporter.sendMail(mail_option, (error, info) => {
      if (error) {
        //logError(error)
        return reject({message: `an error has occured`})
      }
      return resolve({message: `email sent successfully`})

    })

  })

}

/*const sendNewReadingEmail = (offer, user, order) => {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service:'gmail',
      auth:{
        user:'isa.bidou@gmail.com',
        pass: keys.nodemailer
      }
    })

    const mail_option = {
      from:'isa.bidou@gmai.com',
      to: 'isa.bidou@gmai.com',
      subject: 'new reading booked',
      text: 'a reading was booked. offer id: '+ offer + ' user id: '+user+ ' reading id: '+order
    }
    transporter.sendMail(mail_option, (error, info) => {
      if (error) {
        //logError(error)
        return reject({message: `an error has occured`})
      }
      return resolve({message: `email sent successfully`})

    })

  })

}*/
app.get("/api/testemail",  (req, res) => {

  sendTestEmail()
  .then(response => res.send(response.message))
  .catch(error => res.status(500).send(error.message))

})

  app.get("/api/readings", requireLogin, async (req, res) => {

    const readings = await Reading.find(({ _user: req.user.id }))
    res.send(readings);

  })

  app.get("/api/readings/completed", requireLogin, async (req, res) => {
    try {
      const readings = await Reading.find({ dateCompleted: { $ne: null }, _user: req.user.id });
      res.send(readings);
    } catch (err) {
      //logError(err);
      res.status(500).send('Server error');
    }

  })


  app.get("/api/readings/pending", requireLogin, async (req, res) => {
    try {
      const readings = await Reading.find({ dateCompleted: null }).aggregate([
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
      ]).exec((err, users) => {
        if (err) {
          //logError(err);
        } else {
          res.send(users);
        }
      });
    } catch (err) {
      //logError(err);
      res.status(500).send('Server error');
    }
    res.send(readings);

  })
  app.get("/api/readings/:id", requireLogin, async (req, res) => {
    const readings = await Reading.find({ _user: req.params.id });
    res.send(readings);

  })
  app.post("/api/readings", requireLogin, async (req, res) => {
    const { expectations, offerId } = req.body;
    const reading = new Reading({
      expectations,
      _offer: offerId,
      _user: req.user.id,
      dateSent: Date.now()
    });
    reading.save().then((res) => {
      

    }).catch((err) => { //logError(err) 
    });
    try {

      req.user.numberOfReadings += 1;
      //sendNewReadingEmail(offerId,req.user.id, reading._id)
      const user = await req.user.save();
      res.send(reading);

    } catch (error) {
      res.status(422).send(error);
    }

  });

};
