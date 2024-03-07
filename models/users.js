const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: false,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isPremium: {
    type: Boolean,
    default: false,
  },
});

// Create the User model
const User = mongoose.model('users', userSchema);

module.exports = User;
