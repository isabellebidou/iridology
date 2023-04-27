const _ = require('lodash')
const mongoose = require('mongoose');
const fs = require("fs");
const nodemailer = require('nodemailer');
const keys = require('../config/keys');
const upload = require("../config/storage-config");
const requireLogin = require('../middlewares/requireLogin');
const logError = require("../services/utils");
const sharp = require('sharp')
const { uploadFile, deleteFile, deleteSeveral, getObjectSignedUrl } = require('../services/s3.js');



module.exports = (app) => {
  const Eye = mongoose.model('eyepics');

  function findPathPics(ids) {
    return new Promise((resolve, reject) => {
      Eye.find({ _id: { $in: ids } }, { picPath: 1, type: 1 })
        .exec(function (err, docs) {
          if (err) {
            reject(err); // Reject the promise with the error
          } else {
            resolve(docs); // Resolve the promise with the `docs` array
          }
        });
    });
  }
  //https://www.youtube.com/watch?v=MJhsVDpYzQs&ab_channel=Koding101

  const sendNewEyeUploadEmail = (file, user, side) => {
    return new Promise((resolve, reject) => {


      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'isa.bidou@gmail.com',
          pass: keys.nodemailer
        },
        from: 'isa.bidou@gmail.com',
      })

      const mail_option = {
        from: 'isa.bidou@gmai.com',
        to: 'isa.bidou@gmai.com',
        subject: 'new eye pic upload: ' + side,
        text: 'an eye pic was uploaded. filename : ' + file + ' user id: ' + user + ' eye side : ' + side,
      }

      transporter.sendMail(mail_option, (error, info) => {
        if (error) {
         // logError(error)
          return reject({ message: `an error has occured` })
        }
        return resolve({ message: `email sent successfully` })
      })
    });
  }


  app.delete("/api/user_eye_pics/delete", async (req, res) => {
    const idsToDelete = req.body.idsToDelete.map((id) => mongoose.Types.ObjectId(id));
    try {
      const pics = await findPathPics(idsToDelete);
      deleteSeveral(pics);
      const result = await Eye.deleteMany({ _id: { $in: idsToDelete } });
      res.send(result);
    } catch (err) {
      console.log(err);
      res.send("Failed to delete eye pics");
    }
  });
  

  app.get("/api/user_eye_pics", async (req, res) => {
    try {
      const eyes = await Eye.find({ _user: req.user.id });
      const eyePromises = eyes.map(async (eye) => {
        const path = await getObjectSignedUrl("eyepics/" + eye.picPath + '_resized');
        eye.imageUrl = path;
        return eye;
      });
      const eyesWithUrls = await Promise.all(eyePromises);
      res.send(eyesWithUrls);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: 'Internal Server Error' });
    }
  });
  app.get("/api/raw_eye_pic/:id", async (req, res) => {
    try {
      const eyepic = await Eye.find({ _id: req.params.id });
      const eyePromises = eyepic.map(async (eye) => {
        const path = await getObjectSignedUrl("eyepics/" + eye.picPath + '_raw');
        return path;
         
      });
      const url = await Promise.all(eyePromises);
      res.send(url);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: 'Internal Server Error' });
    }
  });


  app.get("/api/user_eye_pics/:id", async (req, res) => {
    try {
      const eyes = await Eye.find({ _user: req.params.id });
      const eyePromises = eyes.map(async (eye) => {
        const path = await getObjectSignedUrl("eyepics/" + eye.picPath + '_resized');
        eye.imageUrl = path;
        return eye;
      });
      const eyesWithUrls = await Promise.all(eyePromises);
      res.send(eyesWithUrls);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: 'Internal Server Error' });
    }
  });

  //https://www.youtube.com/watch?v=NzROCbkvIE0
  app.post("/api/eyes", requireLogin, upload.single("testImage"), async (req, res) => {
    const { eyePic } = req.body;

    const eye = new Eye({

      side: req.body.side,
      _user: req.user.id,
      dateSent: Date.now(),
      //_reading:req.body.reading,
      pic: {
        data: fs.readFileSync('uploads/' + req.file.filename),
        contentType: 'image/png'
      }
    });

    eye.save().then((res) => {
      sendNewEyeUploadEmail(req.file.filename, req.user.id, eye.side, 'uploads/' + req.file.filename).then(
        fs.unlinkSync('uploads/' + req.file.filename)).catch((err) => { logError(err) });
    }).catch((err) => {  });


    try {

      res.send(eye);


    } catch (error) {
      res.status(422).send(error);
    }

  });
  /////////////////////////////////////////////
  app.post("/api/eyes_left", requireLogin, upload.single("testImage"), async (req, res) => {

    const file = req.file
    const side = 'left'
    const user = req.user.id
    const dateSent = Date.now()
    const imageName = side + '_' + dateSent + '_' + user
    const fileBuffer = await sharp(file.buffer)
      .resize({ format: 'png', height: 180, width: 318, fit: "contain", background: { r: 244, g: 237, b: 237, alpha: 1 } }).flatten()
      .toBuffer()
    await uploadFile(fileBuffer, "eyepics/" + imageName + '_resized', file.mimetype)
    await uploadFile(file.buffer, "eyepics/" + imageName + '_raw', file.mimetype)
    const eye = new Eye({
      side: side,
      _user: user,
      dateSent: dateSent,
      picPath: imageName,
      type: file.mimetype
    });

    eye.save().then(() => {
    //  sendNewEyeUploadEmail(imageName, user, side)
      try {
        res.send(eye);
      } catch (error) {
        res.send(error);
      }
    });
  });


   app.post("/api/eyes_left/:id", requireLogin, upload.single("testImage"), async (req, res) => {

    const file = req.file
    const side = 'left'
    const user = req.params.id
    const dateSent = Date.now()
    const imageName = side + '_' + dateSent + '_' + user
    const fileBuffer = await sharp(file.buffer)
      .resize({ format: 'png', height: 180, width: 318, fit: "contain", background: { r: 244, g: 237, b: 237, alpha: 1 } }).flatten()
      .toBuffer()
    await uploadFile(fileBuffer, "eyepics/" + imageName + '_resized', file.mimetype)
    await uploadFile(file.buffer, "eyepics/" + imageName + '_raw', file.mimetype)
    const eye = new Eye({
      side: side,
      _user: user,
      dateSent: dateSent,
      picPath: imageName,
      type: file.mimetype
    });

    eye.save().then(() => {
      //sendNewEyeUploadEmail(imageName, user, side)
      try {
        res.send(eye);
      } catch (error) {
        res.send(error);
      }
    });
  });


    app.post("/api/eyes_right", requireLogin, upload.single("testImage"), async (req, res) => {

      const file = req.file
      const side = 'right'
      const user = req.user.id
      const dateSent = Date.now()
      const imageName = side + '_' + dateSent + '_' + user
      const fileBuffer = await sharp(file.buffer)
        .resize({ format: 'png', height: 180, width: 318, fit: "contain", background: { r: 244, g: 237, b: 237, alpha: 1 } }).flatten()
        .toBuffer()
      await uploadFile(fileBuffer, "eyepics/" + imageName + '_resized', file.mimetype)
      await uploadFile(file.buffer, "eyepics/" + imageName + '_raw', file.mimetype)
      const eye = new Eye({
        side: side,
        _user: user,
        dateSent: dateSent,
        picPath: imageName,
        type: file.mimetype
      });
  
      eye.save().then(() => {
        //sendNewEyeUploadEmail(imageName, user, side)
        try {
          res.send(eye);
        } catch (error) {
          res.send(error);
        }
      });
    });

   app.post("/api/eyes_right/:id", requireLogin, upload.single("testImage"), async (req, res) => {

    const file = req.file
    const side = 'right'
    const user = req.params.id
    const dateSent = Date.now()
    const imageName = side + '_' + dateSent + '_' + user
    const fileBuffer = await sharp(file.buffer)
      .resize({ format: 'png', height: 180, width: 318, fit: "contain", background: { r: 244, g: 237, b: 237, alpha: 1 } }).flatten()
      .toBuffer()
    await uploadFile(fileBuffer, "eyepics/" + imageName + '_resized', file.mimetype)
    await uploadFile(file.buffer, "eyepics/" + imageName + '_raw', file.mimetype)
    const eye = new Eye({
      side: side,
      _user: user,
      dateSent: dateSent,
      picPath: imageName,
      type: file.mimetype
    });

    eye.save().then(() => {
      //sendNewEyeUploadEmail(imageName, user, side)
      try {
        res.send(eye);
      } catch (error) {
        res.send(error);
      }
    });
  });

};
