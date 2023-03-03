const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
//const log = require("./utils");

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true

    },
    async (accessToken, refreshToken, profile, done) => {
      //console.log('accessToken')
      //console.log(accessToken)
      //console.log('refreshToken')
      //console.log(refreshToken)
      //console.log('profile')
      //console.log(profile)
      const existingUser = await User.findOne({ googleId: profile.id })

      if (existingUser) {
        // we already have a record with the given profile ID
        return done(null, existingUser);
      }
      // we don't have a user record with this ID, make a new record!
      const user = await new User({ googleId: profile.id, email: profile.emails[0].value, fname: name.givenName, lname: familyName, photo: profile.photos[0].value }).save()
      done(null, user)


    }
  )
);

