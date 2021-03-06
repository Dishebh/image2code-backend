const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
  },
  name: {
    type: String,
  },
  profilePic: {
    type: String,
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
