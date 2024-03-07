const mongoose = require('mongoose');
const { Schema } = mongoose;



const refreshTokenSchema = new Schema({
  userId: String,
  refreshToken: String,
  expiresAt: Date
});

const RefreshToken = mongoose.model('RefreshToken', refreshTokenSchema);
module.exports=RefreshToken;
