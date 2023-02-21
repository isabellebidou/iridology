const _ = require('lodash')
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireAdminAccess = require("../middlewares/requireAdminAccess");
const Faq = mongoose.model('faqs');


module.exports = (app) => {

    app.get("/api/faqs", async (req, res) => {

        const faqs = await Faq.find()
        res.send(faqs);

    })

    app.post("/api/faq", requireLogin, requireAdminAccess, async (req, res) => {
        const { question, answer } = req.body;
        const faq = new Faq({
            question,
            answer
        });
        faq.save().then((res) => {
            console.log('faq is saved')

        }).catch((err) => { console.error(err) });
        try {
            res.send(faq);
        } catch (error) {
            res.status(422).send(error);
        }

    });

};
