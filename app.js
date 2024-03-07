// app.js
const express = require('express');
const mongoose = require('mongoose');
const registerRouter = require('./routes/register'); 
const User = require('./models/users'); 
const Url=require('./models/urls')
const connectDB = require('./db');
const app = express();
const loginRouter=require('./routes/login')
const PORT = process.env.PORT || 5500;
const refreshRouter=require('./routes/refreshToken')
const shortenRouter=require('./routes/url')
const cors=require('cors')

connectDB();
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json()); 



app.use('/api/v1/', registerRouter);
app.use('/api/v1/', loginRouter);
app.use('/api/v1',refreshRouter)
app.use('/api/v1',shortenRouter)

app.get('/api/v1/',async (req,res)=>{
    const urls=await Url.find()
    console.log('@@@@ ',urls)
    res.send('good')
    // res.send({shortUrl:urls})
  } )
console.log("test1")
app.get('/api/v1/:shortUrl',async(req,res)=>{
  const shortcode=await Url.findOne({shortcode:req.params.shortUrl})
  if(shortcode==null) return res.status(404)
      shortcode.url.clicks++;
      shortcode.save()
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
