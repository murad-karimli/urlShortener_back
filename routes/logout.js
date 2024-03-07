const router = express.Router();
const session = require('express-session');
const RefreshToken=require('../models/refreshToken')

router.get('/logout', async (req, res) => {
    const { refreshToken } = req.body;
  
  // Delete the refresh token from MongoDB
    await RefreshToken.deleteOne({ refreshToken });
    res.redirect('/login'); // redirect to login page after logout
  });

  
module.exports=router