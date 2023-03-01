const _ = require('lodash')
//const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireAdminAccess = require("../middlewares/requireAdminAccess");



module.exports = (app, db) => {
    const Link = db.model('links');

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
            console.log('link is saved')

        }).catch((err) => { console.error(err) });
        try {
            res.send(link);
        } catch (error) {
            res.status(422).send(error);
        }

    });

};
