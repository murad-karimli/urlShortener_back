// models/Permission.js
const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  description: String,
});

const Permission = mongoose.model('Permission', permissionSchema);

module.exports = Permission;
