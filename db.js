const axios = require('axios');
const mongoose = require('mongoose');

async function connectDB(){

// const dbUrl = 'mongodb://root:example@127.0.0.1:27017/urlshortnerdb';
const dbUrl = 'mongodb://127.0.0.1:27017/dburl'; 


console.log('Connecting to the db')
await mongoose.connect(dbUrl);
console.log('Connected to the db')

}

module.exports=connectDB;