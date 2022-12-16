const keys = require('../config/keys');

const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin')

module.exports = app => {
    app.post('/api/stripe',requireLogin, async(req, res) =>{
       const charge =  await stripe.charges.create({
            amount: 8000,
            currency: 'usd',
            description: '80 euros for 1 credit',
            source: req.body.id
        });
        req.user.credits += 80;
        const user = await req.user.save();
        res.send(user);
    });
}