// models/Report.js
const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  url: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Url', // Reference to the Url model
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  accessCount: {
    type: Number,
    default: 0,
  },
  geoLocation: String,
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;