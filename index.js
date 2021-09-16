const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const passportServices = require('./services/passport');
const keys = require('./config/keys');
const User = require('./models/User');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB();

// passport
passportServices(keys, User, GoogleStrategy, passport);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
