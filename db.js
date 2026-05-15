const mongoose = require('mongoose');
require('dotenv').config();

const dbURL = process.env.DBURL;

mongoose.connect(dbURL, {
  
})
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = mongoose.connection;
