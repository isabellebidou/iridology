//https://youtu.be/ysS4sL6lLDU?list=PLs7LQzp-tbVpNeo5thPa-A7KR-0sZJXto

const multer = require("multer");
const path = require("path");
const uuid = require("uuid").v4;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const { originalname } = file;
    cb(null, `${uuid()}-${originalname}`);
  },
});
const upload = multer({ storage }); // or simply { dest: 'uploads/' }

module.exports = upload;
