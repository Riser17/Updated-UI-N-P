'use strict';
require('dotenv').config()
const mongoose = require('mongoose');

// MongoDB connection and creating database which is upload-files-database
const URI = process.env.MONGODB_URL
module.exports = () => {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
    }).then(() => console.log('Connected to Mongodb......'));
}