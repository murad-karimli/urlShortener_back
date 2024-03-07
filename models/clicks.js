const mongoose = require('mongoose');

const clickSchema = new mongoose.Schema({
  shortUrl: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Url',
    required: true,
  },
  ipAddress: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
  useragent: String,
});

const Click = mongoose.model('Click', clickSchema);

module.exports = Click;
