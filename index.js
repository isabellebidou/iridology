const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
require('./models/User');
require('./models/EyePic');
require('./models/UserData');
require('./models/Reading');
require('./services/passport');
mongoose.set('strictQuery', false);

mongoose.connect(keys.mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Connected to MongoDB');
  }
  );

const app = express();
app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/readingRoutes')(app);
require('./routes/eyeRoutes')(app);
require('./routes/userDataRoutes')(app);
if (process.env.NODE_ENV == 'production') {
  // express will serve up production assets
  app.use(express.static('client/build'));
  
  // express will serve up the index.html file if it doesn't recognize the routes
  const path = require('path');
  app.get('*', (req, res)=> {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
  }

const PORT = process.env.PORT || 8000;
app.listen(PORT);
