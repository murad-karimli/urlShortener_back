// models/DeviceInfo.js
const mongoose = require('mongoose');

const deviceInfoSchema = new mongoose.Schema({
  useragent: String,
  deviceType: String,
  platform: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const DeviceInfo = mongoose.model('DeviceInfo', deviceInfoSchema);

module.exports = DeviceInfo;
