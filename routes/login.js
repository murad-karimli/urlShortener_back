const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User= require('../models/users');
const RefreshToken=require('../models/refreshToken')

router.post('/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send('email and password are required');
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send('Invalid email or password');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send('Invalid email or password');
    }

    const accessToken = jwt.sign({ userId: user._id }, 'secret123', { expiresIn: '1h' });


    const refreshToken = jwt.sign({ userId: user._id }, 'secret', { expiresIn: '20d' });
    // const refreshTokenDoc = new RefreshToken({userId: user.id,refreshToken,expiresAt: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000) // 20 days from now
    // });
    // await refreshTokenDoc.save();


    res.cookie('accessToken',accessToken,{
        httpOnly:true,
        secure:process.env.NODE_ENV !=='development',
        maxAge:60 * 60 * 1000
    })

  
    res.send({ accessToken,refreshToken });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
