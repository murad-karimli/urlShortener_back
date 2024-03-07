// models/Url.js
const mongoose = require('mongoose');
const shortid = require('shortid');

const urlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
    trim: true,
    unique:true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  shortcode: {
    type: String,
    required: true,
    unique: true,
    default: shortid.generate
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  clicks: [{
    type: mongoose.Schema.Types.ObjectId,
    required:true,
    ref: 'Click',
    default:0
  }],
  report: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Report',
  },
});

const Url = mongoose.model('Url', urlSchema);

module.exports = Url;
