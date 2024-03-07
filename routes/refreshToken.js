// Express.js example on the server side
const express=require('express');
const router = express.Router();
router.post('/token/refresh', (req, res) => {
    // The refresh token is stored in an HttpOnly cookie, so it's automatically included in the request.
    const refreshToken = req.Cookie.accessToken;
        
  
    // if (!refreshToken) {
    //   return res.status(401).json({ error: 'Refresh token not found' });
    // }
  
    // // Validate the refresh token, generate a new access token, and send it back.
    // // If the refresh token is invalid or expired, respond with an error status.
    console.log('you have refresh token go on, man', )
  });
  
 module.exports=router; 