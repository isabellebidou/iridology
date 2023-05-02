const _ = require('lodash')
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireAdminAccess = require("../middlewares/requireAdminAccess");
const logError = require("../services/utils");



module.exports = (app) => {
    const Link = mongoose.model('links');

    app.get("/api/links", async (req, res) => {

        const links = await Link.find().sort({name:1})
        res.send(links);

    })

    app.post("/api/link", requireLogin, requireAdminAccess, async (req, res) => {
        const { name, url, type, comment } = req.body;
        const link = new Link({
            name,
            url,
            type,
            comment
        });
        link.save().then((res) => {

        }).catch((err) => { //logError(err) 
        });
        try {
            res.send(link);
        } catch (error) {
            res.status(422).send(error);
        }

    });

};
