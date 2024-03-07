const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); 
const User = require('../models/users'); 
const validator=require('validator')


router.post('/auth/register', async (req, res) => {
    const { username, password, email } = req.body;
  //  await service.signUp(username, password, email);
  Errors.UserAlreadyExists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ detail: 'Username or email already exists' });
    }

    if(passwordChecker(password)==true){
      var saltRounds = 10;
      var hashedPassword = await bcrypt.hash(password, saltRounds);

    }else{
      return res.status(400).json({ error: 'password is not valid please use both of the letters and numbers' });
    }

    const newUser = new User({
      username,
      password: hashedPassword,
      email,
    });


    await newUser.save();

    
    res.status(201).json(newUser);

});

function passwordChecker(password) {
  
  if (validator.isEmpty(password)) {
    return 'Password should not be empty';
  }

  
  if (!validator.isLength(password, { min: 8 })) {
    return 'Password should be at least 8 characters long';
  }

  
  if (!validator.isAlphanumeric(password)) {
    return 'Password should contain both letters and numbers';
  }

  
  return true;
}

module.exports = router;
