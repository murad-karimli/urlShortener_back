const express = require('express');
const Url = require('../models/urls');
const router = express.Router();

const baseUrl = 'http://localhost:3456'; 

router.post('/shorten', async (req, res) => {
  const originalUrl = req.body.originalUrl;
 
  const existingUrl = await Url.findOne({ originalUrl });

  if (existingUrl) {
    res.send(baseUrl + '/' + existingUrl.shortcode);
  } else {
    const newUrl = new Url({ originalUrl });
    await newUrl.save();
    res.status(201).send(baseUrl + '/' + newUrl.shortcode);
  }
});

module.exports = router;
