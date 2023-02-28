const _ = require ('lodash')

const fs = require("fs");
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const keys = require('../config/keys');
const upload = require("../config/storage-config");
const requireLogin = require('../middlewares/requireLogin');
//const requireCredits = require("../middlewares/requireCredits");
const Eye = mongoose.model('eyepics');

module.exports = (app) => {
  //https://www.youtube.com/watch?v=MJhsVDpYzQs&ab_channel=Koding101
const sendNewEyeUploadEmail = (file, user, side) => {
  return new Promise((resolve, reject) => {

    var transporter = nodemailer.createTransport({
      service:'gmail',
      auth:{
        user:'isa.bidou@gmail.com',
        pass: keys.nodemailer
      },
      from: 'isa.bidou@gmail.com',
    })

    const mail_option = {
      from:'isa.bidou@gmai.com',
      to: 'isa.bidou@gmai.com',
      subject: 'new eye pic upload: '+side,
      text: 'an eye pic was uploaded. filename : '+ file + ' user id: '+user+ ' eye side : '+side
      
    }
    transporter.sendMail(mail_option, (error, info) => {
      if (error) {
        console.error(error)
        return reject({message: `an error has occured`})
      }
      return resolve({message: `email sent successfully`})

    })

  })

}

app.delete("/api/user_eye_pics/delete", async (req, res) => {
  //const idsToDelete = req.body.idsToDelete;
  const idsToDelete = req.body.idsToDelete.map((id) => mongoose.Types.ObjectId(id));

  try {
    const result = await Eye.deleteMany({ _id: { $in: idsToDelete } });
    res.send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to delete eye pics");
  }
});
  app.get("/api/user_eye_pics",  async(req, res) => {

    const eyes = await Eye.find({_user : req.user.id});


    res.send(eyes);

  })

  app.get("/api/user_eye_pics/:id",  async(req, res) => {



    const eyes = await Eye.find({_user : req.params.id});


    res.send(eyes);

  })

//https://www.youtube.com/watch?v=NzROCbkvIE0
  app.post("/api/eyes", requireLogin,upload.single("testImage"), async (req, res) => {
    const {  eyePic } = req.body;

    const eye = new Eye({
      
      side:req.body.side,
      _user: req.user.id,
      dateSent: Date.now(),
      //_reading:req.body.reading,
      pic: {
        data: fs.readFileSync('uploads/'+req.file.filename),
        contentType:'image/png'
    }
    });

    eye.save().then((res) => {console.log('image is saved')}).catch((err) => {console.error(err)});
    

    try {
      
      
      //const user = await req.user.save();
      res.send(eye);
      sendNewEyeUploadEmail(req.file.filename,req.user.id, eye.side)
      
    } catch (error) {
      res.status(422).send(error);
    }
    
  });

  app.post("/api/eyes_left", requireLogin,upload.single("testImage"), async (req, res) => {
    const {  eyePic } = req.body;


    const eye = new Eye({
      
      side:'left',
      _user: req.user.id,
      dateSent: Date.now(),
      //_reading:req.body.reading,
      pic: {
        data: fs.readFileSync('uploads/'+req.file.filename),
        contentType:'image/png'
    }
    });

    eye.save().then((res) => {console.log('image is saved')}).catch((err) => {console.error(err)});
    

    try {
      
      
      //const user = await req.user.save();
      sendNewEyeUploadEmail(req.file.filename,req.user.id, eye.side)
      res.send(eye);
      
    } catch (error) {
      res.status(422).send(error);
    }
    
  });

  app.post("/api/eyes_left/:id", requireLogin,upload.single("testImage"), async (req, res) => {
    const {  eyePic } = req.body;
console.log(req.params.userId)

    const eye = new Eye({
      
      side:'left',
      _user: req.params.userId,
      dateSent: Date.now(),
      //_reading:req.body.reading,
      pic: {
        data: fs.readFileSync('uploads/'+req.file.filename),
        contentType:'image/png'
    }
    });

    eye.save().then((res) => {console.log('image is saved')}).catch((err) => {console.error(err)});
    

    try {
      
      
      //const user = await req.user.save();
      sendNewEyeUploadEmail(req.file.filename,req.user.id, eye.side)
      res.send(eye);
      
    } catch (error) {
      res.status(422).send(error);
    }
    
  });

  app.post("/api/eyes_right", requireLogin,upload.single("testImage"), async (req, res) => {
    const {  eyePic } = req.body;

    const eye = new Eye({
      
      side:'right',
      _user: req.user.id,
      dateSent: Date.now(),
      //_reading:req.body.reading,
      pic: {
        data: fs.readFileSync('uploads/'+req.file.filename),
        contentType:'image/png'
    }
    });

    eye.save().then((res) => {console.log('image is saved')}).catch((err) => {console.error(err)});
    

    try {
      
      
     // const user = await req.user.save();
      res.send(eye);
      sendNewEyeUploadEmail(req.file.filename,req.user.id, eye.side)
      
    } catch (error) {
      res.status(422).send(error);
    }
    
  });

  app.post("/api/eyes_right/:id", requireLogin,upload.single("testImage"), async (req, res) => {
    const {  eyePic } = req.body;

    const eye = new Eye({
      
      side:'right',
      _user: req.params.userId,
      dateSent: Date.now(),
      //_reading:req.body.reading,
      pic: {
        data: fs.readFileSync('uploads/'+req.file.filename),
        contentType:'image/png'
    }
    });

    eye.save().then((res) => {console.log('image is saved')}).catch((err) => {console.error(err)});
    

    try {
      
      
     // const user = await req.user.save();
      res.send(eye);
      sendNewEyeUploadEmail(req.file.filename,req.user.id, eye.side)
      
    } catch (error) {
      res.status(422).send(error);
    }
    
  });

  app.post("/api/upload/file",upload.single("testImage"), async (req, res) => {
    const {  eyePic } = req.body;

    const eye = new Eye({
      
      side:'right',
      _user: req.user.id,
      dateSent: Date.now(),
      //_reading:req.body.reading,
      pic: {
        data: fs.readFileSync('uploads/'+req.file.filename),
        contentType:'image/png'
    }
    });

    eye.save().then((res) => {console.log('image is saved')}).catch((err) => {console.error(err)});
    

    try {
      
      
      const user = await req.user.save();
      res.send(user);
      
    } catch (error) {
      res.status(422).send(error);
    }
    
  });



};
