'use strict';
require('dotenv').config()
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileRoutes = require('./routes/file-upload-routes');
const port = process.env.PORT;
const app = express();
app.use(cors());
require('./database')();

app.use(bodyParser.json());

// Path for storing the images in the local directory 
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Path for posting the data 
app.post('/apicreation', function (req, res) {
    const newformData = {
        title: req.body.title,
        NFTname: req.body.NFTname,
        Tags: req.body.Tags,
        AssetID: req.body.AssetID,
        Amount: req.body.Amount,
        Description: req.body.Description,
        CreatorName: req.body.CreatorName,
    };
})

// Path for accessing the data 
app.use('/api', fileRoutes.routes);

app.listen(port, () => console.log(`server is listening on url http://localhost:${port}`));