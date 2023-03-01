const _ = require('lodash')
//const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireAdminAccess = require("../middlewares/requireAdminAccess");



module.exports = (app, db) => {
    const Offer = db.model('offers');

    app.get("/api/offers", async (req, res) => {

        const offers = await Offer.find().sort({name:1})
        res.send(offers);

    })

    app.post("/api/offer", requireLogin, requireAdminAccess, async (req, res) => {
        const { name, description, price } = req.body;
        const offer = new Offer({
            name,
            description,
            price
        });
        offer.save().then((res) => {
            console.log('offer is saved')

        }).catch((err) => { console.error(err) });
        try {
            res.send(offer);
        } catch (error) {
            res.status(422).send(error);
        }

    });

};